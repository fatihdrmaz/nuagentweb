import { Card } from "@/components/ui/card";

const ragSteps = [
  {
    step: "1",
    title: "Prompt Girişi",
    description: "Kullanıcının sorusu veya komutu sistem tarafından alınır",
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: "2",
    title: "Hybrid Arama",
    description: "Postgres pgvector (semantic) + FTS (keyword) paralel arama",
    color: "from-indigo-600 to-purple-600",
  },
  {
    step: "3",
    title: "Knowledge Nodes",
    description: "İlgili doküman chunk'ları ve summary'leri alınır",
    color: "from-purple-600 to-[#4C5EFF]",
  },
  {
    step: "4",
    title: "Graph İlişkileri",
    description: "Dokümanlar arası bağlantılar ve referanslar eklenir (opsiyonel)",
    color: "from-[#4C5EFF] to-[#10B981]",
  },
  {
    step: "5",
    title: "Enriched Context",
    description: "Hafıza katmanları ile zenginleştirilmiş context oluşturulur",
    color: "from-[#10B981] to-emerald-600",
  },
  {
    step: "6",
    title: "Yanıt Üretimi",
    description: "LLM, context-aware ve güvenli yanıt üretir",
    color: "from-emerald-600 to-teal-600",
  },
];

export function RagArchitecture() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            RAG & KnowledgeNode Mimarisi
          </h2>
          <p className="text-lg text-muted-foreground">
            Hibrit arama ve grafik tabanlı ilişkilerle güçlendirilmiş bilgi sistemi
          </p>
        </div>

        {/* RAG Flow Diagram */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ragSteps.map((item, index) => (
              <Card
                key={index}
                className="relative overflow-hidden p-6 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Step Number */}
                <div className="relative">
                  <div
                    className={`inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white font-bold text-lg mb-4`}
                  >
                    {item.step}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Arrow */}
                {index < ragSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#4C5EFF]/30">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#4C5EFF]/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#4C5EFF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Postgres + pgvector
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Semantic vector arama ve full-text search bir arada. Yüksek
                  performanslı, ölçeklenebilir ve güvenilir veri tabanı altyapısı.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#10B981]/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#10B981]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  KnowledgeNode Summary
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Her doküman chunk&apos;ı için otomatik summary ve metadata oluşturulur.
                  Hızlı erişim ve ilişkisel sorgular için optimize edilmiştir.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

