import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const insertMock = vi.fn();

vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    from: vi.fn(() => ({ insert: insertMock })),
  },
}));

import { ConsultationForm, ContactForm } from "@/components/forms";
import { dict } from "@/data/site";
import { SERVICES } from "@/data/services";
import { LanguageProvider } from "@/lib/i18n";

const d = dict.en;

function renderForm(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
}

/** Fills the shared fields both forms validate and submits. */
async function fillAndSubmit(fields: { fullName: string; phone: string; service: string }) {
  fireEvent.change(screen.getByLabelText(d.form.fullName), { target: { value: fields.fullName } });
  fireEvent.change(screen.getByLabelText(d.form.phone), { target: { value: fields.phone } });
  fireEvent.change(screen.getByLabelText(d.form.service), { target: { value: fields.service } });
  fireEvent.click(screen.getByRole("button", { name: new RegExp(d.common.sendViaWhatsapp) }));
}

const openSpy = vi.spyOn(window, "open").mockReturnValue(null);

beforeEach(() => {
  insertMock.mockReset().mockResolvedValue({ error: null });
  openSpy.mockClear();
});

/** Every consultation booking must be stored before the WhatsApp chat opens. */
describe("Consultation form", () => {
  it("saves the enquiry, then opens WhatsApp", async () => {
    renderForm(<ConsultationForm />);
    await fillAndSubmit({
      fullName: "Rama Rao",
      phone: "9876543210",
      service: SERVICES[0].name.en,
    });

    await waitFor(() => expect(insertMock).toHaveBeenCalledTimes(1));
    const [payload] = insertMock.mock.calls[0];
    expect(payload).toMatchObject({
      name: "Rama Rao",
      phone: "9876543210",
      service: SERVICES[0].name.en,
      language: "en",
    });
    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(String(openSpy.mock.calls[0][0])).toContain("https://wa.me/919848256831");
    expect(String(openSpy.mock.calls[0][0])).toContain(encodeURIComponent("Name: Rama Rao"));
  });

  it("still opens WhatsApp when saving fails, so no enquiry is lost", async () => {
    insertMock.mockRejectedValue(new Error("network down"));
    renderForm(<ConsultationForm />);
    await fillAndSubmit({
      fullName: "Rama Rao",
      phone: "9876543210",
      service: SERVICES[0].name.en,
    });

    await waitFor(() => expect(openSpy).toHaveBeenCalledTimes(1));
  });
});

/** Contact-page messages must reach the same stored pipeline. */
describe("Contact form", () => {
  it("saves the message, then opens WhatsApp", async () => {
    renderForm(<ContactForm />);
    await fillAndSubmit({
      fullName: "Lakshmi",
      phone: "9123456780",
      service: SERVICES[1].name.en,
    });

    await waitFor(() => expect(insertMock).toHaveBeenCalledTimes(1));
    expect(insertMock.mock.calls[0][0]).toMatchObject({
      name: "Lakshmi",
      phone: "9123456780",
      service: SERVICES[1].name.en,
      language: "en",
    });
    expect(openSpy).toHaveBeenCalledTimes(1);
  });

  it("rejects a submission with no service chosen", async () => {
    renderForm(<ContactForm />);
    fireEvent.change(screen.getByLabelText(d.form.fullName), { target: { value: "Lakshmi" } });
    fireEvent.change(screen.getByLabelText(d.form.phone), { target: { value: "9123456780" } });
    fireEvent.click(screen.getByRole("button", { name: new RegExp(d.common.sendViaWhatsapp) }));

    await waitFor(() =>
      expect(screen.getAllByText(d.common.errRequired).length).toBeGreaterThan(0)
    );
    expect(insertMock).not.toHaveBeenCalled();
    expect(openSpy).not.toHaveBeenCalled();
  });
});
