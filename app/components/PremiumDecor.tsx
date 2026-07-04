"use client";

import { motion } from "framer-motion";

export default function PremiumDecor() {
  return (
    <>
      {/* BIG GOLD RING */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        -top-28
        -right-28
        h-[520px]
        w-[520px]
        rounded-full
        border
        border-[#D4AF37]/10
      "
      />

      {/* SECOND RING */}

      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        top-10
        right-10
        h-[360px]
        w-[360px]
        rounded-full
        border
        border-[#D4AF37]/15
      "
      />

      {/* Green Floating Glow */}

      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-20
        left-10
        h-44
        w-44
        rounded-full
        bg-[#1F5132]/10
        blur-[90px]
      "
      />

      {/* Golden Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
        absolute
        top-1/3
        left-16
        h-20
        w-20
        rounded-full
        bg-[#D4AF37]/20
        blur-3xl
      "
      />

      {/* Premium Dot */}

      <motion.div
        animate={{
          y: [-10, 10, -10],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
        absolute
        top-40
        right-52
        h-3
        w-3
        rounded-full
        bg-[#D4AF37]
      "
      />

      {/* Premium Line */}

      <motion.div
        animate={{
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        absolute
        left-14
        top-1/2
        h-36
        w-px
        bg-gradient-to-b
        from-transparent
        via-[#D4AF37]
        to-transparent
      "
      />
    </>
  );
}