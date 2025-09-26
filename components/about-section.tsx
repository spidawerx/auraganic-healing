import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Meet Ninja Nicky</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            I opened Auraganic Juicery in 2014 as a healing space rooted in nourishment and nature. After my own
            transformation—from anxiety, panic attacks, depersonalization, and chronic fatigue—to vibrant health, I now
            guide others through bodywork, Emotion Code, and holistic coaching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-5 text-base md:text-lg leading-relaxed">
            <p>
              Your body knows how to heal. Trauma and toxins can cloud that wisdom, but with the right support your
              system can return to balance. My work blends grounded somatic practices and energy alignment with simple,
              sustainable lifestyle shifts.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              <li>Bodywork that calms the nervous system and releases tension</li>
              <li>Emotion Code to clear trapped emotions and restore flow</li>
              <li>Holistic coaching for nutrition, sleep, stress, and daily rhythm</li>
            </ul>
            <p className="text-muted-foreground">
              If you’re navigating anxiety, panic, fatigue, or disconnection, I’m here to help you feel safe, present,
              and strong in your body again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/consultation">Book a Free 20‑Minute Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/about">Read My Story</Link>
              </Button>
            </div>
          </div>

          <div className="bg-background/60 backdrop-blur-sm border border-primary/20 rounded-3xl p-6">
            <h3 className="text-xl font-semibold mb-4">Areas I Commonly Support</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground">
              <li className="bg-muted/40 p-3 rounded-xl">Anxiety & Panic</li>
              <li className="bg-muted/40 p-3 rounded-xl">Chronic Fatigue</li>
              <li className="bg-muted/40 p-3 rounded-xl">Depersonalization</li>
              <li className="bg-muted/40 p-3 rounded-xl">Stress & Burnout</li>
              <li className="bg-muted/40 p-3 rounded-xl">Sleep & Recovery</li>
              <li className="bg-muted/40 p-3 rounded-xl">Nervous System Health</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
