import Link from "next/link";
import { Instagram, MessageCircle, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { businessInfo, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Awul Awul Market
            </p>
            <h3 className="font-display text-2xl text-neutral-900">
              Thrift store modern untuk pelanggan lokal Bantul.
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-neutral-600">
              {businessInfo.address}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={businessInfo.whatsappLink}>
                  <MessageCircle className="h-4 w-4" />
                  Chat WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${businessInfo.phone}`}>
                  <PhoneCall className="h-4 w-4" />
                  Telepon {businessInfo.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3 text-sm">
              <p className="font-semibold text-neutral-900">Navigasi</p>
              <div className="flex flex-col gap-2 text-neutral-600">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <p className="font-semibold text-neutral-900">Ikuti kami</p>
              <div className="flex items-center gap-2 text-neutral-600">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200">
                  <Instagram className="h-4 w-4" />
                </div>
                <span>@awulawulmarket</span>
              </div>
              <p className="text-xs text-neutral-500">
                Update koleksi baru setiap minggu.
              </p>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <p className="text-xs text-neutral-500">
          (c) 2024 Awul Awul Market. Crafted for modern thrift lovers.
        </p>
      </div>
    </footer>
  );
}
