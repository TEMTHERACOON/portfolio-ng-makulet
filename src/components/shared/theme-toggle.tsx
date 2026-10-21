import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "cn"

const DARK_QUERY = "(prefers-color-scheme: dark)"

function useResolvedTheme() {
  const { theme } = useTheme()
  const [systemIsDark, setSystemIsDark] = useState(
    () => window.matchMedia(DARK_QUERY).matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(DARK_QUERY)
    const onChange = (event: MediaQueryListEvent) =>
      setSystemIsDark(event.matches)

    mediaQuery.addEventListener("change", onChange)
    return () => mediaQuery.removeEventListener("change", onChange)
  }, [])

  if (theme === "system") return systemIsDark ? "dark" : "light"
  return theme
}

/**
 * Small toggle that flips between the dark and light palettes. The portfolio
 * keeps the same brand colours in both modes, so the toggle only changes
 * the surface tints.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme } = useTheme()
  const resolved = useResolvedTheme()
  const isDark = resolved === "dark"
  const label = isDark ? "Switch to light theme" : "Switch to dark theme"

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={label}
            className={cn(
              "inline-flex size-9 items-center justify-center rounded-full border border-border text-content transition-colors hover:border-link hover:text-link",
              className
            )}
          />
        }
      >
        {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  )
}
