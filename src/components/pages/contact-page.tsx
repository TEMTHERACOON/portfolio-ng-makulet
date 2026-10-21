import {
  DiscordIcon,
  FacebookIcon,
  GmailIcon,
  PhoneIcon,
} from "@/components/shared/brand-icons"
import { PageHeader } from "@/components/shared/page-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { contacts } from "@/data/portfolio"

const icons = {
  facebook: FacebookIcon,
  gmail: GmailIcon,
  phone: PhoneIcon,
  discord: DiscordIcon,
}

export function ContactPage() {
  return (
    <section className="flex flex-col gap-10">
      <PageHeader marker="✪" title="CONTACTS" subtitle={contacts.intro} />

      <div className="grid gap-4 sm:grid-cols-2">
        {contacts.items.map((item) => {
          const Icon = icons[item.id]

          return (
            <Card key={item.id} className="gap-4 transition-colors hover:ring-link/40">
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl border border-header/60 text-header">
                    {Icon && <Icon className="size-5" />}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-heading text-[11px] tracking-[0.2em] text-bullet">
                      {item.platform}
                    </span>
                    <span className="text-sm text-white/60">{item.name}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-link break-all font-heading text-base"
                  >
                    {item.value}
                  </a>

                  {item.photo && (
                    <Avatar className="size-14">
                      <AvatarImage src={item.photo} alt={item.photoAlt ?? item.platform} />
                      <AvatarFallback>KC</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
