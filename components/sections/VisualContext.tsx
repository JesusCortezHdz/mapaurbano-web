'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { DataAnalyticsMiniViz } from '@/components/ui/DataAnalyticsMiniViz';
import { PlanDrawViz } from '@/components/ui/PlanDrawViz';

export function VisualContext() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
 
  return (
    <section ref={ref} className="py-20 lg:py-28 px-6 lg:px-8 bg-[#FBF8F1]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* BIG CARD: Análisis y datos */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 group"
            >
              <div className="overflow-hidden rounded-lg border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(47,111,237,0.12)] hover:border-gray-300/80 transition-all duration-300 ease-out">
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-out md:group-hover:scale-[1.02]">
                    <DataAnalyticsMiniViz />
                  </div>
                </div>
              </div>
              <p className="mt-3.5 text-sm text-[#647484] font-medium group-hover:text-[#172734] transition-colors duration-300">Análisis y datos</p>
            </motion.div>

            {/* SMALL LEFT: Trabajo en campo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="overflow-hidden rounded-lg border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(47,111,237,0.12)] hover:border-gray-300/80 transition-all duration-300 ease-out">
                <div className="overflow-hidden">
                  <Image
                    src="/images/mapaurbano-levantamiento-campo.webp"
                    alt="Trabajo de levantamiento en campo para proyectos de infraestructura y movilidad"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
              <p className="mt-3.5 text-sm text-[#647484] font-medium group-hover:text-[#172734] transition-colors duration-300">Trabajo en campo</p>
            </motion.div>

           {/* SMALL RIGHT: Cartografía y planos */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="overflow-hidden rounded-lg border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(47,111,237,0.12)] hover:border-gray-300/80 transition-all duration-300 ease-out">
                <div className="overflow-hidden">
                  <Image
                    src="/images/mapaurbano-cartografia-planos.webp"
                    alt="Cartografía y planos para proyectos de infraestructura, movilidad y territorio"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
              <p className="mt-3.5 text-sm text-[#647484] font-medium group-hover:text-[#172734] transition-colors duration-300">
                Cartografía y planos
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}