'use client';

import type { PointerEvent as ReactPointerEvent } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';

const flowPaths = [
  {
    d: 'M 120 470 C 250 535, 410 560, 615 548 C 815 535, 980 500, 1150 458',
    duration: 16,
    from: 860,
    to: -860,
    dash: '46 820',
  },
  {
    d: 'M 710 95 C 690 210, 676 325, 670 460 C 666 552, 662 640, 652 760',
    duration: 18,
    from: -760,
    to: 760,
    dash: '26 760',
  },
  {
    d: 'M 760 82 C 728 232, 710 365, 694 520 C 686 612, 680 690, 670 770',
    duration: 14,
    from: 700,
    to: -700,
    dash: '32 640',
  },
  {
    d: 'M 935 180 C 880 220, 835 265, 792 320 C 742 385, 708 446, 665 515',
    duration: 12,
    from: 520,
    to: -520,
    dash: '18 500',
  },
];

const nodes = [
  { x: 508, y: 256, r: 28, color: '#2F6FED', delay: '0s' },
  { x: 860, y: 520, r: 30, color: '#FF6B4A', delay: '1.8s' },
  { x: 960, y: 335, r: 22, color: '#2F6FED', delay: '3.4s' },
];

export function HeroMapPanel() {
  const reduceMotion = useReducedMotion();

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);

  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowOpacityRaw = useMotionValue(0);

  const rotateX = useSpring(rotateXRaw, {
    stiffness: 130,
    damping: 20,
    mass: 0.7,
  });

  const rotateY = useSpring(rotateYRaw, {
    stiffness: 130,
    damping: 20,
    mass: 0.7,
  });

  const glowOpacity = useSpring(glowOpacityRaw, {
    stiffness: 180,
    damping: 26,
    mass: 0.6,
  });

  const dynamicGlow = useMotionTemplate`
    radial-gradient(
      340px circle at ${glowX}% ${glowY}%,
      rgba(47,111,237,0.14),
      transparent 68%
    )
  `;

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width;
    const py = (event.clientY - bounds.top) / bounds.height;

    rotateYRaw.set((px - 0.5) * 7);
    rotateXRaw.set((0.5 - py) * 6);
    glowX.set(px * 100);
    glowY.set(py * 100);
    glowOpacityRaw.set(1);
  }

  function handlePointerEnter() {
    if (reduceMotion) return;
    glowOpacityRaw.set(1);
  }

  function handlePointerLeave() {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
    glowOpacityRaw.set(0);
  }

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[54rem] aspect-[1.42/1] lg:mx-0 lg:-ml-6"
      style={
        reduceMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1600,
            }
      }
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="absolute -inset-10 rounded-[2.6rem] bg-[radial-gradient(circle_at_64%_50%,rgba(47,111,237,0.16),rgba(255,255,255,0)_42%,rgba(255,107,74,0.06)_66%,transparent_80%)] blur-3xl opacity-90" />
      <div className="absolute inset-x-10 bottom-[-0.9rem] h-10 rounded-full bg-[#172734]/14 blur-2xl opacity-30" />

      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-[#172734]/8 bg-white/60 shadow-[0_30px_100px_rgba(23,39,52,0.18)] backdrop-blur-[3px]">
        <Image
          src="/images/hero-map-master-final.svg"
          alt="Cartografía territorial de Monterrey para análisis de infraestructura y movilidad"
          fill
          priority
          className="object-cover object-center opacity-[0.94] scale-[1.03]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.10)_26%,rgba(244,241,234,0.14)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.92),transparent_22%),radial-gradient(circle_at_72%_50%,rgba(47,111,237,0.08),transparent_32%),radial-gradient(circle_at_78%_64%,rgba(255,107,74,0.08),transparent_18%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,116,132,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,132,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />

        {!reduceMotion && (
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              background: dynamicGlow,
              opacity: glowOpacity,
            }}
          />
        )}

        {!reduceMotion && (
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-[-24%] h-[26%] bg-[linear-gradient(180deg,transparent,rgba(47,111,237,0.09),transparent)] mix-blend-screen"
            animate={{ y: ['0%', '145%'] }}
            transition={{
              duration: 8.6,
              ease: 'linear',
              repeat: Infinity,
              repeatDelay: 1.4,
            }}
          />
        )}

        <svg
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="flowBlue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2F6FED" stopOpacity="0" />
              <stop offset="40%" stopColor="#2F6FED" stopOpacity="0.42" />
              <stop offset="50%" stopColor="#2F6FED" stopOpacity="0.78" />
              <stop offset="60%" stopColor="#2F6FED" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#2F6FED" stopOpacity="0" />
            </linearGradient>

            <filter id="flowGlow">
              <feGaussianBlur stdDeviation="1.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g opacity="0.82">
            {flowPaths.map((flow) => (
              <path
                key={flow.d}
                d={flow.d}
                stroke="url(#flowBlue)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeDasharray={flow.dash}
                fill="none"
                filter="url(#flowGlow)"
              >
                {!reduceMotion && (
                  <animate
                    attributeName="stroke-dashoffset"
                    from={String(flow.from)}
                    to={String(flow.to)}
                    dur={`${flow.duration}s`}
                    repeatCount="indefinite"
                    calcMode="linear"
                  />
                )}
              </path>
            ))}
          </g>

          <g>
            {nodes.map((node) => (
              <g key={`${node.x}-${node.y}`}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  fill={node.color}
                  opacity="0.08"
                >
                  {!reduceMotion && (
                    <>
                      <animate
                        attributeName="r"
                        values={`${node.r};${node.r + 10};${node.r}`}
                        dur="7.8s"
                        begin={node.delay}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.06;0.14;0.06"
                        dur="7.8s"
                        begin={node.delay}
                        repeatCount="indefinite"
                      />
                    </>
                  )}
                </circle>

                <circle
                  cx={node.x}
                  cy={node.y}
                  r="2.6"
                  fill={node.color}
                  opacity="0.52"
                />
              </g>
            ))}
          </g>
        </svg>

        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/55 bg-white/72 px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-[#172734]/78 uppercase backdrop-blur-md">
            Territorio
          </span>
          <span className="rounded-full border border-white/40 bg-white/48 px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-[#647484] uppercase backdrop-blur-md">
            Infraestructura
          </span>
          <span className="rounded-full border border-white/40 bg-white/48 px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-[#647484] uppercase backdrop-blur-md">
            Movilidad
          </span>
        </div>

        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
          <div className="rounded-2xl border border-white/45 bg-white/60 px-4 py-3 shadow-[0_12px_32px_rgba(23,39,52,0.08)] backdrop-blur-md">
            <p className="text-[11px] font-medium tracking-[0.16em] text-[#647484] uppercase">
              Lectura territorial
            </p>
            <p className="mt-1 text-sm font-medium text-[#172734]">
              Red, flujos y puntos de actividad
            </p>
          </div>

          <div className="hidden items-center gap-3 rounded-full border border-white/40 bg-white/50 px-3 py-2 text-[11px] font-medium text-[#647484] shadow-[0_10px_30px_rgba(23,39,52,0.06)] backdrop-blur-md sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#2F6FED]" />
            Actividad territorial
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-[#2F6FED]/12 shadow-inner" />
      </div>
    </motion.div>
  );
}