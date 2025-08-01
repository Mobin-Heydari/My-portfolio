'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { useMounted } from '@/hooks/useMounted';

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  gradientFirst,
  gradientSecond,
  gradientThird,
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps) => {
  // ─── Hooks (always in the same order) ─────────────────────────────────
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();

  // ─── Prevent render until client + theme ready ───────────────────────
  if (!mounted) {
    return null;
  }

  // ─── Theme-specific default gradients ─────────────────────────────────
  const light = {
    gradientFirst:
      'radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210,100%,85%,0.20) 0%, hsla(210,100%,55%,0.08) 50%, hsla(210,100%,45%,0.02) 80%)',
    gradientSecond:
      'radial-gradient(50% 50% at 50% 50%, hsla(210,100%,85%,0.12) 0%, hsla(210,100%,55%,0.06) 80%, transparent 100%)',
    gradientThird:
      'radial-gradient(50% 50% at 50% 50%, hsla(210,100%,85%,0.08) 0%, hsla(210,100%,45%,0.04) 80%, transparent 100%)',
  };

  const dark = {
    gradientFirst:
      'radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210,100%,20%,0.30) 0%, hsla(210,100%,15%,0.15) 50%, transparent 80%)',
    gradientSecond:
      'radial-gradient(50% 50% at 50% 50%, hsla(210,100%,20%,0.20) 0%, hsla(210,100%,15%,0.10) 80%, transparent 100%)',
    gradientThird:
      'radial-gradient(50% 50% at 50% 50%, hsla(210,100%,20%,0.16) 0%, hsla(210,100%,15%,0.08) 80%, transparent 100%)',
  };


  // ─── Use prop override or theme default ───────────────────────────────
  const g1 = gradientFirst  ?? (resolvedTheme === 'dark' ? dark.gradientFirst  : light.gradientFirst);
  const g2 = gradientSecond ?? (resolvedTheme === 'dark' ? dark.gradientSecond : light.gradientSecond);
  const g3 = gradientThird  ?? (resolvedTheme === 'dark' ? dark.gradientThird  : light.gradientThird);

  // ─── Render ───────────────────────────────────────────────────────────
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* Left moving beam */}
      <motion.div
        animate={{ x: [0, xOffset, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: g1,
            width:  `${width}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0"
        />

        <div
          style={{
            transform: `rotate(-45deg) translate(5%, -50%)`,
            background: g2,
            width:  `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />

        <div
          style={{
            transform: `rotate(-45deg) translate(-180%, -70%)`,
            background: g3,
            width:  `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>

      {/* Right moving beam */}
      <motion.div
        animate={{ x: [0, -xOffset, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: g1,
            width:  `${width}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0"
        />

        <div
          style={{
            transform: `rotate(45deg) translate(-5%, -50%)`,
            background: g2,
            width:  `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />

        <div
          style={{
            transform: `rotate(45deg) translate(180%, -70%)`,
            background: g3,
            width:  `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </motion.div>
    </motion.div>
  );
};