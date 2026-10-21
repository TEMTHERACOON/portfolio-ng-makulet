import { NavLink } from "react-router-dom"
import { navigation } from "@/data/portfolio"

type SideNavProps = {
  onNavigate?: () => void
}

export function SideNav({ onNavigate }: SideNavProps) {
  return (
    <nav aria-label="Portfolio sections" className="flex flex-col gap-1">
      {navigation.map((item) => (
        <div key={item.to} className="flex flex-col">
          <NavLink
            to={item.to}
            end={item.to === "/"}
            onClick={onNavigate}
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
                  className="nav-link-sub inline-block w-fit rounded-md px-2 py-0.5 outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                >
                  {child.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
