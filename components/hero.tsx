"use client";

import Image from "next/image";
import { ArrowUpRight, MessageCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/lib/data";

const easeStandard: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: easeStandard },
  },
};

export default function Hero() {
  return (
    <section id="beranda" className="scroll-mt-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="gap-2">
              <Star className="h-3.5 w-3.5" />
              {businessInfo.rating} ({businessInfo.reviews} ulasan)
            </Badge>
            <Badge variant="outline">Thrift premium selection</Badge>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {businessInfo.category}
            </p>
            <h1 className="font-display text-4xl leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              Thrift Berkualitas, Harga Bersahabat
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-neutral-600 sm:text-lg">
              Kurasi pakaian thrift dengan karakter fashion modern. Siap tampil
              beda dengan koleksi yang selalu fresh setiap minggu.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="xl" className="shadow-lg shadow-neutral-900/15">
              <a href={businessInfo.whatsappLink}>
                <MessageCircle className="h-4 w-4" />
                Chat WhatsApp
              </a>
            </Button>
            <Button asChild size="xl" variant="outline">
              <a href="#koleksi">
                Lihat Koleksi
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
            {businessInfo.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-neutral-200 px-3 py-1"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: easeStandard }}
          className="relative min-h-[320px] w-full overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-100 shadow-lg"
        >
          <Image
            src={businessInfo.heroImage}
            alt="Awul Awul Market koleksi thrift"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/35 via-neutral-950/0" />
          <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-neutral-900">
            Kurasi 100+ item baru setiap bulan
          </div>
        </motion.div>
      </div>
    </section>
  );
}
