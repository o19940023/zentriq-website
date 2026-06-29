# ⚡ QUICK START GUIDE

## 🚀 Get Website Running in 5 Minutes

### Step 1: Open Terminal (2 minutes)
```bash
# Navigate to website folder
cd c:\Users\ramiz\Desktop\botto\website

# Install dependencies
npm install
```

**Wait for installation to complete** (this downloads ~500MB of packages)

---

### Step 2: Run Development Server (10 seconds)
```bash
npm run dev
```

You should see:
```
- Local:        http://localhost:3000
- Ready in 2.5s
```

---

### Step 3: Open in Browser (10 seconds)
Open Google Chrome and go to:
```
http://localhost:3000
```

**You should see:**
- ✅ Animated 3D background (purple/cyan particles)
- ✅ "Trade Smart. Win Consistently." headline
- ✅ Logo with glow effect
- ✅ Smooth scroll animations
- ✅ All sections load properly

---

## 🎯 What to Check

### Desktop View
- [ ] Hero section loads with 3D background
- [ ] Scroll down - all sections appear smoothly
- [ ] Hover over feature cards - they lift up
- [ ] Click "Get Started" buttons - scroll to pricing
- [ ] FAQ accordion opens/closes
- [ ] Testimonial carousel works (arrows + dots)

### Mobile View
1. Right-click on page
2. Click "Inspect" (or press F12)
3. Click device icon (top-left, looks like phone/tablet)
4. Select "iPhone 12 Pro"
5. Check:
   - [ ] All text readable
   - [ ] Buttons tap-able
   - [ ] No horizontal scroll
   - [ ] Images load

---

## 🔧 Common Issues & Fixes

### Issue: "npm: command not found"
**Fix:** Install Node.js first
```bash
# Download from: https://nodejs.org
# Install LTS version
# Restart terminal
```

### Issue: Port 3000 already in use
**Fix:** Use different port
```bash
npm run dev -- -p 3001
```
Then open: http://localhost:3001

### Issue: 3D background not showing
**Fix:** Clear cache and reload
```
1. Press Ctrl+Shift+R (hard refresh)
2. Check browser console (F12) for errors
3. Make sure 'three' and 'vanta' installed:
   npm install three vanta
```

### Issue: Errors during build
**Fix:** Clear cache and reinstall
```bash
rm -rf node_modules .next
npm install
npm run dev
```

### Issue: Logo not showing
**Fix:** Check logo exists
```bash
# Should see logo.png
dir public\
```

If missing:
```bash
Copy-Item "..\3LOGO.png" "public\logo.png"
```

---

## ✅ Next Steps

### Before Deploying:

1. **Update Gumroad Links** (REQUIRED)
   - Create Gumroad product
   - Copy product URL
   - Replace in:
     - `src/components/Pricing.tsx`
     - `src/components/CTA.tsx`

2. **Update Contact Email** (Optional)
   - `src/components/FAQ.tsx`
   - Replace `support@zentriq.com`

3. **Test Everything**
   ```bash
   npm run build
   npm start
   ```

4. **Deploy**
   - Follow `DEPLOYMENT.md` guide
   - Vercel recommended (free + easy)

---

## 📚 Documentation Files

- **README.md** - Project overview
- **DEPLOYMENT.md** - How to deploy
- **LAUNCH_CHECKLIST.md** - Pre-launch checklist
- **WEBSITE_BUILD_COMPLETE.md** - Build summary

---

## 🆘 Still Having Issues?

1. Check Node.js version:
   ```bash
   node --version  # Should be v18+ or v20+
   npm --version   # Should be 9+ or 10+
   ```

2. Update Node.js if needed:
   - Download from https://nodejs.org
   - Install LTS version
   - Restart terminal

3. Reinstall everything:
   ```bash
   rm -rf node_modules package-lock.json .next
   npm install
   npm run dev
   ```

4. Check browser console (F12) for errors

---

## 🎉 Success!

If you see the website running with animations, you're ready to customize and deploy!

**Next:** Follow `LAUNCH_CHECKLIST.md` to prepare for launch.

---

**Questions?** Check other documentation files or create an issue on GitHub.
