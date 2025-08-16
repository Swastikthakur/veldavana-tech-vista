import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    const { name, email, phone, company, service, message }: ContactFormData = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email to company
    const emailResponse = await resend.emails.send({
      from: "Contact Form <noreply@veldavanatechnologies.com>",
      to: ["veldavanatechnologies@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #1e40af; margin-bottom: 20px;">New Contact Form Submission</h2>
            
            <div style="border-left: 4px solid #3b82f6; padding-left: 15px; margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 10px;">Contact Details</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              ${phone ? `<p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
              ${company ? `<p style="margin: 5px 0;"><strong>Company:</strong> ${company}</p>` : ''}
              ${service ? `<p style="margin: 5px 0;"><strong>Service Interest:</strong> ${service}</p>` : ''}
            </div>
            
            <div style="border-left: 4px solid #10b981; padding-left: 15px;">
              <h3 style="color: #374151; margin-bottom: 10px;">Message</h3>
              <p style="color: #6b7280; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #9ca3af; font-size: 14px;">
                This email was sent from the Veldavana Technologies contact form.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: "Veldavana Technologies <noreply@veldavanatechnologies.com>",
      to: [email],
      subject: "Thank you for contacting Veldavana Technologies",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #1e40af; margin-bottom: 10px;">Thank You, ${name}!</h1>
              <p style="color: #6b7280; font-size: 18px;">We've received your message and will get back to you soon.</p>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 15px;">What happens next?</h3>
              <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
                <li>Our team will review your inquiry within 2-4 hours</li>
                <li>We'll send you a detailed response with next steps</li>
                <li>If needed, we'll schedule a consultation call</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #6b7280; margin-bottom: 15px;">
                In the meantime, feel free to explore our services and case studies on our website.
              </p>
              <a href="https://veldavanatechnologies.com" 
                 style="display: inline-block; background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Visit Our Website
              </a>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #9ca3af; font-size: 14px;">
                Best regards,<br>
                The Veldavana Technologies Team<br>
                <a href="mailto:veldavanatechnologies@gmail.com" style="color: #3b82f6;">veldavanatechnologies@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your message has been sent successfully! We'll get back to you soon." 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send email. Please try again or contact us directly.",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);