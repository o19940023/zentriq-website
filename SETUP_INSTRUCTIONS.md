# 🚀 Zentriq Website - Setup Instructions

## 📋 Pre-Launch Checklist

### 1️⃣ Analytics Setup (REQUIRED)

#### Google Analytics
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new GA4 property for your website
3. Get your Tracking ID (format: `G-XXXXXXXXXX`)
4. Replace in `src/app/layout.tsx`:
   ```typescript
   // Find and replace:
   'G-XXXXXXXXXX' → 'G-YOUR-ACTUAL-ID'
   ```
5. Or add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-YOUR-ACTUAL-ID
   ```

#### Facebook Pixel
1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Create a new Pixel
3. Get your Pixel ID (format: `123456789012345`)
4. Replace in `src/app/layout.tsx`:
   ```typescript
   // Find and replace:
   'YOUR_PIXEL_ID' → 'YOUR-ACTUAL-PIXEL-ID'
   ```

### 2️⃣ Social Media Links (REQUIRED)

Update in `src/components/Footer.tsx`:

```typescript
// Replace these URLs with your actual social media accounts:
Twitter: 'https://twitter.com/zentriq' → 'https://twitter.com/YOUR_ACCOUNT'
Telegram: 'https://t.me/zentriq' → 'https://t.me/YOUR_CHANNEL'
Discord: 'https://discord.gg/zentriq' → 'https://discord.gg/YOUR_SERVER'
YouTube: 'https://youtube.com/@zentriq' → 'https://youtube.com/@YOUR_CHANNEL'
```

### 3️⃣ Domain Setup (REQUIRED)

Update in `public/sitemap.xml`:

```xml
<!-- Replace all instances of: -->
https://zentriq.com → https://YOUR-DOMAIN.com
```

Update in `src/app/layout.tsx` (OpenGraph metadata):

```typescript
url: 'https://zentriq.com' → 'https://YOUR-DOMAIN.com'
```

### 4️⃣ Email Addresses (REQUIRED)

Replace in all files:
- `support@zentriq.com` → `support@YOUR-DOMAIN.com`
- `privacy@zentriq.com` → `privacy@YOUR-DOMAIN.com`

Files to update:
- `src/components/FAQ.tsx`
- `src/app/terms/page.tsx`
- `src/app/privacy/page.tsx`
- `src/app/refund/page.tsx`
- `src/app/license/page.tsx`

### 5️⃣ Gumroad Product URL (REQUIRED)

Update in:
1. `src/components/Pricing.tsx`
2. `src/components/CTA.tsx`

Replace:
```typescript
https://ramizmehdix.gumroad.com/l/zentriq
→
https://YOUR-USERNAME.gumroad.com/l/YOUR-PRODUCT
```

### 6️⃣ Logo (OPTIONAL but RECOMMENDED)

Replace `public/logo.png` with your actual logo:
- Recommended size: 512x512px or larger
- Format: PNG with transparency
- Should match brand colors (#9D5CFF primary, #00D9FF secondary)

### 7️⃣ Favicon (OPTIONAL)

Current favicon is a placeholder SVG. To customize:
1. Create your favicon at [Favicon.io](https://favicon.io)
2. Replace `public/favicon.svg`
3. Or add `public/favicon.ico`

---

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Add more environment variables as needed
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_GA_ID` = Your Google Analytics ID
6. Click "Deploy"
7. Once deployed, add your custom domain in Project Settings

### Custom Domain Setup (Vercel)

1. Go to Project Settings → Domains
2. Add your domain (e.g., `zentriq.com`)
3. Update DNS records as instructed by Vercel
4. Wait for SSL certificate (automatic)

---

## ✅ Post-Launch Tasks

### Test Checklist

- [ ] All links work (navigation, footer, CTA buttons)
- [ ] Gumroad checkout opens correctly
- [ ] Social media links go to correct profiles
- [ ] Contact emails are correct
- [ ] Google Analytics tracking works (check Real-Time reports)
- [ ] Facebook Pixel tracking works (use Facebook Pixel Helper extension)
- [ ] Mobile responsive design works on all screen sizes
- [ ] All legal pages render correctly
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`

### SEO Setup

1. Submit sitemap to Google Search Console:
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property (your domain)
   - Submit sitemap: `https://YOUR-DOMAIN.com/sitemap.xml`

2. Verify site ownership in Google Search Console

3. Set up Google Ads conversion tracking (if running ads)

4. Set up Facebook conversion tracking (if running ads)

---

## 📊 Conversion Tracking Events

Already integrated (will auto-track once Pixel ID is added):

✅ **Page View** - When someone visits the site
✅ **Initiate Checkout** - When "Get Started" button is clicked
✅ **Purchase** - When Gumroad purchase completes (via Gumroad webhook)

---

## 🆘 Need Help?

If you need assistance:
1. Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
2. Check Vercel docs: [vercel.com/docs](https://vercel.com/docs)
3. Email: support@YOUR-DOMAIN.com

---

## 📝 Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 🎯 Final Notes

- Replace ALL placeholder text (especially analytics IDs, social links, emails)
- Test the site thoroughly before going live
- Monitor analytics for the first few days to ensure tracking works
- Consider setting up email notifications for new purchases (via Gumroad)
- Keep the software updated regularly (`npm update`)

---

**Good luck with your launch! 🚀**
