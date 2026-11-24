import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, plotPreference, timing, source } = body;

    // Basic validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { success: false, error: "A valid phone number is required" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const leadRecord = {
      timestamp,
      name: name.trim(),
      phone: phone.trim(),
      email: email ? String(email).trim() : null,
      plotPreference: plotPreference || "Standard",
      timing: timing || "Not specified",
      source: source || "website_modal",
    };

    // Log inquiry to server console with ISO timestamp
    console.log(
      `[${timestamp}] [LEAD CAPTURE SUCCESS] ` +
        `Name="${leadRecord.name}" Phone="${leadRecord.phone}" ` +
        `Email="${leadRecord.email || "N/A"}" Plot="${leadRecord.plotPreference}" ` +
        `Timing="${leadRecord.timing}" Source="${leadRecord.source}"`
    );

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received",
        timestamp,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[LEAD CAPTURE ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error processing inquiry" },
      { status: 500 }
    );
  }
}
