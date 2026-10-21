import { ExternalLink } from "lucide-react"
import { PageHeader } from "@/components/shared/page-header"
import { HorizontalGallery } from "@/components/shared/horizontal-gallery"
import { Card, CardContent } from "@/components/ui/card"
import { hobbies } from "@/data/portfolio"

export function HobbiesPage() {
  return (
    <section className="flex flex-col gap-12">
      <PageHeader
        marker="✪"
        title="HOBBIES SUB PAGE"
        subtitle="The two things I spend a suspicious amount of time on: making designs and playing games."
      />

      {hobbies.map((hobby) => (
        <article key={hobby.id} className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="text-xl leading-none text-bullet">
              ✪
            </span>
            <h2 className="font-heading text-xl text-header sm:text-2xl">
              {hobby.title}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <img
              src={hobby.photo}
              alt={hobby.photoAlt}
              className="h-64 w-full rounded-2xl border border-border object-cover shadow-[0_0_60px_-30px_var(--header)] sm:h-72"
            />

            <Card className="gap-5">
              <CardContent className="flex flex-col gap-5">
                {hobby.body.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-white/85">
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
              </CardContent>
            </Card>
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
