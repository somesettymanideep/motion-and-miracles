import { describe, expect, it } from "vitest";
import { buildConsultationMessage, PHONES, waLink, WA_DEFAULT_MESSAGE, WA_NUMBER } from "@/lib/whatsapp";

describe("WhatsApp deep links", () => {
  it("uses the centre's WhatsApp number with an URL-encoded prefill", () => {
    const link = waLink(WA_DEFAULT_MESSAGE);
    expect(link).toBe(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_DEFAULT_MESSAGE)}`
    );
    expect(link).toContain("wa.me/919848256831");
    expect(link).not.toContain(" ");
  });

  it("builds the consultation message from form fields", () => {
    const msg = buildConsultationMessage({
      name: "Test Bhakta",
      phone: "9876543210",
      service: "Health Astrology",
      dob: "1990-01-01",
      tob: "06:30",
      pob: "Vijayawada",
      message: "Namaste",
    });
    expect(msg).toContain("Name: Test Bhakta");
    expect(msg).toContain("Phone: 9876543210");
    expect(msg).toContain("Service: Health Astrology");
    expect(msg).toContain("Date of Birth: 1990-01-01");
    expect(msg).toContain("Time of Birth: 06:30");
    expect(msg).toContain("Place of Birth: Vijayawada");
    expect(msg).toContain("Message: Namaste");
  });

  it("omits optional birth fields when empty", () => {
    const msg = buildConsultationMessage({
      name: "A",
      phone: "9876543210",
      service: "Navagraha Shanti",
    });
    expect(msg).not.toContain("Date of Birth");
    expect(msg).not.toContain("Message:");
  });

  it("exposes both tap-to-call numbers", () => {
    expect(PHONES.map((p) => p.href)).toEqual(["tel:+919848256831", "tel:+918639553329"]);
  });
});
