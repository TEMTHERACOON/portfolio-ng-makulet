import { useEffect, useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { SideNav } from "@/components/layout/side-nav"
import { BackToTop } from "@/components/shared/back-to-top"
import { PageTransition } from "@/components/shared/page-transition"
import { ScrollProgress } from "@/components/shared/scroll-progress"
import { SiteFooter } from "@/components/shared/site-footer"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { Separator } from "@/components/ui/separator"
import { profile } from "@/data/portfolio"

export function PortfolioLayout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const [lastPath, setLastPath] = useState(location.pathname)

  // Close the mobile drawer whenever the route changes (state adjusted during
  // render so we do not trigger an extra effect pass).
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <div className="min-h-svh bg-background">
      <ScrollProgress />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:rounded-full focus:bg-header focus:px-4 focus:py-2 focus:font-heading focus:text-xs focus:text-white"
      >
        Skip to content
      </a>

      {/* Mobile bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between gap-4 border-b border-border bg-background/95 px-4 py-3 backdrop-blur md:hidden">
        <Link to="/" className="font-heading text-sm text-header">
          {profile.name}
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-content transition-colors hover:border-link hover:text-link"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70"
          />
          <div className="absolute inset-y-0 left-0 w-72 overflow-y-auto border-r border-border bg-background p-5">
            <SideNav onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col justify-between border-r border-border bg-background px-6 py-8 md:flex">
        <div className="flex flex-col gap-10">
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl border border-header/70 font-heading text-sm text-link">
              KC
            </span>
            <span className="font-heading text-xs leading-tight text-content/80 transition-colors group-hover:text-link">
              {profile.name}
            </span>
          </Link>

          <SideNav />
        </div>

        <div className="flex flex-col gap-4">
          <Separator className="bg-border" />
          <ThemeToggle className="size-8" />
          <p className="font-heading text-[11px] leading-relaxed text-content/60">
            © {new Date().getFullYear()} KIRSTEN ELMY S. CAMPOY
            <br />
            BUILT WITH VITE + REACT
          </p>
        </div>
      </aside>

      {/* Content */}
      <main id="main-content" className="md:pl-72">
        <div className="mx-auto flex min-h-svh w-full max-w-5xl flex-col px-5 py-10 sm:px-8 sm:py-14">
          <PageTransition>
            <div className="flex-1">
              <Outlet />
            </div>
          </PageTransition>

          <SiteFooter />
        </div>
      </main>

      <BackToTop />
    </div>
  )
}
