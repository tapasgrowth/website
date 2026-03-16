"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
  as: Tag = "span",
}: SplitTextProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
      aria-label={text}
    >
      <Tag className={className}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={childVariants}
            className="inline-block"
            style={{ marginRight: "0.25em" }}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
