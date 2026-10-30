import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";
import { dict } from "@/data/site";
import { SERVICES } from "@/data/services";
import { buildConsultationMessage, openWhatsApp } from "@/lib/whatsapp";

/* ------------------------------------------------------------------ */
/* Shared field helpers                                                */
/* ------------------------------------------------------------------ */

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string | undefined;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold text-maroon">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function fieldClass(hasError: boolean) {
  return `field ${hasError ? "field-error" : ""}`;
}

function useServiceOptions() {
  const { lang } = useLanguage();
  return SERVICES.map((s) => ({ value: s.name[lang], label: s.name[lang] }));
}

function ServiceSelect({
  value,
  onChange,
  hasError,
  placeholder,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  hasError: boolean;
  placeholder: string;
}) {
  const options = useServiceOptions();
  return (
    <select className={fieldClass(hasError)} value={value} onChange={onChange} aria-invalid={hasError}>
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

function useValidators() {
  const { } = useLanguage();
  const d = dict[useLanguage().lang];
  return {
    required: d.common.errRequired,
    phone: (v: string) => {
      const digits = v.replace(/\D/g, "");
      return v.trim() === "" || digits.length < 10 ? d.common.errPhone : undefined;
    },
  };
}

/* ------------------------------------------------------------------ */
/* Consultation form (home page)                                       */
/* ------------------------------------------------------------------ */

type ConsultValues = {
  name: string;
  phone: string;
  service: string;
  dob: string;
  tob: string;
  pob: string;
  message: string;
};

const EMPTY_CONSULT: ConsultValues = {
  name: "",
  phone: "",
  service: "",
  dob: "",
  tob: "",
  pob: "",
  message: "",
};

export function ConsultationForm() {
  const { lang } = useLanguage();
  const d = dict[lang];
  const validators = useValidators();
  const [values, setValues] = useState<ConsultValues>(EMPTY_CONSULT);
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultValues, string>>>({});

  const set =
    (key: keyof ConsultValues) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Partial<Record<keyof ConsultValues, string>> = {};
    if (!values.name.trim()) errs.name = validators.required;
    const phoneErr = validators.phone(values.phone);
    if (!values.phone.trim()) errs.phone = validators.required;
    else if (phoneErr) errs.phone = phoneErr;
    if (!values.service) errs.service = validators.required;
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    toast.success(d.common.redirectingToast);
    openWhatsApp(buildConsultationMessage(values));
  };

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <Field label={d.form.fullName} error={errors.name}>
        <input
          className={fieldClass(!!errors.name)}
          value={values.name}
          onChange={set("name")}
          autoComplete="name"
        />
      </Field>
      <Field label={d.form.phone} error={errors.phone}>
        <input
          type="tel"
          className={fieldClass(!!errors.phone)}
          value={values.phone}
          onChange={set("phone")}
          autoComplete="tel"
        />
      </Field>
      <Field label={d.form.service} error={errors.service} className="sm:col-span-2">
        <ServiceSelect
          value={values.service}
          onChange={set("service")}
          hasError={!!errors.service}
          placeholder={d.form.selectService}
        />
      </Field>
      <Field label={d.form.dob}>
        <input type="date" className={fieldClass(false)} value={values.dob} onChange={set("dob")} />
      </Field>
      <Field label={d.form.tob}>
        <input type="time" className={fieldClass(false)} value={values.tob} onChange={set("tob")} />
      </Field>
      <Field label={d.form.pob} className="sm:col-span-2">
        <input className={fieldClass(false)} value={values.pob} onChange={set("pob")} />
      </Field>
      <Field label={d.form.message} className="sm:col-span-2">
        <textarea
          rows={3}
          className={fieldClass(false)}
          value={values.message}
          onChange={set("message")}
          placeholder={d.form.messagePlaceholder}
        />
      </Field>
      <button type="submit" className="btn btn-saffron sm:col-span-2">
        💬 {d.common.sendViaWhatsapp}
      </button>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Contact form (contact page)                                         */
/* ------------------------------------------------------------------ */

type ContactValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const EMPTY_CONTACT: ContactValues = { name: "", phone: "", email: "", service: "", message: "" };

export function ContactForm() {
  const { lang } = useLanguage();
  const d = dict[lang];
  const validators = useValidators();
  const [values, setValues] = useState<ContactValues>(EMPTY_CONTACT);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({});

  const set =
    (key: keyof ContactValues) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Partial<Record<keyof ContactValues, string>> = {};
    if (!values.name.trim()) errs.name = validators.required;
    if (!values.phone.trim()) errs.phone = validators.required;
    else {
      const phoneErr = validators.phone(values.phone);
      if (phoneErr) errs.phone = phoneErr;
    }
    if (!values.service) errs.service = validators.required;
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const lines = [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : "",
      `Service: ${values.service}`,
      values.message ? `Message: ${values.message}` : "",
    ].filter(Boolean);
    toast.success(d.common.redirectingToast);
    openWhatsApp(lines.join("\n"));
  };

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <Field label={d.form.fullName} error={errors.name}>
        <input
          className={fieldClass(!!errors.name)}
          value={values.name}
          onChange={set("name")}
          autoComplete="name"
        />
      </Field>
      <Field label={d.form.phone} error={errors.phone}>
        <input
          type="tel"
          className={fieldClass(!!errors.phone)}
          value={values.phone}
          onChange={set("phone")}
          autoComplete="tel"
        />
      </Field>
      <Field label={`${d.contact.email} (${d.common.optional})`} className="sm:col-span-2">
        <input type="email" className={fieldClass(false)} value={values.email} onChange={set("email")} />
      </Field>
      <Field label={d.form.service} error={errors.service} className="sm:col-span-2">
        <ServiceSelect
          value={values.service}
          onChange={set("service")}
          hasError={!!errors.service}
          placeholder={d.form.selectService}
        />
      </Field>
      <Field label={d.form.message} className="sm:col-span-2">
        <textarea
          rows={4}
          className={fieldClass(false)}
          value={values.message}
          onChange={set("message")}
          placeholder={d.form.messagePlaceholder}
        />
      </Field>
      <button type="submit" className="btn btn-saffron sm:col-span-2">
        💬 {d.common.sendViaWhatsapp}
      </button>
    </form>
  );
}
