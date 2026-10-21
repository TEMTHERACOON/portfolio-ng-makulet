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

      <Card className="gap-5">
        <p className="font-heading text-lg text-bullet">{about.lead}</p>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-white/85">
            {paragraph}
          </p>
        ))}
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {about.highlights.map((highlight) => (
          <Card
            key={highlight.label}
            size="sm"
            className="gap-1 transition-colors hover:ring-link/50"
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

      <div className="flex flex-col gap-4 border-t border-border pt-6">
        <p className="font-heading text-xs tracking-[0.2em] text-white/50">
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
