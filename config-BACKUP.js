// ╔══════════════════════════════════════════════════════════╗
// ║         NEW ERA APPS — MULTI-CLIENT CONFIG               ║
// ║  Add each client to CLIENTS below. Load with:            ║
// ║  master-template-rho.vercel.app/?biz=oak-tree           ║
// ╚══════════════════════════════════════════════════════════╝

const SHARED = {
  firebase: {
    apiKey: "AIzaSyAjuWD-nZ5gSn7WdIukf9HFKbNcEAmQXjM",
    authDomain: "newera-bookings.firebaseapp.com",
    projectId: "newera-bookings",
    storageBucket: "newera-bookings.firebasestorage.app",
    messagingSenderId: "136137475167",
    appId: "1:136137475167:web:94a8e99c7551051520c7ea"
  },
  forms: { endpoint: "https://formspree.io/f/xykrkdky" }
};

const CLIENTS = {

  // ============ OAK TREE REALTORS ============
  "oak-tree": {
    meta: { mode: "demo", leadId: "oak-tree", demoExpiresAt: "", builtBy: "AXIOM Builder · New Era Apps" },
    ...SHARED,
    admin: { title: "Bookings Dashboard", subtitle: "Oak Tree Realtors" },
    business: {
      name: "Oak Tree Realtors",
      tagline: "Property Management & Real Estate · Since 1983",
      phone: "541-772-9040",
      email: "",
      logo: ""
    },
    branding: { primary: "#2d5016", accent: "#8b4513", theme: "forest", neon: { on: true, color: "match", width: 4 } },
    demoLeads: [
      { name: "Sarah M.",   phone: "(541) 555-0182", msg: "Need info on a rental listing", secs: "1.2" },
      { name: "Mike R.",    phone: "(541) 555-0347", msg: "Requesting a showing this week", secs: "0.8" },
      { name: "Jessica T.", phone: "(541) 555-0291", msg: "Question about a maintenance request", secs: "1.4" },
      { name: "Dave K.",    phone: "(541) 555-0158", msg: "Looking to list my property", secs: "0.9" }
    ],
    orb: { on: true, label: "AXIOM", galactic: false, teaser: { on: true, delay: 4000,
      messages: ["📲 Tap AXIOM to add me to your home screen", "⚡ Tap to call anytime", "✨ Request info in 30 seconds"] } },
    reception: {
      on: true, bookingNotify: SHARED.forms.endpoint,
      greeting: "Hi! I'm AXIOM, Oak Tree's assistant. Ask about listings, rentals, or maintenance. 🌲",
      quickButtons: [
        { label: "📲 Add to Home Screen", action: "install" },
        { label: "🏠 View Rentals", action: "ask", text: "What rentals are available?" },
        { label: "🔧 Maintenance Request", action: "ask", text: "I need to submit a maintenance request." }
      ],
      knowledge: {
        services: "Property management, real estate sales, rental listings, maintenance requests.",
        prices: "Call for details.",
        hours: "Mon-Fri 9-5.",
        booking: "Collect name + phone, team confirms.",
        policies: "Serving the Rogue Valley since 1983.",
        commonQs: "Rental availability, showings, maintenance.",
        doNotDo: "Do not quote specific prices or guarantee availability."
      }
    },
    modules: { hero: true, stats: true, services: true, gallery: false, reviews: false, about: true, hours: true, faq: false, contact: true, bookingForm: true, payments: false, accounts: false, nav: true },
    content: {
      hero: { headline: "Rogue Valley Property, Since 1983", subtext: "Property management and real estate across Medford and the valley.",
        buttons: [ { label: "Request Info", icon: "calendar", link: "#book" }, { label: "Our Services", icon: "wrench", link: "#services" } ] },
      stats: [ { value: "1983", label: "Established", icon: "star" }, { value: "Local", label: "Medford", icon: "map-pin" }, { value: "Full", label: "Service", icon: "users" } ],
      services: [
        { name: "Property Management", price: "", desc: "Rogue Valley property management services", icon: "home" },
        { name: "Real Estate Sales", price: "", desc: "Properties for sale in the Medford area", icon: "key" },
        { name: "Rental Listings", price: "", desc: "Available rental properties", icon: "key" },
        { name: "Maintenance Requests", price: "", desc: "Submit and track property maintenance", icon: "wrench" }
      ],
      about: { heading: "Established 1983", body: "Oak Tree Realtors serves the Rogue Valley with property management and real estate services. Located on Oleander Street in Medford, Oregon.", image: "" },
      hours: [
        { day: "Monday", time: "9:00 AM – 5:00 PM" }, { day: "Tuesday", time: "9:00 AM – 5:00 PM" },
        { day: "Wednesday", time: "9:00 AM – 5:00 PM" }, { day: "Thursday", time: "9:00 AM – 5:00 PM" },
        { day: "Friday", time: "9:00 AM – 5:00 PM" }, { day: "Saturday", time: "Closed" }, { day: "Sunday", time: "Closed" }
      ],
      nav: [
        { label: "Home", icon: "home", link: "#app" }, { label: "Services", icon: "wrench", link: "#services" },
        { label: "Book", icon: "calendar", link: "#book" },
        { label: "Directions", icon: "map-pin", link: "https://www.google.com/maps/search/?api=1&query=Oak+Tree+Realtors+Medford+OR" }
      ]
    }
  },

  // ============ THREE RIVERS PROPERTY MANAGEMENT ============
  "three-rivers": {
    meta: { mode: "demo", leadId: "three-rivers", demoExpiresAt: "", builtBy: "AXIOM Builder · New Era Apps" },
    ...SHARED,
    admin: { title: "Bookings Dashboard", subtitle: "Three Rivers Property Management" },
    business: {
      name: "Three Rivers Property Management",
      tagline: "Full-Service Property Management · Grants Pass",
      phone: "541-479-8968",
      email: "",
      logo: ""
    },
    branding: { primary: "#1e3a5f", accent: "#d97706", theme: "ocean", neon: { on: true, color: "match", width: 4 } },
    demoLeads: [
      { name: "Karen B.",  phone: "(541) 555-0173", msg: "Is the 2-bed on Rogue Dr still available?", secs: "1.1" },
      { name: "Tom H.",    phone: "(541) 555-0244", msg: "Need to submit a maintenance request", secs: "0.9" },
      { name: "Lisa P.",   phone: "(541) 555-0319", msg: "Interested in your management services", secs: "1.3" },
      { name: "Greg M.",   phone: "(541) 555-0187", msg: "Application question for a rental", secs: "0.8" }
    ],
    orb: { on: true, label: "AXIOM", galactic: false, teaser: { on: true, delay: 4000,
      messages: ["📲 Tap AXIOM to add me to your home screen", "⚡ Tap to call anytime", "🔧 Submit a request in 30 seconds"] } },
    reception: {
      on: true, bookingNotify: SHARED.forms.endpoint,
      greeting: "Hi! I'm AXIOM, Three Rivers' assistant. Ask about rentals, applications, or maintenance. 🏡",
      quickButtons: [
        { label: "📲 Add to Home Screen", action: "install" },
        { label: "🏠 Available Rentals", action: "ask", text: "What rentals are available?" },
        { label: "🔧 Maintenance Request", action: "ask", text: "I need to submit a maintenance request." }
      ],
      knowledge: {
        services: "Marketing & leasing, tenant screening, rent collection, property maintenance, financial reporting. Residential and commercial.",
        prices: "Call for details.",
        hours: "Mon-Fri 9-5.",
        booking: "Collect name + phone, team confirms.",
        policies: "Full-service management for Grants Pass residential and commercial properties.",
        commonQs: "Rental availability, applications, maintenance requests, rent payment.",
        doNotDo: "Do not quote specific prices or guarantee availability."
      }
    },
    modules: { hero: true, stats: true, services: true, gallery: true, reviews: false, about: true, hours: true, faq: false, contact: true, bookingForm: true, payments: false, accounts: false, nav: true },
    content: {
      hero: { headline: "Property Management, Handled", subtext: "Full-service residential and commercial management in Grants Pass.",
        buttons: [ { label: "Request Info", icon: "calendar", link: "#book" }, { label: "Our Services", icon: "wrench", link: "#services" } ] },
      stats: [ { value: "Full", label: "Service", icon: "star" }, { value: "Local", label: "Grants Pass", icon: "map-pin" }, { value: "Res + Com", label: "Properties", icon: "users" } ],
      services: [
        { name: "Marketing & Leasing", price: "", desc: "Advertising available rentals and finding qualified tenants", icon: "home" },
        { name: "Tenant Screening", price: "", desc: "Background and credit checks for applicants", icon: "users" },
        { name: "Rent Collection & Reporting", price: "", desc: "Rent collection and financial reporting for owners", icon: "gauge" },
        { name: "Maintenance", price: "", desc: "Property upkeep and maintenance request handling", icon: "wrench" }
      ],
      about: { heading: "Full-Service Management", body: "Three Rivers Property Management handles residential and commercial properties in Grants Pass — leasing, screening, rent collection, and maintenance. Located on SE Rogue Drive.", image: "" },
      hours: [
        { day: "Monday", time: "9:00 AM – 5:00 PM" }, { day: "Tuesday", time: "9:00 AM – 5:00 PM" },
        { day: "Wednesday", time: "9:00 AM – 5:00 PM" }, { day: "Thursday", time: "9:00 AM – 5:00 PM" },
        { day: "Friday", time: "9:00 AM – 5:00 PM" }, { day: "Saturday", time: "Closed" }, { day: "Sunday", time: "Closed" }
      ],
      nav: [
        { label: "Home", icon: "home", link: "#app" }, { label: "Services", icon: "wrench", link: "#services" },
        { label: "Book", icon: "calendar", link: "#book" },
        { label: "Directions", icon: "map-pin", link: "https://www.google.com/maps/search/?api=1&query=Three+Rivers+Property+Management+Grants+Pass+OR" }
      ]
    }
  },

  // ============ FLAWLESS DETAIL SERVICES ============
  "flawless-detail": {
    meta: { mode: "demo", leadId: "flawless-detail", demoExpiresAt: "", builtBy: "AXIOM Builder · New Era Apps" },
    ...SHARED,
    admin: { title: "Bookings Dashboard", subtitle: "Flawless Detail Services" },
    business: {
      name: "Flawless Detail Services",
      tagline: "Mobile Auto Detailing · Grants Pass",
      phone: "541-218-8565",
      email: "",
      logo: ""
    },
    branding: { primary: "#0a0a0a", accent: "#c0392b", theme: "circuit", neon: { on: true, color: "match", width: 4 } },
    demoLeads: [
      { name: "Jason R.",  phone: "(541) 555-0166", msg: "Want a full detail on my truck Saturday", secs: "0.9" },
      { name: "Amber L.",  phone: "(541) 555-0208", msg: "Quote for interior detail on an SUV?", secs: "1.2" },
      { name: "Chris D.",  phone: "(541) 555-0291", msg: "Do you do ceramic coating?", secs: "1.0" },
      { name: "Nicole W.", phone: "(541) 555-0143", msg: "Can you come to my house this week?", secs: "0.8" }
    ],
    orb: { on: true, label: "AXIOM", galactic: false, teaser: { on: true, delay: 4000,
      messages: ["📲 Tap AXIOM to add me to your home screen", "⚡ Tap to call anytime", "🚗 Book a detail in 30 seconds"] } },
    reception: {
      on: true, bookingNotify: SHARED.forms.endpoint,
      greeting: "Hi! I'm AXIOM, Flawless Detail's assistant. Ask about packages, pricing, or book a detail. 🚗✨",
      quickButtons: [
        { label: "📲 Add to Home Screen", action: "install" },
        { label: "✨ View Packages", action: "ask", text: "What detailing packages do you offer?" },
        { label: "📅 Book a Detail", action: "ask", text: "I'd like to book a detailing appointment." }
      ],
      knowledge: {
        services: "Mobile auto detailing — exterior wash and wax, full interior detail, paint correction, ceramic coating. We come to you.",
        prices: "Call or message for a quote — pricing depends on vehicle size and package.",
        hours: "By appointment, 7 days a week.",
        booking: "Collect name, phone, vehicle type, and preferred date. Team confirms.",
        policies: "Fully mobile — we come to your home or work.",
        commonQs: "Package options, pricing, mobile service area, scheduling.",
        doNotDo: "Do not quote exact prices — always say a quote is needed based on vehicle and package."
      }
    },
    modules: { hero: true, stats: true, services: true, gallery: true, reviews: false, about: true, hours: true, faq: false, contact: true, bookingForm: true, payments: false, accounts: false, nav: true },
    content: {
      hero: { headline: "We Come to You", subtext: "Mobile auto detailing in Grants Pass — at your home or work.",
        buttons: [ { label: "Book a Detail", icon: "calendar", link: "#book" }, { label: "Our Packages", icon: "wrench", link: "#services" } ] },
      stats: [ { value: "4.7★", label: "Rated", icon: "star" }, { value: "Mobile", label: "We Come to You", icon: "map-pin" }, { value: "7 Days", label: "By Appt", icon: "users" } ],
      services: [
        { name: "Exterior Wash & Wax", price: "", desc: "Hand wash, wax, tires, and windows", icon: "droplet" },
        { name: "Full Interior Detail", price: "", desc: "Vacuum, shampoo, leather and surface cleaning", icon: "disc" },
        { name: "Paint Correction", price: "", desc: "Swirl and scratch removal to restore the finish", icon: "gauge" },
        { name: "Ceramic Coating", price: "", desc: "Long-lasting paint protection", icon: "wrench" }
      ],
      about: { heading: "Fully Mobile Detailing", body: "Flawless Detail Services brings professional auto detailing to you anywhere in the Grants Pass area. Exterior, interior, paint correction, and ceramic coating — no need to leave home.", image: "" },
      hours: [
        { day: "Monday", time: "By Appointment" }, { day: "Tuesday", time: "By Appointment" },
        { day: "Wednesday", time: "By Appointment" }, { day: "Thursday", time: "By Appointment" },
        { day: "Friday", time: "By Appointment" }, { day: "Saturday", time: "By Appointment" }, { day: "Sunday", time: "By Appointment" }
      ],
      nav: [
        { label: "Home", icon: "home", link: "#app" }, { label: "Packages", icon: "wrench", link: "#services" },
        { label: "Book", icon: "calendar", link: "#book" },
        { label: "Directions", icon: "map-pin", link: "https://www.google.com/maps/search/?api=1&query=Flawless+Detail+Services+Grants+Pass+OR" }
      ]
    }
  },

  // ============ COME TO YOU CAR WASH ============
  "come-to-you": {
    meta: { mode: "demo", leadId: "come-to-you", demoExpiresAt: "", builtBy: "AXIOM Builder · New Era Apps" },
    ...SHARED,
    admin: { title: "Bookings Dashboard", subtitle: "Come To You Car Wash" },
    business: {
      name: "Come To You Car Wash",
      tagline: "Mobile Car Wash & Detailing · Grants Pass",
      phone: "541-761-5247",
      email: "",
      logo: ""
    },
    branding: { primary: "#0b3d5c", accent: "#26c6da", theme: "ocean", neon: { on: true, color: "match", width: 4 } },
    demoLeads: [
      { name: "Ryan T.",   phone: "(541) 555-0132", msg: "Can you wash my car at my office today?", secs: "0.8" },
      { name: "Megan S.",  phone: "(541) 555-0275", msg: "Interior + exterior on a minivan?", secs: "1.1" },
      { name: "Kyle B.",   phone: "(541) 555-0198", msg: "Do you come to Merlin?", secs: "0.9" },
      { name: "Dana F.",   phone: "(541) 555-0247", msg: "Quote for a full wash and wax", secs: "1.0" }
    ],
    orb: { on: true, label: "AXIOM", galactic: false, teaser: { on: true, delay: 4000,
      messages: ["📲 Tap AXIOM to add me to your home screen", "⚡ Tap to call anytime", "🚿 Book a wash in 30 seconds"] } },
    reception: {
      on: true, bookingNotify: SHARED.forms.endpoint,
      greeting: "Hi! I'm AXIOM, Come To You's assistant. Ask about wash options, pricing, or book a spot. 🚿🚗",
      quickButtons: [
        { label: "📲 Add to Home Screen", action: "install" },
        { label: "🚗 Wash Options", action: "ask", text: "What wash and detail options do you offer?" },
        { label: "📅 Book a Wash", action: "ask", text: "I'd like to book a mobile wash." }
      ],
      knowledge: {
        services: "By-appointment mobile car wash and detailing — interior and exterior cleaning. We come to your home or work.",
        prices: "Call or message for a quote based on vehicle and service.",
        hours: "By appointment.",
        booking: "Collect name, phone, vehicle type, and location. Team confirms.",
        policies: "Fully mobile — we come to you.",
        commonQs: "Wash options, pricing, service area, scheduling.",
        doNotDo: "Do not quote exact prices — a quote depends on vehicle and service."
      }
    },
    modules: { hero: true, stats: true, services: true, gallery: true, reviews: false, about: true, hours: true, faq: false, contact: true, bookingForm: true, payments: false, accounts: false, nav: true },
    content: {
      hero: { headline: "We Bring the Wash to You", subtext: "By-appointment mobile car wash and detailing anywhere in Grants Pass.",
        buttons: [ { label: "Book a Wash", icon: "calendar", link: "#book" }, { label: "Our Services", icon: "wrench", link: "#services" } ] },
      stats: [ { value: "4.6★", label: "31 Reviews", icon: "star" }, { value: "Mobile", label: "We Come to You", icon: "map-pin" }, { value: "By Appt", label: "Flexible", icon: "users" } ],
      services: [
        { name: "Exterior Wash", price: "", desc: "Full exterior hand wash, wheels, and windows", icon: "droplet" },
        { name: "Interior Cleaning", price: "", desc: "Vacuum, wipe-down, and interior refresh", icon: "disc" },
        { name: "Full Wash & Detail", price: "", desc: "Complete interior and exterior service", icon: "gauge" },
        { name: "Wash & Wax", price: "", desc: "Exterior wash finished with a protective wax", icon: "wrench" }
      ],
      about: { heading: "Mobile Car Wash", body: "Come To You Car Wash brings by-appointment mobile car washing and detailing to you anywhere in the Grants Pass area — interior and exterior. No need to leave home or work.", image: "" },
      hours: [
        { day: "Monday", time: "By Appointment" }, { day: "Tuesday", time: "By Appointment" },
        { day: "Wednesday", time: "By Appointment" }, { day: "Thursday", time: "By Appointment" },
        { day: "Friday", time: "By Appointment" }, { day: "Saturday", time: "By Appointment" }, { day: "Sunday", time: "By Appointment" }
      ],
      nav: [
        { label: "Home", icon: "home", link: "#app" }, { label: "Services", icon: "wrench", link: "#services" },
        { label: "Book", icon: "calendar", link: "#book" },
        { label: "Directions", icon: "map-pin", link: "https://www.google.com/maps/search/?api=1&query=Come+To+You+Car+Wash+Grants+Pass+OR" }
      ]
    }
  }
  ,
  // ============ SHOWCASE DEMO — BULK OUTREACH ============
  // Load with: master-template-rho.vercel.app/?biz=showcase
  "showcase": {
    meta: { mode: "demo", leadId: "showcase", demoExpiresAt: "", builtBy: "AXIOM Builder · New Era Apps" },
    ...SHARED,
    admin: { title: "Bookings Dashboard", subtitle: "Your Business Name" },
    business: {
      name: "Your Business Name",
      tagline: "Your Tagline Goes Here · Fully Customized to You",
      phone: "541-000-0000",
      email: "",
      logo: ""
    },
    branding: { primary: "#1e3a5f", accent: "#d97706", theme: "ocean", neon: { on: true, color: "match", width: 4 } },
    demoLeads: [
      { name: "A Real Customer",    phone: "(541) 555-0100", msg: "This is a live lead — captured automatically", secs: "1.0" },
      { name: "Another Lead",       phone: "(541) 555-0101", msg: "Every inquiry lands in your dashboard", secs: "0.9" },
      { name: "Booked Appointment", phone: "(541) 555-0102", msg: "AXIOM books them 24/7, even when you're closed", secs: "1.2" },
      { name: "Your Next Client",   phone: "(541) 555-0103", msg: "Never miss a customer again", secs: "0.8" }
    ],
    orb: { on: true, label: "AXIOM", galactic: false, teaser: { on: true, delay: 3000,
      messages: ["👋 Tap me — I'm your future AI receptionist", "✨ On your real app, I'll know YOUR business", "📲 Tap to add this app to your home screen"] } },
    reception: {
      on: true, bookingNotify: SHARED.forms.endpoint,
      greeting: "Hi! I'm AXIOM 👋 This is a demo, so I'm speaking generally — but on YOUR app, I'll know your exact hours, services, and prices, and I'll book appointments for your customers 24/7. Ask me anything!",
      quickButtons: [
        { label: "📲 Add to Home Screen", action: "install" },
        { label: "✨ What gets customized?", action: "ask", text: "What parts of this app get customized to my business?" },
        { label: "💬 How does booking work?", action: "ask", text: "How does AXIOM book appointments for my customers?" }
      ],
      knowledge: {
        services: "This is a demo app by New Era Apps. On a real client app, this section holds YOUR exact services, descriptions, and pricing.",
        prices: "On your real app, your actual prices go here — or 'call for quote' if you prefer.",
        hours: "Your real hours go here. AXIOM uses them to answer 'are you open?' correctly, 24/7.",
        booking: "AXIOM collects the customer's name and phone, then sends it straight to your dashboard and your phone. You never miss a lead.",
        policies: "Everything you see — the name, colors, banner, services, photos, and what AXIOM knows — gets customized to each business. This is just a preview.",
        commonQs: "What gets customized, how booking works, how fast it installs, how much it costs.",
        doNotDo: "This is a demo. Encourage the visitor to reach out to New Era Apps to get their own version built. Do not invent specific prices or claim to be a real business."
      }
    },
    modules: { hero: true, stats: true, services: true, gallery: false, reviews: false, about: true, hours: true, faq: false, contact: true, bookingForm: true, payments: false, accounts: false, nav: true },
    content: {
      hero: { headline: "Your Business, In Everyone's Pocket", subtext: "This is a demo. Every word, color, and photo below gets customized to YOUR business.",
        buttons: [ { label: "See Booking", icon: "calendar", link: "#book" }, { label: "What's Customized", icon: "wrench", link: "#services" } ] },
      stats: [ { value: "24/7", label: "AI Receptionist", icon: "star" }, { value: "60 Sec", label: "Installs to Phone", icon: "map-pin" }, { value: "100%", label: "Customized to You", icon: "users" } ],
      services: [
        { name: "Your Service #1", price: "", desc: "Your service description goes here — fully customized", icon: "home" },
        { name: "Your Service #2", price: "", desc: "Add as many services as you offer, with or without prices", icon: "key" },
        { name: "Your Service #3", price: "", desc: "AXIOM learns all of these so it can answer customers", icon: "wrench" },
        { name: "Your Service #4", price: "", desc: "This whole section is built around your real business", icon: "gauge" }
      ],
      about: { heading: "This Section = Your Story", body: "This is where your business's story goes — how long you've been around, what makes you different, your location. On your real app, this is written specifically for you. Everything you're looking at is a customizable template by New Era Apps.", image: "" },
      hours: [
        { day: "Monday", time: "Your Hours Here" }, { day: "Tuesday", time: "Your Hours Here" },
        { day: "Wednesday", time: "Your Hours Here" }, { day: "Thursday", time: "Your Hours Here" },
        { day: "Friday", time: "Your Hours Here" }, { day: "Saturday", time: "Your Hours Here" }, { day: "Sunday", time: "Closed" }
      ],
      nav: [
        { label: "Home", icon: "home", link: "#app" }, { label: "What's Customized", icon: "wrench", link: "#services" },
        { label: "Book", icon: "calendar", link: "#book" },
        { label: "Get Yours", icon: "map-pin", link: "#book" }
      ]
    }
  }
    ,
  // ============ PURDEY ELECTRIC LLC ============
  "purdey": {
    meta: { mode: "demo", leadId: "purdey", demoExpiresAt: "", builtBy: "AXIOM Builder · New Era Apps" },
    ...SHARED,
    admin: { title: "Bookings Dashboard", subtitle: "Purdey Electric LLC" },
    business: {
      name: "Purdey Electric LLC",
      tagline: "Licensed Electricians · Grants Pass & Southern Oregon",
      phone: "541-761-8198",
      email: "",
      logo: ""
    },
    branding: { primary: "#1a2a44", accent: "#f4b400", theme: "circuit", neon: { on: true, color: "match", width: 4 } },
    demoLeads: [
      { name: "Dave K.",   phone: "(541) 555-0158", msg: "Need a panel upgrade quote", secs: "0.9" },
      { name: "Sarah M.",  phone: "(541) 555-0182", msg: "No power to my shop — can someone come out?", secs: "0.8" },
      { name: "Mike R.",   phone: "(541) 555-0347", msg: "Installing a hot tub, need a 50amp sub panel", secs: "1.1" },
      { name: "Linda T.",  phone: "(541) 555-0291", msg: "Adding recessed lighting to my kitchen", secs: "1.0" }
    ],
    orb: { on: true, label: "AXIOM", galactic: false, teaser: { on: true, delay: 4000,
      messages: ["📲 Tap AXIOM to add me to your home screen", "⚡ Tap to call anytime", "💡 Request service in 30 seconds"] } },
    reception: {
      on: true, bookingNotify: SHARED.forms.endpoint,
      greeting: "Hi! I'm AXIOM, Purdey Electric's assistant. Ask about panel upgrades, wiring, lighting, or request service — we serve Grants Pass and Southern Oregon. ⚡",
      quickButtons: [
        { label: "📲 Add to Home Screen", action: "install" },
        { label: "⚡ Our Services", action: "ask", text: "What electrical services do you offer?" },
        { label: "📅 Request Service", action: "ask", text: "I'd like to request an electrician." }
      ],
      knowledge: {
        services: "Licensed residential and commercial electrical — panel upgrades, sub panels, wiring, lighting installation, troubleshooting, and service calls.",
        prices: "Estimates provided — call or request a quote for your job.",
        hours: "Mon–Fri 8:00 AM to 5:00 PM. Emergency requests captured anytime.",
        booking: "Collect name, phone, address, and a short description of the electrical work needed. Team follows up to schedule.",
        policies: "Licensed electricians serving Grants Pass and Southern Oregon. Known for fast response and professional service.",
        commonQs: "Panel upgrades, hot tub/spa wiring, lighting, emergency service, scheduling, estimates.",
        doNotDo: "Do not quote exact prices — always say an estimate is needed. Do not give electrical DIY instructions for safety; recommend a service call instead."
      }
    },
    modules: { hero: true, stats: true, services: true, gallery: false, reviews: false, about: true, hours: true, faq: false, contact: true, bookingForm: true, payments: false, accounts: false, nav: true },
    content: {
      hero: { headline: "Licensed Electricians You Can Count On", subtext: "Panel upgrades, wiring, lighting, and service calls across Grants Pass and Southern Oregon.",
        buttons: [ { label: "Request Service", icon: "calendar", link: "#book" }, { label: "Our Services", icon: "wrench", link: "#services" } ] },
      stats: [ { value: "4.9★", label: "89 Reviews", icon: "star" }, { value: "Licensed", label: "& Insured", icon: "gauge" }, { value: "Local", label: "Grants Pass", icon: "map-pin" } ],
      services: [
        { name: "Panel & Sub Panel Upgrades", price: "", desc: "Service panel upgrades and new sub panels for spas, shops, and additions", icon: "gauge" },
        { name: "Wiring & Rewiring", price: "", desc: "Residential and commercial wiring, troubleshooting, and repairs", icon: "wrench" },
        { name: "Lighting Installation", price: "", desc: "Recessed, fixture, and outdoor lighting installation", icon: "lightbulb" },
        { name: "Service & Emergency Calls", price: "", desc: "Fast response for power issues and electrical service needs", icon: "zap" }
      ],
      about: { heading: "Trusted Local Electricians", body: "Purdey Electric LLC provides licensed residential and commercial electrical services across Grants Pass and Southern Oregon. Known for fast response, fair estimates, and professional work — from panel upgrades to lighting to emergency service calls.", image: "" },
      hours: [
        { day: "Monday", time: "8:00 AM – 5:00 PM" }, { day: "Tuesday", time: "8:00 AM – 5:00 PM" },
        { day: "Wednesday", time: "8:00 AM – 5:00 PM" }, { day: "Thursday", time: "8:00 AM – 5:00 PM" },
        { day: "Friday", time: "8:00 AM – 5:00 PM" }, { day: "Saturday", time: "Closed" }, { day: "Sunday", time: "Closed" }
      ],
      nav: [
        { label: "Home", icon: "home", link: "#app" }, { label: "Services", icon: "wrench", link: "#services" },
        { label: "Book", icon: "calendar", link: "#book" },
        { label: "Directions", icon: "map-pin", link: "https://www.google.com/maps/search/?api=1&query=Purdey+Electric+Grants+Pass+OR" }
      ]
    }
  }
  

};

// --- URL param loader: reads ?biz=oak-tree and loads that client ---
const params = new URLSearchParams(window.location.search);
const bizKey = params.get("biz");
window.APP_CONFIG = CLIENTS[bizKey] || CLIENTS[Object.keys(CLIENTS)[0]]
