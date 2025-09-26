import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free 20‑Minute Consultation — Auraganic Healing",
  description:
    "Book a free 20‑minute consultation with Ninja Nicky to discuss your goals and the best healing modalities for you.",
  alternates: { canonical: "/consultation" },
}

export default function ConsultationPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Free 20‑Minute Consultation</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Let’s talk about what you’re experiencing and map a clear, compassionate next step. We’ll discuss your goals
          and which modalities—bodywork, Emotion Code, or coaching—fit best right now.
        </p>
        <div className="rounded-2xl border border-primary/20 p-6 bg-background/60">
          <p className="mb-4">Use your preferred method to request a time:</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Email: hello@auraganic-healing.com</li>
            <li>SMS: (555) 111‑2222</li>
            <li>Instagram DM: @auraganic.healing</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
