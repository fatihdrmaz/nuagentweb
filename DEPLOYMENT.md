# Nu-Agent — Deployment Rehberi

Bu dokümanda Nu-Agent web sitesini production'a almak için gerekli adımlar açıklanmıştır.

---

## 🚀 Hızlı Başlangıç

### Vercel (Önerilen)

1. **GitHub'a Push**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Vercel'e Bağlan**
   - https://vercel.com adresine git
   - "Import Project" tıkla
   - GitHub repo'sunu seç
   - Framework preset: Next.js (otomatik algılanır)
   - Deploy!

3. **Environment Variables**
   - Vercel dashboard'da Settings → Environment Variables
   - `.env.example` dosyasındaki değişkenleri ekle

4. **Domain Ayarları**
   - Settings → Domains
   - Custom domain ekle (örn: nuagent.com)
   - DNS ayarlarını güncelle

---

## 🐳 Docker Deployment

### Dockerfile Oluştur

```dockerfile
FROM node:20-alpine AS base

# Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
```

### Docker Compose

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://nuagent.com
    restart: unless-stopped
```

### Build & Run

```bash
docker build -t nuagent-website .
docker run -p 3000:3000 nuagent-website
```

---

## ☁️ AWS Amplify

1. **AWS Console'a Git**
   - AWS Amplify → Host web app seç
   - GitHub'dan repo bağla

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Environment Variables**
   - App settings → Environment variables
   - Gerekli değişkenleri ekle

---

## 🔷 Netlify

1. **Netlify'a Bağlan**
   - https://netlify.com
   - "Import from Git" seç
   - Repo'yu bağla

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **netlify.toml Oluştur**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

---

## 🌍 Cloudflare Pages

1. **Cloudflare Dashboard**
   - Pages → Create a project
   - GitHub'dan bağlan

2. **Build Configuration**
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output: `.next`

---

## 📊 Post-Deployment Checklist

### SEO & Analytics
- [ ] Google Search Console ekle
- [ ] Bing Webmaster Tools ekle
- [ ] Google Analytics / GTM entegre et
- [ ] Sitemap gönder
- [ ] robots.txt kontrol et

### Performans
- [ ] Lighthouse audit yap (90+ hedefi)
- [ ] GTmetrix/PageSpeed Insights test et
- [ ] CDN ayarla (Cloudflare vb.)
- [ ] Image optimization doğrula

### Güvenlik
- [ ] HTTPS/SSL aktif
- [ ] Security headers ekle (CSP, HSTS, X-Frame-Options)
- [ ] Rate limiting ayarla
- [ ] CAPTCHA ekle (form spam koruması)

### Monitoring
- [ ] Uptime monitoring (UptimeRobot, Pingdom)
- [ ] Error tracking (Sentry)
- [ ] Log aggregation (LogRocket, Datadog)

### Legal
- [ ] GDPR compliance kontrol et
- [ ] Cookie consent banner ekle
- [ ] Gizlilik politikası linki doğrula
- [ ] Kullanım şartları linki doğrula

---

## 🔒 Environment Variables (Production)

```bash
# Site
NEXT_PUBLIC_SITE_URL=https://nuagent.com
NEXT_PUBLIC_SITE_NAME=Nu-Agent

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Forms
FORM_SUBMISSION_ENDPOINT=https://api.sendgrid.com/v3/mail/send
SENDGRID_API_KEY=SG.xxxxx

# Feature Flags
NEXT_PUBLIC_ENABLE_COOKIE_CONSENT=true
NEXT_PUBLIC_ENABLE_ANALYTICS=true

# Contact
NEXT_PUBLIC_SUPPORT_EMAIL=hello@nuagent.com
NEXT_PUBLIC_SALES_EMAIL=sales@nuagent.com
```

---

## 🎯 Custom Domain Setup

### DNS Records (Vercel/Netlify)

#### A Records
```
Type: A
Name: @
Value: [Platform IP]
```

#### CNAME Records
```
Type: CNAME
Name: www
Value: [Platform domain]
```

### SSL/TLS
- Let's Encrypt (otomatik, ücretsiz)
- Cloudflare Universal SSL
- AWS Certificate Manager

---

## 📈 Performance Optimization

### Next.js Config

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Docker için
  compress: true,
  poweredByHeader: false,
  
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
      ],
    },
  ],
};

export default nextConfig;
```

---

## 🐛 Troubleshooting

### Build Hatası
```bash
# Cache temizle
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Yüklenmedi
- `.env.local` dosyası production'da kullanılmaz
- Platform dashboard'dan env vars ekle
- `NEXT_PUBLIC_` prefix'i gerekli (client-side için)

### Image Optimization Hatası
- next.config.ts'de `images.domains` ayarla
- External image domain'leri whitelist'e ekle

---

## 📞 Destek

Deployment ile ilgili sorunlar için:
- **Email:** devops@nuagent.com
- **Docs:** https://docs.nuagent.com/deployment
- **Slack:** #deployment-support

---

Happy Deploying! 🚀

© 2025 Nu-Agent. Tüm hakları saklıdır.

