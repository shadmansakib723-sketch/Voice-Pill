import { AudioLines, MessageSquareText, Sparkles, ShieldCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Feature = {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  iconGradient: string
}

const features: Feature[] = [
  {
    icon: AudioLines,
    title: "Communication Exercises",
    description: "Improve clarity, confidence, and the way you express your thoughts.",
    gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
    iconGradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: MessageSquareText,
    title: "Deep Voice Training",
    description: "Develop a deeper, richer voice that naturally commands attention.",
    gradient: "from-purple-500/20 via-fuchsia-500/20 to-pink-500/20",
    iconGradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Body Language Mastery",
    description: "Learn powerful nonverbal habits that build presence and attraction.",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    iconGradient: "from-emerald-400 to-cyan-500",
  },
  {
    icon: ShieldCheck,
    title: "Presence & Charisma",
    description: "Develop authority, confidence, and leadership in every conversation.",
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    iconGradient: "from-amber-400 to-orange-500",
  },
]

export function Features() {
  return (
    <section id="features" className="relative px-6 py-24 md:py-32">
      {/* Animated background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 h-96 w-96 animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl [animation-delay:2s]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="size-3.5 text-cyan-400" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">Features</p>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Master the way you{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              communicate
            </span>
          </h2>
          <p className="mt-6 text-pretty text-base text-white/60 md:text-lg">
            Train the skills behind confidence, charisma, and connection.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                />
                
                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-2xl">
                  {/* Animated gradient background - always visible */}
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 bg-gradient-to-br ${feature.gradient} opacity-30 blur-2xl transition-all duration-500 group-hover:opacity-60 group-hover:scale-150`}
                  />

                  <div className="relative">
                    {/* Icon with gradient */}
                    <div className="relative inline-flex">
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.iconGradient} opacity-20 blur-lg transition-opacity group-hover:opacity-40`} />
                      <div className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-3 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:ring-white/20">
                        <Icon className="size-6 text-white transition-all" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="mt-8 text-lg font-semibold leading-tight text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60 transition-colors group-hover:text-white/80">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom gradient line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${feature.iconGradient} opacity-0 transition-opacity duration-300 group-hover:opacity-50`} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
