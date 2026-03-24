'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 lg:py-28 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-white/40 border border-gray-200/60 rounded-lg p-8 lg:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-[#2F6FED] via-[#2F6FED] to-[#2F6FED]/40 rounded-full" />
            <div className="pl-6 space-y-6 text-lg text-[#172734] leading-relaxed">
              <p>
                Nos gusta la ingeniería bien hecha: medir con criterio, analizar
                con orden y entregar con claridad. Por eso cuidamos el proceso
                completo: desde el levantamiento y el armado de información técnica,
                hasta el análisis, la cartografía y la presentación final.
              </p>

              <p>
                El objetivo es simple: que cada plano, mapa o estudio sirva para
                avanzar el proyecto—ya sea para planear, justificar, coordinar o
                tomar decisiones operativas—sin complicar lo que debe ser claro.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
