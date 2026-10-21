import type { CSSProperties } from "react"
import {
  DiscordIcon,
  FacebookIcon,
  GmailIcon,
  PhoneIcon,
} from "@/components/shared/brand-icons"
import { ContactForm } from "@/components/shared/contact-form"
import { PageHeader } from "@/components/shared/page-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
        {contacts.items.map((item, index) => {
          const Icon = icons[item.id]

          return (
            <div
              key={item.id}
              className="stagger-item content-panel flex flex-col gap-4"
              style={{ "--stagger-index": index } as CSSProperties}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-xl border border-header/60 text-header">
                  {Icon && <Icon className="size-5" />}
                </span>
                <div className="flex flex-col">
                  <span className="font-heading text-[11px] tracking-[0.2em] text-bullet">
                    {item.platform}
                  </span>
                  <span className="text-sm text-content/60">{item.name}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-link font-heading text-base break-all"
                >
                  {item.value}
                </a>

                {item.photo && (
                  <Avatar className="size-14">
                    <AvatarImage
                      src={item.photo}
                      alt={item.photoAlt ?? item.platform}
                    />
                    <AvatarFallback>KC</AvatarFallback>
                  </Avatar>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="flex items-center gap-3 font-heading text-xl text-header">
          <span aria-hidden="true" className="text-xl leading-none text-bullet">
            ✪
          </span>
          SEND A MESSAGE
        </h2>

        <div className="content-panel">
          <ContactForm email={contacts.email} />
        </div>
      </div>
    </section>
  )
}
