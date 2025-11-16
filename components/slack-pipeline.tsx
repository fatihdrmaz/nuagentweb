"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Webhook, 
  CheckCircle, 
  Database, 
  Search, 
  Brain, 
  Zap, 
  MessageSquare,
  Lock,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

const pipelineSteps = [
  {
    id: 1,
    icon: Webhook,
    title: "Slack Event",
    description: "Mention veya mesaj yakalanır",
    details: "Real-time webhook ile event tetiklenir",
    color: "from-blue-500 to-cyan-500",
    metrics: "< 50ms",
  },
  {
    id: 2,
    icon: Lock,
    title: "Auth Check",
    description: "Kullanıcı ve workspace doğrulanır",
    details: "OAuth2 + JWT validation",
    color: "from-cyan-500 to-teal-500",
    metrics: "< 20ms",
  },
  {
    id: 3,
    icon: Database,
    title: "Context Load",
    description: "3 katmanlı hafıza yüklenir",
    details: "Agent → Workspace → Global memory",
    color: "from-teal-500 to-emerald-500",
    metrics: "< 100ms",
  },
  {
    id: 4,
    icon: Search,
    title: "Vector Search",
    description: "Embedding & semantic search",
    details: "Pinecone/Qdrant similarity search",
    color: "from-emerald-500 to-green-500",
    metrics: "< 80ms",
  },
  {
    id: 5,
    icon: Brain,
    title: "RAG Pipeline",
    description: "Context enrichment + prompt",
    details: "Knowledge retrieval + augmentation",
    color: "from-green-500 to-lime-500",
    metrics: "< 150ms",
  },
  {
    id: 6,
    icon: Zap,
    title: "LLM Inference",
    description: "GPT-4 / Claude yanıt üretir",
    details: "Streaming response generation",
    color: "from-lime-500 to-yellow-500",
    metrics: "1-2s",
  },
  {
    id: 7,
    icon: CheckCircle,
    title: "Post-Process",
    description: "Format + validation + enrichment",
    details: "Safety checks + markdown format",
    color: "from-yellow-500 to-orange-500",
    metrics: "< 50ms",
  },
  {
    id: 8,
    icon: MessageSquare,
    title: "Slack Reply",
    description: "Thread'de yanıt gönderilir",
    details: "Slack API + attachment handling",
    color: "from-orange-500 to-red-500",
    metrics: "< 100ms",
  },
];

export function SlackPipeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineSteps.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="pipeline" className="py-20 lg:py-32 bg-gradient-to-b from-purple-50/20 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-fuchsia-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 border-0">
            <Zap className="w-3 h-3 mr-1" />
            Event Pipeline
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            <span className="gradient-text">8 Aşamalı</span> Akıllı Pipeline
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Her Slack etkileşimi milisaniyeler içinde güvenli ve optimize edilmiş bir işlem hattından geçer
          </p>

          {/* Play/Pause Control */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-6 py-3 bg-white border-2 border-purple-300 hover:border-purple-500 rounded-xl font-semibold text-gray-900 hover:shadow-lg transition-all hover:scale-105"
          >
            {isPlaying ? '⏸️ Duraklat' : '▶️ Oynat'}
          </button>
        </div>

        {/* Pipeline Visualization */}
        <div className="max-w-6xl mx-auto mb-12">
          {/* Desktop View - Horizontal Flow */}
          <div className="hidden lg:grid lg:grid-cols-8 gap-2 relative">
            {/* Animated Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-emerald-200 to-red-200 -translate-y-1/2 rounded-full" />
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-red-500 -translate-y-1/2 rounded-full transition-all duration-500 shadow-lg"
              style={{ width: `${((activeStep + 1) / pipelineSteps.length) * 100}%` }}
            />

            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isPassed = index < activeStep;
              const isHovered = hoveredStep === index;

              return (
                <div
                  key={step.id}
                  className="relative z-10"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 ${
                      isActive
                        ? `bg-gradient-to-br ${step.color} shadow-2xl scale-125 rotate-12`
                        : isPassed
                        ? `bg-gradient-to-br ${step.color} shadow-lg scale-110`
                        : 'bg-white border-2 border-gray-200 shadow-md hover:scale-110'
                    } ${isHovered ? 'scale-125' : ''}`}
                    onClick={() => {
                      setActiveStep(index);
                      setIsPlaying(false);
                    }}
                  >
                    <Icon className={`w-10 h-10 ${isActive || isPassed ? 'text-white' : 'text-gray-400'} transition-all`} />
                  </div>

                  {/* Step Number */}
                  <div className={`absolute -top-3 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    isActive || isPassed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {step.id}
                  </div>

                  {/* Arrow */}
                  {index < pipelineSteps.length - 1 && (
                    <div className="absolute top-1/2 -right-1 z-0 -translate-y-1/2">
                      <ArrowRight className={`w-4 h-4 transition-all ${
                        isPassed ? 'text-purple-600 animate-pulse' : 'text-gray-300'
                      }`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile View - Vertical Flow */}
          <div className="lg:hidden space-y-4">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isPassed = index < activeStep;

              return (
                <div key={step.id} className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? `bg-gradient-to-br ${step.color} shadow-2xl scale-110`
                        : isPassed
                        ? `bg-gradient-to-br ${step.color} shadow-lg`
                        : 'bg-white border-2 border-gray-200'
                    }`}
                  >
                    <Icon className={`w-8 h-8 ${isActive || isPassed ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  <Badge className="bg-purple-100 text-purple-700 border-0 text-xs">
                    {step.metrics}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Step Details Card */}
        <Card className="max-w-4xl mx-auto p-8 border-2 border-purple-200 shadow-2xl bg-white/90 backdrop-blur">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Icon */}
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pipelineSteps[activeStep].color} flex items-center justify-center shadow-xl flex-shrink-0`}>
              {(() => {
                const Icon = pipelineSteps[activeStep].icon;
                return <Icon className="w-10 h-10 text-white" />;
              })()}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {pipelineSteps[activeStep].title}
                </h3>
                <Badge className="bg-green-100 text-green-700 border-0">
                  ⚡ {pipelineSteps[activeStep].metrics}
                </Badge>
              </div>
              <p className="text-lg text-gray-700 mb-3">
                {pipelineSteps[activeStep].description}
              </p>
              <p className="text-sm text-gray-600 bg-purple-50 border border-purple-200 rounded-lg px-4 py-2 font-mono">
                💡 {pipelineSteps[activeStep].details}
              </p>
            </div>

            {/* Step Counter */}
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-2xl p-4 shadow-lg">
              <div className="text-4xl font-black text-white">{activeStep + 1}</div>
              <div className="text-xs text-white/80 font-semibold">/ 8</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 pt-6 border-t border-purple-100">
            <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
              <span>Pipeline İlerlemesi</span>
              <span className="font-bold text-purple-600">{Math.round(((activeStep + 1) / pipelineSteps.length) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-500 rounded-full"
                style={{ width: `${((activeStep + 1) / pipelineSteps.length) * 100}%` }}
              />
            </div>
          </div>
        </Card>

        {/* Total Processing Time */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl px-8 py-4">
            <Zap className="w-8 h-8 text-green-600" />
            <div className="text-left">
              <div className="text-3xl font-black gradient-text">~2.5 saniye</div>
              <div className="text-sm text-gray-600">Toplam End-to-End Süre</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
