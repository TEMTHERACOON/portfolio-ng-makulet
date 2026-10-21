import type { ReactNode } from "react"
import { useLocation } from "react-router-dom"

type PageTransitionProps = {
  children: ReactNode
}

/**
 * Fades + lifts the page in whenever the route changes.
 * The `key` forces a remount on every navigation, so the CSS animation
 * replays each time without needing any state.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const { pathname } = useLocation()

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  )
}
