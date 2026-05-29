import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-24 md:pt-28 md:pb-32">
      {/* Soft glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Speak With{" "}
          <span className="relative inline-block">
            <span className="relative bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              Presence.
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/60 md:text-lg">
          When you <span className="text-white font-semibold">master communication</span>, you'll naturally speak with <span className="text-white font-semibold">confidence</span> and <span className="text-white font-semibold">influence</span> others in any situation. Every conversation becomes an opportunity to <span className="text-white font-semibold">win trust</span> and leave a lasting <span className="text-white font-semibold">impression</span>. With these skills, you don't just talk, you connect and create impact.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group h-12 rounded-full bg-white px-6 text-black shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-all hover:bg-white/90 hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.7)]"
          >
            <Link href="#download">
              <Download className="size-4" />
              Download
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="ghost"
            className="group h-12 rounded-full border border-white/10 bg-white/[0.02] px-6 text-white backdrop-blur transition-colors hover:bg-white/5 hover:text-white"
          >
            <Link href="#features">
              Learn More
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <p className="mt-8 text-xs text-white/40">Transform your voice · Build confidence · Master communication</p>
      </div>
    </section>
  )
}
