import type React from "react"
import type { Metadata } from "next"
import { Dancing_Script, Inter, Amatic_SC } from "next/font/google"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const amaticSC = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amatic",
  display: "swap",
})

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const description =
    "Holistic healing with Ninja Nicky — bodywork, Emotion Code, and holistic coaching to help relieve anxiety, panic attacks, depersonalization, and chronic fatigue. Book a free 20‑minute consultation."

  const title = {
    default: "Auraganic Healing | Ninja Nicky",
    template: "%s | Auraganic Healing",
  }

  const meta: Metadata = {
    title,
    description,
    generator: "v0.app",
    keywords: [
      "Auraganic Healing",
      "Ninja Nicky",
      "holistic healing",
      "bodywork",
      "Emotion Code",
      "holistic health coach",
      "anxiety relief",
      "panic attacks",
      "chronic fatigue",
      "natural healing",
      "depersonalization",
      "trauma healing",
      "holistic therapy",
      "energy healing",
      "chakra balancing",
      "crystal therapy",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: title.default,
      description,
      url: "/",
      siteName: "Auraganic Healing",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/placeholder.jpg",
          width: 1200,
          height: 630,
          alt: "Auraganic Healing — Holistic Healing with Ninja Nicky",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title.default,
      description,
      images: ["/placeholder.jpg"],
    },
    icons: {
      icon: "/placeholder-logo.svg",
    },
  }

  if (siteUrl) meta.metadataBase = new URL(siteUrl)
  return meta
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || undefined
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Auraganic Healing",
    url: siteUrl,
    founder: { "@type": "Person", name: "Ninja Nicky" },
    sameAs: [
      // Add real profiles when available
    ],
  }

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ninja Nicky",
    jobTitle: "Holistic Healer",
    description: "Holistic healing practitioner specializing in bodywork, Emotion Code, and coaching.",
    url: siteUrl,
    knowsAbout: ["bodywork", "Emotion Code", "holistic coaching", "anxiety relief", "chronic fatigue", "depersonalization"],
  }

  return (
    <html lang="en">
      <body className={`font-sans ${dancingScript.variable} ${inter.variable} ${amaticSC.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Script id="ld-person" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(personJsonLd)}
        </Script>
        <Script id="ld-organization" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(orgJsonLd)}
        </Script>
      </body>
    </html>
  )
}