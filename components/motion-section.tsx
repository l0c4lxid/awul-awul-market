"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

interface MotionSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function MotionSection({
  id,
  className,
  children,
}: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("scroll-mt-24", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      {children}
    </motion.section>
  );
}
