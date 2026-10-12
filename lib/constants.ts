import {
  Hammer,
  PaintBucket,
  Sparkles,
  Car,
  Wrench,
  Cog,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Real job photo: a before/after composite (before on the top half, after on the bottom). */
  image: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "1",
    slug: "panel-beating",
    title: "Panel Beating",
    description:
      "Expert accident and dent repair. We restore your vehicle's structural integrity to factory specification with precision and care.",
    icon: Hammer,
    image: "/work5.jpg",
    features: [
      "Accident damage repair",
      "Dent removal",
      "Frame straightening",
      "Rust treatment",
    ],
  },
  {
    id: "2",
    slug: "oven-bake-painting",
    title: "Oven Bake Painting",
    description:
      "Our sealed oven-bake finishing delivers a showroom-quality paint job that lasts. Perfect color match guaranteed.",
    icon: PaintBucket,
    image: "/work4.jpg",
    features: [
      "Factory-quality finish",
      "Color matching",
      "Rust-proof coating",
      "UV protection",
    ],
  },
  {
    id: "3",
    slug: "car-buffing",
    title: "Car Buffing & Polishing",
    description:
      "Paint correction, scratch removal, and deep-gloss polishing. We bring back your car's original shine.",
    icon: Sparkles,
    image: "/work2.jpg",
    features: [
      "Paint correction",
      "Scratch removal",
      "Swirl mark elimination",
      "Deep gloss treatment",
    ],
  },
  {
    id: "4",
    slug: "car-wash",
    title: "Car Wash & Detailing",
    description:
      "Complete interior and exterior cleaning. From a quick wash to full detailing, we make your car spotless.",
    icon: Car,
    image: "/work3.jpg",
    features: [
      "Exterior wash",
      "Interior vacuuming",
      "Dashboard cleaning",
      "Tire dressing",
    ],
  },
  {
    id: "5",
    slug: "car-accessories",
    title: "Car Accessories",
    description:
      "Upgrade your ride with quality accessories. From stereo systems to custom interiors, we've got you covered.",
    icon: Wrench,
    image: "/work6.jpg",
    features: [
      "Stereo systems",
      "Seat covers",
      "Floor mats",
      "Lighting upgrades",
    ],
  },
  {
    id: "6",
    slug: "car-upgrades",
    title: "Car Model Upgrades",
    description:
      "Aesthetic and functional upgrades tailored to your taste. Transform your vehicle into something unique.",
    icon: Cog,
    image: "/work1.jpg",
    features: [
      "Body kits",
      "Custom painting",
      "Performance tuning",
      "Interior upgrades",
    ],
  },
];

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Real Google reviews (selected written ones). Source: Google Business Profile. */
export type Testimonial = {
  id: string;
  name: string;
  meta: string;
  rating: number;
  when: string;
  quote: string;
};

export const googleReviews = {
  rating: 4.2,
  count: 13,
  url: "https://share.google/uO3tgntr194PkJ1Cm",
};

export const testimonials: Testimonial[] = [
  {
    id: "osemwingie",
    name: "Osemwingie I.",
    meta: "Local Guide",
    rating: 5,
    when: "7 months ago",
    quote: "Best place to make your car brand new again.",
  },
  {
    id: "chinwe",
    name: "Chinwe U.",
    meta: "Google review",
    rating: 5,
    when: "7 years ago",
    quote:
      "Amazing.. it's a 5 star job.. I'll encourage any & everyone who values quality & a superb work to visit.. Link up exclusive.",
  },
  {
    id: "luxury-king",
    name: "Luxury King",
    meta: "Google review",
    rating: 5,
    when: "5 years ago",
    quote: "It is a premium place to oven bake your car and do some repairs. Excellent services.",
  },
  {
    id: "mac-fab",
    name: "Mac Fab",
    meta: "Google review",
    rating: 5,
    when: "8 years ago",
    quote:
      "Nice place for auto body refurbishment. I like the personal eye to details & finishing.",
  },
  {
    id: "sagir",
    name: "Sagir",
    meta: "Local Guide",
    rating: 4,
    when: "7 years ago",
    quote: "Panel beater workshop. Good services. Friendly staff. Good price.",
  },
  {
    id: "anunibe",
    name: "Anunibe U.",
    meta: "Google review",
    rating: 5,
    when: "7 years ago",
    quote: "Affordable service, good finish. Amazing job.",
  },
];

