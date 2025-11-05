import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface Submission {
  id: string;
  state: string;
  company_name: string;
  member_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip_code: string;
  business_type: string;
  business_purpose: string;
  submitted_at: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const submission: Submission = await req.json();

    const googleSheetsWebhookUrl = Deno.env.get("GOOGLE_SHEETS_WEBHOOK_URL");

    if (!googleSheetsWebhookUrl) {
      console.warn("Google Sheets webhook URL not configured. Skipping sync.");
      return new Response(
        JSON.stringify({
          success: true,
          message: "Submission recorded (Google Sheets sync skipped)",
          rowId: submission.id,
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const formattedDate = new Date(submission.submitted_at).toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const payload = {
      values: [[
        formattedDate,
        submission.state,
        submission.company_name,
        submission.member_name,
        submission.email,
        submission.phone,
        submission.address,
        submission.city,
        submission.zip_code,
        submission.business_type,
        submission.business_purpose,
      ]],
    };

    const response = await fetch(googleSheetsWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Failed to sync to Google Sheets:", response.statusText);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Failed to sync to Google Sheets",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Synced to Google Sheets successfully",
        rowId: submission.id,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Sync error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred during sync",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
