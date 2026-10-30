/**
 * WhatsApp helpers. The centre's WhatsApp number is the same as the primary
 * phone; both forms deep-link into a prefilled WhatsApp chat.
 */
export const WA_NUMBER = "919848256831";
export const WA_DEFAULT_MESSAGE =
  "Namaste, I would like to know more about your services.";

export const waLink = (text: string = WA_DEFAULT_MESSAGE) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const PHONES = [
  { display: "98482 56831", href: "tel:+919848256831" },
  { display: "86395 53329", href: "tel:+918639553329" },
] as const;

export type ConsultationFields = {
  name: string;
  phone: string;
  service: string;
  dob?: string;
  tob?: string;
  pob?: string;
  message?: string;
};

/** Builds the URL-encoded prefilled WhatsApp message from form fields. */
export function buildConsultationMessage(f: ConsultationFields): string {
  const lines = [
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    `Service: ${f.service}`,
  ];
  if (f.dob) lines.push(`Date of Birth: ${f.dob}`);
  if (f.tob) lines.push(`Time of Birth: ${f.tob}`);
  if (f.pob) lines.push(`Place of Birth: ${f.pob}`);
  if (f.message) lines.push(`Message: ${f.message}`);
  return lines.join("\n");
}

export function openWhatsApp(text: string) {
  window.open(waLink(text), "_blank", "noopener");
}
