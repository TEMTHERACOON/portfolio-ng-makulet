import type { CSSProperties } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { about } from "@/data/portfolio"

export function AboutPage() {
  return (
    <section className="flex flex-col gap-10">
      <PageHeader
        marker="★"
        title={about.title}
        subtitle="A quick peek at who is behind the designs."
      />

      <div className="content-panel flex flex-col gap-5">
        <p className="font-heading text-lg text-bullet">{about.lead}</p>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-content/85">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {about.highlights.map((highlight, index) => (
          <Card
            key={highlight.label}
            size="sm"
            className="stagger-item gap-1 transition-colors hover:ring-link/50"
            style={{ "--stagger-index": index } as CSSProperties}
          >
            <CardContent className="flex flex-col gap-1">
              <span className="font-heading text-[11px] tracking-[0.2em] text-bullet">
                {highlight.label}
              </span>
              <span className="text-lg text-header">{highlight.value}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="flex items-center gap-3 font-heading text-xl text-header">
          <span aria-hidden="true" className="text-xl leading-none text-bullet">
            ✪
          </span>
          WHAT I DO
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {about.toolkit.map((tool, index) => (
            <Card
              key={tool.label}
              className="stagger-item gap-2 transition-colors hover:ring-link/40"
              style={{ "--stagger-index": index } as CSSProperties}
            >
              <CardContent className="flex flex-col gap-1">
                <span className="font-heading text-[11px] tracking-[0.2em] text-bullet">
                  {tool.label}
                </span>
                <span className="text-sm leading-relaxed text-content/80">
                  {tool.value}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="content-panel flex flex-col gap-4">
        <p className="star-marker font-heading text-sm text-bullet">
          CURRENTLY
        </p>
        <ul className="star-list flex flex-col gap-2 text-sm text-content/80">
          {about.currently.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 border-t border-border pt-6">
        <p className="font-heading text-xs tracking-[0.2em] text-content/50">
          GO DEEPER
        </p>
        <div className="flex flex-wrap gap-3">
          <Button
            nativeButton={false}
            render={<Link to="/about/hobbies" />}
            variant="outline"
            className="border-header/60 text-header hover:bg-header/10 hover:text-header"
          >
            HOBBIES
            <ArrowRight className="size-4" />
          </Button>
          <Button
            nativeButton={false}
            render={<Link to="/about/experience" />}
            variant="outline"
            className="border-header/60 text-header hover:bg-header/10 hover:text-header"
          >
            EXPERIENCE
            <ArrowRight className="size-4" />
          </Button>
          <Button
            nativeButton={false}
            render={<Link to="/about/contact" />}
            variant="outline"
            className="border-link/60 text-link hover:bg-link/10 hover:text-link"
          >
            CONTACT
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
