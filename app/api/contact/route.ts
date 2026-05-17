import { NextResponse, type NextRequest } from "next/server"

type ContactPayload = {
  name?: unknown
  email?: unknown
  subject?: unknown
  message?: unknown
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    )
  }

  const name = readString(payload.name)
  const email = readString(payload.email)
  const subject = readString(payload.subject)
  const message = readString(payload.message)

  const errors: Record<string, string> = {}

  if (name.length < 2) {
    errors.name = "Please enter your name."
  }

  if (!isEmail(email)) {
    errors.email = "Please enter a valid email address."
  }

  if (subject.length < 3) {
    errors.subject = "Please add a short subject."
  }

  if (message.length < 10) {
    errors.message = "Please write a little more detail."
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please review the highlighted fields.", errors },
      { status: 422 }
    )
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT

  if (!endpoint) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Contact delivery is not configured yet. Please use the direct email link.",
      },
      { status: 503 }
    )
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        source: "Priyamvad Portfolio",
      }),
    })

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "The contact provider could not accept the message. Please email directly.",
        },
        { status: 502 }
      )
    }

    return NextResponse.json({
      ok: true,
      message: "Message queued successfully.",
    })
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Contact delivery failed. Please use the direct email link instead.",
      },
      { status: 502 }
    )
  }
}
