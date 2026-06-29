# 🚀 Zentriq Landing Page

Professional sales landing page for Zentriq Trading Bot built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Glassmorphism, gradients, and smooth animations
- **3D Background**: Vanta.js NET effect for hero section
- **Fully Responsive**: Mobile-first design (works on all devices)
- **Performance Optimized**: Lighthouse score > 90
- **SEO Ready**: Meta tags, semantic HTML, sitemap, robots.txt
- **Accessibility**: WCAG 2.1 AA compliant
- **Conversion Tracking**: Facebook Pixel + Google Analytics integration
- **Gumroad Overlay**: Seamless checkout experience
- **Trust Elements**: Badges, testimonials, comparison table
- **Legal Pages**: Terms, Privacy, Refund, License agreements

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, Vanta.js
- **Analytics**: Google Analytics, Facebook Pixel
- **Payments**: Gumroad
- **Deployment**: Vercel (recommended)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Colors (tailwind.config.ts)
```ts
colors: {
  primary: '#9D5CFF',    // Purple from logo
  secondary: '#00D9FF',  // Cyan from logo
  dark: '#0A0E27',       // Background
  darker: '#070A1C',     // Darker sections
}
```

### Logo
Replace `public/logo.png` with your logo (3LOGO.png).

### Content
Edit components in `src/components/`:
- `Hero.tsx` - Hero section
- `Features.tsx` - Features grid
- `HowItWorks.tsx` - Step-by-step process
- `ComparisonTable.tsx` - Feature comparison
- `Testimonials.tsx` - Customer reviews
- `Pricing.tsx` - Pricing card
- `FAQ.tsx` - FAQ accordion
- `CTA.tsx` - Final call-to-action
- `Footer.tsx` - Footer with links
- `TrustBadges.tsx` - Trust indicators

### Gumroad Integration
Update checkout link in:
- `src/components/Pricing.tsx`
- `src/components/CTA.tsx`

Replace `https://ramizmehdix.gumroad.com/l/zentriq` with your actual Gumroad product URL.

### Analytics Setup

**Google Analytics:**
1. Get your GA4 Tracking ID from [Google Analytics](https://analytics.google.com)
2. Replace `G-XXXXXXXXXX` in `src/app/layout.tsx` with your ID
3. Or add to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Facebook Pixel:**
1. Get your Pixel ID from [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Replace `YOUR_PIXEL_ID` in `src/app/layout.tsx` with your ID

### Social Media Links
Update social media URLs in `src/components/Footer.tsx`:
- Twitter: `https://twitter.com/zentriq`
- Telegram: `https://t.me/zentriq`
- Discord: `https://discord.gg/zentriq`
- YouTube: `https://youtube.com/@zentriq`

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Add environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
5. Click "Deploy"
6. Add custom domain (optional)

### Netlify

1. Build: `npm run build`
2. Publish directory: `.next`
3. Deploy

## 📊 Performance

Target metrics:
- Lighthouse Performance: > 90
- First Load JS: < 200KB
- LCP: < 2.5s
- CLS: < 0.1
- SEO: 100

## 📄 SEO Features

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Favicon & app icons
- ✅ Mobile-friendly
- ✅ Fast page load

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `public/sitemap.xml` - Sitemap for SEO
- `public/robots.txt` - Crawler instructions

## 📝 Legal Pages

All legal pages are included and customizable:
- `/terms` - Terms of Service
- `/privacy` - Privacy Policy
- `/refund` - Refund Policy
- `/license` - License Agreement

## 🆘 Support

For issues or questions: support@zentriq.com

## 📄 License

© 2026 Zentriq. All rights reserved.
