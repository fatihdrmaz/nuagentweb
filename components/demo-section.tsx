import { Card } from "@/components/ui/card";
import { LeadForm } from "./lead-form";

export function DemoSection() {
  return (
    <section id="demo" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4C5EFF]/10 via-[#10B981]/5 to-[#8B5CF6]/10" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#4C5EFF]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center shadow-2xl border-2 border-[#4C5EFF]/20 glass-strong glow">
          <div className="space-y-6">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#4C5EFF] to-[#10B981] rounded-3xl flex items-center justify-center text-5xl shadow-2xl glow float">
                🚀
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground">
                <span className="gradient-text">Hazır mısınız?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Nu-Agent ile ekibinizin verimliliğini artırın. 14 gün ücretsiz deneyin,
                kredi kartı gerekmez. Canlı demo için formu doldurun.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8">
              <div>
                <div className="text-3xl font-bold text-[#4C5EFF]">5-10 dk</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Kurulum Süresi
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#10B981]">%70</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Verimlilik Artışı
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#4C5EFF]">4-8 hafta</div>
                <div className="text-sm text-muted-foreground mt-1">Ortalama ROI</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <LeadForm
                trigger={
                  <button className="px-10 py-4 bg-gradient-to-r from-[#4C5EFF] to-[#10B981] text-white text-lg font-bold rounded-xl hover:shadow-2xl transition-all duration-300 shadow-xl glow-hover group">
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
                className="px-10 py-4 glass-strong border-2 border-white/20 text-foreground text-lg font-bold rounded-xl hover:scale-105 transition-all duration-300 inline-block"
              >
                Fiyatları İncele
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground border-t border-border">
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>14 gün ücretsiz</span>
              </span>
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Kredi kartı gerekmez</span>
              </span>
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>SOC 2 & ISO 27001</span>
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

