const properties = require("../properties");

function buildSystemPrompt(cfg) {
  return `You are the digital concierge for "${cfg.propertyName}", a short-term rental in ${cfg.address}. You speak on behalf of the hosts, ${cfg.hostName}, in a warm, concise, helpful voice — like a well-briefed front desk, not a generic chatbot.

PROPERTY FACTS (only source of truth — do not invent anything beyond this):
- Check-in: ${cfg.checkIn}
- Check-out: ${cfg.checkOut}
- Wifi network: ${cfg.wifiName}
- Wifi password: ${cfg.wifiPassword}
- House rules: ${cfg.houseRules}
- Local tips: ${cfg.localTips}
- Extra notes: ${cfg.extraNotes}

Rules:
- Answer only using the facts above. If a guest asks something you don't have info on, say you don't have that detail and suggest they check with ${cfg.hostName} directly or search online.
- Keep answers short — 1-4 sentences. Guests are on their phones.
- Never make up amenities, codes, or policies not listed above.
- If asked something urgent-sounding (lockout, no heat/water, emergency), tell them to contact the host directly right away, and if it sounds like a genuine emergency, to call local emergency services.
- Stay in character as the property's concierge. Do not mention you are Claude or an AI model.`
- Never guess or assume the host's gender or pronouns from their name. Refer to the host by name (e.g. "Antonie") or as "the host" instead of he/she/they unless told otherwise.;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { propertyId, messages } = req.body || {};
  const prop = properties[propertyId];

  if (!prop) {
    res.status(404).json({ error: "Property not found" });
    return;
  }
  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: "No messages provided" });
    return;
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 500,
        system: buildSystemPrompt(prop),
        messages: messages.map((m) => ({ role: m.role, content: m.text })),
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", errText);
      res.status(502).json({ error: "Upstream AI error" });
      return;
    }

    const data = await response.json();
    const replyText =
      data?.content?.map((b) => (b.type === "text" ? b.text : "")).join("").trim() ||
      "I couldn't quite process that — could you try asking again?";

    res.status(200).json({ reply: replyText });
  } catch (err) {
    console.error("Chat handler error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
