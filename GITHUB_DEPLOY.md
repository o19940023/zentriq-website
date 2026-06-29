# 🚀 GitHub & Vercel Deploy Rehberi

## ✅ Git Hazır! Şimdi GitHub'a Yükle

### 1️⃣ GitHub'da Repository Oluştur

1. https://github.com/new adresine git
2. Repository bilgileri:
   - **Repository name**: `zentriq-website`
   - **Description**: `Zentriq AI Trading Bot - Official Website`
   - **Public** veya **Private** (istediğin)
   - ❌ README, .gitignore ekleme (zaten var)
3. **Create repository** butonuna bas

---

### 2️⃣ Terminalden GitHub'a Pushla

Aşağıdaki komutları **SIRASIYLA** çalıştır:

**ÖNEMLİ:** `YOUR_USERNAME` kısmını kendi GitHub kullanıcı adınla değiştir!

```bash
cd c:\Users\ramiz\Desktop\botto\website

# GitHub remote ekle (YOUR_USERNAME değiştir!)
git remote add origin https://github.com/YOUR_USERNAME/zentriq-website.git

# Kodu GitHub'a yükle
git push -u origin main
```

**Not:** İlk kez GitHub kullanıyorsan login isteyecek:
- Username: GitHub kullanıcı adın
- Password: GitHub **Personal Access Token** (şifre değil!)

---

### 3️⃣ GitHub Personal Access Token Oluştur (Gerekirse)

Eğer şifre soruyorsa:

1. GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token (classic)
4. Scopes: `repo` seç
5. Generate token
6. Token'ı kopyala ve şifre yerine kullan

---

### 4️⃣ Vercel'e Deploy Et

#### Adım 1: Vercel Hesabı Aç
1. https://vercel.com adresine git
2. **Sign up with GitHub** ile giriş yap
3. GitHub izinleri ver

#### Adım 2: Projeyi Import Et
1. Vercel Dashboard → **Add New... → Project**
2. **Import Git Repository** seç
3. `zentriq-website` repository'sini bul ve **Import**
4. Build & Development Settings:
   - **Framework Preset**: Next.js (otomatik seçilir)
   - **Root Directory**: `./` (değiştirme)
   - **Build Command**: `npm run build` (otomatik)
   - **Output Directory**: `.next` (otomatik)

#### Adım 3: Environment Variables (Opsiyonel)
Şimdi atlayabilirsin, sonra eklersin:
- `NEXT_PUBLIC_GA_ID` → Google Analytics ID
- `NEXT_PUBLIC_FB_PIXEL_ID` → Facebook Pixel ID

#### Adım 4: Deploy!
1. **Deploy** butonuna bas
2. 2-3 dakika bekle
3. **🎉 Site canlı!**

Vercel sana şöyle bir link verecek:
```
https://zentriq-website-xxxx.vercel.app
```

---

### 5️⃣ Kendi Domain'ini Bağla (Opsiyonel)

#### Vercel'de Custom Domain Ekleme:
1. Vercel Project → Settings → Domains
2. **Add Domain** → `zentriq.tk` (veya aldığın domain)
3. DNS ayarlarını gösterecek

#### Freenom/Cloudflare DNS Ayarları:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. 10-30 dakika bekle → SSL otomatik aktif olur

---

## 🔄 Güncellemeler Nasıl Yayınlanır?

Kod değişikliği yaptığında:

```bash
cd c:\Users\ramiz\Desktop\botto\website

git add .
git commit -m "Update: açıklama"
git push origin main
```

Vercel otomatik deploy eder (1-2 dakika)!

---

## 📊 Vercel Avantajları

✅ Ücretsiz (sınırsız)
✅ Otomatik HTTPS/SSL
✅ Global CDN (hızlı)
✅ Otomatik deploy
✅ Analytics dahil
✅ 99.99% uptime
✅ Sitemap, robots.txt çalışır
✅ SEO optimize

---

## 🆘 Sorun mu Var?

### Git push hatası verirse:
```bash
# Remote kontrolü
git remote -v

# Remote'u düzelt (YOUR_USERNAME değiştir)
git remote set-url origin https://github.com/YOUR_USERNAME/zentriq-website.git

# Tekrar dene
git push -u origin main
```

### Vercel build hatası:
1. Vercel → Deployments → Log'lara bak
2. Hata mesajını kontrol et
3. Genelde environment variable eksikliğinden olur

---

## ✅ Checklist

- [ ] GitHub'da repository oluşturuldu
- [ ] Kod GitHub'a pushlandı
- [ ] Vercel hesabı açıldı
- [ ] Proje Vercel'e import edildi
- [ ] Deploy başarılı
- [ ] Site açılıyor
- [ ] Custom domain eklendi (opsiyonel)

---

**Başarılar! 🚀**

Herhangi bir sorun olursa bana sor!
