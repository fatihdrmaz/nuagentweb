import { Badge } from "@/components/ui/badge";

const pipelineSteps = [
  {
    label: "Event Capture",
    title: "Slack Event Yakalama",
    description: "Mesajlar, reaksiyonlar ve etkileşimler gerçek zamanlı alınır",
  },
  {
    label: "Deduplication",
    title: "Tekrar Filtreleme",
    description: "Aynı event'lerin çoklanmasını engeller, veri temizliği yapar",
  },
  {
    label: "Bot Filtering",
    title: "Bot Ayıklama",
    description: "Diğer botlardan gelen mesajları filtreler, insan odaklı kalır",
  },
  {
    label: "Actor/Tenant Mapping",
    title: "Kimlik Eşleme",
    description: "Kullanıcı ve tenant bilgisini doğru şekilde eşleştirir",
  },
  {
    label: "Persona Selection",
    title: "Persona Seçimi",
    description: "İçerik ve context'e göre en uygun AI persona'yı aktive eder",
  },
  {
    label: "Intent Classification",
    title: "Niyet Analizi",
    description: "Mesajın amacını ve gereken aksiyonu belirler",
  },
  {
    label: "Memory Update",
    title: "Hafıza Güncelleme",
    description: "Personal, Organizational ve Social hafıza katmanlarını günceller",
  },
  {
    label: "Secure Response",
    title: "Güvenli Yanıt",
    description: "Tenant izolasyonu ve izinler doğrultusunda yanıt üretir",
  },
];

export function SlackPipeline() {
  return (
    <section id="architecture" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Teknik Mimari
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Slack Event Pipeline
          </h2>
          <p className="text-lg text-muted-foreground">
            Her Slack etkileşimi 8 aşamalı güvenli ve akıllı bir işlem hattından geçer
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4C5EFF] via-[#10B981] to-[#4C5EFF]" />

            {/* Steps */}
            <div className="space-y-12">
              {pipelineSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -ml-4 bg-gradient-to-br from-[#4C5EFF] to-[#10B981] rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-muted/50 rounded-lg p-6 hover:bg-muted transition-colors duration-300">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {step.label}
                      </Badge>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
            <svg
              className="w-4 h-4 text-[#10B981]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              <strong>Tenant izolasyonu</strong> ve <strong>private channel gizliliği</strong>{" "}
              her aşamada korunur
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

