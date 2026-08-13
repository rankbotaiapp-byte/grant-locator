(function () {
  const cfg = window.APP_CONFIG;
  const app = document.getElementById("app");
  const header = document.getElementById("app-header");
  const root = document.documentElement;

  const neonColor =
    cfg.branding.neon?.color === "match" || !cfg.branding.neon?.color
      ? cfg.branding.primary
      : cfg.branding.neon.color;

  root.style.setProperty("--primary", cfg.branding.primary);
  root.style.setProperty("--accent", cfg.branding.accent);

  if (cfg.branding.neon?.on === false) {
    root.style.setProperty("--neon", "transparent");
    root.style.setProperty("--neon-width", "0px");
  } else {
    root.style.setProperty("--neon", neonColor);
    root.style.setProperty("--neon-width", (cfg.branding.neon?.width || 3) + "px");
  }

  document.body.className = "theme-" + (cfg.branding.theme || "aurora");

  const twinkleField = document.createElement("div");
  twinkleField.className = "twinkle-field";
  document.body.appendChild(twinkleField);
  for (let i = 0; i < 40; i++) {
    const s = document.createElement("div");
    s.className = "twinkle";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDuration = (Math.random() * 3 + 2) + "s";
    s.style.animationDelay = (Math.random() * 4) + "s";
    twinkleField.appendChild(s);
  }

  function bgShootingStar() {
    const neon = ["#f3ff4d", "#4dff88", "#ff4fd8", "#4dd6ff"];
    const c = neon[Math.floor(Math.random() * neon.length)];
    const longTail = Math.random() > 0.5;
    const s = document.createElement("div");
    s.className = "bg-shooter";
    s.style.left = (Math.random() * 90 + 5) + "vw";
    s.style.top = (Math.random() * 70) + "vh";
    s.style.background = c;
    if (longTail) {
      s.style.boxShadow = `0 0 6px #fff, 0 0 14px ${c}, -60px 0 30px ${c}, -120px 0 50px ${c}, -180px 0 70px ${c}`;
    } else {
      s.style.boxShadow = `0 0 6px #fff, 0 0 12px ${c}, -50px 0 30px ${c}`;
    }
    const sx = -(Math.random() * 350 + 250) + "px";
    const sy = (Math.random() * 250 + 120) + "px";
    s.style.setProperty("--sx", sx);
    s.style.setProperty("--sy", sy);
    s.style.animationDuration = (Math.random() * 1.2 + 1.6) + "s";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 3000);
  }
  setInterval(() => { if (Math.random() > 0.35) bgShootingStar(); }, 1800);

  document.title = cfg.business.name;
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) themeMeta.setAttribute("content", cfg.branding.primary);

  header.innerHTML = `
    ${cfg.business.logo ? `<img class="logo" src="${cfg.business.logo}" alt="${cfg.business.name}">` : ""}
    <h1>${cfg.business.name}</h1>
    <p>${cfg.business.tagline}</p>`;

  const icon = (name, size = 20) =>
    `<i data-lucide="${name}" width="${size}" height="${size}"></i>`;

  async function saveOrderToDashboard(name, phone, message, source) {
    try {
      await fetch("https://ipnmgmzihndtgufxwkuh.supabase.co/rest/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": "sb_publishable_iZVME-itegalWU6HyO50MA_5vkhSDSi",
          "Authorization": "Bearer sb_publishable_iZVME-itegalWU6HyO50MA_5vkhSDSi",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({
          business_id: cfg.meta?.leadId || "unknown",
          customer_name: name || "",
          phone: phone || "",
          message: message || "",
          source: source,
          status: "new",
          created_at: new Date().toISOString()
        })
      });
    } catch (e) {
      console.error("Dashboard save failed:", e);
    }
  }

  const modules = {
    hero: () => {
      const h = cfg.content.hero || {};
      const btns = (h.buttons || []).map(b =>
        `<a class="hero-btn" href="${b.link || '#'}">${b.icon ? icon(b.icon) : ""} ${b.label}</a>`
      ).join("");
      const bannerStyle = h.banner
        ? ` style="background-image: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url('${h.banner}'); background-size: cover; background-position: center;"`
        : "";
      const bannerClass = h.banner ? " hero-has-banner" : "";
      return `
      <section class="hero-premium${bannerClass}"${bannerStyle}>
        <div class="hero-inner">
          <h2 class="hero-headline">${h.headline || cfg.business.tagline || ""}</h2>
          <p class="hero-sub">${h.subtext || ""}</p>
          <div class="hero-btns">${btns}</div>
        </div>
      </section>`;
    },
    locationPin: () => {
      const loc = cfg.locationPin;
      if (!loc || !loc.on) return "";
      return `
      <section class="location-pin">
        <div class="location-pin-inner">
          <div class="location-pin-label">${icon("map-pin", 20)} Where We Are Today</div>
          <div class="location-pin-current">${loc.current || "Check back soon"}</div>
          ${loc.note ? `<div class="location-pin-note">${loc.note}</div>` : ""}
          ${loc.mapLink ? `<a class="location-pin-btn" href="${loc.mapLink}" target="_blank">${icon("navigation", 16)} Get Directions</a>` : ""}
        </div>
      </section>`;
    },
    axiomIntro: () => {
      const a = cfg.content.axiomIntro;
      if (!a) return "";
      const points = (a.points || []).map(p =>
        `<div class="axiom-point">${icon(p.icon || "check-circle", 20)}<span>${p.text}</span></div>`
      ).join("");
      return `
      <section class="axiom-intro">
        <div class="axiom-intro-badge">${icon("sparkles", 18)} Powered by AXIOM</div>
        <h2 class="axiom-intro-head">${a.heading || "Meet AXIOM — Your 24/7 Receptionist"}</h2>
        <p class="axiom-intro-sub">${a.subtext || ""}</p>
        <div class="axiom-points">${points}</div>
        <button class="axiom-intro-cta" onclick="document.getElementById('orb').click()">
          ${icon("message-circle", 18)} Talk to AXIOM now
        </button>
      </section>`;
    },
    bannerStrips: () => {
      const strips = cfg.content.bannerStrips;
      if (!strips || !strips.length) return "";
      return strips.map(s => `
      <section class="banner-strip" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${s.image}');">
        <div class="banner-strip-inner">
          <h2 class="banner-strip-head">${s.headline || ""}</h2>
          ${s.subtext ? `<p class="banner-strip-sub">${s.subtext}</p>` : ""}
          ${s.button ? `<a class="banner-strip-btn" href="${s.button.link || '#'}">${s.button.label}</a>` : ""}
        </div>
      </section>`).join("");
    },
    stats: () => {
      const s = cfg.content.stats;
      if (!s || !s.length) return "";
      return `
      <section class="stats-bar">
        <div class="stats-inner">
          ${s.map(item => `
            <div class="stat">
              ${item.icon ? icon(item.icon, 22) : ""}
              <div class="stat-value">${item.value}</div>
              <div class="stat-label">${item.label}</div>
            </div>
          `).join("")}
        </div>
      </section>`;
    },
    services: () => `
      <section id="services" class="services">
        <h2>${icon("notebook-pen")} Services</h2>
        ${cfg.content.services.map((s, i) => `
          <div class="card${s.image ? " card-has-img" : ""}"${s.image ? ` onclick="openItemPhoto(${i})"` : ""}>
            <div class="card-head">
              ${s.icon ? icon(s.icon, 22) : ""}
              <h3>${s.name}</h3>
              <span class="price">${s.price}</span>
            </div>
            <p>${s.desc}</p>
            ${s.image ? `<div class="card-view-photo">${icon("image", 14)} Tap to see photo</div>` : ""}
          </div>`).join("")}
      </section>`,
    gallery: () => {
      if (!cfg.content.gallery?.length) return "";
      return `
      <section class="gallery">
        <h2>${icon("images")} Gallery</h2>
        <div class="grid">
          ${cfg.content.gallery.map(src => `<img src="${src}" alt="" loading="lazy">`).join("")}
        </div>
      </section>`;
    },
    reviews: () => {
      if (!cfg.content.reviews?.length) return "";
      return `
      <section class="reviews">
        <h2>${icon("star")} What Customers Say</h2>
        ${cfg.content.reviews.map(r => `
          <div class="review-card">
            <div class="review-stars">${"★".repeat(r.rating || 5)}</div>
            <p class="review-text">"${r.text}"</p>
            <div class="review-name">— ${r.name}</div>
          </div>
        `).join("")}
      </section>`;
    },
    about: () => {
      const a = cfg.content.about;
      if (!a) return "";
      return `
      <section class="about">
        <h2>${icon("info")} ${a.heading || "About Us"}</h2>
        ${a.image ? `<img class="about-img" src="${a.image}" alt="">` : ""}
        <p class="about-body">${a.body || ""}</p>
      </section>`;
    },
    hours: () => {
      const h = cfg.content.hours;
      if (!h || !h.length) return "";
      return `
      <section class="hours">
        <h2>${icon("clock")} Hours</h2>
        <div class="hours-list">
          ${h.map(row => `
            <div class="hours-row">
              <span class="hours-day">${row.day}</span>
              <span class="hours-time">${row.time}</span>
            </div>
          `).join("")}
        </div>
      </section>`;
    },
    faq: () => {
      const f = cfg.content.faq;
      if (!f || !f.length) return "";
      return `
      <section class="faq">
        <h2>${icon("help-circle")} FAQ</h2>
        ${f.map(item => `
          <details class="faq-item">
            <summary class="faq-q">${item.q}</summary>
            <p class="faq-a">${item.a}</p>
          </details>
        `).join("")}
      </section>`;
    },
    contact: () => `
      <section id="contact" class="contact">
        <h2>${icon("map-pin")} Get In Touch</h2>
        <div class="contact-rows">
          <a class="contact-row" href="tel:${cfg.business.phone}">
            ${icon("phone")}<span>${cfg.business.phone}</span>
          </a>
          <a class="contact-row" href="mailto:${cfg.business.email}">
            ${icon("mail")}<span>${cfg.business.email}</span>
          </a>
        </div>
      </section>`,
    bookingForm: () => {
      if (!cfg.forms?.endpoint) {
        console.error("APP_CONFIG.forms.endpoint is empty — form not rendered.");
        return `<section class="contact"><p class="cfg-warning">
          Form not configured. Set forms.endpoint in config.js.
        </p></section>`;
      }
      return `
      <section id="book" class="booking">
        <h2>${icon("calendar-check")} Request Info</h2>
        <form id="bookingForm" action="${cfg.forms.endpoint}" method="POST">
          <input type="text"  name="name"  id="bkName"  placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <input type="tel"   name="phone" id="bkPhone" placeholder="Your phone" required />
          <textarea name="message" id="bkMsg" placeholder="What are you looking for?" rows="4" required></textarea>
          <input type="hidden" name="_subject" value="New request — ${cfg.business.name}" />
          <button class="btn" type="submit" id="bookBtn">Send Request</button>
          <div class="form-err" id="formErr" hidden>
            Couldn't send. Please call <a href="tel:${cfg.business.phone}">${cfg.business.phone}</a>.
          </div>
          <div class="form-ok" id="formOk" hidden>
            Got it — we'll be in touch shortly.
          </div>
        </form>
      </section>`;
    }
  };

  let html = "";
  Object.keys(cfg.modules).forEach(key => {
    if (cfg.modules[key] && modules[key]) html += modules[key]();
  });
  app.innerHTML = html;

  if (window.lucide) lucide.createIcons();

  function showLeadDemo(name, phone, msg, secs) {
    const n = document.createElement("div");
    n.className = "lead-toast";
    n.innerHTML = `
      <div class="lead-toast-head">${icon("bell", 18)} New Booking Request</div>
      <div class="lead-toast-body">
        <strong>${name || "Customer"}</strong> · ${phone || "no phone"}<br>
        ${msg ? msg.slice(0, 90) : ""}
      </div>
      <div class="lead-toast-time">Captured in ${secs} seconds</div>
      <div class="lead-toast-note">Preview — in your live app this goes straight to your phone.</div>`;
    document.body.appendChild(n);
    if (window.lucide) lucide.createIcons();
    requestAnimationFrame(() => n.classList.add("show"));
    setTimeout(() => {
      n.classList.remove("show");
      setTimeout(() => n.remove(), 400);
    }, 9000);
  }

  const form = document.getElementById("bookingForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const btn = document.getElementById("bookBtn");
      const err = document.getElementById("formErr");
      const ok  = document.getElementById("formOk");
      const nameVal  = (document.getElementById("bkName")  || {}).value || "";
      const phoneVal = (document.getElementById("bkPhone") || {}).value || "";
      const msgVal   = (document.getElementById("bkMsg")   || {}).value || "";
      const started  = Date.now();
      err.hidden = true;
      btn.disabled = true;
      btn.textContent = "Sending…";
      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(res => {
          if (!res.ok) throw new Error("failed");
          const secs = ((Date.now() - started) / 1000).toFixed(1);
          form.querySelectorAll("input,textarea,button").forEach(el => el.remove());
          ok.hidden = false;
          if (cfg.meta?.mode === "demo") showLeadDemo(nameVal, phoneVal, msgVal, secs);
          saveOrderToDashboard(nameVal, phoneVal, msgVal, "booking_form");
        })
        .catch(() => {
          btn.disabled = false;
          btn.textContent = "Send Request";
          err.hidden = false;
        });
    });
  }

  if (cfg.orb?.on) {
    const wrap = document.getElementById("orbWrap");
    const orb = document.getElementById("orb");
    const panel = document.getElementById("orbPanel");
    wrap.hidden = false;

    const galaxyBg = document.createElement("div");
    galaxyBg.className = "orb-galaxy-bg";
    wrap.appendChild(galaxyBg);
    const aura = document.createElement("div");
    aura.className = "orb-aura";
    aura.innerHTML = '<div class="gas gas1"></div><div class="gas gas2"></div><div class="gas gas3"></div><div class="gas gas4"></div><div class="gas gas5"></div>';
    wrap.appendChild(aura);

    for (let i = 1; i <= 3; i++) {
      const p = document.createElement("div");
      p.className = `planet planet${i}`;
      galaxyBg.appendChild(p);
    }

    function createShootingStar() {
      const colors = ["#ff4fd8","#4d7bff","#4dffe0","#b6ff4d","#ffe64d","#ff6b4d"];
      const c = colors[Math.floor(Math.random() * colors.length)];
      const star = document.createElement("div");
      star.className = "shooting-star";
      star.style.left = Math.random() * 90 + "px";
      star.style.top = Math.random() * 70 + "px";
      star.style.background = c;
      star.style.boxShadow = `0 0 8px #fff, 0 0 16px ${c}, 0 0 30px ${c}`;
      star.style.setProperty("--dx", (Math.random() * 200 - 80) + "px");
      star.style.setProperty("--dy", (Math.random() * 140 + 30) + "px");
      galaxyBg.appendChild(star);
      setTimeout(() => star.remove(), 1500);
    }
    setInterval(() => { if (Math.random() > 0.55) createShootingStar(); }, 700);

    function createMeteor() {
      const colors = ["#ff4fd8","#4d7bff","#4dffe0","#b6ff4d","#ffe64d","#ff6b4d"];
      const c = colors[Math.floor(Math.random() * colors.length)];
      const m = document.createElement("div");
      m.className = "meteor";
      m.style.left = (Math.random() * 140 - 20) + "px";
      m.style.top = (Math.random() * 20 - 40) + "px";
      m.style.background = `linear-gradient(${c}, transparent)`;
      m.style.boxShadow = `0 0 8px ${c}, 0 0 16px ${c}`;
      m.style.setProperty("--mx", (Math.random() * 40 + 30) + "px");
      m.style.setProperty("--my", (Math.random() * 60 + 90) + "px");
      galaxyBg.appendChild(m);
      setTimeout(() => m.remove(), 1600);
    }
    setInterval(() => { if (Math.random() > 0.4) createMeteor(); }, 500);

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";
    wrap.appendChild(bubble);

    const messages = cfg.orb.teaser?.messages || [
      "📲 Tap AXIOM to add me to your home screen",
      "🌌 How can AXIOM help you today?",
      "⚡ Book or call with one tap",
      "✨ This app works offline too"
    ];

    let currentMsg = 0;
    function showBubble() {
      bubble.textContent = messages[currentMsg];
      bubble.classList.add("show");
      setTimeout(() => bubble.classList.remove("show"), 5800);
      currentMsg = (currentMsg + 1) % messages.length;
    }
    setTimeout(showBubble, cfg.orb.teaser?.delay || 2500);
    setInterval(showBubble, 13500);

    const rec = cfg.reception || {};
    const biz = { name: cfg.business.name, phone: cfg.business.phone, email: cfg.business.email };
    const history = [];

    panel.innerHTML = `
      <div class="orb-head">${cfg.orb.label || "AXIOM"} <span class="orb-status">● online</span></div>
      <div class="chat-thread" id="chatThread"></div>
      <div class="chat-quick" id="chatQuick"></div>
      <div class="chat-input-row">
        <input type="text" id="chatInput" placeholder="Type your question..." autocomplete="off" />
        <button id="chatSend" aria-label="Send">➤</button>
      </div>
      <div class="orb-foot">Built by New Era Apps</div>
    `;

    const thread = panel.querySelector("#chatThread");
    const quickWrap = panel.querySelector("#chatQuick");
    const input = panel.querySelector("#chatInput");
    const sendBtn = panel.querySelector("#chatSend");

    function addMsg(text, who) {
      const m = document.createElement("div");
      m.className = "chat-msg " + who;
      m.innerHTML = text.replace(/\n/g, "<br>");
      thread.appendChild(m);
      thread.scrollTop = thread.scrollHeight;
      return m;
    }

    let greeted = false;
    function greet() {
      if (greeted) return;
      greeted = true;
      addMsg(rec.greeting || "Hi! How can I help you today?", "axiom");
      (rec.quickButtons || []).forEach(b => {
        const btn = document.createElement("button");
        btn.className = "quick-btn";
        btn.innerHTML = b.label;
        btn.onclick = () => {
          if (b.action === "install") {
            addMsg(b.label, "user");
            addMsg("Adding this app to your phone is easy! 📲<br><br>📱 <strong>iPhone:</strong> tap the Share button, then \"Add to Home Screen\"<br><br>🤖 <strong>Android:</strong> tap the menu (⋮), then \"Install app\" or \"Add to Home screen\"<br><br>💻 <strong>Computer:</strong> click the install icon in the address bar", "axiom");
          } else {
            sendMessage(b.text || b.label);
          }
        };
        quickWrap.appendChild(btn);
      });
    }

    async function sendMessage(text) {
      if (!text.trim()) return;
      addMsg(text, "user");
      history.push({ role: "user", content: text });
      input.value = "";
      const typing = addMsg("<em>AXIOM is typing…</em>", "axiom typing");
      try {
        const res = await fetch("/api/reception", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ history, business: biz, knowledge: rec.knowledge || {} })
        });
        const data = await res.json();
        typing.remove();
        let reply = data.reply || "Sorry, please call us and we'll help right away.";
        history.push({ role: "assistant", content: reply });
        const bookingMatch = reply.match(/\[BOOKING\]([^\n]*)/);
        if (bookingMatch) {
          const details = bookingMatch[1].trim();
          reply = reply.replace(/\[BOOKING\][^\n]*/, "").trim();
          fireBooking(details);
        }
        addMsg(reply, "axiom");
      } catch (e) {
        typing.remove();
        addMsg("I'm having trouble connecting. Please call " + (biz.phone || "us") + ".", "axiom");
      }
    }

    async function fireBooking(details) {
      const parts = details.split("|").map(s => s.trim());
      const booking = {
        business: biz.name,
        customer_name: parts[0] || "",
        phone: parts[1] || "",
        service: parts[2] || "",
        requested_time: parts[3] || "",
        created: new Date().toISOString(),
        note: "Booked via AXIOM chat"
      };
      if (rec.bookingNotify) {
        try {
          await fetch(rec.bookingNotify, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ _subject: `📅 New Booking — ${biz.name}`, ...booking })
          });
        } catch (e) { console.error("Email notify failed:", e); }
      }
      if (window.firebaseDB) {
        try {
          await window.firebaseDB.collection("bookings").add(booking);
        } catch (e) { console.error("Firestore save failed:", e); }
      }
      if (cfg.meta?.mode === "demo") {
        showLeadDemo(booking.customer_name, booking.phone, booking.service, "0.9");
      }
      saveOrderToDashboard(booking.customer_name, booking.phone, booking.service, "axiom_chat");
    }

    sendBtn.onclick = () => sendMessage(input.value);
    input.addEventListener("keydown", e => { if (e.key === "Enter") sendMessage(input.value); });

    orb.addEventListener("click", () => {
      panel.hidden = !panel.hidden;
      bubble.classList.remove("show");
      if (!panel.hidden) greet();
    });
  }

  if (cfg.modules.nav && cfg.content.nav?.length) {
    const navBar = document.createElement("nav");
    navBar.className = "bottom-nav";
    navBar.innerHTML = cfg.content.nav.map(item => `
      <a class="nav-item" href="${item.link || '#'}">
        ${icon(item.icon, 22)}
        <span>${item.label}</span>
      </a>
    `).join("");
    document.body.appendChild(navBar);
    if (window.lucide) lucide.createIcons();
  }

  /* ====================== AXIOM IDLE BLINK ====================== */
  (function () {
    const orb = document.getElementById('orb');
    if (!orb) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const OPEN = { clipPath: 'inset(0 0 0 0)' };
    const SHUT = { clipPath: 'inset(46% 0 46% 0)' };

    function flick() {
      orb.animate([OPEN, SHUT, OPEN], { duration: 170, easing: 'ease-in-out' });
    }

    function schedule() {
      const wait = 4000 + Math.random() * 7000;
      setTimeout(() => {
        flick();
        if (Math.random() < 0.2) setTimeout(flick, 230);
        schedule();
      }, wait);
    }

    schedule();
  })();

  /* ====================== DEMO: LIVE BOOKING SIMULATION ====================== */
  (function () {
    if (cfg.meta?.mode !== "demo") return;

    const fakeLeads = cfg.demoLeads || [
      { name: "Sarah M.", phone: "(541) 555-0182", msg: "Requesting more info", secs: "1.2" },
      { name: "Mike R.",  phone: "(541) 555-0347", msg: "Wants to book this week", secs: "0.8" }
    ];

    let idx = 0;
    function fireFakeLead() {
      const lead = fakeLeads[idx % fakeLeads.length];
      showLeadDemo(lead.name, lead.phone, lead.msg, lead.secs);
      idx++;
    }

    setTimeout(() => {
      fireFakeLead();
      setInterval(fireFakeLead, 14000);
    }, 6000);
  })();

  /* ====================== PHOTO BORDER FRAME ====================== */
  (function () {
    const imgs = cfg.branding.borderImages;
    if (!imgs || !imgs.length) return;

    const frame = document.createElement("div");
    frame.className = "photo-border";

    const tileCount = 24;
    for (let i = 0; i < tileCount; i++) {
      const tile = document.createElement("div");
      tile.className = "border-tile";
      tile.style.backgroundImage = `url('${imgs[i % imgs.length]}')`;
      frame.appendChild(tile);
    }
    document.body.appendChild(frame);
  })();
  /* ====================== UNDERWATER OCEAN SCENE ====================== */
  (function () {
    if (cfg.branding.theme !== "ocean") return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const scene = document.createElement("div");
    scene.className = "ocean-scene";
    document.body.appendChild(scene);

    const fishSVG = (color) => `
      <svg viewBox="0 0 60 30" width="52" height="26" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="26" cy="15" rx="20" ry="9" fill="${color}"/>
        <polygon points="6,15 -4,7 -4,23" fill="${color}"/>
        <circle cx="38" cy="12" r="2.4" fill="#0a1520"/>
        <path d="M20 8 Q26 2 34 8" stroke="rgba(255,255,255,.4)" stroke-width="1.5" fill="none"/>
      </svg>`;

    const octoSVG = `
      <svg viewBox="0 0 80 90" width="70" height="79" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="30" rx="26" ry="24" fill="#b5568c"/>
        <circle cx="30" cy="26" r="4.5" fill="#fff"/><circle cx="30" cy="27" r="2.2" fill="#111"/>
        <circle cx="50" cy="26" r="4.5" fill="#fff"/><circle cx="50" cy="27" r="2.2" fill="#111"/>
        <g fill="#a04a7d">
          <rect class="tentacle" x="16" y="48" width="6" height="34" rx="3"/>
          <rect class="tentacle" x="26" y="50" width="6" height="38" rx="3"/>
          <rect class="tentacle" x="37" y="51" width="6" height="39" rx="3"/>
          <rect class="tentacle" x="48" y="50" width="6" height="38" rx="3"/>
          <rect class="tentacle" x="58" y="48" width="6" height="34" rx="3"/>
        </g>
      </svg>`;

    const crabSVG = `
      <svg viewBox="0 0 70 40" width="58" height="33" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="35" cy="24" rx="20" ry="12" fill="#e0552d"/>
        <circle cx="28" cy="18" r="3" fill="#fff"/><circle cx="28" cy="18" r="1.5" fill="#111"/>
        <circle cx="42" cy="18" r="3" fill="#fff"/><circle cx="42" cy="18" r="1.5" fill="#111"/>
        <g stroke="#e0552d" stroke-width="3" fill="none">
          <path d="M16 28 L6 34"/><path d="M18 24 L4 24"/>
          <path d="M54 28 L64 34"/><path d="M52 24 L66 24"/>
        </g>
        <path class="claw" d="M12 20 q-8 -4 -12 2 q6 2 12 2 z" fill="#c9481f"/>
        <path class="claw" d="M58 20 q8 -4 12 2 q-6 2 -12 2 z" fill="#c9481f"/>
      </svg>`;

    function addCreature(html, cls, topVh) {
      const el = document.createElement("div");
      el.className = "sea-creature " + cls;
      el.style.top = topVh + "vh";
      el.innerHTML = html;
      scene.appendChild(el);
    }

    addCreature(crabSVG, "crab", 0);

    function spawnBubble() {
      const b = document.createElement("div");
      b.className = "bubble";
      const size = Math.random() * 12 + 6;
      b.style.width = size + "px";
      b.style.height = size + "px";
      b.style.left = (Math.random() * 96 + 2) + "vw";
      b.style.animationDuration = (Math.random() * 5 + 7) + "s";
      scene.appendChild(b);
      setTimeout(() => b.remove(), 13000);
    }
    setInterval(() => { if (Math.random() > 0.25) spawnBubble(); }, 1400);
  })();
  /* ====================== ITEM PHOTO LIGHTBOX ====================== */
  window.openItemPhoto = function (i) {
    const item = cfg.content.services[i];
    if (!item || !item.image) return;
    const overlay = document.createElement("div");
    overlay.className = "item-photo-overlay";
    overlay.innerHTML = `
      <div class="item-photo-box">
        <img src="${item.image}" alt="${item.name}">
        <div class="item-photo-caption">
          <strong>${item.name}</strong>
          ${item.price ? `<span>${item.price}</span>` : ""}
        </div>
        <button class="item-photo-close" aria-label="Close">✕</button>
      </div>`;
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay || e.target.classList.contains("item-photo-close")) {
        overlay.remove();
      }
    });
    document.body.appendChild(overlay);
  };

})();
