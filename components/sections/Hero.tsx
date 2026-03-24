'use client';

import { motion } from 'framer-motion';
import { HeroNetworkBackground } from '@/components/ui/hero-network-background';
import { HeroMapPanel } from '@/components/ui/hero-map-panel';

const chips = ['Levantamiento', 'Cartografía', 'SIG', 'Análisis técnico'];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F1EA] px-6 pt-28 pb-20 lg:px-8 lg:pt-36 lg:pb-28">
      <div
        className="absolute inset-0 pointer-events-none opacity-65"
        aria-hidden="true"
      >
        <HeroNetworkBackground variant="hero" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.96fr_1.14fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-[39rem]"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#172734]/10 bg-white/70 px-3 py-1.5 text-[0.72rem] font-medium tracking-[0.18em] text-[#647484] uppercase shadow-[0_12px_30px_rgba(23,39,52,0.07)] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6FED]" />
              Ingeniería y análisis técnico
            </div>

            <h1 className="mb-6 text-5xl leading-[0.96] font-bold tracking-[-0.04em] text-[#172734] lg:text-[5.2rem]">
              Ingeniería y datos para proyectos.
            </h1>

            <p className="mb-6 text-2xl font-medium tracking-[-0.02em] text-[#FF6B4A] lg:text-[2.05rem]">
              Medimos. Analizamos. Entregamos.
            </p>

            <p className="max-w-[38rem] text-lg leading-relaxed text-[#647484] lg:text-[1.18rem]">
              Levantamientos en campo, planos y cartografía, análisis y estudios
              técnicos para infraestructura, territorio, transporte y
              movilidad.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[#172734]/10 bg-white/65 px-4 py-2 text-sm font-medium text-[#172734]/78 shadow-[0_10px_24px_rgba(23,39,52,0.05)] backdrop-blur-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: 'easeOut' }}
          >
            <HeroMapPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}