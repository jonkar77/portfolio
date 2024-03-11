import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ReactElement } from "react";

// Define the CreateEmailOptions type based on your understanding
interface CreateEmailOptions {
  from: string;
  to: string[];
  subject: string;
  react: ReactElement;
}

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

interface EmailData {
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: any, res: any) {
  const { email, subject, message }: EmailData = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail as string, // Ensure fromEmail is of type string
      to: [fromEmail as string, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    } as CreateEmailOptions); // Specify the type of the options object
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
