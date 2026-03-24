'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 px-6 lg:px-8 bg-[#FBF8F1]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#172734] mb-10">
            Quiénes somos
          </h2>

          <div className="space-y-6 text-lg text-[#647484] leading-relaxed">
            <p>
              En MapaUrbano desarrollamos trabajo técnico para proyectos de
              ingeniería y movilidad: desde levantamientos en campo y elaboración
              de planos, hasta cartografía, análisis y estudios que apoyan la
              planeación, la gestión y la toma de decisiones. Con base en
              Monterrey, Nuevo León, y experiencia en proyectos en otras ciudades
              del país como Guadalajara.
            </p>

            <p>
              Nos movemos bien en dos mundos que suelen ir separados: el
              territorio (mediciones, levantamientos, planos, bases cartográficas)
              y los datos (análisis, modelación, visualización y reportes). Esa
              combinación nos permite atender proyectos de infraestructura y
              transporte con entregables claros, bien documentados y listos para
              usarse.
            </p>

            <p>
              Trabajamos con un estilo cercano y ordenado: entendemos el objetivo,
              definimos el alcance y entregamos resultados que se pueden revisar,
              presentar y ejecutar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
