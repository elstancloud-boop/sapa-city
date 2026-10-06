// =====================================================================
//  SAPA CITY: AD SETTINGS  (this is the only file you edit to make money)
// =====================================================================
//  How selling an ad works:
//   1. A business pays you (Paystack link below, or bank transfer).
//   2. They send you their logo/picture + website or WhatsApp link.
//   3. Upload the picture into the "ads" folder on GitHub (e.g. ads/mama-tee.png).
//   4. Copy one of the examples in the "ads" list below, fill it in, and save.
//      The ad goes live within a minute and switches off by itself after "until".
//
//  Ad spots ("spot"):
//    billboard  = a billboard on the city map. Slots: Lagos L1-L8, Abuja A1-A8
//    travel     = shown on the travel screen every time a player takes a ride
//    venue      = "Sponsored by" on a place, e.g. slot 'amala' (Lagos) or 'yahuza' (Abuja)
//    title      = "Presented by" on the start screen
//  city: 'lagos', 'abuja' or 'all'
//  Several ads on the same spot take turns, 10 seconds each.
// =====================================================================

window.SAPA_ADS = {
  // Your contact details for advertisers (WhatsApp number in international format, no +)
  contact: { whatsapp: '', email: '' },

  // Paste your Paystack (or Flutterwave) payment page links here.
  // Create them free at dashboard.paystack.com > Payments > Payment Pages.
  payLinks: { billboard: '', travel: '', venue: '', title: '', tip: '' },

  // Weekly prices in naira. Raise them as your player numbers grow.
  prices: { billboard: 10000, venue: 15000, travel: 25000, title: 40000 },

  // Optional: free visitor stats from goatcounter.com (just the code, e.g. 'sapacity')
  goatcounter: '',

  ads: [
    // ---- EXAMPLES (remove the // at the start of a line to switch one on) ----
    // { spot: 'billboard', city: 'lagos', slot: 'L1', image: 'ads/your-logo.png', text: 'Mama Tee Foods', link: 'https://wa.me/2348000000000', until: '2026-10-31' },
    // { spot: 'travel', city: 'all', image: 'ads/your-banner.png', text: 'Fast data bundles', link: 'https://example.com', until: '2026-10-31' },
    // { spot: 'venue', city: 'abuja', slot: 'yahuza', text: 'Chilled drinks by XYZ', link: 'https://example.com', until: '2026-10-31' },
    // { spot: 'title', city: 'all', text: 'Your Brand', image: 'ads/your-logo.png', link: 'https://example.com', until: '2026-10-31' },
  ],
};
