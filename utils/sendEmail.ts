type SendEmail = {
  to?: string;
  from?: string;
  subject: string;
  text: string;
  html: string;
  bcc?: string;
  replyTo: string;
};

function getMailgunAuthToken(): string {
  const key = process.env.MAILGUN_API_KEY;
  if (!key) {
    throw new Error("MAILGUN_API_KEY is not set");
  }
  return `Basic ${Buffer.from(`api:${key}`).toString("base64")}`;
}

function getMailgunDomain(): string {
  const domain = process.env.MAILGUN_DOMAIN;
  if (!domain) {
    throw new Error("MAILGUN_DOMAIN is not set");
  }
  return domain;
}

async function sendEmail({
  to,
  from,
  subject,
  text,
  html,
  bcc,
  replyTo,
}: SendEmail) {
  if (!to || !from) {
    throw new Error("Missing required fields");
  }

  const form = new FormData();
  const mailgunUrl = `https://api.mailgun.net/v3/${getMailgunDomain()}/messages`;

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
      Authorization: getMailgunAuthToken(),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `Mailgun send failed (${response.status}): ${JSON.stringify(data)}`,
    );
  }

  return data;
}

export { sendEmail };
