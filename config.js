window.APP_CONFIG = {
  meta: {
    mode: "demo",
    leadId: "CLIENT-SLUG",
    demoExpiresAt: "2026-12-31T23:59:59-07:00",
    contactName: "",
    contactEmail: ""
  },
  admin: {
    title: "BUSINESS NAME",
    subtitle: "Owner Dashboard",
    password: "changeme"
  },
  business: {
    name: "BUSINESS NAME",
    tagline: "SHORT TAGLINE HERE",
    phone: "",
    email: "",
    logo: "axiommaster3.webp"
  },
  branding: {
    primary: "#1B7F5C",
    accent: "#F4A300",
    theme: "aurora",
    neon: { on: true, color: "match", width: 3 }
  },
  locationPin: {
    on: false,
    current: "",
    note: "",
    mapLink: ""
  },
  modules: {
    hero: true,
    axiomIntro: true,
    locationPin: false,
    bannerStrips: false,
    services: true,
    about: true,
    contact: true,
    bookingForm: true,
    nav: true,
    stats: false,
    hours: false,
    reviews: false,
    gallery: false,
    faq: false
  },
  content: {
    hero: {
      banner: "",
      headline: "HEADLINE HERE",
      subtext: "One sentence about what they do.",
      buttons: [
        { label: "See Services", icon: "notebook-pen", link: "#services" },
        { label: "Book Now", icon: "calendar-check", link: "#book" }
      ]
    },
    axiomIntro: {
      heading: "Meet AXIOM — Your 24/7 Receptionist",
      subtext: "AXIOM is the AI employee that never sleeps. It answers customers, takes bookings, and captures every lead — even after hours.",
      points: [
        { icon: "clock", text: "Answers customers 24/7, even after hours" },
        { icon: "calendar-check", text: "Takes bookings automatically" },
        { icon: "bell", text: "Sends every new lead straight to your phone" },
        { icon: "trending-up", text: "Turns missed calls into real revenue" }
      ]
    },
    services: [
      { name: "SERVICE 1", price: "$00", icon: "scissors", desc: "Description here." },
      { name: "SERVICE 2", price: "$00", icon: "scissors", desc: "Description here." }
    ],
    about: {
      heading: "About BUSINESS NAME",
      body: "A few sentences about the business."
    },
    nav: [
      { label: "Services", icon: "notebook-pen", link: "#services" },
      { label: "Book", icon: "calendar-check", link: "#book" },
      { label: "Find Us", icon: "map-pin", link: "#contact" }
    ]
  },
  forms: {
    endpoint: "https://formspree.io/f/xykrkdky"
  },
  demoLeads: [
    { name: "Sarah M.", phone: "(541) 555-0182", msg: "Requesting more info", secs: "1.2" },
    { name: "Mike R.", phone: "(541) 555-0347", msg: "Wants to book this week", secs: "0.8" }
  ],
  orb: {
    on: true,
    label: "AXIOM",
    autoGreet: {
      on: true,
      delay: 2500,
      messages: [
        "👋 Hey! I'm AXIOM — the assistant built right into this app.",
        "Here's what I do: I answer your customers 24/7, take their bookings, and send every lead straight to your phone — even while you're closed.",
        "Go ahead, ask me anything below — or tap 'Book now' to see how easy it is for a customer. 👇"
      ]
    },
    teaser: {
      delay: 2500,
      messages: [
        "👋 I'm AXIOM — I book customers 24/7",
        "💬 Ask me anything",
        "📅 Book with one tap",
        "📲 Tap to add this app to your phone"
      ]
    }
  },
  reception: {
    greeting: "Welcome! I'm AXIOM. How can I help you today?",
    quickButtons: [
      { label: "📋 See services", text: "What services do you offer?" },
      { label: "📅 Book now", text: "How do I book?" },
      { label: "📍 Where are you?", text: "Where are you located?" },
      { label: "📲 Add to my phone", action: "install" }
    ],
    bookingNotify: "https://formspree.io/f/xykrkdky",
    knowledge: {
      persona: "You are AXIOM, the friendly AI host for BUSINESS NAME. Be warm, local, and helpful. Help with services, booking, hours, and location. Never invent prices, hours, or details you weren't given.",
      address: "",
      phone: "",
      ordering: ""
    }
  }
};
