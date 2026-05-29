"use client"

import { useState, useEffect, useCallback } from "react"
import { Star, Quote, Plus, X, Send, Sparkles } from "lucide-react"

type Review = {
  id: number
  text: string
  author: string
  rating: number
  initials: string
  isUserReview?: boolean
}

const defaultReviews: Review[] = [
  {
    id: 1,
    text: "This app transformed the way I speak. My voice feels so much deeper and more confident now. Highly recommend!",
    author: "Bokkor Miya",
    rating: 5,
    initials: "BM",
  },
  {
    id: 2,
    text: "I've tried many voice training apps, but this one actually delivers results. The exercises are practical and effective.",
    author: "James",
    rating: 5,
    initials: "J",
  },
  {
    id: 3,
    text: "The clarity in my speech improved dramatically after just two weeks. This is a game-changer for professionals.",
    author: "Emma L.",
    rating: 5,
    initials: "EL",
  },
  {
    id: 4,
    text: "Finally, a voice app that doesn't feel like a gimmick. The science behind it shows in every feature.",
    author: "Michael R.",
    rating: 5,
    initials: "MR",
  },
  {
    id: 5,
    text: "My confidence skyrocketed. I no longer hesitate during presentations. Worth every penny!",
    author: "Lisa Tania",
    rating: 5,
    initials: "LT",
  },
  {
    id: 6,
    text: "The community support is amazing. Everyone's progress is motivating. Best investment I've made for myself.",
    author: "David Pal",
    rating: 5,
    initials: "DP",
  },
]

const STORAGE_KEY = "vox-user-reviews"

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

function StarRating({
  rating,
  interactive = false,
  hovered,
  onRate,
  onHover,
  onLeave,
  size = "sm",
}: {
  rating: number
  interactive?: boolean
  hovered?: number
  onRate?: (r: number) => void
  onHover?: (r: number) => void
  onLeave?: () => void
  size?: "sm" | "md" | "lg"
}) {
  const sizeClass = size === "lg" ? "h-8 w-8" : size === "md" ? "h-5 w-5" : "h-4 w-4"
  const display = hovered !== undefined && hovered > 0 ? hovered : rating

  return (
    <div className="flex gap-1" onMouseLeave={onLeave}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => onRate?.(star)}
          onMouseEnter={() => onHover?.(star)}
          className={`transition-all duration-200 ${interactive ? "cursor-pointer hover:scale-125" : "cursor-default"}`}
        >
          <Star
            className={`${sizeClass} transition-colors duration-200 ${
              star <= display
                ? "fill-yellow-400 text-yellow-400"
                : "fill-transparent text-white/20"
            }`}
          />
        </button>
      ))}
    </div>
  )
}

