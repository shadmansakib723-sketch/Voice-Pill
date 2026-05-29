import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section id="download" className="relative px-6 py-32 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.07] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Ready to Transform{" "}
          <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">Your Voice?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-pretty text-white/60 md:text-lg">
          Install in seconds. Speak with presence in minutes.
        </p>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            size="lg"
            className="group h-12 rounded-full bg-white px-7 text-black shadow-[0_0_50px_-10px_rgba(255,255,255,0.6)] transition-all hover:bg-white/90 hover:shadow-[0_0_70px_-10px_rgba(255,255,255,0.8)]"
          >
            <Link href="/onboarding">
              <Download className="size-4" />
              Get the App
            </Link>
          </Button>
        </div>

        <p className="mt-6 text-xs text-white/40"> </p>
      </div>
    </section>
  )
}
