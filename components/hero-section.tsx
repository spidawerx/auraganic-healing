import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Leaf, Heart, Star, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 energy-flow opacity-20" />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('/serene-natural-landscape-with-mountains-and-peacef.jpg')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/80" />

      <div
        className="absolute top-20 left-10 w-32 h-16 chakra-root opacity-20 animate-[energy-spiral_8s_linear_infinite] rounded-full blur-xl"
        style={{ clipPath: "ellipse(60% 40% at 30% 50%)" }}
      />
      <div
        className="absolute top-32 right-20 w-24 h-40 chakra-sacral opacity-25 animate-[energy-spiral_10s_linear_infinite_1s] rounded-full blur-lg"
        style={{ clipPath: "ellipse(40% 70% at 60% 30%)" }}
      />
      <div
        className="absolute bottom-40 left-1/4 w-28 h-20 chakra-solar opacity-30 animate-[energy-spiral_12s_linear_infinite_2s] rounded-full blur-xl"
        style={{ clipPath: "ellipse(80% 30% at 20% 70%)" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-36 h-24 chakra-heart opacity-35 animate-[energy-spiral_9s_linear_infinite_3s] rounded-full blur-lg"
        style={{ clipPath: "ellipse(50% 60% at 40% 40%)" }}
      />
      <div
        className="absolute bottom-32 right-1/4 w-20 h-32 chakra-throat opacity-25 animate-[energy-spiral_11s_linear_infinite_4s] rounded-full blur-xl"
        style={{ clipPath: "ellipse(35% 75% at 65% 25%)" }}
      />
      <div
        className="absolute top-1/3 left-1/3 w-26 h-18 chakra-third-eye opacity-30 animate-[energy-spiral_7s_linear_infinite_5s] rounded-full blur-lg"
        style={{ clipPath: "ellipse(70% 45% at 50% 55%)" }}
      />
      <div
        className="absolute bottom-1/3 left-20 w-30 h-22 chakra-crown opacity-28 animate-[energy-spiral_13s_linear_infinite_6s] rounded-full blur-xl"
        style={{ clipPath: "ellipse(55% 65% at 35% 45%)" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-3 spiritual-glow bg-gradient-to-r from-accent/20 to-primary/15 text-primary px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm border border-primary/20 aura-pulse">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 chakra-crown animate-pulse" />
              <Zap className="w-3 h-3 chakra-solar animate-pulse" />
            </div>
            {"✨ Auraganic Healing - Where Nature is the Way ✨"}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            {"Discover the "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-extrabold">
              {"Auraganic Way"}
            </span>
            {" to Natural Healing"}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {
              "We are one with nature. Let Auraganic bring you back to your natural state. The answers for healing are within your body already - we just help you get out of the way."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 group spiritual-glow rounded-full border-0 aura-pulse bg-green-600 hover:bg-green-700 text-white"
            >
              {"Read Our Latest Article"}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-background/80 backdrop-blur-sm rounded-full border border-primary/30 hover:bg-primary/5"
            >
              {"Explore Healing Services"}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="space-y-3 p-6 rounded-3xl bg-background/40 backdrop-blur-sm border border-primary/20 spiritual-glow">
              <div className="flex items-center justify-center gap-2">
                <div className="text-3xl font-bold text-primary">{"Since 2014"}</div>
                <Leaf className="w-5 h-5 chakra-heart animate-[leaf-sway_3s_ease-in-out_infinite]" />
              </div>
              <div className="text-muted-foreground">{"Years of Healing"}</div>
            </div>
            <div className="space-y-3 p-6 rounded-3xl bg-background/40 backdrop-blur-sm border border-primary/20 spiritual-glow">
              <div className="flex items-center justify-center gap-2">
                <div className="text-3xl font-bold text-accent">{"∞"}</div>
                <Heart className="w-5 h-5 chakra-heart animate-pulse" />
              </div>
              <div className="text-muted-foreground">{"Infinite Possibilities"}</div>
            </div>
            <div className="space-y-3 p-6 rounded-3xl bg-background/40 backdrop-blur-sm border border-primary/20 spiritual-glow">
              <div className="flex items-center justify-center gap-2">
                <div className="text-3xl font-bold text-primary">{"7"}</div>
                <Sparkles className="w-5 h-5 chakra-crown animate-pulse" />
              </div>
              <div className="text-muted-foreground">{"Chakras Aligned"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
