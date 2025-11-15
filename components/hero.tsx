"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4C5EFF]/10 via-[#10B981]/5 to-[#8B5CF6]/10 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#4C5EFF]/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#10B981]/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-[#8B5CF6]/15 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="flex justify-center animate-in fade-in slide-in-from-top duration-700">
            <Badge variant="secondary" className="px-6 py-3 text-sm font-medium glass glow-hover">
              <span className="mr-2 text-lg animate-bounce inline-block">🚀</span>
              Her şirkete öğrenen AI çalışanlar
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-foreground animate-in fade-in slide-in-from-bottom duration-1000">
            <span className="block mb-2">Şirketinize öğrenen</span>
            <span className="block gradient-text animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
              AI çalışanlar yerleştirin
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            Slack/Teams&apos;te yaşayan, 3 katmanlı hafızaya sahip, junior&apos;dan
            senior&apos;a evrilen AI uzmanlar ile süreçlerinizi hızlandırın.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
            <Button size="lg" className="text-lg px-10 py-7 glow-hover group relative overflow-hidden" asChild>
              <Link href="#demo">
                <span className="relative z-10 flex items-center">
                  Canlı Demo Al
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4C5EFF] to-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 glass hover:glass-strong group" asChild>
              <Link href="#slack">
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                </svg>
                Slack&apos;te Deneyin
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-12 space-y-4">
            <p className="text-sm text-muted-foreground">
              Önde gelen şirketler tarafından güveniliyor
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {/* Placeholder for company logos */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground"
                >
                  Logo {i}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Illustration Placeholder */}
        <div className="mt-16 lg:mt-24 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
          <div className="relative aspect-video bg-gradient-to-br from-[#4C5EFF]/30 via-[#8B5CF6]/20 to-[#10B981]/30 rounded-3xl border border-white/20 shadow-2xl overflow-hidden glass glow float">
            <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="space-y-6">
                <div className="text-8xl animate-bounce">🤖</div>
                <div className="max-w-2xl space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#4C5EFF]/20 glass flex items-center justify-center animate-pulse">
                      <span className="text-xl">💬</span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#10B981]/20 glass flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                      <span className="text-xl">🧠</span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/20 glass flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                      <span className="text-xl">⚡</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground/80 max-w-md mx-auto backdrop-blur-sm">
                    <strong className="text-foreground">Görsel üretim talimatı:</strong> Kurumsal ofis sahnesinde Slack
                    baloncukları ile konuşan tekil kimlikli AI avatar; arka planda 3
                    katmanlı hafızayı temsil eden katmanlı grafikler; modern çizgi/gradient
                    tarzında, indigo ve emerald renk tonları.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

