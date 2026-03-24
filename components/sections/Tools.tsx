'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { OrbitingSkills } from '@/components/ui/orbiting-skills';

const tools = [
  'QGIS',
  'ArcGIS',
  'Python',
  'R',
  'Anaconda',
  'Excel',
  'Power BI',
  'SQL',
  'PyCharm',
  'AutoCAD',
  'Synchro',
];

export function Tools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={ref} className="py-20 lg:py-28 px-6 lg:px-8 bg-[#FBF8F1]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#172734] mb-12 text-center">
            Herramientas que usamos para medir y analizar
          </h2>

          {isDesktop ? (
            <div className="flex justify-center items-center py-8">
              <OrbitingSkills />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm"
                >
                  <p className="font-semibold text-[#172734]">{tool}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
