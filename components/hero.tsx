"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Sparkles, ArrowRight, MessageSquare, Brain, Zap, Bot, User } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [messages, setMessages] = useState([
    { id: 1, type: "user", text: "Bu haftanın satış raporunu hazırlayabilir misin?", visible: false },
    { id: 2, type: "ai", text: "Tabii! Verileri analiz ediyorum...", visible: false },
    { id: 3, type: "ai", text: "✅ Rapor hazır! 47 lead, %32 conversion artışı var.", visible: false },
  ]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    messages.forEach((msg, index) => {
      const timer = setTimeout(() => {
        setMessages(prev => 
          prev.map((m, i) => i === index ? { ...m, visible: true } : m)
        );
      }, index * 1500);
      timers.push(timer);
    });

    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-white">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-fuchsia-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] bg-violet-400/10 rounded-full blur-2xl float" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="flex justify-center animate-in fade-in slide-in-from-top duration-700">
            <Badge className="px-6 py-3 text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 glow-hover border-0">
              <Sparkles className="mr-2 w-4 h-4 animate-pulse" />
              Her şirkete öğrenen AI çalışanlar
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight animate-in fade-in slide-in-from-bottom duration-1000">
            <span className="block mb-2 text-gray-900">Şirketinize öğrenen</span>
            <span className="block gradient-text animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
              AI çalışanlar yerleştirin
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            Slack/Teams&apos;te yaşayan, 3 katmanlı hafızaya sahip, junior&apos;dan
            senior&apos;a evrilen AI uzmanlar ile süreçlerinizi hızlandırın.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
            <Button size="lg" className="text-lg px-10 py-7 glow-hover purple-glow group relative overflow-hidden bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600" asChild>
              <Link href="#demo">
                <span className="relative z-10 flex items-center">
                  Canlı Demo Al
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 group" asChild>
              <Link href="#slack">
                <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Slack&apos;te Deneyin
              </Link>
            </Button>
          </div>

        </div>

        {/* Animated AI Conversation Demo */}
        <div className="mt-16 lg:mt-24 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-purple-200 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-fuchsia-50/30" />
            
            {/* Simulated Chat Interface */}
            <div className="relative p-8 lg:p-12">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-purple-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Finance Assistant AI</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-gray-500">Aktif ve öğreniyor</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-purple-100 text-purple-700 border-0">
                  <Brain className="w-3 h-3 mr-1" />
                  3 Katmanlı Hafıza
                </Badge>
              </div>

              {/* Chat Messages */}
              <div className="space-y-6 min-h-[300px]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-4 transition-all duration-700 ${
                      msg.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    } ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.type === 'ai' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-md px-6 py-4 rounded-2xl ${
                        msg.type === 'user'
                          ? 'bg-purple-600 text-white ml-auto'
                          : 'bg-white border border-purple-200 shadow-sm'
                      }`}
                    >
                      <p className={msg.type === 'user' ? 'text-white' : 'text-gray-800'}>
                        {msg.text}
                      </p>
                    </div>
                    {msg.type === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                <div className="flex items-start gap-4 animate-in fade-in duration-700 delay-[4500ms]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white border border-purple-200 shadow-sm px-6 py-4 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" />
                        <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
                      </div>
                      <span className="text-xs text-gray-500 ml-2">AI düşünüyor...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="mt-8 pt-6 border-t border-purple-100 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">47</div>
                  <div className="text-xs text-gray-600">Lead İşlendi</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">%32</div>
                  <div className="text-xs text-gray-600">Artış</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">2.3s</div>
                  <div className="text-xs text-gray-600">Yanıt Süresi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

