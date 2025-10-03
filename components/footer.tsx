import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Leaf, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const footerLinks = {
  "Healing Modalities": [
    { label: "Energy Healing", href: "/services/chakra-balancing-sessions" },
    { label: "Herbal Medicine", href: "/services" },
    { label: "Crystal Therapy", href: "/services/crystal-healing-therapy" },
    { label: "Sound Healing", href: "/services" },
    { label: "Acupuncture", href: "/services" },
    { label: "Aromatherapy", href: "/services" },
  ],
  Resources: [
    { label: "Knowledge Library", href: "/about" },
    { label: "Practitioner Directory", href: "/about" },
    { label: "Research Studies", href: "/about" },
    { label: "Healing Guides", href: "/services" },
    { label: "Community Forum", href: "/about" },
    { label: "Success Stories", href: "/about" },
  ],
  Support: [
    { label: "Help Center", href: "/about" },
    { label: "Contact Us", href: "/consultation" },
    { label: "Live Chat", href: "/consultation" },
    { label: "Book Consultation", href: "/consultation" },
    { label: "Practitioner Login", href: "/about" },
    { label: "Member Portal", href: "/about" },
  ],
} as const

export function Footer() {
  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">{"Auraganic Healing"}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              {
                "Empowering your journey to natural wellness through ancient wisdom and modern understanding. Transform your life with holistic healing practices."
              }
            </p>
            <div className="flex items-center gap-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>{"© 2025 Auraganic Healing. All rights reserved."}</div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-primary transition-colors">
              {"Privacy Policy"}
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              {"Terms of Service"}
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              {"Cookie Policy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
