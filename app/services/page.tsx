import Link from "next/link"
import type { Metadata } from "next"
import { services } from "@/lib/services"

export const metadata: Metadata = {
  title: "Healing Services — Auraganic Healing",
  description:
    "Explore bodywork, Emotion Code, holistic health coaching, and more. Book a free 20‑minute consultation to get started.",
  alternates: { canonical: "/services" },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-16 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Healing Services</h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
          Natural, compassionate modalities to calm your nervous system, release emotional blocks, and rebuild resilient
          health. Choose a service below to learn more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="block border border-primary/20 rounded-2xl p-6 bg-background/60 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <span className="text-primary font-medium">{s.price}</span>
              </div>
              <p className="text-muted-foreground">{s.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}