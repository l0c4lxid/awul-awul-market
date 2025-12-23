"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden border-neutral-200 bg-white/90">
        <div className="relative h-48 w-full overflow-hidden bg-neutral-100 sm:h-56">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-200 group-hover:scale-105"
          />
          {product.recommended && (
            <Badge className="absolute left-4 top-4">Recommended</Badge>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-neutral-950">
              {product.name}
            </h3>
            <p className="text-sm text-neutral-500">{product.category}</p>
          </div>
          <div className="mt-auto flex items-center justify-between">
            <p className="text-lg font-semibold text-neutral-950">
              {product.price}
            </p>
            <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
              {product.condition}
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
