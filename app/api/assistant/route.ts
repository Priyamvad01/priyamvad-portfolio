import { NextResponse } from "next/server"

import { findAssistantResponse } from "@/data/assistant"

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { message?: string }
    const message = body.message?.trim()

    if (!message) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please provide a message for the portfolio guide.",
        },
        { status: 400 }
      )
    }

    const response = findAssistantResponse(message)

    return NextResponse.json({
      ok: true,
      provider: "local-curated",
      response,
      future:
        "This route is prepared for future OpenAI or Vercel AI SDK integration with retrieval over portfolio content.",
    })
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Assistant request could not be processed.",
      },
      { status: 500 }
    )
  }
}
