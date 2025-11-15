"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export function LeadForm({ trigger }: { trigger?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    platform: "slack",
    gdprConsent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsOpen(false);
      setIsSuccess(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        employees: "",
        platform: "slack",
        gdprConsent: false,
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg">
            Canlı Demo Al
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Ekibiniz için Nu-Agent&apos;i Deneyin</DialogTitle>
          <DialogDescription>
            Formu doldurun, sizinle 24 saat içinde iletişime geçelim ve özel bir demo
            ayarlayalım.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-[#10B981]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Teşekkürler! 🎉</h3>
            <p className="text-sm text-muted-foreground">
              Başvurunuz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Ad Soyad <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Ahmet Yılmaz"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                İş E-postası <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="ahmet@sirket.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">
                Şirket Adı <span className="text-red-500">*</span>
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Şirket A.Ş."
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="employees">Çalışan Sayısı</Label>
              <select
                id="employees"
                name="employees"
                value={formData.employees}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Seçiniz</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="platform">Platform Tercihi</Label>
              <select
                id="platform"
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="slack">Slack</option>
                <option value="teams">Microsoft Teams</option>
                <option value="both">Her İkisi</option>
              </select>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="gdpr"
                checked={formData.gdprConsent}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, gdprConsent: checked as boolean }))
                }
                required
              />
              <Label htmlFor="gdpr" className="text-xs text-muted-foreground leading-relaxed">
                Kişisel verilerimin{" "}
                <a href="#" className="text-[#4C5EFF] hover:underline">
                  Gizlilik Politikası
                </a>{" "}
                kapsamında işlenmesini kabul ediyorum. <span className="text-red-500">*</span>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting || !formData.gdprConsent}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Gönderiliyor...
                </>
              ) : (
                "Demo Talep Et"
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Form göndererek{" "}
              <a href="#" className="text-[#4C5EFF] hover:underline">
                Kullanım Şartları
              </a>
              &apos;nı kabul etmiş olursunuz.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

