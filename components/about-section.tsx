import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold pt-12">Meet Ninja Nicky</h2>
          
          <div className="flex justify-center py-8">
            <div className="relative w-96 h-[30rem] md:w-[28rem] md:h-[36rem] rounded-[50%] overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image
                src="/nick.jpeg"
                alt="Ninja Nicky with dog at Auraganic Juicery"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto text-pretty leading-relaxed font-light tracking-wide">
            Hi! I'm Ninja Nicky. Formerly of Auraganic Juicery, I started my own wellness center in 2014 as a healing space rooted in nourishment and nature. After my own
            transformation — from anxiety, panic attacks, depersonalization and fatigue — back to vibrant health, I discovered holistic modalities that saved my life. Nowdays, I
            guide others through bodywork, Emotion Code, and holistic coaching.
          </p>
        </div>

        <div className="grid md:grid-cols-[55%_45%] gap-8 items-start pt-12">
          <div className="space-y-5">
            <p className="text-base md:text-lg text-foreground text-pretty leading-relaxed font-light tracking-wide">
              Your body possesses innate healing powers, but trauma and toxins can cloud that wisdom. 
              Together, we can clear what's in the way, and find the right support for your system to return to balance. My work blends grounded somatic practices and energy alignment with simple,
              sustainable lifestyle shifts.
            </p>
            <ul className="list-disc pl-5 text-foreground space-y-2 leading-relaxed font-light tracking-wide">
              <li><strong>Bodywork</strong> to calm the nervous system & release tension</li>
              <li><strong>Emotion Code</strong> to clear trapped emotions and restore flow</li>
              <li><strong>Holistic coaching</strong> for nutrition, sleep, stress, and daily rhythm</li>
            </ul>
            <p className="text-base md:text-lg text-foreground text-pretty leading-relaxed font-light tracking-wide">
              If you're navigating anxiety, panic, fatigue, or disconnection, I'm here to help you feel safe, present,
              and strong in your body again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/consultation">Book a Free 20‑Minute Consultation</Link>
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
