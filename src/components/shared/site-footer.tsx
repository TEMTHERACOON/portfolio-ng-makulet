import { Link } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { navigation, profile } from "@/data/portfolio"

/**
 * Site footer — quick navigation, the owner credit and a star marker.
 */
export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-border pt-8 pb-4">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-3">
          <span aria-hidden="true" className="text-lg leading-none text-bullet">
            ★
          </span>
          <p className="font-heading text-sm text-content/80">{profile.name}</p>
          <p className="max-w-sm text-sm leading-relaxed text-content/65">
            {profile.tagline}
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-col gap-4">
          <p className="font-heading text-[11px] tracking-[0.2em] text-bullet">
            JUMP TO
          </p>
          <ul className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
            {navigation.map((item) => (
              <li key={item.to} className="flex flex-col gap-1.5">
                <Link
                  to={item.to}
                  className="font-heading text-sm text-content/70 transition-colors hover:text-link"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.to}
                    to={child.to}
                    className="font-heading text-xs text-content/60 transition-colors hover:text-link"
                  >
                    {child.label}
                  </Link>
                ))}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Separator className="my-8 bg-border" />

      <div className="flex flex-col gap-2 font-heading text-[11px] tracking-wide text-content/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} KIRSTEN ELMY S. CAMPOY</p>
        <p>BUILT WITH VITE + REACT + SHADCN/UI</p>
      </div>
    </footer>
  )
}
