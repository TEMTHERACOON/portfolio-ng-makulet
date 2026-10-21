import type { CSSProperties } from "react"
import { ExternalLink } from "lucide-react"
import { PageHeader } from "@/components/shared/page-header"
import { HorizontalGallery } from "@/components/shared/horizontal-gallery"
import { hobbies } from "@/data/portfolio"

export function HobbiesPage() {
  return (
    <section className="flex flex-col gap-14">
      <PageHeader
        marker="✪"
        title="HOBBIES SUB PAGE"
        subtitle="The two things I spend a suspicious amount of time on: making designs and playing games."
      />

      {hobbies.map((hobby, hobbyIndex) => (
        <article
          key={hobby.id}
          className="flex flex-col gap-8"
          style={{ "--stagger-index": hobbyIndex } as CSSProperties}
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="text-xl leading-none text-bullet"
            >
              ✪
            </span>
            <h2 className="font-heading text-xl text-header sm:text-2xl">
              {hobby.title}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <figure className="relative overflow-hidden rounded-2xl border border-border">
              <img
                src={hobby.photo}
                alt={hobby.photoAlt}
                className="h-64 w-full object-cover shadow-[0_0_60px_-30px_var(--header)] sm:h-72"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black to-transparent px-4 pt-10 pb-3 font-heading text-[11px] tracking-[0.2em] text-bullet">
                {hobby.title}
              </figcaption>
            </figure>

            <div className="content-panel flex flex-col gap-5">
              {hobby.body.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-content/85">
                  {paragraph}
                </p>
              ))}

              {hobby.links.length > 0 && (
                <div className="flex flex-wrap items-center gap-3">
                  {hobby.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-link/60 px-4 py-1.5 font-heading text-xs text-link transition-colors hover:bg-link hover:text-black"
                    >
                      {link.label}
                      <ExternalLink className="size-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <HorizontalGallery
            items={hobby.gallery}
            label={hobby.galleryTitle}
            itemClassName={hobby.id === "gaming" ? "w-40 sm:w-48" : undefined}
          />
        </article>
      ))}
    </section>
  )
}
