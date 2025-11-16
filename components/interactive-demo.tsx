"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Zap, Brain, TrendingUp, CheckCircle2, Code, FileText } from "lucide-react";

const scenarios = [
  {
    id: 1,
    title: "Kod Review",
    persona: "Tech Support AI",
    icon: Code,
    color: "from-blue-500 to-indigo-600",
    task: "Yeni PR'ı incele",
    steps: [
      { text: "PR #127'yi analiz ediyorum...", delay: 500 },
      { text: "3 critical, 5 warning tespit ettim", delay: 1500 },
      { text: "Detaylı rapor hazır! ✅", delay: 2500 },
    ]
  },
  {
    id: 2,
    title: "Raporlama",
    persona: "Finance Assistant",
    icon: FileText,
    color: "from-emerald-500 to-teal-600",
    task: "Aylık özet rapor oluştur",
    steps: [
      { text: "Veritabanından çekiyorum...", delay: 500 },
      { text: "Grafikleri oluşturuyorum...", delay: 1500 },
      { text: "PDF export hazır! 📊", delay: 2500 },
    ]
  },
  {
    id: 3,
    title: "Analitik",
    persona: "Operations Manager",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-600",
    task: "Performans trendlerini analiz et",
    steps: [
      { text: "Metrik verilerini topluyorum...", delay: 500 },
      { text: "Anomali tespiti yapıyorum...", delay: 1500 },
      { text: "İyileştirme önerileri hazır! 🎯", delay: 2500 },
    ]
  },
];

export function InteractiveDemo() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const runDemo = () => {
    setIsRunning(true);
    setCurrentStep(0);

    activeScenario.steps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
        if (index === activeScenario.steps.length - 1) {
          setTimeout(() => setIsRunning(false), 1000);
        }
      }, step.delay);
    });
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-purple-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-0">
              <Zap className="w-3 h-3 mr-1" />
              İnteraktif Demo
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              <span className="gradient-text">AI Çalışanları</span> Canlı Görün
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Farklı senaryolarda nasıl çalıştığını deneyimleyin
            </p>
          </div>

          {/* Scenario Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {scenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <button
                  key={scenario.id}
                  onClick={() => {
                    setActiveScenario(scenario);
                    setCurrentStep(0);
                    setIsRunning(false);
                  }}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    activeScenario.id === scenario.id
                      ? 'border-purple-500 bg-purple-50 shadow-lg scale-105'
                      : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${scenario.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{scenario.title}</h3>
                  <p className="text-sm text-gray-600">{scenario.persona}</p>
                </button>
              );
            })}
          </div>

          {/* Demo Area */}
          <Card className="p-8 lg:p-12 border-2 border-purple-200 shadow-2xl">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-purple-100">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${activeScenario.color} flex items-center justify-center`}>
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{activeScenario.persona}</h3>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`} />
                      <span className="text-xs text-gray-500">
                        {isRunning ? 'Çalışıyor...' : 'Beklemede'}
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={runDemo}
                  disabled={isRunning}
                  className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {isRunning ? 'Çalışıyor...' : 'Başlat'}
                </Button>
              </div>

              {/* Task */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <Brain className="w-4 h-4" />
                  Görev:
                </div>
                <p className="font-semibold text-gray-900">{activeScenario.task}</p>
              </div>

              {/* Steps */}
              <div className="space-y-4 min-h-[200px]">
                {activeScenario.steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      currentStep > index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-1 ${
                      currentStep > index ? 'bg-green-500' : 'bg-gray-300'
                    }`}>
                      {currentStep > index && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4">
                      <p className="text-gray-800">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Result */}
              {currentStep === activeScenario.steps.length && (
                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 animate-in fade-in duration-500">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    <div>
                      <h4 className="font-bold text-green-900">Görev Tamamlandı!</h4>
                      <p className="text-sm text-green-700">
                        AI çalışanınız 3 saniyeden kısa sürede görevi başarıyla tamamladı.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

