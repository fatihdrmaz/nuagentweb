"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const useCases = [
  {
    id: "support",
    label: "Tech Support",
    icon: "💻",
    title: "Teknik Destek Otomasyonu",
    description:
      "AI, gelen teknik soruları otomatik olarak sınıflandırır, priority belirler ve mevcut dokümantasyondan yanıtlar sunar.",
    benefits: [
      "Ticket triage süresini %70 azaltır",
      "FAQ ve dokümantasyondan otomatik yanıt",
      "Kritik bug'ları hızla escalate eder",
      "Geliştirici zamanını optimize eder",
    ],
    example:
      "Kullanıcı: 'API authentication çalışmıyor' → AI: Bug ticket açar, ilgili dokümanları paylaşır, authentication troubleshooting guide sunar.",
  },
  {
    id: "finance",
    label: "Finance",
    icon: "💰",
    title: "Finans Rapor Otomasyonu",
    description:
      "Gider takibi, bütçe kontrolü, fatura işlemleri ve finansal raporlama süreçlerini hızlandırır ve otomatikleştirir.",
    benefits: [
      "Aylık rapor hazırlama süresini %60 kısaltır",
      "Gider anomalilerini otomatik tespit",
      "Bütçe aşımlarında proaktif uyarı",
      "Fatura onay süreçlerini hızlandırır",
    ],
    example:
      "CFO: 'Bu ay Q2 marketing giderlerini özetle' → AI: İlgili gider kategorilerini toplar, geçen aya göre karşılaştırma yapar, özet rapor sunar.",
  },
  {
    id: "hr",
    label: "HR",
    icon: "👥",
    title: "İK Onboarding & Q&A",
    description:
      "Yeni çalışan onboarding süreçlerini kolaylaştırır, şirket politikaları hakkında anında yanıt verir, izin ve bordro sorularını çözer.",
    benefits: [
      "Onboarding süresini %50 kısaltır",
      "Şirket politikalarına 7/24 erişim",
      "İzin talepleri ve sorgular için self-service",
      "İK ekibinin tekrar eden soruları %80 azaltır",
    ],
    example:
      "Yeni çalışan: 'Remote çalışma politikası nedir?' → AI: İlgili politika dokümanını paylaşır, özet bilgi verir, izin talep sürecini açıklar.",
  },
  {
    id: "operations",
    label: "Operations",
    icon: "⚙️",
    title: "Operasyon SOP Asistanlığı",
    description:
      "Standard Operating Procedures (SOP) dokümanlarına hızlı erişim, süreç rehberliği ve operasyonel soruların yanıtlanması.",
    benefits: [
      "SOP erişim süresini %80 azaltır",
      "Süreç adımlarında interaktif rehberlik",
      "Operasyonel hataları önler",
      "Yeni ekip üyelerinin adaptasyonunu hızlandırır",
    ],
    example:
      "Ops Manager: 'Deployment rollback prosedürü nedir?' → AI: İlgili SOP'yi bulur, adım adım rollback planını paylaşır, rollback checklist sunar.",
  },
];

export function UseCases() {
  const [activeTab, setActiveTab] = useState("support");

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Kullanım Senaryoları
          </h2>
          <p className="text-lg text-muted-foreground">
            Farklı departmanlar için optimize edilmiş AI çözümleri
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {useCases.map((useCase) => (
                <TabsTrigger key={useCase.id} value={useCase.id} className="text-sm">
                  <span className="mr-2">{useCase.icon}</span>
                  {useCase.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - Info */}
                  <div className="space-y-6">
                    <div>
                      <div className="text-5xl mb-4">{useCase.icon}</div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {useCase.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                        Faydalar
                      </h4>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <svg
                              className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Example */}
                  <Card className="p-6 bg-muted/30">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                        Örnek Senaryo
                      </h4>
                      <div className="bg-white rounded-lg p-4 border border-border">
                        <p className="text-sm text-foreground leading-relaxed font-mono">
                          {useCase.example}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <svg
                          className="w-4 h-4"
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
                        <span>Yanıt süresi: &lt; 3 saniye</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

