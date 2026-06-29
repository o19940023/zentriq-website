# ✅ ZENTRIQ WEBSITE LAUNCH CHECKLIST

## PRE-LAUNCH (Do these BEFORE deploying)

### 1. Install Dependencies ⏱️ 2 minutes
```bash
cd c:\Users\ramiz\Desktop\botto\website
npm install
```

### 2. Test Local Development ⏱️ 3 minutes
```bash
npm run dev
```
- [ ] Open http://localhost:3000
- [ ] Check all sections load
- [ ] Test animations (scroll through page)
- [ ] Test mobile view (Chrome DevTools → Toggle device)
- [ ] Click all buttons (check they don't 404)

### 3. Update Gumroad Links 🔗 ⏱️ 1 minute
Create your Gumroad product first, then update these files:

**File 1:** `src/components/Pricing.tsx` (Line ~82)
```tsx
<a href="https://YOUR_GUMROAD_LINK.com" target="_blank" rel="noopener noreferrer">
```

**File 2:** `src/components/CTA.tsx` (Line ~28)
```tsx
<a href="https://YOUR_GUMROAD_LINK.com" target="_blank" rel="noopener noreferrer">
```

### 4. Gumroad Product Setup 🛒 ⏱️ 10 minutes

1. Go to [gumroad.com](https://gumroad.com)
2. Create account (if needed)
3. Click "Create Product"
4. Fill in:
   - **Name**: Zentriq Trading Bot - Professional Edition
   - **Price**: $299 USD
   - **Description**: (Copy from website)
   - **Upload File**: `Zentriq_v3.1.0_Portable.zip`
   - **Delivery**: Instant download
   
5. **License Keys** section:
   - Enable "License Key"
   - Paste your 9 remaining keys (one per line)
   - Enable "Limit uses per key" → Set to 1
   
6. **Publish** product
7. Copy product URL
8. Update website links (step 3 above)

### 5. Production Build Test ⏱️ 3 minutes
```bash
npm run build
npm start
```
- [ ] Build completes without errors
- [ ] Site loads on http://localhost:3000
- [ ] No console errors
- [ ] Animations work

---

## DEPLOYMENT (Choose one platform)

### Option A: Vercel (Recommended) ⏱️ 10 minutes

1. **Create GitHub repo:**
```bash
cd c:\Users\ramiz\Desktop\botto\website
git init
git add .
git commit -m "Initial commit: Zentriq landing page"
```

2. **Push to GitHub:**
   - Go to [github.com](https://github.com)
   - Create new repository: `zentriq-website`
   - Copy commands:
```bash
git remote add origin https://github.com/YOUR_USERNAME/zentriq-website.git
git branch -M main
git push -u origin main
```

3. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import `zentriq-website`
   - Click "Deploy"
   - Wait 2 minutes ⏱️
   - **Done!** Copy the live URL

4. **Add custom domain** (optional):
   - Buy domain (Namecheap, GoDaddy, etc.)
   - Vercel → Settings → Domains
   - Add domain, update DNS records
   - SSL auto-configured

---

## POST-LAUNCH

### 1. Final Tests ⏱️ 5 minutes
On your live site:
- [ ] Homepage loads
- [ ] All sections visible
- [ ] Animations work
- [ ] Click "Get Started" → Goes to Gumroad
- [ ] Test mobile (open on phone)
- [ ] Test tablet (iPad)

### 2. Test Purchase Flow ⏱️ 5 minutes
- [ ] Click "Get Started - $299"
- [ ] Gumroad checkout opens
- [ ] Product shows correctly
- [ ] Make test purchase (or ask a friend)
- [ ] Verify download link works
- [ ] Verify license key received

### 3. Setup Analytics (Optional) ⏱️ 10 minutes

**Google Analytics:**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create account
3. Create property (GA4)
4. Copy Measurement ID (G-XXXXXXXXXX)
5. Add to `src/app/layout.tsx`:

```tsx
<head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `
  }} />
</head>
```

6. Redeploy (Vercel auto-deploys on push)

### 4. SEO Setup ⏱️ 15 minutes

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://yoursite.com`
3. Verify ownership (Vercel DNS method)
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

**Bing Webmaster:**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site
3. Verify
4. Submit sitemap

### 5. Marketing Prep ⏱️ 30 minutes

**Create social media posts:**
- [ ] Twitter/X announcement
- [ ] Facebook post
- [ ] Reddit (r/algotrading, r/Forex)
- [ ] Trading forums
- [ ] Discord servers

**Template:**
```
🚀 Just launched Zentriq - AI-powered trading bot for Forex & Crypto

✅ 24/7 automated trading
✅ Advanced risk management
✅ 98.7% win rate
✅ $299 lifetime license (no subscriptions!)

Check it out: [YOUR_WEBSITE_URL]
```

---

## MONITORING

### Daily Checks (First Week)
- [ ] Check Gumroad sales
- [ ] Check Google Analytics (visits, conversions)
- [ ] Monitor server uptime (Vercel)
- [ ] Respond to support emails

### Weekly Checks
- [ ] Review analytics (traffic sources)
- [ ] A/B test ideas
- [ ] Update content if needed
- [ ] Check license activations in Firebase

---

## TROUBLESHOOTING

### Site Not Loading
1. Check Vercel dashboard (deployment status)
2. Check domain DNS settings (if custom domain)
3. Clear browser cache

### Images Not Showing
1. Verify `public/logo.png` exists
2. Check image paths (`/logo.png` not `./logo.png`)
3. Redeploy

### Gumroad Link Broken
1. Check product is published
2. Verify URL copied correctly
3. Test in incognito window

### No Sales
1. Check checkout flow works
2. Verify price is clear ($299)
3. Add urgency ("Limited licenses")
4. Increase marketing efforts

---

## NEXT STEPS

Once you have sales:
1. **Scale marketing** (paid ads, influencers)
2. **Add testimonials** (real customer reviews)
3. **Create video demo** (Loom screen recording)
4. **Build email list** (ConvertKit, Mailchimp)
5. **Launch on Product Hunt**
6. **Create affiliate program** (10-20% commission)

---

## 🎉 YOU'RE READY TO LAUNCH!

**Estimated total time: 1-2 hours**

Good luck with sales! 🚀💰

---

**Questions?** Create an issue on GitHub or email support@zentriq.com
