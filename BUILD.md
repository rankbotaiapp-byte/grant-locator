# New Era Apps — Client Build Checklist

**Rule: You edit exactly ONE file per client — `config.js`. Never touch app.js, style.css, index.html, or admin.html.**
If you need to change those, the TEMPLATE needs improving — do it in Master-Template, not in a client repo.

---

## STEP 1 — Gather (with the owner, ~15 min)
Fill out the intake form. Don't build anything yet, just capture info.
See `INTAKE.md` for the form.

## STEP 2 — Clone the template
1. Go to `github.com/rankbotaiapp-byte/Master-Template`
2. Click the green **Use this template** → **Create a new repository**
3. Name it: `clientname` (lowercase, hyphens, e.g. `purdey-electric`)
4. Create

## STEP 3 — Deploy to Vercel
1. Go to `vercel.com/newera1`
2. **Add New → Project**
3. Import the new GitHub repo
4. Click **Deploy** (no settings to change)
5. Result: `clientname.vercel.app`

## STEP 4 — Add the API key
1. Vercel → the new project → **Settings → Environment Variables**
2. Name: `ANTHROPIC_API_KEY`  (exact spelling, all caps)
3. Value: your `sk-ant-...` key
4. Sensitive: ON
5. Environments: Production + Preview
6. Save

## STEP 5 — Configure the client
1. New repo → open `config.js` → pencil ✏️
2. **Ctrl+A → Delete → paste the generated config**
3. Commit to `main`

## STEP 6 — Verify (2 min — DO NOT SKIP)
Open the site in a fresh Incognito window and check:
- [ ] Business name, tagline, colors correct
- [ ] Services / hours / FAQ show the client's real info
- [ ] Tap AXIOM → chat opens with greeting + buttons
- [ ] Ask AXIOM a question → it answers using THEIR info
- [ ] Book a test appointment → AXIOM confirms cleanly
- [ ] Booking email arrives
- [ ] Open `/admin.html` → the test booking appears
- [ ] Delete the test booking from Firestore when done

## STEP 7 — Send it
Send the client the live link. Ask them to tap AXIOM and try it.

---

## Common fixes
| Problem | Cause | Fix |
|---|---|---|
| Page is black / blank | config.js syntax error | Check console (F12) for the line number — usually a missing comma |
| AXIOM says "having trouble connecting" | Missing API key | Add `ANTHROPIC_API_KEY` in Vercel env vars, then redeploy |
| Changes don't show | PWA cache | Open in Incognito (Ctrl+Shift+N) |
| Booking doesn't email | Wrong Formspree endpoint | Check `reception.bookingNotify` in config |
| Admin shows other clients' bookings | Filter not set | Confirm `business.name` is unique per client |

---

## Pricing (Bluevine links)
| Tier | Price | Link |
|---|---|---|
| Quick Book Mini | $25 | pay.bluevine.com/p/dfc849e2926d482bba773ac555c9739b |
| Starter App | $150 | pay.bluevine.com/p/37f4acb37a45457a98367960783d7c0a |
| Standard Deposit | $250 | pay.bluevine.com/p/6f09e39ac501439b9b67c2c4f444977a |
| Pro Deposit | $750 | pay.bluevine.com/p/d58e673e42f047da83c466502295223a |
| Monthly Care Plan | $49/mo | pay.bluevine.com/p/e3ea41db083f44e79101596f34934f1c |
| Final Balance | client enters | pay.bluevine.com/p/af4d8c59a8a24d62bf54c4000819506a |
