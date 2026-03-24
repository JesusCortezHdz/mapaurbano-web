'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function VideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: false,
    margin: '-120px',
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 px-6 lg:px-8 border-t border-stone-200"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >

          {/* TITULO */}

          <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-10">

            <h2 className="text-3xl lg:text-4xl font-bold text-[#172734] mb-4">
              Lectura del territorio
            </h2>

            <p className="text-lg text-[#647484] max-w-2xl mx-auto">
              Observamos infraestructura, flujos y entorno urbano para entender
              el contexto real de cada proyecto.
            </p>

          </div>


          {/* VIDEO */}

          <div className="relative w-full overflow-hidden rounded-2xl border border-stone-200 bg-[#F4F1EA] shadow-[0_12px_40px_rgba(23,39,52,0.08)]">

            <div className="relative aspect-video lg:aspect-[21/9]">

              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="none"
              >
                <source
                  src="/videos/lectura-del-territorio.mp4"
                  type="video/mp4"
                />
              </video>


              {/* overlay cinematográfico */}

              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(23,39,52,0.18),rgba(23,39,52,0.02)_24%,rgba(23,39,52,0.02)_76%,rgba(23,39,52,0.22))]" />

              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />


              {/* etiqueta opcional */}

              <div className="absolute left-4 top-4 lg:left-6 lg:top-6">

                <span className="inline-flex items-center rounded-full border border-white/20 bg-black/10 px-3 py-1 text-xs lg:text-sm text-white/90 backdrop-blur-sm">
                  Monterrey · contexto urbano
                </span>

              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}