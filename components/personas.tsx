import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, DollarSign, Settings, Users } from "lucide-react";

const personas = [
  {
    icon: Code2,
    name: "Tech Support",
    tagline: "Teknik Uzman AI",
    description:
      "Kod incelemeleri, bug triage, API dokümantasyonu, deployment soruları ve teknik destek konularında uzmanlaşmıştır.",
    skills: ["Code Review", "Bug Triage", "API Docs", "DevOps"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: DollarSign,
    name: "Finance Assistant",
    tagline: "Finans Analisti AI",
    description:
      "Bütçe takibi, rapor otomasyonu, gider analizleri, fatura işlemleri ve mali dokümantasyon konularında yardımcı olur.",
    skills: ["Budget Tracking", "Reports", "Expense Analysis", "Invoicing"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Settings,
    name: "Operations Manager",
    tagline: "Operasyon Yöneticisi AI",
    description:
      "SOP dokümantasyonu, süreç optimizasyonu, proje takibi, resource yönetimi ve operasyonel verimlilik konularında destek sağlar.",
    skills: ["SOP Management", "Process Optimization", "Project Tracking", "Resource Planning"],
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Users,
    name: "HR Specialist",
    tagline: "İnsan Kaynakları AI",
    description:
      "Onboarding süreçleri, şirket politikaları, izin yönetimi, çalışan soruları ve İK dokümantasyonu konularında hizmet verir.",
    skills: ["Onboarding", "Policy Q&A", "Leave Management", "Employee Support"],
    color: "from-orange-500 to-red-600",
  },
];

export function Personas() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-purple-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Multi-Persona AI Çalışanlar
          </h2>
          <p className="text-lg text-muted-foreground">
            İhtiyacınıza özel uzmanlaşmış AI persona&apos;ları seçin ve hemen kullanmaya
            başlayın
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {personas.map((persona, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bento-card group"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <CardHeader className="relative">
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className={`inline-flex w-20 h-20 items-center justify-center rounded-2xl bg-gradient-to-br ${persona.color} shadow-lg glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <persona.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <CardTitle className="text-2xl mb-1">{persona.name}</CardTitle>
                <CardDescription className="text-sm font-medium">
                  {persona.tagline}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative space-y-4">
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {persona.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {persona.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-muted/50 rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-2">
              Özel Persona İhtiyacınız mı Var?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Enterprise planında, sektörünüze ve iş akışlarınıza özel persona&apos;lar
              oluşturabilirsiniz. Sales, Marketing, Legal, Compliance ve daha fazlası...
            </p>
            <Badge variant="outline" className="text-xs">
              Enterprise planında mevcut
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}

