import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators/contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { fullName, phone, email, service, carDetails, message } = parsed.data;

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "website@linkupexclusiveautos.com",
        to: process.env.CONTACT_EMAIL || "info@linkupexclusiveautos.com",
        subject: `New Enquiry — ${service} — ${fullName}`,
        html: `
          <h2>New Service Enquiry</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || "Not provided"}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Car:</strong> ${carDetails}</p>
          <p><strong>Message:</strong> ${message || "None"}</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
