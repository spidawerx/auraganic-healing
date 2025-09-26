import { HeroSection } from "@/components/hero-section"
import { ArticleSection } from "@/components/article-section"
import { ServicesSection } from "@/components/services-section"
import { HealingModalitiesSection } from "@/components/healing-modalities-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CommunitySection } from "@/components/community-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ArticleSection />
      <ServicesSection />
      <HealingModalitiesSection />
      <TestimonialsSection />
      <CommunitySection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
