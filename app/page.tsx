import Image from "next/image";
import {
  MapPin,
  MessageCircle,
  PhoneCall,
  Star,
  Store,
  Truck,
} from "lucide-react";

import Footer from "@/components/footer";
import Hero from "@/components/hero";
import MotionSection from "@/components/motion-section";
import Navbar from "@/components/navbar";
import ProductCard from "@/components/product-card";
import TestimonialCard from "@/components/testimonial-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { businessInfo, products, testimonials } from "@/lib/data";

export default function Home() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://awul-awul-market.vercel.app";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: businessInfo.name,
    url: siteUrl,
    image: `${siteUrl}${businessInfo.heroImage}`,
    telephone: businessInfo.phoneInternational,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Karet, Karet, Pleret, Kec. Pleret",
      addressLocality: "Bantul",
      addressRegion: "DI Yogyakarta",
      postalCode: "55791",
      addressCountry: "ID",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessInfo.rating,
      reviewCount: businessInfo.reviews,
    },
    areaServed: "Bantul",
    priceRange: "$$",
  };

  return (
    <div className="min-h-screen bg-[#f6f4f1] text-neutral-950 [background-image:radial-gradient(circle_at_top,_rgba(217,207,188,0.5),_transparent_55%),radial-gradient(circle_at_80%_20%,_rgba(200,208,197,0.4),_transparent_45%)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-20 pt-10 sm:px-6 lg:px-10 lg:pt-16">
        <Hero />

        <MotionSection id="trust">
          <div className="grid gap-6 rounded-[32px] border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                Trusted Locally
              </p>
              <h2 className="font-display text-3xl text-neutral-900">
                Dipercaya pelanggan lokal
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600">
                Awul Awul Market dikenal dengan pilihan thrift berkualitas dan
                pelayanan ramah. Rating tinggi kami berasal dari pelanggan setia
                Bantul dan sekitarnya.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-neutral-900 text-neutral-900"
                    />
                  ))}
                </div>
                <p className="text-sm font-semibold text-neutral-900">
                  {businessInfo.rating} / 5.0 ({businessInfo.reviews} ulasan)
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white">
                  <Store className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    Ambil di toko
                  </p>
                  <p className="text-xs text-neutral-500">
                    Stok siap dicoba langsung
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d9cfbc] text-neutral-900">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    Pesan antar
                  </p>
                  <p className="text-xs text-neutral-500">
                    Chat WhatsApp untuk detail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection id="koleksi" className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                Katalog Visual
              </p>
              <h2 className="font-display text-3xl text-neutral-900">
                Koleksi terbaik minggu ini
              </h2>
              <p className="text-sm text-neutral-600">
                Pilihan item thrift yang siap jadi statement look kamu.
              </p>
            </div>
            <Button asChild size="lg" variant="outline">
              <a href={businessInfo.whatsappLink}>
                <MessageCircle className="h-4 w-4" />
                Tanya Stok
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </MotionSection>

        <MotionSection id="tentang" className="grid gap-8 lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-100">
            <Image
              src={businessInfo.aboutImage}
              alt="Awul Awul Market store"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <Badge variant="outline">Tentang Kami</Badge>
            <h2 className="font-display text-3xl text-neutral-900">
              Fashion thrift modern dengan sentuhan lokal.
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600">
              Awul Awul Market hadir sebagai ruang kurasi thrift yang clean dan
              nyaman. Kami memilih item yang masih layak pakai, tampil trendi,
              dan siap dipakai untuk daily look maupun koleksi statement. Semua
              dipilih dengan detail agar tetap hemat tanpa kompromi kualitas.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary">Kurasi mingguan</Badge>
              <Badge variant="secondary">Ukuran bervariasi</Badge>
              <Badge variant="secondary">Harga bersahabat</Badge>
            </div>
          </div>
        </MotionSection>

        <MotionSection id="testimoni" className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Testimoni
            </p>
            <h2 className="font-display text-3xl text-neutral-900">
              Apa kata pelanggan
            </h2>
          </div>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </MotionSection>

        <MotionSection id="kontak" className="space-y-6">
          <div className="grid gap-8 rounded-[32px] border border-neutral-200 bg-white p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                Lokasi & Kontak
              </p>
              <h2 className="font-display text-3xl text-neutral-900">
                Temukan kami di Bantul
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600">
                Datang langsung ke toko atau hubungi kami lewat WhatsApp untuk
                layanan pesan antar. Tim kami siap bantu kamu menemukan outfit
                thrift favorit.
              </p>
              <div className="space-y-3 text-sm text-neutral-600">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-neutral-900" />
                  <span>{businessInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-4 w-4 text-neutral-900" />
                  <span>{businessInfo.phoneDisplay}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="shadow-sm">
                  <a href={businessInfo.whatsappLink}>
                    <MessageCircle className="h-4 w-4" />
                    Chat WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${businessInfo.phone}`}>
                    Hubungi Toko
                  </a>
                </Button>
              </div>
            </div>
            <Card className="overflow-hidden border-neutral-200">
              <div className="aspect-[4/3] w-full">
                <iframe
                  title="Awul Awul Market map"
                  src={businessInfo.mapEmbedUrl}
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </Card>
          </div>
        </MotionSection>
      </main>

      <Footer />

      <Button
        asChild
        size="lg"
        className="fixed bottom-4 right-4 z-50 shadow-lg shadow-neutral-900/15 sm:hidden"
      >
        <a href={businessInfo.whatsappLink}>
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </Button>
    </div>
  );
}
