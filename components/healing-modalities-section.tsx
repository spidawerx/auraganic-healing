import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Heart, Brain, Zap, Moon, Sun, Flower, Waves, Sparkles } from "lucide-react"

const modalities = [
  {
    icon: Leaf,
    title: "Herbal Medicine",
    description: "Ancient plant wisdom for modern healing. Discover the power of nature's pharmacy.",
    benefits: ["Natural detox", "Immune support", "Energy balance"],
    color: "text-green-600",
  },
  {
    icon: Heart,
    title: "Energy Healing",
    description: "Restore your body's natural energy flow through proven techniques.",
    benefits: ["Chakra alignment", "Emotional release", "Spiritual clarity"],
    color: "text-rose-600",
  },
  {
    icon: Brain,
    title: "Mind-Body Connection",
    description: "Harness the incredible power of your mind to heal your body.",
    benefits: ["Stress reduction", "Mental clarity", "Emotional balance"],
    color: "text-purple-600",
  },
  {
    icon: Zap,
    title: "Acupuncture & TCM",
    description: "Traditional Chinese Medicine techniques for holistic wellness.",
    benefits: ["Pain relief", "Better sleep", "Digestive health"],
    color: "text-amber-600",
  },
  {
    icon: Moon,
    title: "Crystal Therapy",
    description: "Harness the vibrational energy of crystals for healing and protection.",
    benefits: ["Energy cleansing", "Emotional healing", "Spiritual growth"],
    color: "text-indigo-600",
  },
  {
    icon: Sun,
    title: "Sound Healing",
    description: "Therapeutic frequencies that restore harmony to body and mind.",
    benefits: ["Deep relaxation", "Cellular repair", "Meditation enhancement"],
    color: "text-orange-600",
  },
  {
    icon: Flower,
    title: "Aromatherapy",
    description: "Essential oils and natural fragrances to enhance wellness and mood.",
    benefits: ["Stress relief", "Mood enhancement", "Sleep improvement"],
    color: "text-pink-600",
  },
  {
    icon: Waves,
    title: "Breathwork",
    description: "Conscious breathing techniques for deep healing and transformation.",
    benefits: ["Anxiety relief", "Increased vitality", "Emotional release"],
    color: "text-teal-600",
  },
  {
    icon: Sparkles,
    title: "Meditation Therapy",
    description: "Guided practices to cultivate inner peace and mindful awareness.",
    benefits: ["Mental clarity", "Spiritual growth", "Inner peace"],
    color: "text-violet-600",
  },
]

export function HealingModalitiesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {"Discover Powerful "}
            <span className="text-primary">{"Healing Modalities"}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {"Explore time-tested healing practices that address the root causes of imbalance, not just symptoms."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modalities.map((modality, index) => {
            const Icon = modality.icon
            return (
              <Card
                key={index}
                className="border-primary/20 bg-background/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-sm"
              >
                <CardHeader className="text-center pb-4 relative">
                  <div className="relative">
                    <div
                      className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 mb-4 mx-auto`}
                    >
                      <Icon className={`w-10 h-10 ${modality.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{modality.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{modality.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                      <Leaf className="w-3 h-3 text-primary" />
                      {"Key Benefits"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {modality.benefits.map((benefit, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs rounded-full bg-primary/10 text-primary border-primary/20"
                        >
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
