import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    // Validate email format
    if (!email || !email.includes('@') || !email.includes('.')) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Please provide a valid email address.",
        }),
        {
          headers: { "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    // First, check if the email already exists
    const { data: existingData } = await supabase
      .from("early_access_requests")
      .select("id, email")
      .eq("email", email)
      .single();

    // If email already exists, return a friendly message
    if (existingData) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "You're already on our waitlist! We'll be in touch soon.",
        }),
        {
          headers: { "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    // Insert the new email if it doesn't exist
    const { data: supabaseData, error: supabaseError } = await supabase
      .from("early_access_requests")
      .insert([{ email, status: "pending", message }])
      .select()
      .single();

    if (supabaseError) {
      console.error("Supabase error:", supabaseError);
      
      // Double-check for duplicate key errors (belt and suspenders approach)
      if (supabaseError.code === "23505") {
        return new Response(
          JSON.stringify({
            success: false,
            error: "You're already on our waitlist! We'll be in touch soon.",
          }),
          {
            headers: { "Content-Type": "application/json" },
            status: 400,
          }
        );
      }
      
      // Handle other database errors
      return new Response(
        JSON.stringify({
          success: false,
          error: "There was an issue processing your request. Please try again later.",
        }),
        {
          headers: { "Content-Type": "application/json" },
          status: 500,
        }
      );
    }

    // If Supabase insertion was successful, send the welcome email
    try {
      const emailResult = await resend.emails.send({
        from: "Krishna from Featurely <krishna@featurely.ai>",
        to: email,
        cc: ["krishna@featurely.ai", "dhara@featurely.ai"],
        subject: "Welcome to Featurely - Let's Build Better Products Together",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <h1 style="color: #D4AF37; margin-bottom: 24px;">Welcome to the Future of Product Development</h1>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
              I'm Krishna, founder of Featurely, and I'm thrilled to have you join us on this journey to revolutionize product development.
            </p>

            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
              We're currently in private alpha, working with a select group of companies to validate and refine our AI-driven approach to product development. Your interest means a lot to us.
            </p>

            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
              Here's what happens next:
              <br>• We'll review your application within 24-48 hours
              <br>• If selected, you'll receive exclusive early access to our platform
              <br>• You'll be among the first to experience our AI-powered product validation tools
            </p>

            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
              Have any questions in the meantime? Just reply to this email - I read and respond to every message personally.
            </p>

            <p style="color: #666; font-size: 14px;">
              Best regards,<br>
              Krishna<br>
              Founder, Featurely
            </p>
          </div>
        `,
      });

      if (emailResult.error) {
        console.error("Resend error:", emailResult.error);
        // Continue processing even if email fails
      }
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      // Continue processing even if email fails
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: supabaseData,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Unhandled error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "An error occurred while processing your request.",
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
