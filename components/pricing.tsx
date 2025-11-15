"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "Küçük ekipler için başlangıç paketi",
    monthlyPrice: "499",
    annualPrice: "399",
    features: [
      "1 AI Persona",
      "Temel Slack entegrasyonu",
      "Temel RAG (5,000 doküman)",
      "Personal Memory",
      "Email destek",
      "50 aktif kullanıcı",
      "Aylık 10,000 sorgu",
    ],
    cta: "Hemen Başla",
    popular: false,
  },
  {
    name: "Pro",
    description: "Büyüyen ekipler için kapsamlı çözüm",
    monthlyPrice: "1,499",
    annualPrice: "1,199",
    features: [
      "3 AI Persona",
      "Gelişmiş Slack & Teams entegrasyonu",
      "Gelişmiş RAG (50,000 doküman)",
      "Personal + Organizational Memory",
      "People-Facts Beta",
      "Doküman içe-aktarım (PDF, Notion, etc.)",
      "Öncelikli destek",
      "200 aktif kullanıcı",
      "Aylık 100,000 sorgu",
    ],
    cta: "Pro'ya Geç",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Kurumsal şirketler için özel çözümler",
    monthlyPrice: "Özel",
    annualPrice: "Özel",
    features: [
      "Sınırsız AI Persona",
      "Özel persona geliştirme",
      "Sınırsız RAG & doküman",
      "Full 3-layer Memory (Personal + Org + Social)",
      "SSO & SCIM",
      "Data Residency seçenekleri",
      "Özel SLA (%99.9 uptime)",
      "Dedicated account manager",
      "On-premise deployment (opsiyonel)",
      "Custom entegrasyonlar",
      "Sınırsız kullanıcı ve sorgu",
    ],
    cta: "Bizimle Görüşün",
    popular: false,
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Şeffaf Fiyatlandırma
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            İhtiyacınıza uygun planı seçin, istediğiniz zaman iptal edin
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center space-x-3 bg-white rounded-full p-1 shadow-sm border border-border">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isAnnual
                  ? "bg-[#4C5EFF] text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Aylık
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isAnnual
                  ? "bg-[#4C5EFF] text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yıllık
              <Badge variant="secondary" className="ml-2 text-xs">
                %20 İndirim
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${
                plan.popular
                  ? "border-[#4C5EFF] border-2 shadow-xl scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-[#4C5EFF] to-[#10B981] text-white">
                    En Popüler
                  </Badge>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1 space-y-6">
                {/* Price */}
                <div>
                  {plan.monthlyPrice === "Özel" ? (
                    <div className="text-4xl font-bold text-foreground">Özel Fiyat</div>
                  ) : (
                    <div>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-foreground">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-muted-foreground ml-2">/ay</span>
                      </div>
                      {isAnnual && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Yıllık ${parseInt(plan.annualPrice) * 12} olarak faturalandırılır
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
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
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="#demo">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Tüm planlar 14 günlük ücretsiz deneme ile gelir. Kredi kartı gerekmez. 🎉
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-muted-foreground">
            <span className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>İstediğiniz zaman iptal</span>
            </span>
            <span className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Aylık/yıllık geçiş esnekliği</span>
            </span>
            <span className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Güvenli ödeme</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

