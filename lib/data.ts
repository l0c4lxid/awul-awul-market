export const businessInfo = {
  name: "Awul Awul Market",
  category: "Toko Pakaian / Thrift",
  rating: "4.8",
  reviews: "6",
  address:
    "Jl. Karet, Karet, Pleret, Kec. Pleret, Kabupaten Bantul, DI Yogyakarta 55791",
  phone: "082281860292",
  phoneDisplay: "0822-8186-0292",
  phoneInternational: "+62 822-8186-0292",
  whatsappLink: "https://wa.me/6282281860292",
  services: ["Ambil di toko", "Pesan antar"],
  heroImage: "/images/hero-01.svg",
  aboutImage: "/images/about-01.svg",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Jl.%20Karet,%20Karet,%20Pleret,%20Kec.%20Pleret,%20Kabupaten%20Bantul,%20DI%20Yogyakarta%2055791&output=embed",
};

export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Kepercayaan", href: "#trust" },
  { label: "Koleksi", href: "#koleksi" },
  { label: "Tentang", href: "#tentang" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

export type Product = {
  name: string;
  price: string;
  image: string;
  category: string;
  condition: string;
  recommended?: boolean;
};

export const products: Product[] = [
  {
    name: "Jaket Denim Vintage",
    price: "Rp 120.000",
    image: "/images/product-01.svg",
    category: "Outerwear",
    condition: "Grade A",
    recommended: true,
  },
  {
    name: "Kemeja Flanel Klasik",
    price: "Rp 85.000",
    image: "/images/product-02.svg",
    category: "Shirt",
    condition: "Grade A",
    recommended: true,
  },
  {
    name: "Sweater Rajut Cozy",
    price: "Rp 95.000",
    image: "/images/product-03.svg",
    category: "Knitwear",
    condition: "Grade B+",
  },
  {
    name: "Tote Bag Kanvas",
    price: "Rp 65.000",
    image: "/images/product-04.svg",
    category: "Accessories",
    condition: "Grade A",
  },
  {
    name: "Celana Cargo Relax",
    price: "Rp 110.000",
    image: "/images/product-05.svg",
    category: "Bottoms",
    condition: "Grade A",
    recommended: true,
  },
  {
    name: "Blouse Minimal",
    price: "Rp 78.000",
    image: "/images/product-06.svg",
    category: "Top",
    condition: "Grade B+",
  },
  {
    name: "Coach Jacket Street",
    price: "Rp 135.000",
    image: "/images/product-07.svg",
    category: "Outerwear",
    condition: "Grade A",
  },
  {
    name: "Kaos Grafis Bold",
    price: "Rp 55.000",
    image: "/images/product-08.svg",
    category: "Tee",
    condition: "Grade A",
  },
];

export type Testimonial = {
  name: string;
  quote: string;
  tagline: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rina",
    quote: "Murah berkualitas",
    tagline: "Pelanggan lokal",
  },
  {
    name: "Bagus",
    quote: "Baju bekas tapi recommended",
    tagline: "Penggemar thrift",
  },
  {
    name: "Selma",
    quote: "Baju bekas tapi bagus",
    tagline: "Repeat buyer",
  },
];
