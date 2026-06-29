# 🚀 ZENTRIQ WEBSITE DEPLOYMENT GUIDE

## Quick Start (Development)

```bash
cd c:\Users\ramiz\Desktop\botto\website
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 📦 Production Deployment

### Option 1: Vercel (RECOMMENDED - FREE)

**Step 1: Push to GitHub**
```bash
cd c:\Users\ramiz\Desktop\botto\website
git init
git add .
git commit -m "Initial commit: Zentriq landing page"
git remote add origin https://github.com/YOUR_USERNAME/zentriq-website.git
git push -u origin main
```

**Step 2: Deploy on Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import `zentriq-website` repository
5. Framework: Next.js (auto-detected)
6. Click "Deploy"
7. Done! Your site is live in 2 minutes 🎉

**Custom Domain (Optional)**
1. Go to Project Settings → Domains
2. Add your domain (e.g., `zentriq.com`)
3. Update DNS records (Vercel provides instructions)
4. SSL certificate auto-configured

---

### Option 2: Netlify (Alternative - FREE)

**Step 1: Build**
```bash
npm run build
```

**Step 2: Deploy**
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `.next` folder
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy

---

## 🔧 Pre-Deployment Checklist

### 1. Update Gumroad Link
Replace placeholder links with your actual Gumroad product URL:

**Files to update:**
- `src/components/Pricing.tsx` (line 82)
- `src/components/CTA.tsx` (line 28)

Replace:
```tsx
href="https://gumroad.com/l/zentriq"
```

With:
```tsx
href="https://YOUR_ACTUAL_GUMROAD_LINK.com"
```

### 2. Update Contact Email
**File:** `src/components/FAQ.tsx` (line 118)

Replace:
```tsx
href="mailto:support@zentriq.com"
```

With your actual support email.

### 3. Add Analytics (Optional)

**Google Analytics:**

1. Get GA4 Measurement ID
2. Add to `src/app/layout.tsx`:

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-dark text-white antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

### 4. Test Locally
```bash
npm run build
npm start
```

Check:
- All links work
- Images load
- Animations smooth
- Mobile responsive
- Forms submit

---

## 🎯 Performance Optimization

### Image Optimization
```bash
# Install sharp for Next.js image optimization
npm install sharp
```

### Bundle Analysis
```bash
# Add to package.json
"analyze": "ANALYZE=true next build"

# Run
npm run analyze
```

### Lighthouse Check
1. Open site in Chrome
2. Right-click → Inspect
3. Lighthouse tab
4. Generate report
5. Target: Performance > 90

---

## 🔒 Security

### Environment Variables
Create `.env.local` for sensitive data:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
GUMROAD_WEBHOOK_SECRET=your_secret_here
```

**Never commit `.env.local` to Git!**

### Headers (Vercel)
Create `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 📊 Post-Launch

### Monitor Performance
- **Vercel Analytics**: Automatically enabled
- **Google Analytics**: Track conversions
- **Hotjar/Clarity**: Heatmaps & recordings

### A/B Testing Ideas
1. CTA button text: "Get Started - $299" vs "Buy Now - $299"
2. Hero headline variations
3. Testimonial order
4. Pricing page layout

### SEO
1. Submit sitemap to Google Search Console
2. Add to Bing Webmaster Tools
3. Create backlinks (Reddit, forums)
4. Write blog posts (link to landing page)

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Vanta.js Not Working
Check:
- `three` and `vanta` installed
- `public/` folder exists
- No CSP blocking scripts

### Images Not Loading
- Check `public/logo.png` exists
- Use Next.js `<Image>` component
- Verify paths (`/logo.png` not `./logo.png`)

---

## 📞 Support

Website issues: Create issue on GitHub
Deployment help: support@zentriq.com

---

**🎉 You're ready to launch! Good luck with sales!**