export type Stat = {
  value: string;
  label: string;
  suffix?: string;
};

export const stats: Stat[] = [
  { value: "10", suffix: "+", label: "Years Experience" },
  { value: "2500", suffix: "+", label: "Cars Serviced" },
  { value: "1800", suffix: "+", label: "Happy Clients" },
  { value: "4.2", suffix: "/5", label: "Google Rating" },
];

export const companyInfo = {
  name: "Linkup Exclusive Autos",
  tagline: "Your One-Stop Auto Garage",
  phone: "0701 387 4447",
  phoneFormatted: "0701 387 4447",
  email: "info@linkupexclusiveautos.com",
  address: "Fire Service Station, 10 Savage Street, Ebute-Metta West, Mainland, Lagos 101212",
  googleMapsUrl: "https://maps.google.com/?q=10+Savage+Street+Ebute-Metta+Lagos",
  instagram: "https://instagram.com/linkup_exclusive_autos",
  whatsappNumber: "2347013874447",
  whatsappUrl: "https://wa.me/2347013874447",
  whatsapMessage: "Hi, I'm interested in your auto services",
  hours: [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
};

/** Before/after jobs. Each photo is a composite: "before" on the top half, "after" on the bottom half. */
export type ProjectCategory = "repair" | "paint" | "upgrade";

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "repair", label: "Accident repair" },
  { id: "paint", label: "Paint & colour" },
  { id: "upgrade", label: "Upgrades" },
];

export type Project = {
  id: string;
  category: ProjectCategory;
  src: string;
  vehicle: string;
  service: string;
  summary: string;
};

export const projects: Project[] = [
  {
    id: "highlander-black",
    category: "repair",
    src: "/work3.jpg",
    vehicle: "Toyota Highlander",
    service: "Accident repair · Oven bake respray",
    summary: "Front-end collision damage straightened, refitted and resprayed in deep gloss black.",
  },
  {
    id: "lx570",
    category: "upgrade",
    src: "/work1.jpg",
    vehicle: "Lexus LX 570",
    service: "Model upgrade · Full respray",
    summary: "Older LX brought up to the latest facelift look, finished in piano black.",
  },
  {
    id: "highlander-red",
    category: "repair",
    src: "/work5.jpg",
    vehicle: "Toyota Highlander",
    service: "Panel beating · Bumper rebuild",
    summary: "Crushed front bumper and wing rebuilt, colour-matched to the original red.",
  },
  {
    id: "land-cruiser",
    category: "paint",
    src: "/work4.jpg",
    vehicle: "Toyota Land Cruiser",
    service: "Colour change · Oven bake painting",
    summary: "Pearl white to black colour change, baked for a hard, long-lasting finish.",
  },
  {
    id: "gx460",
    category: "upgrade",
    src: "/work6.jpg",
    vehicle: "Lexus GX 460",
    service: "Model upgrade · Respray",
    summary: "Facelift conversion with new grille and lights, resprayed black.",
  },
  {
    id: "is250",
    category: "paint",
    src: "/work2.jpg",
    vehicle: "Lexus IS 250",
    service: "Panel beating · Repaint",
    summary: "Body panels straightened and repainted from black to silver.",
  },
];

export const processSteps = [
  {
    title: "Inspect",
    description: "Bring the car in or send photos on WhatsApp. We assess the damage the same day.",
  },
  {
    title: "Quote",
    description: "A clear, itemised price and timeline before any work starts. No surprises.",
  },
  {
    title: "Restore",
    description: "Panel work, oven-bake paint and polish by our own technicians, in our own workshop.",
  },
  {
    title: "Deliver",
    description: "Walk around it with us, check every panel, then drive off looking factory-new.",
  },
];

export const heroContent = {
  label: "Linkup Exclusive Autos · Lagos #1 Auto Garage",
  titleLine1: "PREMIUM",
  titleLine2: "AUTO REPAIRS.",
  titleLine3: "LAGOS FINEST.",
  subtitle:
    "Expert panel beating, oven bake painting, car buffing, wash & detailing. Your one-stop auto garage in Mainland Lagos.",
  cta: {
    primary: { label: "Book a Service", href: "/contact" },
    secondary: { label: "See Our Work", href: "/gallery" },
  },
  tags: ["Panel Beating", "Oven Bake Painting", "Car Buffing", "Upgrades"],
};
