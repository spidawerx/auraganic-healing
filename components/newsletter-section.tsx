import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Gift } from "lucide-react"
import Link from "next/link"

export function NewsletterSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{"Get Weekly Healing Insights"}</h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              {
                "Join 25,000+ subscribers receiving exclusive content, practitioner tips, and early access to our healing programs."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Input type="email" placeholder="Enter your email address" className="flex-1 text-base py-6" />
              <Button size="lg" className="px-8 py-6 whitespace-nowrap">
                {"Subscribe Free"}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Gift className="w-4 h-4" />
              {'Free bonus: "5 Essential Herbs for Daily Wellness" guide'}
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              {"No spam, unsubscribe anytime. We respect your privacy."}
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="rounded-full bg-green-600 hover:bg-green-700 text-white">
            <Link href="/consultation">Book a Free 20‑Minute Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
