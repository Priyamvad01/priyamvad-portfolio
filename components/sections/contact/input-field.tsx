import type { ComponentPropsWithoutRef } from "react"

import { PremiumInput, PremiumTextarea } from "@/components/ui/premium-input"
import { cn } from "@/lib/utils"

type InputFieldProps = ComponentPropsWithoutRef<"input"> & {
  label: string
  error?: string
}

type TextareaFieldProps = ComponentPropsWithoutRef<"textarea"> & {
  label: string
  error?: string
}

export function InputField({
  label,
  error,
  className,
  id,
  ...props
}: InputFieldProps) {
  return (
    <label className="grid gap-2" htmlFor={id}>
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
        {label}
      </span>
      <PremiumInput
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(error && "border-red-300/45 focus:border-red-300/60", className)}
        {...props}
      />
      {error ? (
        <span id={`${id}-error`} className="text-xs text-red-200/85">
          {error}
        </span>
      ) : null}
    </label>
  )
}

export function TextareaField({
  label,
  error,
  className,
  id,
  ...props
}: TextareaFieldProps) {
  return (
    <label className="grid gap-2" htmlFor={id}>
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
        {label}
      </span>
      <PremiumTextarea
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(error && "border-red-300/45 focus:border-red-300/60", className)}
        {...props}
      />
      {error ? (
        <span id={`${id}-error`} className="text-xs text-red-200/85">
          {error}
        </span>
      ) : null}
    </label>
  )
}
