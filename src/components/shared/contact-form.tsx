import { useState, type FormEvent } from "react"
import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type ContactFormProps = {
  email: string
}

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const SUBJECTS = [
  "Graphic design commission",
  "Tarpaulin printing inquiry",
  "Collaboration",
  "Something else",
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim()) {
    errors.name = "Please tell me your name."
  }

  if (!values.email.trim()) {
    errors.email = "An email address is required."
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "That email address does not look right."
  }

  if (!values.subject.trim()) {
    errors.subject = "Pick a subject."
  }

  if (!values.message.trim()) {
    errors.message = "Add a short message so I know what you need."
  } else if (values.message.trim().length < 10) {
    errors.message = "A little more detail helps — 10 characters minimum."
  }

  return errors
}

/** Builds the pre-filled `mailto:` link for a validated set of values. */
export function buildMailto(email: string, values: FormValues) {
  const subject = `Portfolio inquiry — ${values.subject.trim()}`
  const body = [
    "Hi Kirsten,",
    "",
    values.message.trim(),
    "",
    "—",
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Subject: ${values.subject.trim()}`,
  ].join("\n")

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/**
 * Contact form that composes a pre-filled `mailto:` link, so it works with
 * zero backend while still giving the visitor a real message composer.
 */
export function ContactForm({ email }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: SUBJECTS[0],
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState<string | null>(null)

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSent(null)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    setSent(buildMailto(email, values))
  }

  const fieldClass = (field: keyof FormValues) =>
    errors[field] ? "border-destructive" : undefined

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="contact-name"
            className="font-heading text-[11px] tracking-[0.2em] text-bullet"
          >
            NAME
          </Label>
          <Input
            id="contact-name"
            name="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            className={fieldClass("name")}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="contact-email"
            className="font-heading text-[11px] tracking-[0.2em] text-bullet"
          >
            EMAIL
          </Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            className={fieldClass("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="contact-subject"
          className="font-heading text-[11px] tracking-[0.2em] text-bullet"
        >
          SUBJECT
        </Label>
        <select
          id="contact-subject"
          name="subject"
          value={values.subject}
          onChange={(event) => update("subject", event.target.value)}
          className="h-9 w-full rounded-4xl border border-input bg-input/30 px-3 text-sm text-content transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          {SUBJECTS.map((subject) => (
            <option
              key={subject}
              value={subject}
              className="bg-card text-content"
            >
              {subject}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p className="text-xs text-destructive">{errors.subject}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="contact-message"
          className="font-heading text-[11px] tracking-[0.2em] text-bullet"
        >
          MESSAGE
        </Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder="Tell me about your project, timeline and budget…"
          aria-invalid={Boolean(errors.message)}
          className={fieldClass("message")}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button
          type="submit"
          className="bg-header text-white hover:bg-header/80"
        >
          {sent ? "UPDATE MESSAGE" : "SEND MESSAGE"}
          <Send className="size-4" />
        </Button>

        <p
          className="inline-flex items-center gap-2 text-xs text-content/60"
          role="status"
          aria-live="polite"
        >
          <Mail className="size-3.5" />
          {sent
            ? "Message ready — open it in your mail app to send."
            : `Composes a message addressed to ${email}.`}
        </p>
      </div>

      {sent && (
        <a
          href={sent}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-link/70 bg-link/10 px-5 py-2 font-heading text-xs text-link transition-colors hover:bg-link hover:text-black"
        >
          <Mail className="size-3.5" />
          OPEN IN MAIL APP
        </a>
      )}
    </form>
  )
}
