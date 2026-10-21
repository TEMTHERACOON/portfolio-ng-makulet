import { cn } from "cn"

type PageHeaderProps = {
  marker?: string
  title: string
  subtitle?: string
  className?: string
}

export function PageHeader({
  marker = "★",
  title,
  subtitle,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("flex flex-col gap-3", className)}>
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="text-xl leading-none text-bullet">
          {marker}
        </span>
        <h1 className="text-glow-header font-heading text-2xl leading-tight text-header sm:text-3xl">
          {title}
        </h1>
      </div>
      {subtitle && (
        <p className="max-w-2xl text-sm leading-relaxed text-white/70">
          {subtitle}
        </p>
      )}
      <div className="h-px w-full bg-linear-to-r from-header/70 via-link/40 to-transparent" />
    </header>
  )
}