export function Reviews() {
  const [userReviews, setUserReviews] = useState<Review[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formName, setFormName] = useState("")

  const [formText, setFormText] = useState("")
  const [formRating, setFormRating] = useState(0)
  const [hoveredStar, setHoveredStar] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [justSubmitted, setJustSubmitted] = useState(false)

  // Load user reviews from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        setUserReviews(JSON.parse(saved))
      }
    } catch {
      // ignore
    }
  }, [])

  const allReviews = [...userReviews, ...defaultReviews]

  const avgRating =
    allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setFormName("")
    setFormText("")
    setFormRating(0)
    setHoveredStar(0)
    setIsSubmitting(false)
  }, [])

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (!formName.trim() || !formText.trim() || formRating === 0) return

      setIsSubmitting(true)

      // Simulate a brief delay for UX polish
      setTimeout(() => {
        const newReview: Review = {
          id: Date.now(),
          text: formText.trim(),
          author: formName.trim(),
          rating: formRating,
          initials: getInitials(formName.trim()),
          isUserReview: true,
        }

        const updated = [newReview, ...userReviews]
        setUserReviews(updated)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))

        setJustSubmitted(true)
        closeModal()

        setTimeout(() => setJustSubmitted(false), 3000)
      }, 600)
    },
    [formName, formText, formRating, userReviews, closeModal]
  )

  // Close on Escape
  useEffect(() => {
    if (!isModalOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isModalOpen, closeModal])

  const isFormValid = formName.trim() && formText.trim() && formRating > 0

  return (
    <>
      <section id="reviews" className="relative px-6 py-24 md:py-32">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 h-80 w-80 animate-pulse rounded-full bg-yellow-500/5 blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 h-80 w-80 animate-pulse rounded-full bg-purple-500/5 blur-3xl [animation-delay:3s]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <Sparkles className="size-3.5 text-yellow-400" />
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                Testimonials
              </p>
            </div>
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight md:text-5xl">
              Trusted by thousands worldwide.
            </h2>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.round(avgRating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-transparent text-white/20"
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">
                {avgRating.toFixed(1)} out of 5
              </span>
            </div>

            {/* Write a Review button */}
            <button
              id="write-review-btn"
              onClick={() => setIsModalOpen(true)}
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-gradient-to-r from-white/[0.08] to-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:from-white/[0.12] hover:to-white/[0.06] hover:shadow-lg hover:shadow-white/5 active:scale-[0.97]"
            >
              <Plus className="size-4 transition-transform duration-300 group-hover:rotate-90" />
              Write a Review
            </button>
          </div>

          {/* Success toast */}
          <div
            className={`pointer-events-none fixed left-1/2 top-8 z-[60] -translate-x-1/2 transition-all duration-500 ${
              justSubmitted
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-400 shadow-lg shadow-emerald-500/10 backdrop-blur-xl">
              <Sparkles className="size-4" />
              Review submitted successfully!
            </div>
          </div>

          {/* Reviews grid */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allReviews.map((review) => (
              <div
                key={review.id}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  review.isUserReview
                    ? "border-yellow-500/20 bg-gradient-to-br from-yellow-500/[0.04] to-transparent hover:border-yellow-500/30"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                {/* Top glow line */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100 ${
                    review.isUserReview
                      ? "from-transparent via-yellow-400/40 to-transparent"
                      : "from-transparent via-white/20 to-transparent"
                  }`}
                />

                {/* User review badge */}
                {review.isUserReview && (
                  <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-yellow-400">
                    <Sparkles className="size-2.5" />
                    Your Review
                  </div>
                )}

                <Quote className="h-6 w-6 text-white/30" />

                <p className="mt-4 leading-relaxed text-white/70">
                  {review.text}
                </p>

                <div className="mt-4 flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star
                      key={`empty-${i}`}
                      className="h-4 w-4 fill-transparent text-white/15"
                    />
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white ${
                      review.isUserReview
                        ? "bg-gradient-to-br from-yellow-500 to-orange-500"
                        : "bg-gradient-to-br from-blue-500 to-purple-500"
                    }`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{review.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Write a review"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeModal}
          />

          {/* Modal content */}
          <div className="relative w-full max-w-lg animate-in fade-in slide-in-from-bottom-4 zoom-in-95 duration-300">
            {/* Glow behind modal */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-yellow-500/10 via-purple-500/10 to-cyan-500/10 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a0a] shadow-2xl shadow-black/50">
              {/* Top gradient bar */}
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Write a Review
                  </h3>
                  <p className="mt-1 text-sm text-white/50">
                    Share your experience with the community
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6">
                {/* Star rating */}
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Your Rating <span className="text-red-400">*</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <StarRating
                      rating={formRating}
                      interactive
                      hovered={hoveredStar}
                      onRate={setFormRating}
                      onHover={setHoveredStar}
                      onLeave={() => setHoveredStar(0)}
                      size="lg"
                    />
                    {(hoveredStar > 0 || formRating > 0) && (
                      <span className="text-sm font-medium text-yellow-400/80">
                        {
                          ["", "Poor", "Fair", "Good", "Great", "Excellent"][
                            hoveredStar || formRating
                          ]
                        }
                      </span>
                    )}
                  </div>
                </div>

                {/* Name field */}
                <div className="mb-4">
                  <label
                    htmlFor="review-name"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="review-name"
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Your name"
                    maxLength={40}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-yellow-500/40 focus:ring-1 focus:ring-yellow-500/20"
                  />
                </div>

                {/* Review text */}
                <div className="mb-6">
                  <label
                    htmlFor="review-text"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    Your Review <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="review-text"
                    value={formText}
                    onChange={(e) => setFormText(e.target.value)}
                    placeholder="Tell us about your experience..."
                    rows={4}
                    maxLength={500}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm leading-relaxed text-white placeholder-white/30 outline-none transition-all focus:border-yellow-500/40 focus:ring-1 focus:ring-yellow-500/20"
                  />
                  <p className="mt-1.5 text-right text-xs text-white/30">
                    {formText.length}/500
                  </p>
                </div>

                {/* Submit */}
                <button
                  id="submit-review-btn"
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`group flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    isFormValid && !isSubmitting
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30 hover:brightness-110 active:scale-[0.98]"
                      : "cursor-not-allowed bg-white/5 text-white/30"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      Submit Review
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
