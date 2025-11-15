# Nu-Agent — Görsel Üretim Talimatları

Bu dokümanda, Nu-Agent web sitesi için AI görsel üreticilere verilecek tarif metinleri bulunmaktadır.

## 🎨 Genel Tasarım Dili

**Renk Paleti:**
- Ana: #4C5EFF (Indigo)
- Vurgu: #10B981 (Emerald)
- Koyu: #0B1020
- Açık arka plan: #F7F8FC
- Nötr metin: #5B6270

**Stil:**
- Modern, minimal, kurumsal
- Çizgi tabanlı illüstrasyonlar
- Gradient kullanımı (indigo → emerald)
- Geometrik şekiller
- İsometric perspektif (opsiyonel)
- Depth ve layering efektleri

---

## 🖼️ Hero İllüstrasyonu

**Boyut:** 1600x900px (16:9)

**Tarif:**
> Kurumsal ofis sahnesinde Slack baloncukları ile konuşan tekil kimlikli AI avatar; arka planda 3 katmanlı hafızayı temsil eden katmanlı grafikler (Personal/Organizational/Social layers); modern çizgi/gradient tarzında, indigo (#4C5EFF) ve emerald (#10B981) renk tonları. İsometric perspektif, minimal detaylar, profesyonel görünüm.

**Anahtar Elementler:**
- AI avatar (humanoid veya abstract)
- Slack/Teams mesaj baloncukları
- 3 katmanlı hafıza gösterimi (şeffaf katmanlar)
- Ofis ortamı (abstract)
- Bağlantı çizgileri ve oklar
- Gradient background

---

## 🔌 "Nasıl Çalışır" İkonları

4 adet ikon, her biri 128x128px, SVG formatında.

### 1. Plug İkonu (Entegrasyon)
**Tarif:**
> Slack/Teams logosu ile bağlantı sembolü. Modern çizgi tarzı, indigo renk (#4C5EFF). Elektrik fişi veya bağlantı kablosu motifi.

### 2. Mask İkonu (Persona)
**Tarif:**
> Tiyatro maskı veya persona değiştirme sembolü. 3-4 farklı yüz/maske overlay. Emerald renk (#10B981). Modern, geometrik.

### 3. Brain-Layers İkonu (Hafıza)
**Tarif:**
> 3 katmanlı beyin veya neural network gösterimi. Katmanlar arası bağlantılar. Gradient (indigo → emerald). Minimal, bilimsel.

### 4. Rocket İkonu (Go-Live)
**Tarif:**
> Roket veya hızlı yükseliş sembolü. Emerald renk (#10B981). Dinamik, yukarı doğru hareket hissi.

---

## 🧠 RAG Diyagramı İllüstrasyonu

**Boyut:** 1200x600px

**Tarif:**
> Soldan sağa akış diyagramı: (1) Kullanıcı sorusu → (2) Hibrit arama (vector + keyword) → (3) Knowledge nodes (doküman chunk'ları) → (4) Graph ilişkileri → (5) Enriched context → (6) AI yanıtı. Her aşama ayrı bir kutu/modül olarak, aralarında oklar. Modern, teknik, şematik görünüm. İndigo ve emerald renk vurguları. Database ikonları, arama ikonları, AI brain ikonu.

**Anahtar Elementler:**
- Flow chart yapısı
- Database/storage simgeleri (Postgres)
- Vector search gösterimi (embedding vectors)
- Knowledge nodes (belge ikonları)
- Graph/network bağlantıları
- AI model ikonu (son aşama)

---

## 👥 Persona İkonları

4 adet persona için illüstrasyon/avatar, 256x256px.

### 1. Tech Support (💻)
**Tarif:**
> Teknoloji uzmanı avatar. Laptop, kod editörü, terminal ekranı ile çalışan AI karakteri. İndigo renk teması. Gözlük, profesyonel görünüm.

### 2. Finance Assistant (💰)
**Tarif:**
> Finans analisti avatar. Grafik, chart, hesap makinesi ile çalışan AI karakteri. Emerald renk teması. Kravat, resmi görünüm.

### 3. Operations Manager (⚙️)
**Tarif:**
> Operasyon yöneticisi avatar. Süreç diyagramları, checklist ile çalışan AI karakteri. Mor-pembe renk teması. Organize, sistematik görünüm.

### 4. HR Specialist (👥)
**Tarif:**
> İnsan kaynakları uzmanı avatar. İnsanlar, takım, onboarding dokümanları ile çalışan AI karakteri. Turuncu-kırmızı renk teması. Güler yüzlü, friendly görünüm.

---

## 🔒 Güvenlik İllüstrasyonu (Opsiyonel)

**Boyut:** 800x600px

**Tarif:**
> Tenant izolasyonu gösterimi: Ayrı ayrı kilitlemiş vault'lar veya güvenli bölmeler. Her bölme farklı bir şirket/tenant'ı temsil eder. Kalkan, kilit, şifreleme sembolleri. Koyu mavi-yeşil renk tonları. Güvenilir, kurumsal, secure görünüm.

---

## 🎯 Icon Set Gereksinimleri

Tüm ikonlar için:
- **Format:** SVG (web uyumlu)
- **Boyut:** 24x24px, 32x32px, 48x48px varyantları
- **Stil:** Outline (çizgi tabanlı), 2px stroke weight
- **Renk:** Mono-color (kolayca değiştirilebilir)

**Gerekli İkonlar:**
- Check mark (✓)
- Arrow right (→)
- Lightning bolt (⚡)
- Shield (🛡️)
- Lock (🔒)
- Database (🗄️)
- Settings (⚙️)
- Users (👥)
- Search (🔍)
- Document (📄)

---

## 📱 OpenGraph Görseli

**Boyut:** 1200x630px (OG image standart)

**Tarif:**
> Nu-Agent logosu (sol üst), ana başlık "Nu-Agent — AI Employee Platform", alt başlık "3 Katmanlı Hafızalı AI Çalışanlar". Arka planda hafif gradient (indigo → emerald), AI avatar silueti, Slack/Teams ikonları. Minimal, okunabilir, profesyonel. Text overlay için yeterli contrast.

---

## 🎬 Animasyon Önerileri (Web için)

1. **Hero Section:**
   - AI avatar hafif sallanma animasyonu
   - Mesaj baloncukları fade-in
   - Hafıza katmanları sıralı ortaya çıkma

2. **How It Works:**
   - Step numaraları scale-up
   - Bağlantı çizgileri progress animasyonu

3. **Memory Layers:**
   - Kartlar hover'da hafif lift efekti
   - Gradient background subtle shimmer

4. **RAG Flow:**
   - Ok animasyonları (soldan sağa akış)
   - Kutu highlight efektleri

5. **Pricing Cards:**
   - Hover'da scale ve shadow artışı
   - Price toggle smooth transition

---

## 📦 Delivery Format

**Teslim Formatları:**
- **Web:** SVG, PNG (2x retina)
- **Print:** AI, PDF (CMYK)
- **Raster:** PNG, JPG (sRGB, 300dpi)

**Klasör Yapısı:**
```
/assets
  /hero
    - hero-illustration.svg
    - hero-illustration@2x.png
  /icons
    - step-1-plug.svg
    - step-2-mask.svg
    - step-3-brain.svg
    - step-4-rocket.svg
  /personas
    - tech-avatar.svg
    - finance-avatar.svg
    - ops-avatar.svg
    - hr-avatar.svg
  /diagrams
    - rag-flow.svg
    - rag-flow@2x.png
  /og
    - og-image.png (1200x630)
```

---

## ✅ Kontrol Listesi

- [ ] Hero illüstrasyonu hazır
- [ ] 4 "Nasıl Çalışır" ikonu hazır
- [ ] RAG diyagramı hazır
- [ ] 4 Persona avatarı hazır
- [ ] Güvenlik illüstrasyonu hazır (opsiyonel)
- [ ] Icon set tamamlandı
- [ ] OpenGraph görseli hazır
- [ ] Tüm dosyalar optimize edildi
- [ ] SVG dosyaları web-safe
- [ ] Retina varyantları hazır

---

## 📞 İletişim

Görseller ile ilgili sorular için:
- **Email:** design@nuagent.com
- **Figma Board:** [Link eklenecek]
- **Brand Guidelines:** [Link eklenecek]

---

© 2025 Nu-Agent. Tüm hakları saklıdır.

