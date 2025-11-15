"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "./lead-form";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section (approximately)
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-lg animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-foreground text-sm sm:text-base">
              Nu-Agent ile Başlayın
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              14 gün ücretsiz deneme • Kredi kartı gerekmez
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="#pricing">Fiyatları Gör</a>
            </Button>
            <LeadForm
              trigger={
                <Button size="sm">
                  Canlı Demo Al
                  <svg
                    className="ml-2 w-4 h-4"
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
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

