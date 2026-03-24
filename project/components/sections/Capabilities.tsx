'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const capabilities = [
  {
    title: 'Levantamientos en campo y documentación técnica',
    description:
      'Trabajo en sitio para registrar condiciones reales y convertirlas en insumos técnicos usables en planos, cartografía o estudios, con orden y trazabilidad.',
    bullets: [
      'Registro y verificación en sitio según el objetivo del proyecto',
      'Evidencia y criterios consistentes para revisión y seguimiento',
      'Insumos listos para integrarse a planos, mapas o reportes',
    ],
  },
  {
    title: 'Planos y cartografía',
    description:
      'Planos y cartografía listos para coordinación y revisión, con capas ordenadas y criterios consistentes para integrarse al flujo de trabajo del proyecto.',
    bullets: [
      'Elaboración/actualización de planos y bases cartográficas',
      'Mapas temáticos y material técnico para reportes',
      'Integración y depuración de capas con consistencia espacial',
    ],
  },
  {
    title: 'SIG y análisis geoespacial',
    description:
      'Integración y análisis de información espacial para construir capas, indicadores y resultados que expliquen el territorio con claridad.',
    bullets: [
      'Limpieza y estructuración de datos espaciales y alfanuméricos',
      'Análisis espacial e integración de fuentes',
      'Productos geoespaciales listos para diagnóstico o evaluación',
    ],
  },
  {
    title: 'Analítica y ciencia de datos aplicada',
    description:
      'Análisis estadístico, modelación y visualización para encontrar patrones, explicar comportamientos y evaluar escenarios con datos del proyecto.',
    bullets: [
      'Procesamiento de encuestas, registros y mediciones',
      'Modelos, indicadores y análisis reproducibles',
      'Reportes y tableros claros para comunicar resultados',
    ],
  },
  {
    title: 'Transporte, operación y movilidad',
    description:
      'Estudios técnicos para entender flujos y operación, y evaluar cambios ante escenarios de infraestructura, demanda u operación.',
    bullets: [
      'Aforos, tiempos de recorrido/espera y accesibilidad',
      'Diagnóstico operativo y desempeño',
      'Evaluación de escenarios y ajustes',
    ],
  },
  {
    title: 'Estudios técnicos e integración de resultados',
    description:
      'Documentos técnicos estructurados que integran insumos de campo, planos, cartografía y análisis, orientados a que el entregable sea usable.',
    bullets: [
      'Metodología, criterios y resultados presentables',
      'Integración de anexos cartográficos y de datos',
      'Reportes listos para revisión',
    ],
  },
];

export function Capabilities() {
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
          <h2 className="text-3xl lg:text-4xl font-bold text-[#172734] mb-4">
            Capacidades técnicas
          </h2>

          <p className="text-lg text-[#647484] leading-relaxed mb-12 max-w-2xl">
            En MapaUrbano integramos trabajo de campo, planos, cartografía y
            análisis de datos para resolver necesidades técnicas en proyectos de
            infraestructura, territorio, transporte y movilidad.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-8 rounded-lg border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(47,111,237,0.08)] hover:border-gray-300/80 hover:-translate-y-0.5 transition-all duration-300 ease-out"
              >
                <div className="border-t-2 border-[#2F6FED]/0 group-hover:border-[#2F6FED]/100 transition-colors duration-300 -mt-8 -mx-8 mb-6" />
                <h3 className="text-xl font-bold text-[#172734] mb-4 group-hover:text-[#2F6FED] transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-[#647484] leading-relaxed mb-5">
                  {capability.description}
                </p>
                <ul className="space-y-2.5">
                  {capability.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="text-sm text-[#647484] flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="text-[#2F6FED] mt-0.5 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="text-base text-[#647484] leading-relaxed italic">
            Estas líneas describen áreas donde trabajamos con frecuencia. Si tu
            necesidad es distinta, podemos revisarla y proponer un enfoque
            técnico alineado al objetivo del proyecto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
