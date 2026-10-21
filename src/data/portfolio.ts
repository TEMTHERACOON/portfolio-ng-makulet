export type GalleryItem = {
  src: string
  title: string
  caption?: string
}

export type NavChild = {
  label: string
  to: string
}

export type NavItem = {
  label: string
  to: string
  children?: NavChild[]
}

export const navigation: NavItem[] = [
  { label: "TITLE PAGE", to: "/" },
  {
    label: "ABOUT PAGE",
    to: "/about",
    children: [
      { label: "HOBBIES", to: "/about/hobbies" },
      { label: "EXP", to: "/about/experience" },
      { label: "CONTACT", to: "/about/contact" },
    ],
  },
]

export const profile = {
  name: "ITZ KIRSTEN ELMY S. CAMPOY",
  tagline: "Digital artist turned graphic designer, part-time tarpaulin printer and full-time overthinker.",
  photo: "/images/portrait.svg",
  photoAlt: "Portrait of Itz Kirsten Elmy S. Campoy",
}

export const about = {
  title: "ABOUT PAGE",
  lead: "WELCOME!",
  paragraphs: [
    "This page will serve as my personal portfolio! Browse as you please, learn intersting things about me and get to know me!",
    "I am a digital artist who grew into a graphic designer, a part-time tarpaulin printer, and the kind of person who will absolutely talk about RPG combat systems if you let her.",
  ],
  highlights: [
    { label: "DISCIPLINE", value: "Graphic Design" },
    { label: "BASE", value: "Balayan, Laguna" },
    { label: "FOCUS", value: "Print + Digital" },
    { label: "STATUS", value: "Open to commissions" },
  ],
}

export const hobbies = [
  {
    id: "graphic-design",
    title: "GRAPHIC DESIGN",
    photo: "/images/graphic-design.svg",
    photoAlt: "Graphic design workspace",
    body: [
      "I was originally a digital artist, but branched out to graphic design. Why? Well professionally, I needed it for my part-time job to design templates for tarpaulins. Personally, I love seeing those high-fashion magazine covers and wanted to replicate them! I have an account showcasing my amatuer designs!",
    ],
    links: [
      { label: "FACEBOOK", href: "https://www.facebook.com/kirsten.elmy.campoy" },
      { label: "TIKTOK", href: "https://www.tiktok.com/@itzkirsten" },
    ],
    galleryTitle: "MY GRAPHIC WORKS",
    gallery: [
      { src: "/images/work-magazine-cover.svg", title: "HIGH-FASHION COVER", caption: "Magazine cover study" },
      { src: "/images/work-tarpaulin.svg", title: "TARPAULIN TEMPLATE", caption: "Megaprints Balayan" },
      { src: "/images/work-poster.svg", title: "EVENT POSTER", caption: "Layout exploration" },
      { src: "/images/work-logo.svg", title: "LOGO MARK", caption: "Brand identity practice" },
      { src: "/images/work-banner.svg", title: "SOCIAL BANNER", caption: "Digital kit" },
      { src: "/images/work-brand-kit.svg", title: "BRAND KIT", caption: "Colour + type pairing" },
    ] satisfies GalleryItem[],
  },
  {
    id: "gaming",
    title: "GAMING",
    photo: "/images/gaming.svg",
    photoAlt: "Gaming setup",
    body: [
      "Im no pro gamer, I just like RPG games with combat elements! I also like games that design stuff!",
    ],
    links: [],
    galleryTitle: "GAMES I PLAY",
    gallery: [
      { src: "/images/game-hollow-knight.svg", title: "HOLLOW KNIGHT", caption: "Metroidvania" },
      { src: "/images/game-dress-to-impress.svg", title: "DRESS TO IMPRESS", caption: "Fashion roleplay" },
      { src: "/images/game-deltarune.svg", title: "DELTARUNE", caption: "RPG" },
      { src: "/images/game-dressmaker.svg", title: "DRESSMAKER", caption: "Design RPG" },
      { src: "/images/game-genshin-impact.svg", title: "GENSHIN IMPACT", caption: "Action RPG" },
      { src: "/images/game-zzz.svg", title: "ZENLESS ZONE ZERO", caption: "Action RPG" },
    ] satisfies GalleryItem[],
  },
]

export const experience = {
  title: "EXPERIENCE",
  entries: [
    {
      role: "PART-TIME TARPAULIN PRINTER AND GRAPHIC DESIGNER",
      company: "MEGAPRINTS BALAYAN",
      period: "2026 - ongoing",
      details:
        "Printing and designing tarpaulin layouts for local businesses, from the first mock-up to the final print run.",
      tags: ["PRINT", "GRAPHIC DESIGN", "LAYOUT"],
    },
    {
      role: "CREATED AN INTERACTABLE PHOTOBOOTH WEBSITE",
      company: "ENTREPRENEURSHIP SCHOOL PROJECT",
      period: "2025 - 2026",
      details:
        "An entrepreneurship project that turned into a working web photo booth with live props, layouts and sharing.",
      tags: ["WEB", "UI", "PROJECT"],
    },
    {
      role: "MADE A SIMPLE SCHOOL WEBSITE",
      company: "WITH LEI JUSTINE LAYLAY — ICT STRAND PROJECT",
      period: "2025",
      details:
        "An ICT strand project: a straightforward school website built and shipped alongside a partner.",
      tags: ["HTML", "CSS", "JS"],
    },
  ],
}

export type ContactItem = {
  id: "facebook" | "gmail" | "phone" | "discord"
  platform: string
  name: string
  value: string
  href: string
  photo: string | null
  photoAlt: string | null
}

export const contacts: {
  title: string
  intro: string
  items: ContactItem[]
} = {
  title: "CONTACTS",
  intro: "Got a project, a commission, or just want to say hi? Here is every way to reach me.",
  items: [
    {
      id: "facebook",
      platform: "FACEBOOK",
      name: "KIRSTEN ELMY CAMPOY",
      value: "Kirsten Elmy Campoy",
      href: "https://www.facebook.com/kirsten.elmy.campoy",
      photo: "/images/fb-profile.svg",
      photoAlt: "Facebook profile picture of Kirsten Elmy Campoy",
    },
    {
      id: "gmail",
      platform: "GMAIL",
      name: "EMAIL",
      value: "kirstencampoy@gmail.com",
      href: "mailto:kirstencampoy@gmail.com",
      photo: null,
      photoAlt: null,
    },
    {
      id: "phone",
      platform: "PHONE",
      name: "CALL / TEXT",
      value: "0960-871-5937",
      href: "tel:+639608715937",
      photo: null,
      photoAlt: null,
    },
    {
      id: "discord",
      platform: "DISCORD",
      name: "ITzkc_doingtomfoolery",
      value: "itzkc_doingtomfoolery",
      href: "https://discord.com/users/itzkc_doingtomfoolery",
      photo: "/images/discord-profile.svg",
      photoAlt: "Discord profile picture of itzkc_doingtomfoolery",
    },
  ],
}
