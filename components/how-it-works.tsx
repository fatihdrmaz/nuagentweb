"use client";

import { Card } from "@/components/ui/card";
import { Plug, Users, Brain, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Slack'e Bağlan",
    description:
      "Nu-Agent'i workspace'inize ekleyin ve izinleri yapılandırın. Dakikalar içinde hazır.",
    color: "from-purple-500 to-violet-500",
  },
  {
    number: "02",
    icon: Users,
    title: "Persona Seç",
    description:
      "Tech, Finance, Operations veya HR uzmanı arasından ihtiyacınıza uygun AI persona'yı seçin.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    number: "03",
    icon: Brain,
    title: "Öğrenme Pipeline'ını Başlat",
    description:
      "AI, Slack konuşmalarınızdan, dokümanlarınızdan ve süreçlerinizden öğrenmeye başlar.",
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Operasyonda Kullan",
    description:
      "AI çalışanınız hazır. Sorular sorun, görevler verin, süreçleri otomatikleştirin.",
    color: "from-pink-500 to-fuchsia-500",
  },
];

export function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, index]);
              }, index * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="product" className="py-20 lg:py-32 bg-gradient-to-b from-white to-purple-50/20">
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
          {steps.map((step, index) => {
            const isVisible = visibleSteps.includes(index);
            return (
              <Card
                key={index}
                className={`relative p-6 bento-card group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Step Number */}
                <div className={`absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg purple-glow group-hover:scale-110 transition-all duration-300 ${
                  isVisible ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'
                }`}>
                  <span className="text-white font-bold text-base">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="mb-4 mt-4">
                  <step.icon className="w-12 h-12 text-purple-400 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className={`hidden lg:block absolute top-1/2 -right-4 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-700 ${
                    isVisible ? 'w-8 opacity-30' : 'w-0 opacity-0'
                  }`} />
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
