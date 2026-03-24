import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | MapaUrbano',
  description: 'Aviso de privacidad de MapaUrbano',
  openGraph: {
    title: 'Aviso de Privacidad | MapaUrbano',
    description: 'Aviso de privacidad de MapaUrbano',
    url: 'https://www.mapaurbano.mx/legal/privacidad',
  },
};

export default function PrivacidadPage() {
  return (
    <div className="pt-32 pb-20 px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#172734] mb-8">
          Aviso de Privacidad
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-6">
          <p className="text-[#647484] mb-4">
            <strong className="text-[#172734]">Última actualización:</strong>{' '}
            Marzo 2026
          </p>
          <p className="text-[#647484]">
            <strong className="text-[#172734]">Responsable:</strong> MapaUrbano
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#172734] mb-4">
              1. Información que recopilamos
            </h2>
            <p className="text-[#647484] leading-relaxed">
              MapaUrbano puede recopilar información de contacto cuando los
              usuarios se comunican con nosotros para consultas o proyectos.
              Esta información puede incluir nombre, correo electrónico,
              teléfono y detalles del proyecto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#172734] mb-4">
              2. Uso de la información
            </h2>
            <p className="text-[#647484] leading-relaxed mb-4">
              La información recopilada se utiliza exclusivamente para:
            </p>
            <ul className="list-disc pl-6 text-[#647484] space-y-2">
              <li>Responder a consultas sobre proyectos</li>
              <li>Coordinar detalles técnicos y operativos</li>
              <li>
                Mantener comunicación relacionada con servicios contratados
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#172734] mb-4">
              3. Protección de datos
            </h2>
            <p className="text-[#647484] leading-relaxed">
              MapaUrbano implementa medidas de seguridad para proteger la
              información personal. No compartimos, vendemos ni distribuimos
              información de contacto a terceros sin consentimiento expreso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#172734] mb-4">
              4. Derechos del usuario
            </h2>
            <p className="text-[#647484] leading-relaxed">
              Los usuarios tienen derecho a acceder, rectificar, cancelar u
              oponerse al tratamiento de sus datos personales. Para ejercer
              estos derechos, pueden contactarnos a través de{' '}
              <a
                href="mailto:Mapaurbano.analisis@gmail.com"
                className="text-[#2F6FED] hover:underline"
              >
                Mapaurbano.analisis@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#172734] mb-4">
              5. Cookies y tecnologías de seguimiento
            </h2>
            <p className="text-[#647484] leading-relaxed">
              Este sitio web puede utilizar cookies básicas para mejorar la
              experiencia del usuario. No utilizamos cookies de seguimiento de
              terceros para publicidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#172734] mb-4">
              6. Cambios al aviso de privacidad
            </h2>
            <p className="text-[#647484] leading-relaxed">
              MapaUrbano se reserva el derecho de actualizar este aviso de
              privacidad. Los cambios se reflejarán en esta página con la fecha
              de actualización correspondiente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#172734] mb-4">
              7. Contacto
            </h2>
            <p className="text-[#647484] leading-relaxed">
              Para cualquier duda o comentario sobre este aviso de privacidad,
              contáctanos:
            </p>
            <div className="mt-4 space-y-2 text-[#647484]">
              <p>
                <strong className="text-[#172734]">Email:</strong>{' '}
                <a
                  href="mailto:Mapaurbano.analisis@gmail.com"
                  className="text-[#2F6FED] hover:underline"
                >
                  Mapaurbano.analisis@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-[#172734]">Teléfono:</strong>{' '}
                <a
                  href="tel:+528139175439"
                  className="text-[#2F6FED] hover:underline"
                >
                  (+52) 813 917 5439
                </a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
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
