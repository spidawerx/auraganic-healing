import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000"

  const staticRoutes = ["/", "/about", "/services", "/consultation"].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }))

  const serviceSlugs = [
    "bodywork",
    "emotion-code",
    "health-coaching",
    "weight-loss-coaching",
    "raw-uncooking-classes",
    "karate-jiu-jitsu",
    "acro-yoga-for-couples",
    "crystal-healing-therapy",
    "chakra-balancing-sessions",
  ]

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
