import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const securityFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Tenant İzolasyonu",
    description:
      "Her şirketin verisi tamamen izole edilmiş ortamlarda saklanır. Cross-tenant veri paylaşımı asla gerçekleşmez.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "Private Channel Gizliliği",
    description:
      "Private ve DM kanallarındaki mesajlar yalnızca izinli kullanıcılar için işlenir. Öğrenme kapsamı dışında bırakılabilir.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Kişisel/Duygusal Veri Koruması",
    description:
      "Sağlık, dini inanç, siyasi görüş gibi hassas kişisel veriler asla depolanmaz veya AI eğitiminde kullanılmaz.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "End-to-End Şifreleme",
    description:
      "Tüm veri transferleri TLS 1.3 ile şifrelenir. At-rest veriler AES-256 encryption ile korunur.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Audit Logs & Compliance",
    description:
      "Tüm sistem aktiviteleri loglanır. GDPR, SOC 2 ve ISO 27001 uyumlu altyapı.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
    title: "SSO & SCIM",
    description:
      "Enterprise planda SAML/OAuth SSO ve SCIM ile kullanıcı yönetimi entegrasyonu mevcut.",
  },
];

export function Security() {
  return (
    <section id="security" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Güvenlik & Mahremiyet
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Verileriniz Bizimle Güvende
          </h2>
          <p className="text-lg text-muted-foreground">
            Kurumsal seviye güvenlik, izolasyon ve compliance standartları
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {securityFeatures.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#4C5EFF]/10 group-hover:bg-[#4C5EFF]/20 rounded-lg flex items-center justify-center text-[#4C5EFF] transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                Sertifikalar & Uyumluluk
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <Badge variant="outline" className="text-sm px-4 py-2">
                  SOC 2 Type II
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  ISO 27001
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  GDPR Compliant
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  CCPA Ready
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  HIPAA Available
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground pt-4">
                Düzenli penetrasyon testleri ve bağımsız güvenlik denetimleri ile
                sistemlerimizi sürekli iyileştiriyoruz.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

