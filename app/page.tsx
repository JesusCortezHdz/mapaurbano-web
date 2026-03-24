import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Manifesto } from '@/components/sections/Manifesto';
import { VisualContext } from '@/components/sections/VisualContext';
import { Capabilities } from '@/components/sections/Capabilities';
import { VideoSection } from '@/components/sections/VideoSection';
import { Tools } from '@/components/sections/Tools';
import { FAQ } from '@/components/sections/FAQ';

export const metadata: Metadata = {
  title: 'MapaUrbano | Ingeniería y datos para proyectos',
  description:
    'Levantamientos en campo, planos y cartografía, análisis y estudios técnicos para infraestructura, territorio, transporte y movilidad.',
};

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MapaUrbano',
    url: 'https://www.mapaurbano.mx/',
    email: 'Mapaurbano.analisis@gmail.com',
    telephone: '+52 813 917 5439',
    areaServed: [
      {
        '@type': 'City',
        name: 'Monterrey',
        addressRegion: 'Nuevo León',
        addressCountry: 'MX',
      },
      {
        '@type': 'City',
        name: 'Guadalajara',
        addressRegion: 'Jalisco',
        addressCountry: 'MX',
      },
      {
        '@type': 'Country',
        name: 'México',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué tipo de proyectos desarrolla MapaUrbano?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trabajamos en proyectos de infraestructura, territorio, transporte y movilidad que requieran levantamientos en campo, planos, cartografía o análisis de datos. Nuestro trabajo incluye desde la medición y documentación técnica en sitio, hasta la elaboración de estudios, mapas y análisis geoespaciales que apoyen la toma de decisiones técnicas y operativas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Trabajan únicamente con movilidad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Aunque la movilidad y el transporte son áreas en las que tenemos experiencia consistente, también desarrollamos proyectos en infraestructura urbana, territorio y servicios que requieran análisis geoespacial, cartografía técnica o levantamientos de campo. Nuestra capacidad técnica nos permite adaptarnos a distintos tipos de proyectos según sus necesidades.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Pueden adaptarse a requerimientos técnicos específicos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Cada proyecto tiene sus propias necesidades técnicas y entregables. Revisamos el alcance, definimos la metodología adecuada y ajustamos el proceso para entregar resultados que se alineen con los objetivos del proyecto. Si tienes un requerimiento particular, podemos evaluarlo y proponerte un enfoque técnico adecuado.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <About />
      <Manifesto />
      <VisualContext />
      <Capabilities />
      <VideoSection />
      <Tools />
      <FAQ />
    </>
  );
}
