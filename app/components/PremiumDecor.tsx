"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function PremiumDecor() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {/* BIG GOLD RING */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -top-28
          -right-28
          hidden
          lg:block
          h-[520px]
          w-[520px]
          rounded-full
          border
          border-[#D4AF37]/8
          will-change-transform
        "
      />

      {/* SECOND RING */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                rotate: -360,
              }
        }
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-10
          right-10
          hidden
          lg:block
          h-[360px]
          w-[360px]
          rounded-full
          border
          border-[#D4AF37]/12
          will-change-transform
        "
      />

      {/* Green Glow */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                x: [-12, 12, -12],
                y: [-10, 10, -10],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-20
          left-10
          hidden
          xl:block
          h-40
          w-40
          rounded-full
          bg-[#1F5132]/8
          blur-[70px]
          will-change-transform
        "
      />

      {/* Golden Glow */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/3
          left-16
          hidden
          xl:block
          h-16
          w-16
          rounded-full
          bg-[#D4AF37]/18
          blur-2xl
          will-change-transform
        "
      />

      {/* Premium Dot */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                y: [-6, 6, -6],
                opacity: [0.5, 1, 0.5],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-40
          right-52
          hidden
          xl:block
          h-3
          w-3
          rounded-full
          bg-[#D4AF37]
          will-change-transform
        "
      />

      {/* Premium Line */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                opacity: [0.25, 0.8, 0.25],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-14
          top-1/2
          hidden
          xl:block
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