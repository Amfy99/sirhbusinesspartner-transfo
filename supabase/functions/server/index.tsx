import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-1c2806f3/health", (c) => {
  return c.json({ status: "ok" });
});

// Send email endpoint
app.post("/make-server-1c2806f3/send-email", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, company, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return c.json({ error: "Missing required fields: name, email, subject, message" }, 400);
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      return c.json({ error: "Email service not configured" }, 500);
    }

    // Send email using Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "contact@resend.dev", // Default Resend sender (you can configure a custom domain later)
        to: "amandine.ferey@icloud.com",
        reply_to: email,
        subject: `[CV Contact] ${subject}`,
        html: `
          <h2>Nouveau message depuis votre CV web</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Entreprise:</strong> ${company}</p>` : ''}
          <p><strong>Sujet:</strong> ${subject}</p>
          <hr />
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error:", resendData);
      return c.json({ error: "Failed to send email", details: resendData }, 500);
    }

    console.log("Email sent successfully:", resendData);
    return c.json({ success: true, messageId: resendData.id });

  } catch (error) {
    console.error("Error in send-email endpoint:", error);
    return c.json({ error: "Internal server error while sending email", details: error.message }, 500);
  }
});

Deno.serve(app.fetch);