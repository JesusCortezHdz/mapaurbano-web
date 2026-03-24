'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#FBF8F1] border-t border-gray-200 mt-20 lg:mt-28"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center mb-16 space-y-5">
          <Link href="/" className="inline-block transition-opacity hover:opacity-80">
            <Image
              src="/images/logo-tagline.svg"
              alt="MapaUrbano"
              width={160}
              height={56}
              className="w-[140px] lg:w-[160px] h-auto"
            />
          </Link>
          <p className="text-sm text-[#647484] leading-relaxed max-w-[560px] font-light">
            Ingeniería y datos para proyectos de infraestructura, territorio, transporte y movilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-12">
          <div>
            <h3 className="font-semibold text-[#172734] mb-4 text-sm uppercase tracking-wide">Enlaces</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-[#647484] hover:text-[#2F6FED] transition-colors text-sm"
              >
                Inicio
              </Link>
              <Link
                href="/contacto"
                className="block text-[#647484] hover:text-[#2F6FED] transition-colors text-sm"
              >
                Contacto
              </Link>
              <Link
                href="/legal/privacidad"
                className="block text-[#647484] hover:text-[#2F6FED] transition-colors text-sm"
              >
                Privacidad
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[#172734] mb-4 text-sm uppercase tracking-wide">Contacto</h3>
            <div className="space-y-2 text-sm text-[#647484]">
              <p>
                <a
                  href="tel:+528139175439"
                  className="hover:text-[#2F6FED] transition-colors"
                >
                  (+52) 813 917 5439
                </a>
              </p>
              <p>
                <a
                  href="mailto:Mapaurbano.analisis@gmail.com"
                  className="hover:text-[#2F6FED] transition-colors break-all"
                >
                  Mapaurbano.analisis@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/mapaurbano.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2F6FED] transition-colors"
                  aria-label="Instagram MapaUrbano"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[#172734] mb-4 text-sm uppercase tracking-wide">Ubicación</h3>
            <p className="text-sm text-[#647484]">
              Con base en Monterrey, Nuevo León y experiencia en Guadalajara y
              otros contextos urbanos del país.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-[#647484]">
            © {currentYear} MapaUrbano. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
