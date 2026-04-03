# Product Requirements Document
## Linkup Exclusive Autos — Website (Phase 1) · v2.0

**Version:** 2.0 (Logo-aligned design system, light/dark theme)
**Date:** April 2026
**Stack:** Next.js 14+ · TypeScript · Tailwind CSS · shadcn/ui · TanStack Query · Zod

---

## 1. Business Overview

**Company:** Linkup Exclusive Autos
**Tagline:** *Your One-Stop Auto Garage*
**Location:** Fire Service Station, 10 Savage Street, Ebute-Metta West, Mainland, Lagos 101212
**Phone:** 0701 387 4447
**Instagram:** [@linkup_exclusive_autos](https://instagram.com/linkup_exclusive_autos)

### Core Services
1. Panel Beating (Accident & Body Repairs)
2. Car Oven Bake Painting
3. Car Buffing & Polishing
4. Car Wash & Detailing
5. Car Accessories
6. Car Model Upgrades

---

## 2. Design System (Logo-Derived)

### 2.1 Logo Analysis

The logo contains three key visual elements:
- **"LINK-UP"** — Bold red/crimson wordmark
- **"EXCLUSIVE AUTOS"** — Black bold text with a thin silver rule beneath "EXCLUSIVE"
- **Car silhouette** — Sleek, side-profile car graphic in black/dark red

Extracted brand DNA:
- **Primary red:** Crimson/Racing Red `#D0021B` — energy, speed, precision
- **Black:** Deep matte black `#0D0D0D` — authority, luxury, steel
- **White base** in logo — clean, professional contrast
- **Silver/Grey accent** — chrome, finish, automotive quality

---

### 2.2 Color Palette

#### Brand Core
| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `--brand-red` | Racing Red | `#D0021B` | Primary CTA, accents, hover states |
| `--brand-red-deep` | Deep Crimson | `#A50115` | Hover/active states on red elements |
| `--brand-red-light` | Soft Red | `#FF2D42` | Light theme accents, gradients |
| `--brand-chrome` | Chrome Silver | `#B8BEC8` | Secondary accents, dividers |
| `--brand-black` | Matte Black | `#0D0D0D` | Logo black, dark backgrounds |

---

#### Dark Theme (Default)
Inspired by a professional workshop at night — polished steel, controlled darkness, precision lighting.

| CSS Variable | Value | Role |
|---|---|---|
| `--background` | `#0D0D0D` | Page background |
| `--background-subtle` | `#141414` | Slightly elevated bg |
| `--surface` | `#1C1C1E` | Cards, panels |
| `--surface-raised` | `#252528` | Elevated cards, modals |
| `--border` | `#2C2C2E` | Borders, dividers |
| `--border-focus` | `#D0021B` | Focus ring |
| `--foreground` | `#F5F5F5` | Primary text |
| `--foreground-muted` | `#8A8A8E` | Secondary/muted text |
| `--foreground-subtle` | `#48484A` | Placeholder, disabled |
| `--accent` | `#D0021B` | Brand red accent |
| `--accent-hover` | `#FF2D42` | Red hover (slightly brighter) |
| `--accent-foreground` | `#FFFFFF` | Text on red |
| `--chrome` | `#B8BEC8` | Chrome/silver details |
| `--ring` | `#D0021B` | Focus ring |

#### Light Theme
Clean white workshop feel — bright, airy, professional. Red pops against white backgrounds.

| CSS Variable | Value | Role |
|---|---|---|
| `--background` | `#FAFAFA` | Page background |
| `--background-subtle` | `#F4F4F5` | Subtle section bg |
| `--surface` | `#FFFFFF` | Cards, panels |
| `--surface-raised` | `#F9F9F9` | Elevated, sheet |
| `--border` | `#E4E4E7` | Borders, dividers |
| `--border-focus` | `#D0021B` | Focus ring |
| `--foreground` | `#09090B` | Primary text |
| `--foreground-muted` | `#71717A` | Secondary/muted text |
| `--foreground-subtle` | `#A1A1AA` | Placeholder, disabled |
| `--accent` | `#D0021B` | Brand red accent |
| `--accent-hover` | `#A50115` | Red hover (deeper) |
| `--accent-foreground` | `#FFFFFF` | Text on red |
| `--chrome` | `#6B7280` | Chrome/silver details |
| `--ring` | `#D0021B` | Focus ring |

---

### 2.3 Tailwind CSS Config (`tailwind.config.ts`)

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand
        brand: {
          red:      '#D0021B',
          'red-deep': '#A50115',
          'red-light': '#FF2D42',
          chrome:   '#B8BEC8',
          black:    '#0D0D0D',
        },
        // shadcn/ui semantic tokens (mapped via CSS vars)
        background:  'hsl(var(--background))',
        foreground:  'hsl(var(--foreground))',
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border:  'hsl(var(--border))',
        input:   'hsl(var(--input))',
        ring:    'hsl(var(--ring))',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        heading: ['var(--font-rajdhani)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
```

---

### 2.4 CSS Variables (`globals.css`)

```css
@layer base {
  :root {
    /* Light theme */
    --background:          0 0% 98%;
    --foreground:          240 10% 4%;
    --card:                0 0% 100%;
    --card-foreground:     240 10% 4%;
    --popover:             0 0% 100%;
    --popover-foreground:  240 10% 4%;
    --primary:             350 100% 41%;    /* #D0021B */
    --primary-foreground:  0 0% 100%;
    --secondary:           240 5% 64%;     /* chrome */
    --secondary-foreground: 240 10% 4%;
    --muted:               240 5% 96%;
    --muted-foreground:    240 4% 46%;
    --accent:              350 100% 41%;
    --accent-foreground:   0 0% 100%;
    --destructive:         0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border:              240 6% 90%;
    --input:               240 6% 90%;
    --ring:                350 100% 41%;
    --radius:              0.5rem;

    /* Brand-specific extras */
    --brand-red:           #D0021B;
    --brand-red-hover:     #A50115;
    --brand-chrome:        #6B7280;
  }

  .dark {
    --background:          0 0% 5%;        /* #0D0D0D */
    --foreground:          0 0% 96%;
    --card:                0 0% 11%;       /* #1C1C1E */
    --card-foreground:     0 0% 96%;
    --popover:             0 0% 11%;
    --popover-foreground:  0 0% 96%;
    --primary:             350 100% 41%;   /* keeps brand red in dark */
    --primary-foreground:  0 0% 100%;
    --secondary:           0 0% 16%;
    --secondary-foreground: 0 0% 96%;
    --muted:               0 0% 15%;
    --muted-foreground:    0 0% 54%;
    --accent:              350 100% 41%;
    --accent-foreground:   0 0% 100%;
    --destructive:         0 63% 31%;
    --destructive-foreground: 0 0% 96%;
    --border:              0 0% 17%;
    --input:               0 0% 17%;
    --ring:                350 100% 41%;

    --brand-red:           #D0021B;
    --brand-red-hover:     #FF2D42;
    --brand-chrome:        #B8BEC8;
  }
}
```

---

### 2.5 Typography

| Role | Font | Weight | Import |
|------|------|--------|--------|
| Hero / Display | **Bebas Neue** | 400 | Google Fonts |
| H1–H3 | **Rajdhani** | 600, 700 | Google Fonts |
| Body, UI | **DM Sans** | 400, 500 | Google Fonts |
| Mono / Code | **JetBrains Mono** | 400 | Google Fonts (optional) |

**`next/font` setup (`app/layout.tsx`):**
```ts
import { Bebas_Neue, Rajdhani, DM_Sans } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})
const rajdhani = Rajdhani({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
  display: 'swap',
})
const dmSans = DM_Sans({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})
```

**Type Scale:**
```
Display:  clamp(64px, 8vw, 112px)  — Bebas Neue
H1:       clamp(40px, 5vw, 64px)   — Rajdhani 700
H2:       clamp(28px, 3.5vw, 42px) — Rajdhani 600
H3:       clamp(20px, 2.5vw, 26px) — Rajdhani 600
Body Lg:  18px — DM Sans 400
Body:     16px — DM Sans 400
Small:    14px — DM Sans 500
Label:    12px — DM Sans 500 uppercase tracked
```

---

### 2.6 Spacing, Shadows & Radius

```css
/* Shadows — dark theme */
--shadow-card:    0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3);
--shadow-raised:  0 4px 24px rgba(0,0,0,0.5);
--shadow-red:     0 4px 20px rgba(208, 2, 27, 0.35);  /* brand glow */
--shadow-hover:   0 8px 32px rgba(208, 2, 27, 0.2);

