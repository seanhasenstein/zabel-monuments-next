import * as dotenv from "dotenv";
import fetch, { FormData } from "node-fetch";

dotenv.config();

const AUTHTOKEN = `Basic ${Buffer.from(
  `api:${process.env.MAILGUN_API_KEY}`
).toString(`base64`)}`;

type SendEmail = {
  to?: string;
  from?: string;
  subject: string;
  text: string;
  html: string;
  bcc?: string;
  replyTo: string;
};

async function sendEmail({
  to,
  from,
  subject,
  text,
  html,
  bcc,
  replyTo,
}: SendEmail) {
  try {
    if (!to || !from) {
      throw new Error("Missing required fields");
    }

    const form = new FormData();
    const mailgunUrl = `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`;

    form.append("to", to);
    form.append("from", from);
    form.append("subject", subject);
    form.append("text", text);
    form.append("html", html);
    if (bcc) form.append("bcc", bcc);
    form.append("h:Reply-To", replyTo);

    const response = await fetch(mailgunUrl, {
      method: "post",
      body: form,
      headers: {
        Authorization: AUTHTOKEN,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "An unknown error occurred sending the message."
    );
  }
}

export { sendEmail };
