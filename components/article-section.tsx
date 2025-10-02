import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, User, Heart, Leaf, Sparkles } from "lucide-react"
import Link from "next/link"

export function ArticleSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Ethereal background elements */}
      <div
        className="absolute top-10 right-10 w-40 h-60 chakra-heart opacity-10 animate-[energy-spiral_15s_linear_infinite] rounded-full blur-2xl"
        style={{ clipPath: "ellipse(45% 80% at 55% 20%)" }}
      />
      <div
        className="absolute bottom-20 left-20 w-50 h-30 chakra-third-eye opacity-15 animate-[energy-spiral_20s_linear_infinite_reverse] rounded-full blur-xl"
        style={{ clipPath: "ellipse(75% 40% at 25% 60%)" }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 spiritual-glow bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-primary/20">
              <Sparkles className="w-4 h-4" />
              Featured Article
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              {"Why Your Body Already Knows How to "}
              <span className="text-accent font-extrabold">{"Heal Itself"}</span>
            </h2>

            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Ninja Nicky</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-gradient-to-br from-background/80 to-primary/5 p-8 rounded-3xl border border-primary/20 backdrop-blur-sm spiritual-glow">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                {
                  "For over a decade, I've witnessed something extraordinary: the human body's innate ability to heal itself when we simply get out of its way. Nature has equipped us with everything we need - we just need to remember how to listen."
                }
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                {
                  "In our modern world, we've been conditioned to look outside ourselves for healing. We pop pills, seek quick fixes, and ignore the whispers of our own inner wisdom. But what if I told you that your body is constantly communicating with you, showing you exactly what it needs to return to balance?"
                }
              </p>

              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-2xl border-l-4 border-primary/40 my-8">
                <p className="text-lg font-medium text-primary mb-2">{"The Auraganic Truth:"}</p>
                <p className="text-muted-foreground italic">
                  {
                    '"As the human body was created by nature, it already came with everything it needs to heal. We simply help clear the way, and get you back in touch with your inner self."'
                  }
                </p>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                {
                  "Through bodywork, emotion code, detox coaching, and energy healing, I've seen people reconnect with their natural healing abilities. When we align with nature's rhythms and trust our body's intelligence, miraculous transformations happen."
                }
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 chakra-heart" />
                    <h4 className="font-semibold">Listen to Your Body</h4>
                  </div>
                  <p className="text-muted-foreground">
                    {
                      "Your body speaks through sensations, emotions, and energy. Learning its language is the first step to natural healing."
                    }
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Leaf className="w-5 h-5 chakra-solar" />
                    <h4 className="font-semibold">Trust Nature's Wisdom</h4>
                  </div>
                  <p className="text-muted-foreground">
                    {
                      "Nature has perfected healing over millions of years. When we align with natural principles, healing becomes effortless."
                    }
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                {
                  "Ready to discover what your body has been trying to tell you? Let's explore how Auraganic healing can help you reconnect with your natural state of wellness and vitality."
                }
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full bg-green-600 hover:bg-green-700 text-white">
              <Link href="/consultation">Book a Free 20‑Minute Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
