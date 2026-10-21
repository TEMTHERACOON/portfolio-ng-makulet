import type { CSSProperties } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/data/portfolio"

const highlights = [
  "Digital artist who fell for graphic design.",
  "Part-time tarpaulin printer at Megaprints Balayan.",
  "RPG combat enjoyer and design-obsessed.",
  "Currently open to freelance design work.",
]

export function TitlePage() {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
        <div className="relative shrink-0">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2rem] bg-linear-to-br from-header/30 via-link/20 to-transparent blur-2xl"
          />
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            className="relative h-72 w-60 rounded-2xl border border-header/60 object-cover shadow-[0_0_60px_-20px_var(--header)] sm:h-80 sm:w-64"
          />
          <span
            aria-hidden="true"
            className="absolute -right-3 -bottom-3 rounded-xl border border-bullet/60 bg-black px-3 py-1 font-heading text-[11px] text-bullet"
          >
            ★ IT&apos;Z ME
          </span>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="text-xl leading-none text-bullet"
            >
              ★
            </span>
            <span className="font-heading text-xs tracking-[0.25em] text-content/60">
              TITLE PAGE
            </span>
          </div>

          <h1 className="text-glow-header font-heading text-3xl leading-tight text-header sm:text-4xl lg:text-5xl">
            {profile.name}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-content/80">
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

      <ul className="star-list grid gap-2 border-t border-border pt-6 text-sm text-content/75 sm:grid-cols-2">
        {highlights.map((highlight, index) => (
          <li
            key={highlight}
            className="stagger-item"
            style={{ "--stagger-index": index } as CSSProperties}
          >
            {highlight}
          </li>
        ))}
      </ul>

      <a
        href="#about-preview"
        className="group inline-flex w-fit items-center gap-2 font-heading text-[11px] tracking-[0.25em] text-content/40 transition-colors hover:text-link"
      >
        SCROLL
        <ChevronDown className="size-3.5 animate-bounce transition-transform group-hover:translate-y-0.5" />
      </a>

      <div id="about-preview" className="content-panel flex flex-col gap-4">
        <p className="star-marker font-heading text-sm text-bullet">
          A LITTLE INTRO
        </p>
        <p className="leading-relaxed text-content/80">
          Everything here lives in the side navigation — an{" "}
          <Link to="/about" className="inline-link">
            about page
          </Link>{" "}
          with my background, a{" "}
          <Link to="/about/hobbies" className="inline-link">
            hobbies
          </Link>{" "}
          page for graphic design and gaming, my{" "}
          <Link to="/about/experience" className="inline-link">
            experience
          </Link>
          , and a{" "}
          <Link to="/about/contact" className="inline-link">
            contacts
          </Link>{" "}
          page if you want to work together.
        </p>
      </div>
    </section>
  )
}
