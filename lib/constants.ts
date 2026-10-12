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
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
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

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Chidi Okonkwo",
    role: "Toyota Camry Owner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    quote:
      "Best panel beating service in Lagos! They fixed my Camry after an accident and you can't even tell it was damaged. Professional work, fair price.",
  },
  {
    id: "2",
    name: "Adaobi Nwosu",
    role: "Honda Accord Owner",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
    rating: 5,
    quote:
      "Got my car painted here and the finish is showroom quality. The team was professional and kept me updated throughout the process.",
  },
  {
    id: "3",
    name: "Emeka Eze",
    role: "Mercedes-Benz Owner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    quote:
      "I've been bringing all my cars here for 3 years now. Consistent quality and excellent customer service. Highly recommend!",
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
  { value: "4.9", suffix: "/5", label: "Customer Rating" },
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

export const mockGalleryImages = [
  {
    id: "1",
    src: "/work1.jpg",
    category: "Accident repair | Panel Beating",
    alt: "Accident repair | Panel Beating",
  },
  {
    id: "2",
    src: "/work2.jpg",
    category: "Panel beating work",
    alt: "Panel beating work",
  },
  {
    id: "3",
    src: "/work3.jpg",
    category: "Oven Bake Painting",
    alt: "Fresh paint job",
  },
  {
    id: "4",
    src: "/work4.jpg",
    category: "Car buffing and polishing",
    alt: "Car buffing and polishing",
  },
  {
    id: "5",
    src: "/work5.jpg",
    category: "Car wash and detailin",
    alt: "Car wash and detailing",
  },
  {
    id: "6",
    src: "/work6.jpg",
    category: "Car model upgrade",
    alt: "Car model upgrade",
  },
  // {
  //   id: "7",
  //   src: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80",
  //   category: "painting",
  //   alt: "Custom paint work",
  // },
  // {
  //   id: "8",
  //   src: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&q=80",
  //   category: "panel-beating",
  //   alt: "Accident repair",
  // },
  // {
  //   id: "9",
  //   src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  //   category: "buffing",
  //   alt: "Paint correction",
  // },
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
