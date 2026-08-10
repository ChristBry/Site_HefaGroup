// Regex rules used to validate form fields before they are written to Google Sheets.

// Letters (incl. accents), spaces, hyphens and apostrophes only — blocks digits/HTML/script payloads.
export const NAME_REGEX = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,100}$/

// RFC 5322-ish pragmatic email check (local@domain.tld), no consecutive dots, no whitespace.
export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

// Digits, spaces, +, (), - only, 7 to 20 characters.
export const PHONE_REGEX = /^[+]?[0-9\s().-]{7,20}$/

// Free text but no angle brackets (blocks <script>/HTML injection), capped at 2000 chars.
export const MESSAGE_REGEX = /^[^<>]{0,2000}$/

export const SERVICE_OPTIONS = ["services", "consulting", "training", "representation"] as const
export type ServiceOption = (typeof SERVICE_OPTIONS)[number]

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export interface ValidationResult {
  valid: boolean
  errors: Partial<Record<keyof ContactFormData, string>>
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: ValidationResult["errors"] = {}

  if (!NAME_REGEX.test(data.name.trim())) errors.name = "invalidName"
  if (!EMAIL_REGEX.test(data.email.trim())) errors.email = "invalidEmail"
  if (!PHONE_REGEX.test(data.phone.trim())) errors.phone = "invalidPhone"
  if (!SERVICE_OPTIONS.includes(data.service as ServiceOption)) errors.service = "invalidService"
  if (data.message && !MESSAGE_REGEX.test(data.message)) errors.message = "invalidMessage"

  return { valid: Object.keys(errors).length === 0, errors }
}

export function validateNewsletterEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim())
}

// Google Sheets (and Excel/CSV) treat a leading =, +, -, @, tab or CR as the start of a formula.
// A malicious submission like `=HYPERLINK(...)` in "name" would execute in the sheet owner's
// spreadsheet. Prefixing with a single quote forces the cell to be read as plain text.
const FORMULA_INJECTION_PREFIX = /^[=+\-@\t\r]/

export function sanitizeForSheet(value: string): string {
  const trimmed = value.trim()
  return FORMULA_INJECTION_PREFIX.test(trimmed) ? `'${trimmed}` : trimmed
}

export function sanitizeContactFormData(data: ContactFormData): ContactFormData {
  return {
    name: sanitizeForSheet(data.name),
    email: sanitizeForSheet(data.email),
    phone: sanitizeForSheet(data.phone),
    service: sanitizeForSheet(data.service),
    message: sanitizeForSheet(data.message),
  }
}