/* Radius */
--radius: 0.5rem;   /* 8px — clean, not too rounded */
```

---

## 3. Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js (App Router) | 14+ |
| Language | TypeScript | 5+ |
| Styling | Tailwind CSS | 3+ |
| UI Components | **shadcn/ui** | latest |
| Data Fetching | **TanStack Query v5** | 5+ |
| Form Validation | **Zod** + React Hook Form | latest |
| Theme | next-themes | latest |
| Icons | Lucide React | latest |
| Animation | Framer Motion | latest |
| Instagram | Instagram Basic Display API | — |
| Email | Resend | latest |
| Deployment | Vercel | — |

---

## 4. shadcn/ui Component Usage

Initialize shadcn with the brand theme above. Components used per section:

| Page / Section | shadcn Components |
|---|---|
| Navigation | `NavigationMenu`, `Sheet` (mobile drawer), `Button` |
| Hero | `Button` (CTA), `Badge` |
| Services | `Card`, `CardHeader`, `CardContent`, `CardFooter` |
| Gallery | `Dialog` (lightbox), `Tabs`, `Badge` |
| Testimonials | `Card`, `Avatar`, `Badge` |
| Contact Form | `Form`, `Input`, `Textarea`, `Select`, `Button`, `Label` |
| Toast/Feedback | `Sonner` (toast notifications) |
| Theme Toggle | `DropdownMenu`, `Button` |
| Instagram Feed | `Card`, `Skeleton` (loading state) |
| 404 / Error | `Button` |

**Install commands:**
```bash
npx shadcn@latest init
npx shadcn@latest add button card input textarea select form label badge
npx shadcn@latest add dialog tabs avatar sheet navigation-menu
npx shadcn@latest add dropdown-menu skeleton sonner
```

---

## 5. TanStack Query v5 Setup

### 5.1 Provider (`app/providers.tsx`)
```tsx
'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,        // 1 min
        gcTime:    5 * 60 * 1000,    // 5 min
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  }))

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
```

### 5.2 Instagram Feed Query
```tsx
// lib/queries/instagram.ts
import { useQuery } from '@tanstack/react-query'

