# Linkup Exclusive Autos

Marketing site for **Linkup Exclusive Autos** — a premium auto garage on Lagos Mainland. Built with Next.js (App Router), React, and Tailwind CSS.

## Stack

- **Next.js** 16 · **React** 19 · **TypeScript**
- **Tailwind CSS** 4 · UI primitives (shadcn-style) · **Framer Motion**
- **TanStack Query** · **react-hook-form** + **Zod** (forms)
- **Resend** (optional) for contact form email delivery

## Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [pnpm](https://pnpm.io/) (this repo uses `pnpm-lock.yaml`)

## Getting started

Install dependencies:

```bash
pnpm install
```

Run the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description |
|----------------|-------------|
| `pnpm dev`     | Start development server |
| `pnpm build`   | Generate favicon assets, then production build |
| `pnpm start`   | Run production server (after `build`) |
| `pnpm lint`    | ESLint |
| `pnpm favicon` | Regenerate `app/favicon.ico` from source (see `scripts/`) |

## Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata (Open Graph, etc.). Example: `https://www.example.com` |
| `RESEND_API_KEY` | If set, contact form submissions send email via [Resend](https://resend.com/) |
| `CONTACT_EMAIL` | Inbox for contact enquiries (defaults to `info@linkupexclusiveautos.com` if unset) |

## Project layout (high level)

- `app/` — routes: home, about, services, gallery, contact; `app/api/contact` handles form POSTs
- `components/` — layout, sections, and UI
- `lib/` — site helpers, constants, validators, providers

## Deploy

Deploy like any Next.js app (e.g. [Vercel](https://vercel.com/docs/frameworks/nextjs)). Set `NEXT_PUBLIC_SITE_URL` and, for live email from the contact form, `RESEND_API_KEY` and `CONTACT_EMAIL` in the host’s environment.
