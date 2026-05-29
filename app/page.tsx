import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Visual } from "@/components/landing/visual"
import { Features } from "@/components/landing/features"
import { About } from "@/components/landing/about"
import { Reviews } from "@/components/landing/reviews"
import { FinalCta } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at top, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at top, black 30%, transparent 70%)",
        }}
      />

      <Navbar />
      <Hero />
      <Visual />
      <Features />
      <About />
      <Reviews />
      <FinalCta />
      <Footer />
    </main>
  )
}
