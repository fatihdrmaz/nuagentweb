"use client";

import { Card } from "@/components/ui/card";
import { LeadForm } from "./lead-form";
import { Rocket, CheckCircle2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function DemoSection() {
  return (
    <section id="demo" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white to-purple-50/30">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center shadow-xl border-2 border-purple-200 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-shadow">
          <div className="space-y-6">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl float purple-glow">
                <Rocket className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Badge */}
            <Badge className="bg-purple-100 text-purple-700 border-0 px-4 py-2">
              <Sparkles className="w-3 h-3 mr-1" />
              Hemen Başlayın
            </Badge>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">
                <span className="gradient-text">Hazır mısınız?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Nu-Agent ile ekibinizin verimliliğini artırın. 14 gün ücretsiz deneyin,
                kredi kartı gerekmez. Canlı demo için formu doldurun.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8">
              <div className="p-4 rounded-xl bg-purple-50 border border-purple-100 hover:bg-purple-100 transition-colors">
                <div className="text-3xl font-bold gradient-text">5-10 dk</div>
                <div className="text-sm text-gray-600 mt-1">
                  Kurulum Süresi
                </div>
              </div>
              <div className="p-4 rounded-xl bg-fuchsia-50 border border-fuchsia-100 hover:bg-fuchsia-100 transition-colors">
                <div className="text-3xl font-bold gradient-text">%70</div>
                <div className="text-sm text-gray-600 mt-1">
                  Verimlilik Artışı
                </div>
              </div>
              <div className="p-4 rounded-xl bg-purple-50 border border-purple-100 hover:bg-purple-100 transition-colors">
                <div className="text-3xl font-bold gradient-text">4-8 hafta</div>
                <div className="text-sm text-gray-600 mt-1">Ortalama ROI</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <LeadForm
                trigger={
                  <button className="px-10 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg purple-glow group">
                    <span className="flex items-center gap-2">
                      Canlı Demo Talep Et
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                }
              />
              <a
                href="#pricing"
                className="px-10 py-4 bg-white border-2 border-purple-300 text-gray-900 text-lg font-bold rounded-xl hover:border-purple-500 hover:bg-purple-50 hover:scale-105 transition-all duration-300 inline-block"
              >
                Fiyatları İncele
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 border-t border-purple-100">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-medium">14 gün ücretsiz</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-medium">Kredi kartı gerekmez</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-medium">SOC 2 & ISO 27001</span>
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
