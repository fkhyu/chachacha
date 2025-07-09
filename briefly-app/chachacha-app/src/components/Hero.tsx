"use client";
import { motion } from "framer-motion";
import Badge from "./Badge";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center bg-gradient-to-br from-white via-neutral-50 to-gray-100">
      <Badge>
        <span className="font-mono text-gray-700">Briefly</span>
        <div className="h-4 w-px bg-gray-400" />
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-medium text-gray-600"
        >
          Sort Less. Know More.
        </motion.span>
      </Badge>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-5xl md:text-6xl font-bold tracking-tight text-gray-900 max-w-3xl"
      >
        Email clarity, delivered automatically.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-xl text-gray-600 max-w-xl"
      >
        Briefly sorts your inbox by urgency, deadlines, and conversation context —
        so you can act fast and skip the fluff.
      </motion.p>

      <motion.a
        href="/auth"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 transition"
      >
        Connect your Gmail
        <span className="text-xl">→</span>
      </motion.a>
    </section>
  );
}
