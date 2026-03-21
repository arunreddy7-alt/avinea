import { NextResponse } from "next/server";

import { submitInquiry } from "@/lib/inquiryService";

export const runtime = "nodejs";

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  try {
    const result = await submitInquiry(payload);

    return NextResponse.json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error("Inquiry submission failed:", error);

    return NextResponse.json(
      {
        error:
          error.message ||
          "Unable to submit the enquiry right now. Please try again.",
      },
      { status: 500 }
    );
  }
}
