import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "cn"

/**
 * Floating "back to top" control. Hidden until the user scrolls past the
 * first viewport, then it fades in above the content.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className={cn(
              "fixed right-5 bottom-5 z-40 inline-flex size-11 items-center justify-center rounded-full border border-header/70 bg-background/90 text-header backdrop-blur transition-all duration-300 hover:border-link hover:text-link",
              visible
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-3 opacity-0"
            )}
          />
        }
      >
        <ArrowUp className="size-5" />
      </TooltipTrigger>
      <TooltipContent side="left">Back to top</TooltipContent>
    </Tooltip>
  )
}
