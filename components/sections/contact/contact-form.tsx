"use client"

import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react"
import { useState } from "react"

import { GlassCard } from "@/components/ui/glass-card"
import { GlowButton } from "@/components/ui/premium-button"

import { InputField, TextareaField } from "./input-field"

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

function validateForm(form: FormState) {
  const errors: FormErrors = {}

  if (form.name.trim().length < 2) {
    errors.name = "Please enter your name."
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email."
  }

  if (form.subject.trim().length < 3) {
    errors.subject = "Please add a subject."
  }

  if (form.message.trim().length < 10) {
    errors.message = "Please write at least 10 characters."
  }

  return errors
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  )
  const [statusMessage, setStatusMessage] = useState("")

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validationErrors = validateForm(form)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setStatus("error")
      setStatusMessage("Please review the highlighted fields.")
      return
    }

    setStatus("loading")
    setStatusMessage("Preparing message...")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = (await response.json()) as {
        ok?: boolean
        message?: string
        errors?: FormErrors
      }

      if (!response.ok || !data.ok) {
        setStatus("error")
        setStatusMessage(data.message ?? "Message could not be sent.")
        setErrors(data.errors ?? {})
        return
      }

      setStatus("success")
      setStatusMessage(data.message ?? "Message sent successfully.")
      setForm(initialForm)
      setErrors({})
    } catch {
      setStatus("error")
      setStatusMessage("Network error. Please use the direct email link.")
    }
  }

  return (
    <GlassCard intensity="strong" className="p-5 md:p-6">
      <div className="mb-6">
        <Send className="mb-4 size-5 text-cyan-100" />
        <p className="text-label-premium mb-3">Contact Form</p>
        <h2 className="text-2xl font-semibold tracking-[-0.025em] text-white">
          Send a professional message.
        </h2>
        <p className="text-body-premium mt-3">
          Share the context, preferred next step, and the best way to respond.
        </p>
      </div>

      <form
        className="grid gap-4"
        onSubmit={submitForm}
        noValidate
        aria-busy={status === "loading"}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <InputField
            id="name"
            label="Name"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            error={errors.name}
            autoComplete="name"
          />
          <InputField
            id="email"
            label="Email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            error={errors.email}
            autoComplete="email"
            inputMode="email"
          />
        </div>
        <InputField
          id="subject"
          label="Subject"
          name="subject"
          placeholder="Opportunity, project, or collaboration"
          value={form.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          error={errors.subject}
        />
        <TextareaField
          id="message"
          label="Message"
          name="message"
          placeholder="Share the context, role, project idea, or next step."
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          error={errors.message}
          rows={6}
        />
        <GlowButton type="submit" className="w-full" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending
            </>
          ) : (
            <>
              Send Message <Send className="size-4" />
            </>
          )}
        </GlowButton>
      </form>

      <AnimatePresence>
        {statusMessage ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300"
            role={status === "error" ? "alert" : "status"}
            aria-live="polite"
          >
            {status === "success" ? (
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-100" />
            ) : (
              <TriangleAlert className="mt-0.5 size-4 shrink-0 text-amber-200" />
            )}
            <span>{statusMessage}</span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </GlassCard>
  )
}
