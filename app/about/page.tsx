import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Ninja Nicky — Holistic Healing",
  description:
    "Meet Ninja Nicky, holistic healer and founder of Auraganic Juicery (2014–2024). From anxiety and chronic fatigue to vibrant health through bodywork, Emotion Code, and holistic coaching.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Ninja Nicky — Holistic Healing",
    description:
      "Founder story and healing philosophy: bodywork, Emotion Code, and holistic coaching for anxiety, panic, depersonalization, and chronic fatigue.",
    url: "/about",
    type: "article",
    images: [{ url: "/placeholder.jpg", width: 1200, height: 630, alt: "About Ninja Nicky" }],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ninja Nicky</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            I opened Auraganic Juicery in 2014 as an alternative space for healing through nourishment. Before that, I
            was a bodyworker—pouring my heart and energy into supporting others. When I faced my own grueling health
            transformation—battling anxiety, panic attacks, depersonalization, chronic fatigue syndrome, and related
            challenges—I discovered holistic modalities that truly saved my life.
          </p>
          <div className="prose prose-lg max-w-none space-y-6">
            <p>
              Those experiences shaped my mission: to guide you back to vibrant health with practical, compassionate,
              nature-led healing. Your body knows how to heal—trauma and toxins can cloud its power. Together, we clear
              what’s in the way and help your system remember its natural rhythm.
            </p>
            <p>
              Today I support clients through a blend of modalities tailored to their needs:
            </p>
            <ul>
              <li>
                <strong>Bodywork</strong> to calm the nervous system and release stored tension
              </li>
              <li>
                <strong>Emotion Code</strong> to release trapped emotions and restore energetic flow
              </li>
              <li>
                <strong>Holistic coaching</strong> for nutrition, sleep, stress, and daily rhythm
              </li>
            </ul>
            <p>
              If you’re navigating anxiety, panic, fatigue, or disconnection, you’re not broken—your body is asking for
              care. I’m here to help you feel safe, present, and strong again.
            </p>
            <p className="font-medium">
              Healing is possible—book a free 20‑minute consultation to start.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
