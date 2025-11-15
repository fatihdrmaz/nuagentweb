import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: "🔌",
    title: "Slack'e Bağlan",
    description:
      "Nu-Agent'i workspace'inize ekleyin ve izinleri yapılandırın. Dakikalar içinde hazır.",
  },
  {
    number: "02",
    icon: "🎭",
    title: "Persona Seç",
    description:
      "Tech, Finance, Operations veya HR uzmanı arasından ihtiyacınıza uygun AI persona'yı seçin.",
  },
  {
    number: "03",
    icon: "🧠",
    title: "Öğrenme Pipeline'ını Başlat",
    description:
      "AI, Slack konuşmalarınızdan, dokümanlarınızdan ve süreçlerinizden öğrenmeye başlar.",
  },
  {
    number: "04",
    icon: "🚀",
    title: "Operasyonda Kullan",
    description:
      "AI çalışanınız hazır. Sorular sorun, görevler verin, süreçleri otomatikleştirin.",
  },
];

export function HowItWorks() {
  return (
    <section id="product" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-lg text-muted-foreground">
            4 basit adımda AI çalışanınız hazır ve operasyonda
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative p-6 bento-card"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-[#4C5EFF] to-[#10B981] rounded-full flex items-center justify-center shadow-lg glow group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-base">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4 mt-4">{step.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#4C5EFF] to-[#10B981] opacity-30" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

