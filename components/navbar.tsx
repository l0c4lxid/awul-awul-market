"use client";

import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { businessInfo, navLinks } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link href="#beranda" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-xs font-semibold text-white">
            AAM
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Thrift Store
            </p>
            <p className="text-lg font-semibold text-neutral-950">
              {businessInfo.name}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="lg" className="shadow-sm">
            <a href={businessInfo.whatsappLink}>
              <MessageCircle className="h-4 w-4" />
              Chat WhatsApp
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="sm" variant="outline" className="lg:hidden">
              <Menu className="h-4 w-4" />
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetHeader>
              <SheetTitle>Awul Awul Market</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-neutral-700 transition hover:text-neutral-950"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild size="lg" className="mt-4">
                <a href={businessInfo.whatsappLink}>
                  <MessageCircle className="h-4 w-4" />
                  Chat WhatsApp
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
