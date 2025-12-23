"use client";

import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/lib/data";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="min-w-[240px] snap-center"
    >
      <Card className="h-full border-neutral-200 bg-white">
        <div className="flex h-full flex-col gap-4 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
              <UserRound className="h-5 w-5 text-neutral-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                {testimonial.name}
              </p>
              <p className="text-xs text-neutral-500">{testimonial.tagline}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-neutral-600">
            "{testimonial.quote}"
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
