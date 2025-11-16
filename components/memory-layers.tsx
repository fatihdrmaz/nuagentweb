import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User, Building2, Users2 } from "lucide-react";

const memoryLayers = [
  {
    icon: User,
    title: "Personal Memory",
    subtitle: "Bireysel İlişkiler",
    description:
      "Her kullanıcı ile olan konuşma geçmişini, tercihlerini ve çalışma tarzını hatırlar. Kişiselleştirilmiş yanıtlar sunar.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: Building2,
    title: "Organizational Memory",
    subtitle: "Kurumsal Bilgi",
    description:
      "KnowledgeNode ve RAG sistemi ile dokümanları, prosedürleri ve şirket bilgisini sürekli günceller ve erişilebilir tutar.",
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    icon: Users2,
    title: "Social Memory",
    subtitle: "People-Facts",
    description:
      "Kim neyin sahibi, hangi ekip ne ile ilgileniyor, kimin uzmanlığı ne gibi sosyal bağlantıları ve ilişkileri öğrenir.",
    gradient: "from-violet-500 to-purple-600",
  },
];

export function MemoryLayers() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            3 Katmanlı Hafıza Sistemi
          </h2>
          <p className="text-lg text-muted-foreground">
            Personal • Organizational • Social
          </p>
        </div>

        {/* Memory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {memoryLayers.map((layer, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bento-card group"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${layer.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <CardHeader className="relative">
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className={`inline-flex w-20 h-20 items-center justify-center rounded-2xl bg-gradient-to-br ${layer.gradient} shadow-lg purple-glow`}
                  >
                    <layer.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <CardTitle className="text-2xl mb-1">{layer.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-purple-400 mb-3">
                  {layer.subtitle}
                </CardDescription>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {layer.description}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-16 p-6 bg-white rounded-xl border border-border">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Zamanla Gelişen Zeka
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nu-Agent, her etkileşimde öğrenerek junior seviyeden senior seviyeye
                evrilen bir AI çalışandır. 3 katmanlı hafıza sistemi sayesinde hem
                bireysel, hem kurumsal, hem de sosyal bağlamda sürekli gelişir ve daha
                değerli hale gelir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

