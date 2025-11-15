import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Nu-Agent verilerimizi nasıl işler ve depolar?",
    answer:
      "Nu-Agent, tüm verileri tenant bazlı izole ortamlarda saklar. Slack/Teams'ten gelen mesajlar şifreli kanallar üzerinden alınır, işlenir ve yalnızca sizin tenant'ınıza ait veritabanında tutulur. Verileriniz asla diğer müşterilerle paylaşılmaz veya AI model eğitiminde kullanılmaz. GDPR, SOC 2 ve ISO 27001 standartlarına tam uyumluyuz.",
  },
  {
    question: "AI ne kadar sürede 'öğrenir' ve faydalı olmaya başlar?",
    answer:
      "İlk kurulum ve persona seçimi sonrasında AI hemen yanıt vermeye başlar. Temel dokümantasyon ve FAQ'lerden öğrenme 1-2 gün içinde tamamlanır. Ancak gerçek değer, 2-4 haftalık kullanım sonrasında ortaya çıkar. Bu süreçte AI, konuşma geçmişini, kullanıcı tercihlerini ve organizasyonel bağlamı öğrenerek junior'dan mid-level, ardından senior seviyeye evriliyor.",
  },
  {
    question: "Private Slack kanallarındaki mesajlar da öğreniliyor mu?",
    answer:
      "Private kanal ve DM mesajları yalnızca açıkça izin verilirse işlenir. Varsayılan olarak Nu-Agent, public kanallar ve belirli izinli private kanallardan öğrenir. Admin panelinden hangi kanalların öğrenilip öğrenilmeyeceğini tam kontrolle yönetebilirsiniz. Kişisel, duygusal veya hassas veriler (sağlık, din, siyasi görüş vb.) asla depolanmaz.",
  },
  {
    question: "Persona'lar nasıl özelleştirilir?",
    answer:
      "Starter ve Pro planlarda önceden tanımlanmış persona'lar (Tech, Finance, Ops, HR) kullanılır. Enterprise planda ise sektörünüze, iş akışlarınıza ve terminolojinize özel persona'lar geliştirebilirsiniz. Örneğin Legal, Compliance, Sales veya Marketing uzmanı AI'lar oluşturabilir ve bu persona'ların davranışını, ton of voice'unu ve uzmanlık alanlarını ayarlayabilirsiniz.",
  },
  {
    question: "Entegrasyon ne kadar zaman alır?",
    answer:
      "Slack entegrasyonu 5-10 dakikada tamamlanır: workspace'e Nu-Agent uygulamasını ekleyin, izinleri onaylayın, persona'yı seçin ve hazır. Teams entegrasyonu benzer şekilde hızlı ve kolaydır. İlk dokümantasyon yüklemesi ve konfigürasyon için 1-2 saat ayırmanızı öneririz, ancak bu isteğe bağlıdır.",
  },
  {
    question: "ROI ne zaman görülür?",
    answer:
      "Müşterilerimizin ortalama ROI süresi 4-8 hafta arasındadır. İlk 2 haftada basit sorulara yanıt vererek ekip verimliliğini %20-30 artırır. 1-2 ay sonra süreçleri otomatikleştirmeye ve daha karmaşık görevleri üstlenmeye başlar. 6 ay sonunda çoğu müşteri, AI çalışanın bir junior personele eşdeğer veya daha fazla değer ürettiğini belirtiyor.",
  },
  {
    question: "Güvenlik sertifikalarınız var mı?",
    answer:
      "Evet. SOC 2 Type II, ISO 27001 ve GDPR compliant altyapımız mevcuttur. Düzenli penetrasyon testleri ve bağımsız güvenlik denetimleri yapıyoruz. Enterprise planda HIPAA uyumlu deployment ve özel data residency seçenekleri de sunabiliyoruz.",
  },
  {
    question: "API veya webhook entegrasyonları mevcut mu?",
    answer:
      "Pro ve Enterprise planlarda RESTful API ve webhook desteği bulunur. Kendi sistemlerinizden Nu-Agent'e sorgu gönderebilir, event'leri dinleyebilir ve custom entegrasyonlar geliştirebilirsiniz. Dokümantasyon ve örnek kodlar admin panelinde mevcuttur.",
  },
  {
    question: "Destek nasıl alırım?",
    answer:
      "Starter: Email destek (48 saat yanıt). Pro: Öncelikli email + Slack destek kanalı (12 saat yanıt). Enterprise: Dedicated account manager, Slack/Teams destek, özel SLA ve 1-4 saat kritik durum yanıt süresi.",
  },
  {
    question: "İptal ve veri silme politikanız nedir?",
    answer:
      "İstediğiniz zaman iptal edebilirsiniz, gizli ücret veya ceza yoktur. İptal sonrası tüm verileriniz 30 gün içinde sistemden tamamen silinir. Dilediğiniz takdirde veri export (JSON/CSV) yapabilirsiniz. Veri silme işlemi GDPR 'Right to be Forgotten' ilkelerine tam uyumludur.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-lg text-muted-foreground">
            Merak ettiğiniz her şeyin cevabı burada
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-white hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-muted/50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Başka sorunuz mu var?
            </h3>
            <p className="text-muted-foreground mb-6">
              Ekibimiz size yardımcı olmaktan mutluluk duyar. Bize ulaşın, en kısa
              sürede geri dönüş yapalım.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@nuagent.com"
                className="text-[#4C5EFF] hover:text-[#3d4ecc] font-medium text-sm"
              >
                hello@nuagent.com
              </a>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <a
                href="#demo"
                className="text-[#4C5EFF] hover:text-[#3d4ecc] font-medium text-sm"
              >
                Canlı Demo Talep Edin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

