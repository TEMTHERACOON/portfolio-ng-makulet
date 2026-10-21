import { useEffect, useState } from "react"

/**
 * Thin gradient bar pinned to the top of the viewport that fills up as the
 * page is scrolled. Uses requestAnimationFrame so it stays in sync with
 * the scroll position without causing extra React renders.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight

      if (scrollable <= 0) {
        setProgress(0)
        return
      }

      setProgress(Math.min(1, Math.max(0, window.scrollY / scrollable)))
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent"
    >
      <div
        className="h-full origin-left bg-linear-to-r from-header via-link to-bullet transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
