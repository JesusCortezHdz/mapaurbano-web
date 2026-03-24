import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contacto | MapaUrbano',
  description: 'Contáctanos para consultar sobre tu proyecto de ingeniería.',
  openGraph: {
    title: 'Contacto | MapaUrbano',
    description:
      'Contáctanos para consultar sobre tu proyecto de ingeniería.',
    url: 'https://www.mapaurbano.mx/contacto',
  },
};

export default function ContactoPage() {
  return (
    <div className="pt-32 pb-20 px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#172734] mb-6">
          Contacto
        </h1>

        <p className="text-xl text-[#647484] leading-relaxed mb-12 max-w-2xl">
          Cuéntanos sobre tu proyecto y te respondemos a la brevedad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#172734] mb-6">WhatsApp</h2>
            <a
              href="https://api.whatsapp.com/send?phone=5218139175439&text=Hola,%20me%20interesa%20informaci%C3%B3n%20sobre%20tus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2F6FED] hover:text-[#FF6B4A] font-semibold transition-colors text-lg"
            >
              Escribir por WhatsApp →
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#172734] mb-6">Teléfono</h2>
            <a
              href="tel:+528139175439"
              className="text-[#2F6FED] hover:text-[#FF6B4A] font-semibold transition-colors text-lg"
            >
              (+52) 813 917 5439
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#172734] mb-6">Email</h2>
            <a
              href="mailto:Mapaurbano.analisis@gmail.com"
              className="text-[#2F6FED] hover:text-[#FF6B4A] font-semibold transition-colors text-lg break-all"
            >
              Mapaurbano.analisis@gmail.com
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#172734] mb-6">Instagram</h2>
            <a
              href="https://www.instagram.com/mapaurbano.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2F6FED] hover:text-[#FF6B4A] font-semibold transition-colors text-lg"
            >
              @mapaurbano.mx
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#172734] mb-6">Horario</h2>
            <p className="text-[#647484] font-semibold text-lg">
              Lunes a sábado<br />
              8:00 a 19:00
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="text-[#2F6FED] hover:underline inline-flex items-center gap-2"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
