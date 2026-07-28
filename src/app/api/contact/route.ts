import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as z from "zod";

// Match the Zod schema used in the frontend Consultation form
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  business: z.string().min(1, "Please select your business type"),
  budget: z.string().min(1, "Please select your target budget"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate the request payload
    const parsedData = contactSchema.safeParse(body);
    if (!parsedData.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsedData.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, business, budget, message } = parsedData.data;

    // Check for SMTP configuration environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error("Missing SMTP environment variables.");
      return NextResponse.json(
        {
          error: "Email configuration error",
          message: "SMTP credentials are not configured. Please define SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in your environment variables.",
        },
        { status: 500 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT, 10),
      secure: parseInt(SMTP_PORT, 10) === 465, // Use SSL/TLS for port 465
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Format the email message
    const mailOptions = {
      from: `"${name} via makePortfolio.in" <${SMTP_USER}>`, // Send as configured user to pass SMTP SPF/DKIM checks
      to: "st.abhijithh@gmail.com",
      replyTo: email, // Direct replies back to the user's email address
      subject: `💼 Consultation: ${name} (${business})`,
      text: `
New Consultation Form Submission:
------------------------------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Business Type: ${business}
Target Budget: ${budget}

Message:
${message}
------------------------------------------
Reply directly to this email to contact ${name}.
      `,
      html: `
        <div style="font-family: sans-serif; background-color: #0c0a09; color: #f5f5f4; padding: 32px 24px; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #292524;">
          <h2 style="color: #ffffff; border-bottom: 1px solid #292524; padding-bottom: 12px; font-size: 20px; font-weight: bold; margin-top: 0;">
            💼 New Consultation Request
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 6px 0; color: #a8a29e; font-size: 14px; width: 140px; font-weight: 600;">Client Name:</td>
              <td style="padding: 6px 0; color: #ffffff; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #a8a29e; font-size: 14px; font-weight: 600;">Email:</td>
              <td style="padding: 6px 0; color: #ffffff; font-size: 14px;"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #a8a29e; font-size: 14px; font-weight: 600;">Phone Number:</td>
              <td style="padding: 6px 0; color: #ffffff; font-size: 14px;"><a href="tel:${phone}" style="color: #6366f1; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #a8a29e; font-size: 14px; font-weight: 600;">Business Type:</td>
              <td style="padding: 6px 0; color: #ffffff; font-size: 14px;">${business}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #a8a29e; font-size: 14px; font-weight: 600;">Target Budget:</td>
              <td style="padding: 6px 0; color: #10b981; font-size: 14px; font-weight: bold;">${budget}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #292524;">
            <h3 style="color: #ffffff; font-size: 15px; font-weight: 600; margin-top: 0; margin-bottom: 8px;">Project Details / Message:</h3>
            <p style="color: #d6d3d1; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap; background-color: #1c1917; padding: 12px; border-radius: 8px;">${message}</p>
          </div>
          <div style="margin-top: 32px; font-size: 11px; color: #78716c; text-align: center; border-top: 1px solid #292524; padding-top: 12px;">
            Submitted from makePortfolio.in. You can reply directly to this email to respond to ${name}.
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    const message = error instanceof Error ? error.message : "An unexpected error occurred while sending email.";
    return NextResponse.json(
      { error: "Internal Server Error", message },
      { status: 500 }
    );
  }
}