export type InstagramPost = {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  thumbnail_url?: string
  permalink: string
  caption?: string
}

async function fetchInstagramFeed(): Promise<InstagramPost[]> {
  const res = await fetch('/api/instagram')
  if (!res.ok) throw new Error('Failed to fetch Instagram feed')
  return res.json()
}

export function useInstagramFeed() {
  return useQuery({
    queryKey: ['instagram-feed'],
    queryFn:  fetchInstagramFeed,
    staleTime: 30 * 60 * 1000,  // 30 min cache
  })
}
```

### 5.3 Contact Form Mutation
```tsx
// lib/queries/contact.ts
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import type { ContactFormData } from '@/lib/validators/contact'

async function submitContact(data: ContactFormData) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Submission failed')
  return res.json()
}

export function useContactMutation() {
  return useMutation({
    mutationFn: submitContact,
    onSuccess: () => toast.success('Message sent! We\'ll be in touch shortly.'),
    onError:   () => toast.error('Something went wrong. Please call us directly.'),
  })
}
```

---

## 6. Zod Validation Schemas

### 6.1 Contact Form Schema
```ts
// lib/validators/contact.ts
import { z } from 'zod'

export const contactFormSchema = z.object({
  fullName: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(80, 'Name too long'),

  phone: z.string()
    .regex(/^(\+?234|0)[789]\d{9}$/, 'Enter a valid Nigerian phone number'),

  email: z.string()
    .email('Enter a valid email address')
    .optional()
    .or(z.literal('')),

  service: z.enum([
    'panel-beating',
    'oven-bake-painting',
    'car-buffing',
    'car-wash',
    'car-accessories',
    'car-upgrades',
    'other',
  ], { required_error: 'Please select a service' }),

  carDetails: z.string()
    .min(3, 'Please enter your car make and model')
    .max(100),

  message: z.string()
    .max(500, 'Message too long (max 500 characters)')
    .optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
```

### 6.2 Instagram API Response Schema
```ts
// lib/validators/instagram.ts
import { z } from 'zod'

export const instagramPostSchema = z.object({
  id:            z.string(),
  media_type:    z.enum(['IMAGE', 'VIDEO', 'CAROUSEL_ALBUM']),
  media_url:     z.string().url(),
  thumbnail_url: z.string().url().optional(),
  permalink:     z.string().url(),
  caption:       z.string().optional(),
})

export const instagramFeedSchema = z.object({
  data: z.array(instagramPostSchema),
})

export type InstagramPost = z.infer<typeof instagramPostSchema>
```

### 6.3 Environment Variables Schema
```ts
// lib/validators/env.ts
import { z } from 'zod'

const envSchema = z.object({
  INSTAGRAM_ACCESS_TOKEN:       z.string().min(1),
  NEXT_PUBLIC_GOOGLE_MAPS_KEY:  z.string().min(1),
  RESEND_API_KEY:               z.string().min(1),
  CONTACT_EMAIL:                z.string().email(),
  NEXT_PUBLIC_WHATSAPP_NUMBER:  z.string().default('2347013874447'),
})

export const env = envSchema.parse(process.env)
```

---

## 7. Site Architecture & Routing

```
/                          → Homepage
/services                  → Services detail page
/gallery                   → Gallery + Instagram feed
/about                     → About the company
/contact                   → Contact, map & enquiry form

/api/instagram             → GET — proxied, cached Instagram feed
/api/contact               → POST — contact form handler (Resend email)
```

---

## 8. Page Requirements

### 8.1 Homepage

| Section | Description |
|---------|-------------|
| **Navbar** | Logo left, nav links center, theme toggle + "Book Now" CTA right. Mobile: hamburger → Sheet drawer |
| **Hero** | Full-viewport. Display headline, sub-headline, dual CTAs. Background: dark overlay + subtle red gradient bottom. Car silhouette SVG or workshop photo. |
| **Service Strip** | 6 icon Cards in responsive grid. Hover: red accent border + slight lift. |
| **Why Choose Us** | 3-column stat/trust block. Numbers animate on scroll (Framer Motion). |
| **Work Showcase** | Latest 9 Instagram posts via `useInstagramFeed()`. Skeleton loading states with shadcn `Skeleton`. |
| **Testimonials** | 3 quote Cards with Avatar, name, rating badges. |
| **CTA Banner** | Full-width dark/red gradient strip. Phone + WhatsApp links. |
| **Footer** | 3-column: Logo+tagline / Nav links / Contact info. Social icons. Theme toggle. |

### 8.2 Services Page

Detailed section per service. Each uses a `Card` with icon, title, description, and a "Get a Quote" Button that links to contact with pre-selected service.

### 8.3 Gallery Page

- `Tabs` for filtering: All / Panel Beating / Painting / Buffing / Upgrades
- Masonry grid of Instagram posts + uploaded photos
- `Dialog` lightbox on image click
- `Skeleton` grid while loading
- TanStack Query with `useInstagramFeed()`

### 8.4 About Page

Company story, mission, values, workshop info, embedded Google Map, team placeholder.

### 8.5 Contact Page

- shadcn `Form` with React Hook Form + Zod (`contactFormSchema`)
- Fields: Full Name, Phone, Email (optional), Service (Select), Car Details, Message
- `useMutation` from TanStack Query for submission
- `Sonner` toast on success/error
- Google Maps embed
- Click-to-call phone link
- WhatsApp deep link

---

## 9. Theme Toggle

```tsx
// components/ui/ThemeToggle.tsx
'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export function ThemeToggle() {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-4 w-4 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-all" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

---

## 10. Folder Structure

```
linkup-exclusive-autos/
├── app/
│   ├── layout.tsx              ← Fonts, ThemeProvider, Providers (TanStack)
│   ├── page.tsx                ← Homepage
│   ├── services/page.tsx
│   ├── gallery/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── not-found.tsx
│   ├── providers.tsx           ← TanStack QueryClientProvider
│   └── api/
│       ├── instagram/route.ts  ← Instagram feed proxy
│       └── contact/route.ts    ← Contact form handler
│
├── components/
│   ├── ui/                     ← shadcn/ui primitives (auto-generated)
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── WhatsAppFAB.tsx     ← Floating WhatsApp button
│   └── sections/
│       ├── Hero.tsx
│       ├── ServicesGrid.tsx
│       ├── InstagramFeed.tsx
│       ├── Testimonials.tsx
│       ├── CTABanner.tsx
│       ├── StatsBar.tsx
│       └── ContactForm.tsx
│
├── lib/
│   ├── queries/
│   │   ├── instagram.ts        ← useInstagramFeed() hook
│   │   └── contact.ts          ← useContactMutation() hook
│   ├── validators/
│   │   ├── contact.ts          ← Zod schema: contactFormSchema
│   │   ├── instagram.ts        ← Zod schema: instagramFeedSchema
│   │   └── env.ts              ← Zod schema: env vars
│   └── constants.ts            ← Services data, nav links, testimonials
│
├── public/
│   ├── logo.png
│   ├── logo-light.png          ← Version for dark backgrounds
│   └── images/
│
├── styles/
│   └── globals.css             ← CSS variables (light/dark), base styles
│
├── tailwind.config.ts
├── components.json             ← shadcn config
└── .env.local
```

---

## 11. API Routes

### `GET /api/instagram`
```ts
// app/api/instagram/route.ts
import { NextResponse } from 'next/server'
import { instagramFeedSchema } from '@/lib/validators/instagram'

export const revalidate = 1800 // 30 min ISR cache

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption&limit=12&access_token=${token}`

  const res = await fetch(url, { next: { revalidate: 1800 } })
  const raw = await res.json()

  const parsed = instagramFeedSchema.safeParse(raw)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid response' }, { status: 500 })
  }

  return NextResponse.json(parsed.data.data)
}
```

### `POST /api/contact`
```ts
// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema } from '@/lib/validators/contact'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const parsed = contactFormSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const { fullName, phone, email, service, carDetails, message } = parsed.data

  await resend.emails.send({
    from: 'website@linkupexclusiveautos.com',
    to:   process.env.CONTACT_EMAIL!,
    subject: `New Enquiry — ${service} — ${fullName}`,
    html: `
      <h2>New Service Enquiry</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || 'Not provided'}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Car:</strong> ${carDetails}</p>
      <p><strong>Message:</strong> ${message || 'None'}</p>
    `,
  })

  return NextResponse.json({ success: true })
}
```

---

## 12. Environment Variables (`.env.local`)

```env
# Instagram
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_google_maps_api_key

# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=your-business-email@gmail.com

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=2347013874447
NEXT_PUBLIC_SITE_URL=https://linkupexclusiveautos.com
```

---

## 13. SEO & Performance

- `next/font` for zero layout shift typography
- `next/image` for all images (WebP, lazy, size hints)
- `generateMetadata()` per route
- `LocalBusiness` + `AutoRepair` JSON-LD schema on homepage
- `sitemap.xml` via `app/sitemap.ts`
- `robots.txt` via `app/robots.ts`
- Lighthouse targets: Performance 90+, SEO 100, A11y 95+

---

## 14. Milestones

| Phase | Deliverable | Duration |
|-------|-------------|----------|
| 1 | Project scaffold, shadcn init, theme system, fonts | 1–2 days |
| 2 | Navbar, Footer, WhatsApp FAB, ThemeToggle | 1–2 days |
| 3 | Homepage (Hero + all sections) | 3–4 days |
| 4 | Services, About, Gallery pages | 3–4 days |
| 5 | Contact page (form + validation + mutation) | 2 days |
| 6 | Instagram API integration + Gallery grid | 2 days |
| 7 | SEO, metadata, JSON-LD, sitemap | 1 day |
| 8 | Performance audit, QA, deployment (Vercel) | 1–2 days |
| **Total** | | **~3 weeks** |

---

## 15. Phase 2 (Future)

- Admin dashboard (NextAuth.js + role-based access)
- Blog / CMS (Sanity or Contentlayer)
- Online booking system with calendar
- Customer review module
- Push notifications for booking confirmations

---

*v2.0 — Updated to reflect logo-derived color system, dual light/dark theme, shadcn/ui components, TanStack Query v5, and Zod validation schemas.*
