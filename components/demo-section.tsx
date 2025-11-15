import { Card } from "@/components/ui/card";
import { LeadForm } from "./lead-form";

export function DemoSection() {
  return (
    <section id="demo" className="py-20 lg:py-32 bg-gradient-to-br from-[#4C5EFF]/10 via-[#10B981]/5 to-[#4C5EFF]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center shadow-2xl border-2 border-[#4C5EFF]/20">
          <div className="space-y-6">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#4C5EFF] to-[#10B981] rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                🚀
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Hazır mısınız?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  <button className="px-8 py-3 bg-gradient-to-r from-[#4C5EFF] to-[#10B981] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-lg">
                    Canlı Demo Talep Et
                  </button>
                }
              />
              <a
                href="#pricing"
                className="px-8 py-3 bg-white border-2 border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors duration-200"
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

