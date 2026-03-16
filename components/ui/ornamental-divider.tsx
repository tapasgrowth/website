"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrnamentalDividerProps {
  className?: string;
}

export function OrnamentalDivider({ className }: OrnamentalDividerProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("flex items-center gap-4", className)}
    >
      <div className="flex-1 h-px bg-border/50" />
      <div className="size-2 rotate-45 border border-gold/50" />
      <div className="flex-1 h-px bg-border/50" />
    </motion.div>
  );
}
