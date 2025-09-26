import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, Calendar, MessageCircle } from "lucide-react"

const communityFeatures = [
  {
    icon: Users,
    title: "Supportive Community",
    description: "Connect with like-minded individuals on similar healing journeys.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Library",
    description: "Access thousands of articles, guides, and research on natural healing.",
  },
  {
    icon: Calendar,
    title: "Live Events",
    description: "Join workshops, webinars, and healing circles with expert practitioners.",
  },
  {
    icon: MessageCircle,
    title: "Expert Guidance",
    description: "Get personalized advice from certified holistic health practitioners.",
  },
]

export function CommunitySection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {"Join Our Thriving "}
              <span className="text-primary">{"Wellness Community"}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              {
                "You don't have to walk this path alone. Our community of over 10,000 members supports each other through every step of the healing journey."
              }
            </p>

            <div className="space-y-6 mb-8">
              {communityFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button size="lg" className="text-lg px-8 py-6">
              {"Join Our Community"}
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">{"This Week's Featured Discussion"}</CardTitle>
                <CardDescription>
                  {"Exploring the connection between gut health and emotional well-being"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  {"247 members participating"}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">{"Upcoming Live Event"}</CardTitle>
                <CardDescription>{"Crystal Healing Workshop with Master Practitioner Luna Martinez"}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {"Saturday, 2:00 PM PST"}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-primary/5">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-2">{"Free 7-Day Challenge"}</div>
                  <p className="text-sm text-foreground/80">
                    {"Start your holistic healing journey with our guided introduction program"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
