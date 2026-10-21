import { PageHeader } from "@/components/shared/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { experience } from "@/data/portfolio"

export function ExperiencePage() {
  return (
    <section className="flex flex-col gap-10">
      <PageHeader
        marker="✪"
        title="EXPERIENCE SUB PAGE"
        subtitle="Work, projects, and the things I have shipped so far."
      />

      <div className="flex flex-col gap-6">
        {experience.entries.map((entry, index) => (
          <Card
            key={entry.role}
            className="gap-4 transition-colors hover:ring-link/40"
          >
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col gap-2">
                  <span className="font-heading text-xs tracking-[0.2em] text-bullet">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-lg leading-snug text-header sm:text-xl">
                    {entry.role}
                  </h2>
                  <p className="text-sm text-white/70">{entry.company}</p>
                </div>

                <span className="w-fit shrink-0 rounded-full border border-link/60 px-3 py-1 font-heading text-[11px] text-link">
                  {entry.period}
                </span>
              </div>

              <p className="leading-relaxed text-white/80">{entry.details}</p>

              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-border bg-transparent text-bullet"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
