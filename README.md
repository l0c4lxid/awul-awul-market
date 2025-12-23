# Awul Awul Market

Website company profile + katalog visual untuk toko pakaian thrift Awul Awul Market. Fokus pada UI/UX modern, image-first, mobile-first, dan CTA WhatsApp yang selalu terlihat.

## Highlight

- Desain fashion-oriented dengan layout minimal dan kontras tinggi.
- Katalog produk responsif: 1–2 kolom (mobile), 2–3 kolom (tablet), 4 kolom (desktop).
- Animasi ringan (<= 200ms) dengan Framer Motion: fade-in on scroll, hover/tap scale.
- Trust-driven content: rating, testimoni, dan lokasi jelas.
- Sticky WhatsApp floating button di mobile.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React
- next/image

## Struktur Folder

```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  footer.tsx
  hero.tsx
  motion-section.tsx
  navbar.tsx
  product-card.tsx
  testimonial-card.tsx
  ui/
    badge.tsx
    button.tsx
    card.tsx
    separator.tsx
    sheet.tsx
lib/
  data.ts
  utils.ts
public/
  images/
```

## Data Bisnis

- Nama: Awul Awul Market
- Kategori: Toko Pakaian / Thrift
- Rating: 4.8 (6 ulasan)
- Alamat: Jl. Karet, Karet, Pleret, Kec. Pleret, Kabupaten Bantul, DI Yogyakarta 55791
- WhatsApp: 0822-8186-0292
- Layanan: Ambil di toko, Pesan antar

Data bisnis, katalog, dan testimoni tersimpan di `lib/data.ts`.

## Menjalankan Project

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.

## Catatan UI/UX

- Typography: Plus Jakarta Sans + Inter.
- Warna utama: hitam, putih, abu; aksen earthy (olive/coklat muda).
- CTA WhatsApp ada di navbar, section kontak, dan floating button di mobile.

## Build Production

```bash
npm run build
npm run start
```

## Deploy

Siap deploy ke Vercel.
