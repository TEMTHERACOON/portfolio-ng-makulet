import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { GalleryItem } from "@/data/portfolio"
import { cn } from "cn"

type HorizontalGalleryProps = {
  items: GalleryItem[]
  className?: string
  itemClassName?: string
  label?: string
}

export function HorizontalGallery({
  items,
  className,
  itemClassName,
  label = "Gallery",
}: HorizontalGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateEdges = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const maxScroll = track.scrollWidth - track.clientWidth
    setCanScrollLeft(track.scrollLeft > 8)
    setCanScrollRight(track.scrollLeft < maxScroll - 8)
  }, [])

  useEffect(() => {
    updateEdges()

    const track = trackRef.current
    if (!track) return

    track.addEventListener("scroll", updateEdges, { passive: true })
    window.addEventListener("resize", updateEdges)

    return () => {
      track.removeEventListener("scroll", updateEdges)
      window.removeEventListener("resize", updateEdges)
    }
  }, [updateEdges, items.length])

  const scrollByAmount = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return

    track.scrollBy({
      left: direction * Math.max(240, track.clientWidth * 0.7),
      behavior: "smooth",
    })
  }

  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center justify-between gap-4">
        <p className="font-heading text-xs tracking-[0.2em] text-bullet">
          {label}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll gallery left"
            className="inline-flex size-8 items-center justify-center rounded-full border border-border text-white transition-colors enabled:hover:border-link enabled:hover:text-link disabled:opacity-30"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            disabled={!canScrollRight}
            aria-label="Scroll gallery right"
            className="inline-flex size-8 items-center justify-center rounded-full border border-border text-white transition-colors enabled:hover:border-link enabled:hover:text-link disabled:opacity-30"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="mt-4 no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {items.map((item) => (
          <figure
            key={item.src}
            className={cn(
              "group relative w-56 shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-link/70 sm:w-64",
              itemClassName
            )}
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              draggable={false}
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-linear-to-t from-black via-black/80 to-transparent p-3">
              <span className="font-heading text-xs text-white">
                {item.title}
              </span>
              {item.caption && (
                <span className="text-[11px] text-bullet/90">
                  {item.caption}
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
