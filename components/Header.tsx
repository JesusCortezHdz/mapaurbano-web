'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F4F1EA]/95 backdrop-blur-sm border-b border-gray-200"
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 py-4 lg:py-5.5 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <Image
            src="/images/logo-main.svg"
            alt="MapaUrbano"
            width={180}
            height={44}
            className="h-[36px] w-auto lg:h-[44px]"
            priority
          />
        </Link>

        <div className="flex gap-8 items-center">
          <Link
            href="/"
            className="text-[#647484] hover:text-[#172734] transition-colors text-sm lg:text-base"
          >
            Inicio
          </Link>
          <Link
            href="/contacto"
            className="text-[#647484] hover:text-[#172734] transition-colors text-sm lg:text-base"
          >
            Contacto
          </Link>
          <Link
            href="/legal/privacidad"
            className="text-[#647484] hover:text-[#172734] transition-colors text-sm lg:text-base"
          >
            Privacidad
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
