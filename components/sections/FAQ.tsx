'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const faqs = [
  {
    question: '¿Qué tipo de proyectos desarrolla MapaUrbano?',
    answer:
      'Trabajamos en proyectos de infraestructura, territorio, transporte y movilidad que requieran levantamientos en campo, planos, cartografía o análisis de datos. Nuestro trabajo incluye desde la medición y documentación técnica en sitio, hasta la elaboración de estudios, mapas y análisis geoespaciales que apoyen la toma de decisiones técnicas y operativas.',
  },
  {
    question: '¿Trabajan únicamente con movilidad?',
    answer:
      'No. Aunque la movilidad y el transporte son áreas en las que tenemos experiencia consistente, también desarrollamos proyectos en infraestructura urbana, análisis de transporte, análisis de datos,  territorio y servicios que requieran análisis geoespacial, cartografía técnica o levantamientos de campo. Nuestra capacidad técnica nos permite adaptarnos a distintos tipos de proyectos según sus necesidades.',
  },
  {
    question: '¿Pueden adaptarse a requerimientos técnicos específicos?',
    answer:
      'Sí. Cada proyecto tiene sus propias necesidades técnicas y entregables. Revisamos el alcance, definimos la metodología adecuada y ajustamos el proceso para entregar resultados que se alineen con los objetivos del proyecto. Si tienes un requerimiento particular, podemos evaluarlo y proponerte un enfoque técnico adecuado.',
  },
  {
    question: '¿Pueden realizar análisis de demanda, aforos y tiempos de recorrido?',
    answer:
      'Sí. Dependiendo del alcance, podemos apoyar con análisis de demanda, aforos, tiempos de recorrido, diagnóstico operativo y revisión de patrones de movilidad o funcionamiento. El enfoque se ajusta al tipo de proyecto, la información disponible y los entregables requeridos.',
  },
{
    question: '¿Hacen levantamientos en campo y documentación técnica?',
    answer:
      'Sí. Realizamos levantamientos y registro en sitio para convertir observaciones, mediciones y evidencia en insumos técnicos que puedan integrarse en planos, cartografía, reportes o estudios.',
  },
{
    question: '¿Atienden proyectos fuera de Monterrey?',
    answer:
      'Sí. Tenemos base en Monterrey, Nuevo León, y experiencia en otros contextos urbanos del país. Podemos revisar proyectos en otras ciudades según ubicación, alcance y necesidades técnicas.',
  },


  
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 lg:py-28 px-6 lg:px-8 bg-[#FBF8F1]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-7 rounded-lg border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(47,111,237,0.08)] hover:border-gray-300/80 hover:-translate-y-0.5 transition-all duration-300 ease-out"
              >
                <h3 className="text-lg font-semibold text-[#172734] mb-3.5 group-hover:text-[#2F6FED] transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent mb-3.5" />
                <p className="text-[#647484] leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
