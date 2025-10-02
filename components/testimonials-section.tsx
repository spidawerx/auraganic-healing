import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, Quote, Sparkles } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    name: "Sarah Chen",
    location: "San Francisco, CA",
    avatar: "/woman-smiling-peaceful-natural-lighting.jpg",
    content:
      "After years of conventional treatments failing me, I discovered energy healing through this community. The transformation has been nothing short of miraculous. I finally feel like myself again.",
    modality: "Energy Healing & Herbal Medicine",
  },
  {
    name: "Marcus Rodriguez",
    location: "Austin, TX",
    avatar: "/man-peaceful-expression-natural-outdoor-setting.jpg",
    content:
      "The holistic approach here changed my entire perspective on health. Instead of just treating symptoms, we addressed the root causes. My chronic pain is gone and my energy is through the roof.",
    modality: "Acupuncture & Mind-Body Healing",
  },
  {
    name: "Dr. Elena Vasquez",
    location: "Portland, OR",
    avatar: "/professional-woman-doctor-warm-smile-natural-light.jpg",
    content:
      "As a former skeptic and medical doctor, I was amazed by the results I witnessed. The integration of ancient wisdom with modern understanding creates truly powerful healing outcomes.",
    modality: "Integrative Medicine Approach",
  },
  {
    name: "James Thompson",
    location: "Boulder, CO",
    avatar: "/middle-aged-man-serene-expression-mountain-backgro.jpg",
    content:
      'Sound healing and crystal therapy seemed too "out there" for me initially. But the profound peace and clarity I experience now has made me a true believer in these ancient practices.',
    modality: "Sound & Crystal Therapy",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background" />
      <div className="absolute top-20 left-10 w-36 h-36 bg-accent/8 organic-blob-2 animate-[gentle-float_14s_ease-in-out_infinite]" />
      <div className="absolute bottom-32 right-16 w-28 h-28 bg-primary/6 organic-blob animate-[gentle-float_11s_ease-in-out_infinite_2s]" />

      {/* Floating sparkles for magical feel */}
      <div className="absolute top-1/3 right-1/5 animate-pulse">
        <Sparkles className="w-6 h-6 text-accent/30" />
      </div>
      <div className="absolute bottom-1/3 left-1/6 animate-pulse delay-1000">
        <Sparkles className="w-4 h-4 text-primary/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {"Real Stories of "}
            <span className="flowing-text">{"Transformation"}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {"Hear from our community members who have experienced profound healing and personal growth."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-primary/20 hover:shadow-xl transition-all duration-500 bg-background/90 backdrop-blur-sm natural-glow rounded-3xl overflow-hidden group hover:scale-105"
            >
              <CardContent className="p-8 relative">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-sm animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                <blockquote className="text-lg leading-relaxed mb-8 text-pretty relative">
                  <span className="text-primary/60 text-2xl absolute -top-2 -left-1">"</span>
                  {testimonial.content}
                  <span className="text-primary/60 text-2xl">"</span>
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/15 rounded-full animate-pulse" />
                    <Avatar className="w-14 h-14 relative border-2 border-primary/20">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-primary/10 to-accent/10 text-primary font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                    <div className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full inline-block">
                      {testimonial.modality}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/consultation">Book a Free 20‑Minute Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
