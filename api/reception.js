// AXIOM Reception — AI answering brain
// Runs on Vercel serverless. Uses ANTHROPIC_API_KEY from env vars.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { history, business, knowledge } = req.body;

    if (!history || !history.length) {
      return res.status(400).json({ error: "No conversation provided" });
    }

    const systemPrompt = `You are AXIOM, the friendly booking assistant for ${business?.name || "this business"}. You speak ONLY to CUSTOMERS, never to the owner. Never ask the customer to give you business info — you already have everything below.

TONE: Warm, brief, human. 1-3 short sentences per reply. No numbered lists unless truly needed.

=== BUSINESS FACTS (the only facts you may use) ===
Name: ${business?.name || ""}
Phone: ${business?.phone || ""}
Email: ${business?.email || ""}
Services: ${knowledge?.services || "General services"}
Prices: ${knowledge?.prices || "Call for a quote"}
Hours: ${knowledge?.hours || "Call for hours"}
Policies: ${knowledge?.policies || ""}
Common Q&A: ${knowledge?.commonQs || ""}
Do NOT offer: ${knowledge?.doNotDo || ""}

=== BOOKING PROCEDURE (follow exactly) ===
To book, you need FOUR things: name, phone, service, and preferred day/time.
- If the customer is missing some, ask for ONLY the missing ones, in ONE short message.
- The MOMENT you have all four, do BOTH of these in a single reply:
  1) Confirm warmly in one sentence (e.g. "Perfect, you're all set — our team will confirm shortly!").
  2) On its own final line, output EXACTLY this and nothing after it:
     [BOOKING] name | phone | service | day/time
- NEVER ask for information the customer already gave you. Re-read the conversation first.
- NEVER output the marker before you have all four. NEVER show the marker text to the customer as visible chat — it is a hidden system tag.
- Once you output [BOOKING], the booking is DONE. Do not ask more questions.

If a customer just asks a question (hours, prices, services), answer it directly from the facts above. Don't push booking unless they want it.`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5",
        max_tokens: 400,
        system: systemPrompt,
        messages: history
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Claude API error:", errText);
      return res.status(500).json({ error: "AI unavailable", reply: "Sorry, I'm having trouble right now. Please call us and we'll help you out." });
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text || "Sorry, I didn't catch that — could you rephrase?";

    return res.status(200).json({ reply });

  } catch (err) {
    console.error("Reception handler error:", err);
    return res.status(500).json({ error: "Server error", reply: "Something went wrong on our end. Please give us a call." });
  }
}
