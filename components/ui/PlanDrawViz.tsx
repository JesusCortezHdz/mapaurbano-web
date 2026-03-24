'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function PlanDrawViz() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const drawDuration = prefersReducedMotion ? 0 : 2.5;
  const sweepDuration = prefersReducedMotion ? 0 : 3;

  return (
    <div className="relative w-full h-full bg-[#F4F1EA] overflow-hidden">
      <svg
        viewBox="0 0 400 240"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sweepGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2F6FED" stopOpacity="0" />
            <stop offset="50%" stopColor="#2F6FED" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#2F6FED" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.rect
          x="0"
          y="0"
          width="60"
          height="240"
          fill="url(#sweepGradient)"
          initial={{ x: -60 }}
          animate={{ x: 400 }}
          transition={{
            duration: sweepDuration,
            delay: 0.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 4,
          }}
        />

        <g stroke="#647484" strokeWidth="0.8" fill="none" opacity="0.15">
          <motion.line
            x1="40"
            y1="0"
            x2="40"
            y2="240"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: drawDuration, delay: 0.2 }}
          />
          <motion.line
            x1="100"
            y1="0"
            x2="100"
            y2="240"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: drawDuration, delay: 0.3 }}
          />
          <motion.line
            x1="200"
            y1="0"
            x2="200"
            y2="240"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: drawDuration, delay: 0.25 }}
          />
          <motion.line
            x1="300"
            y1="0"
            x2="300"
            y2="240"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: drawDuration, delay: 0.35 }}
          />
          <motion.line
            x1="360"
            y1="0"
            x2="360"
            y2="240"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: drawDuration, delay: 0.4 }}
          />
        </g>

        <g stroke="#647484" strokeWidth="0.8" fill="none" opacity="0.15">
          <motion.line
            x1="0"
            y1="60"
            x2="400"
            y2="60"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: drawDuration, delay: 0.3 }}
          />
          <motion.line
            x1="0"
            y1="120"
            x2="400"
            y2="120"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: drawDuration, delay: 0.35 }}
          />
          <motion.line
            x1="0"
            y1="180"
            x2="400"
            y2="180"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: drawDuration, delay: 0.4 }}
          />
        </g>

        <g stroke="#2F6FED" strokeWidth="1.8" fill="none">
          <motion.path
            d="M 60 80 L 140 80 L 140 160 L 60 160 Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: drawDuration, delay: 0.6, ease: 'easeInOut' }}
          />
          <motion.path
            d="M 160 100 L 260 100 L 260 180 L 160 180 Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: drawDuration, delay: 0.8, ease: 'easeInOut' }}
          />
          <motion.path
            d="M 280 60 L 340 60 L 340 140 L 280 140 Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: drawDuration, delay: 1, ease: 'easeInOut' }}
          />
        </g>

        <g stroke="#2F6FED" strokeWidth="1.2" fill="none" opacity="0.5">
          <motion.line
            x1="100"
            y1="120"
            x2="100"
            y2="200"
            strokeDasharray="4,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: drawDuration, delay: 1.2 }}
          />
          <motion.line
            x1="210"
            y1="140"
            x2="210"
            y2="220"
            strokeDasharray="4,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: drawDuration, delay: 1.3 }}
          />
          <motion.line
            x1="310"
            y1="100"
            x2="310"
            y2="180"
            strokeDasharray="4,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: drawDuration, delay: 1.4 }}
          />
        </g>

        <motion.circle
          cx="100"
          cy="120"
          r="4"
          fill="#FF6B4A"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.6 }}
        />
        <motion.circle
          cx="210"
          cy="140"
          r="4"
          fill="#FF6B4A"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.7 }}
        />
        <motion.circle
          cx="310"
          cy="100"
          r="4"
          fill="#FF6B4A"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.8 }}
        />

        <motion.rect
          x="90"
          y="110"
          width="80"
          height="30"
          fill="#2F6FED"
          opacity="0.08"
          rx="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 0.5, delay: 1.9 }}
        />
      </svg>
    </div>
  );
}
