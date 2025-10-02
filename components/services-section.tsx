import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Zap, Leaf, Star, Users, Dumbbell, Gem, CircleDot } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      slug: "bodywork",
      title: "Bodywork",
      price: "$300/session",
      description: "Deep healing through therapeutic touch and energy work",
      icon: Heart,
      chakra: "chakra-heart",
    },
    {
      slug: "emotion-code",
      title: "Emotion Code",
      price: "$80/session",
      description: "Release trapped emotions and energetic blockages",
      icon: Zap,
      chakra: "chakra-solar",
    },
    {
      slug: "health-coaching",
      title: "Health Coaching",
      price: "Plans Available",
      description: "Personalized guidance for your wellness journey",
      icon: Leaf,
      chakra: "chakra-root",
    },
    {
      slug: "weight-loss-coaching",
      title: "Weight Loss Coaching",
      price: "Plans Available",
      description: "Natural approach to healthy weight transformation",
      icon: Star,
      chakra: "chakra-sacral",
    },
    {
      slug: "raw-uncooking-classes",
      title: "Raw Un-Cooking Classes",
      price: "$500 (Groups 5-12)",
      description: "Learn to prepare living foods that nourish your soul",
      icon: Leaf,
      chakra: "chakra-throat",
    },
    {
      slug: "karate-jiu-jitsu",
      title: "Karate & Jiu Jitsu",
      price: "$100/hour",
      description: "Physical discipline for mind-body-spirit connection",
      icon: Dumbbell,
      chakra: "chakra-third-eye",
    },
    {
      slug: "acro-yoga-for-couples",
      title: "Acro Yoga for Couples",
      price: "$100/hour",
      description: "Deepen your connection through partner yoga flow",
      icon: Users,
      chakra: "chakra-crown",
    },
    {
      slug: "crystal-healing-therapy",
      title: "Crystal Healing Therapy",
      price: "$150/session",
      description: "Harness the vibrational power of crystals to restore energetic balance",
      icon: Gem,
      chakra: "chakra-heart",
    },
    {
      slug: "chakra-balancing-sessions",
      title: "Chakra Balancing Sessions",
      price: "$120/session",
      description: "Align and activate your seven energy centers for optimal wellness",
      icon: CircleDot,
      chakra: "chakra-crown",
    },
  ]

  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 energy-flow opacity-5" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">
            {"Healing "}
            <span className="text-accent font-extrabold">{"Modalities"}</span>
            {" Menu"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {
              "Whatever you've been dealing with, I can help you. Each modality is designed to restore your natural state of wellness."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group spiritual-glow bg-background/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <CardHeader className="text-center space-y-4">
                  <div
                    className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${service.chakra}`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    <Link href={`/services/${service.slug}`} className="hover:underline">
                      {service.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">{service.price}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button asChild variant="outline" className="w-full rounded-full border-primary/30 hover:bg-primary">
                    <Link href={`/services/${service.slug}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" className="rounded-full bg-green-600 hover:bg-green-700 text-white">
            <Link href="/consultation">Book a Free 20‑Minute Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
