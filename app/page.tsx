import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { MemoryLayers } from "@/components/memory-layers";
import { SlackPipeline } from "@/components/slack-pipeline";
import { RagArchitecture } from "@/components/rag-architecture";
import { Personas } from "@/components/personas";
import { Security } from "@/components/security";
import { UseCases } from "@/components/use-cases";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { DemoSection } from "@/components/demo-section";
import { Footer } from "@/components/footer";
import { StickyCTA } from "@/components/sticky-cta";

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://nuagent.com/#organization",
                name: "Nu-Agent",
                url: "https://nuagent.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://nuagent.com/logo.png",
                },
                description:
                  "Her şirkete öğrenen, uzman AI çalışanlar yerleştiren platform",
                sameAs: [
                  "https://twitter.com/nuagent",
                  "https://linkedin.com/company/nuagent",
                  "https://github.com/nuagent",
                ],
              },
              {
                "@type": "SoftwareApplication",
                "@id": "https://nuagent.com/#software",
                name: "Nu-Agent AI Employee Platform",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web, Slack, Microsoft Teams",
                offers: {
                  "@type": "AggregateOffer",
                  priceCurrency: "USD",
                  lowPrice: "399",
                  highPrice: "1499",
                  offerCount: "3",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "127",
                },
                description:
                  "Slack/Teams'e entegre, 3 katmanlı hafızalı AI çalışanlar: personal, organizational, social. RAG destekli, güvenli, tekil kimlikli.",
              },
              {
                "@type": "FAQPage",
                "@id": "https://nuagent.com/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Nu-Agent verilerimizi nasıl işler ve depolar?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Nu-Agent, tüm verileri tenant bazlı izole ortamlarda saklar. Slack/Teams'ten gelen mesajlar şifreli kanallar üzerinden alınır, işlenir ve yalnızca sizin tenant'ınıza ait veritabanında tutulur. Verileriniz asla diğer müşterilerle paylaşılmaz veya AI model eğitiminde kullanılmaz. GDPR, SOC 2 ve ISO 27001 standartlarına tam uyumluyuz.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "AI ne kadar sürede öğrenir ve faydalı olmaya başlar?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "İlk kurulum ve persona seçimi sonrasında AI hemen yanıt vermeye başlar. Temel dokümantasyon ve FAQ'lerden öğrenme 1-2 gün içinde tamamlanır. Ancak gerçek değer, 2-4 haftalık kullanım sonrasında ortaya çıkar.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Private Slack kanallarındaki mesajlar da öğreniliyor mu?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Private kanal ve DM mesajları yalnızca açıkça izin verilirse işlenir. Varsayılan olarak Nu-Agent, public kanallar ve belirli izinli private kanallardan öğrenir. Admin panelinden hangi kanalların öğrenilip öğrenilmeyeceğini tam kontrolle yönetebilirsiniz.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Entegrasyon ne kadar zaman alır?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Slack entegrasyonu 5-10 dakikada tamamlanır: workspace'e Nu-Agent uygulamasını ekleyin, izinleri onaylayın, persona'yı seçin ve hazır. Teams entegrasyonu benzer şekilde hızlı ve kolaydır.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Güvenlik sertifikalarınız var mı?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Evet. SOC 2 Type II, ISO 27001 ve GDPR compliant altyapımız mevcuttur. Düzenli penetrasyon testleri ve bağımsız güvenlik denetimleri yapıyoruz. Enterprise planda HIPAA uyumlu deployment ve özel data residency seçenekleri de sunabiliyoruz.",
                    },
                  },
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://nuagent.com/#website",
                url: "https://nuagent.com",
                name: "Nu-Agent — AI Employee Platform",
                publisher: {
                  "@id": "https://nuagent.com/#organization",
                },
              },
            ],
          }),
        }}
      />

      {/* Main Content */}
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <HowItWorks />
        <MemoryLayers />
        <SlackPipeline />
        <RagArchitecture />
        <Personas />
        <Security />
        <UseCases />
        <Pricing />
        <FAQ />
        <DemoSection />
        <Footer />
        <StickyCTA />
      </main>
    </>
  );
}
