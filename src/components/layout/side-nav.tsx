import { NavLink } from "react-router-dom"
import { navigation, type NavItem } from "@/data/portfolio"

type SideNavProps = {
  onNavigate?: () => void
}

/** Full names for the abbreviated labels used in the sidebar. */
const EXPANSIONS: Record<string, string> = {
  EXP: "EXPERIENCE",
}

function NavEntry({
  item,
  onNavigate,
}: {
  item: NavItem
  onNavigate?: () => void
}) {
  const expansion = EXPANSIONS[item.label]

  return (
    <div className="flex flex-col">
      <NavLink
        to={item.to}
        end={item.to === "/"}
        onClick={onNavigate}
        title={expansion}
        aria-label={expansion ? `${item.label} — ${expansion}` : item.label}
        className="nav-link relative inline-block w-fit rounded-md px-2 py-1 outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute top-1/2 -left-3 h-1/2 w-1 -translate-y-1/2 rounded-full bg-header"
              />
            )}
            {item.label}
            {expansion && (
              <span
                aria-hidden="true"
                className="ml-2 inline-block size-1.5 rounded-full bg-bullet/70"
              />
            )}
          </>
        )}
      </NavLink>

      {item.children && (
        <div className="mt-1 flex flex-col gap-0.5 border-l border-border/70 pl-4">
          {item.children.map((child) => (
            <NavLink
              key={child.to}
              to={child.to}
              onClick={onNavigate}
              className="nav-link-sub relative inline-block w-fit rounded-md px-2 py-0.5 outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 -left-[1.15rem] h-1/2 w-1 -translate-y-1/2 rounded-full bg-link"
                    />
                  )}
                  {child.label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export function SideNav({ onNavigate }: SideNavProps) {
  return (
    <nav aria-label="Portfolio sections" className="flex flex-col gap-1">
      {navigation.map((item) => (
        <NavEntry key={item.to} item={item} onNavigate={onNavigate} />
      ))}
    </nav>
  )
}
