const properties = require("../properties");

module.exports = (req, res) => {
  const id = req.query.property;
  const prop = properties[id];

  if (!prop) {
    res.status(404).json({ error: "Property not found" });
    return;
  }

  // Only send what's safe for guests to see before they even chat.
  // Sensitive fields (wifi password, exact rules text, etc.) stay server-side
  // and are only used inside the AI system prompt in /api/chat.js.
  res.status(200).json({
    propertyName: prop.propertyName,
    address: prop.address,
    suggestions: prop.suggestions || [],
  });
};
