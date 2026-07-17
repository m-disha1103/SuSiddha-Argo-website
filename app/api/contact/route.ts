import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("API KEY FOUND:", !!process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "SuSiddha Website <contact@susiddhaagro.com>",

      // 👇 CHANGE THIS TO YOUR EMAIL
      to: ["susiddhaagro@gmail.com"],

      subject: `New Enquiry from ${name}`,

      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>New Website Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
  console.error(err);

  return NextResponse.json(
    {
      error: err instanceof Error ? err.message : "Unknown Error",
    },
    {
      status: 500,
    }
  );
}
}