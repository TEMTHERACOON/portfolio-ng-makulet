import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/data/portfolio"

export function TitlePage() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
        <div className="relative shrink-0">
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            className="h-72 w-60 rounded-2xl border border-header/60 object-cover shadow-[0_0_60px_-20px_var(--header)] sm:h-80 sm:w-64"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 rounded-xl border border-bullet/60 bg-black px-3 py-1 font-heading text-[11px] text-bullet"
          >
            ★ IT&apos;Z ME
          </span>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="text-xl leading-none text-bullet">
              ★
            </span>
            <span className="font-heading text-xs tracking-[0.25em] text-white/60">
              TITLE PAGE
            </span>
          </div>

          <h1 className="font-heading text-3xl leading-tight text-header text-glow-header sm:text-4xl lg:text-5xl">
            {profile.name}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-white/80">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              nativeButton={false}
              render={<Link to="/about" />}
              className="bg-header text-white hover:bg-header/80"
            >
              ENTER ABOUT PAGE
              <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<Link to="/about/contact" />}
              variant="outline"
              className="border-link/60 text-link hover:bg-link/10 hover:text-link"
            >
              CONTACT ME
            </Button>
          </div>
        </div>
      </div>

      <ul className="star-list grid gap-2 border-t border-border pt-6 text-sm text-white/75 sm:grid-cols-2">
        <li>Digital artist who fell for graphic design.</li>
        <li>Part-time tarpaulin printer at Megaprints Balayan.</li>
        <li>RPG combat enjoyer and design-obsessed.</li>
        <li>Currently open to freelance design work.</li>
      </ul>
    </section>
  )
}
