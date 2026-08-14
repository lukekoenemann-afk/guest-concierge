// One entry per client. To add a new property:
// 1. Copy an existing block below
// 2. Change the key (e.g. "smith-toronto") and all the fields
// 3. Commit the change on GitHub — Vercel redeploys automatically
// 4. Send the guest link: https://your-project.vercel.app/?property=smith-toronto
//
// Fields marked "public" are shown to guests before they even chat (name, address).
// Everything else is only ever used server-side to answer questions — never sent
// to the guest's browser directly.

module.exports = {
  "nicole-paul-vancouver": {
    propertyName: "Garden Suite near Trout Lake",
    address: "Commercial Drive / Trout Lake area, Vancouver, BC",
    hostName: "Nicole and Paul",
    checkIn: "Self check-in anytime after 3:00 PM via smartlock (code sent before arrival)",
    checkOut: "11:00 AM",
    wifiName: "Ask host — provided on arrival card in suite",
    wifiPassword: "Ask host — provided on arrival card in suite",
    houseRules:
      "Quiet hours roughly 10 PM–7 AM (hosts live upstairs and are early risers). No smoking. The Skytrain passes nearby — you may hear a light whoosh with windows/doors open, but it's quiet with them closed. Ceilings are about 6'5\" (196cm) — cozy but worth knowing if you're very tall.",
    localTips:
      "15 minutes to downtown Vancouver via Skytrain. Rapid buses reach Granville Island, UBC, Spanish Banks, and Main Street. Commercial Drive (great food & shops) is an easy walk. Trout Lake is one block away — mountain views, a summer farmers market, and grassy fields for picnics.",
    extraNotes:
      "Superhosts, 11 years hosting, 4.96 stars over 603 reviews — a Guest Favourite and Top 5% listing. Single-level home, no stairs, private entrance with a private patio and access to a fully fenced shared backyard with outdoor furniture. Self check-in via smart lock. Kitchen has a mini fridge, microwave, coffee maker, hot water kettle, toaster, and dishes/silverware. Bathroom has hair dryer, shampoo, body soap, hot water. Bedroom/laundry basics provided: towels, bed sheets (cotton linens), soap, toilet paper, hangers, iron. TV has Apple TV and Netflix, plus books for reading. Crib, travel crib, and board games available for families. Heating provided, plus portable fans — but NO air conditioning. Smoke alarm, carbon monoxide alarm, and fire extinguisher on site. Fast wifi (~54 Mbps, verified, good for 4K streaming and video calls). Free street parking. A laundromat is nearby. Important: there is NO washer or dryer in-suite, and NO air conditioning. There are also no exterior security cameras on the property. You may hear the hosts coming and going or on their back deck occasionally — they're up around 7 AM and quiet by 10 PM.",
    suggestions: ["How do I check in?", "Is there a washer/dryer?", "Is there air conditioning?", "What's in the kitchen?"],
  },

  // "example-toronto": {
  //   propertyName: "...",
  //   address: "...",
  //   hostName: "...",
  //   checkIn: "...",
  //   checkOut: "...",
  //   wifiName: "...",
  //   wifiPassword: "...",
  //   houseRules: "...",
  //   localTips: "...",
  //   extraNotes: "...",
  //   suggestions: ["...", "...", "...", "..."],
  // },
};
