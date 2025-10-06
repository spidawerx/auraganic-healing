import type { Metadata, ResolvingMetadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { notFound } from "next/navigation"
import { services } from "@/lib/services"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

type Props = { params: { slug: string } }

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  const title = `${service.title} — Auraganic Healing`
  const description = `${service.shortDescription} Book a free 20‑minute consultation.`
  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `/services/${service.slug}`,
      type: "article",
      images: [{ url: "/placeholder.jpg", width: 1200, height: 630, alt: service.title }],
    },
  }
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "Person",
      name: "Ninja Nicky",
    },
    brand: {
      "@type": "Brand",
      name: "Auraganic Healing",
    },
    areaServed: "Remote and local",
  }

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Services", item: "/services" },
      { "@type": "ListItem", position: 2, name: service.title, item: `/services/${service.slug}` },
    ],
  }

  return (
    <main className="min-h-screen pt-16">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-primary font-semibold mb-6">{service.price}</p>
          <p className="text-lg text-muted-foreground mb-8">{service.longDescription}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Key Benefits</h2>
              <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                {service.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">What to Expect</h2>
              <p className="text-muted-foreground">
                Sessions are tailored to your goals and sensitivity. We begin with a brief intake, set clear intentions,
                and move at a pace that feels safe and supportive.
              </p>
            </div>
          </div>

          {service.faqs.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
              <div className="space-y-4">
                {service.faqs.map((f) => (
                  <div key={f.question} className="border border-border rounded-xl p-4 bg-background/50">
                    <div className="font-medium mb-1">{f.question}</div>
                    <div className="text-muted-foreground">{f.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/consultation">Book Free 20‑Minute Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      <Script id="ld-service" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
      <Script id="ld-breadcrumbs" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>
    </main>
  )
}
