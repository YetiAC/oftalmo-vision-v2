// Datos de contacto y marca. Un solo lugar para cambiarlos.
// PENDIENTE confirmar con la clínica: número de WhatsApp oficial y horario real
// (el sitio anterior dice L–V 9–19 h; Setmore marcaba cierre a las 17 h).

export const site = {
  name: 'Oftalmo Visión',
  legalName: 'Oftalmo Visión Tijuana',
  url: 'https://oftalmo.vision',
  phone: '+526646085040',
  phoneDisplay: '(664) 608 5040',
  emergency: '+526643579604',
  emergencyDisplay: '(664) 357 9604',
  whatsapp: '526643579604',
  email: 'info@oftalmo.vision',
  address: {
    street: 'Diego Rivera 2311, Int. 507, Edificio Corporativo Central',
    locality: 'Tijuana',
    region: 'Baja California',
    postalCode: '22010',
    neighborhood: 'Zona Urbana Río Tijuana',
    country: 'MX',
  },
  mapsUrl: 'https://maps.google.com/?cid=5004953545419934127',
  hours: [
    { days: 'Lunes a viernes', time: '9:00 – 19:00', schema: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
    { days: 'Sábado', time: '9:00 – 14:00', schema: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],
  setmore: {
    base: 'https://oftalmovision.setmore.com/',
    juvenal: 'https://oftalmovision.setmore.com/resourcebookingpage/r45031588023698378',
    citlali: 'https://oftalmovision.setmore.com/resourcebookingpage/rab2b1588024211774',
  },
  social: {
    facebook: 'https://www.facebook.com/OftalmoVisionTijuana',
    instagram: 'https://www.instagram.com/oftalmovisiontijuana/',
  },
  reviews: { rating: '4.9', count: 210, asOf: 'octubre 2026' },
  ga4: 'G-STE0V90Y2X',
  cofepris: '223301202A0622',
};

export const doctors = {
  juvenal: {
    slug: 'retinologo-dr-juvenal-guzman-cerda',
    url: '/profesionales-de-la-salud/retinologo-dr-juvenal-guzman-cerda/',
    name: 'Dr. Juvenal Guzmán Cerda',
    short: 'Dr. Juvenal Guzmán',
    title: 'Cirujano oftalmólogo · Alta especialidad en Retina y Vítreo',
    titleEn: 'Ophthalmic surgeon · Retina & Vitreous fellowship',
    cedProf: '7373859',
    cedEsp: '10757004',
    schools: 'UABC · UASLP · UNAM',
    facebook: 'https://www.facebook.com/dr.juvenalguzman/',
    linkedin: 'https://www.linkedin.com/in/juvenal-guzman-05b94b5a/',
    setmore: 'https://oftalmovision.setmore.com/resourcebookingpage/r45031588023698378',
  },
  citlali: {
    slug: 'dra-citlali-carrasco-gonzalez',
    url: '/profesionales-de-la-salud/dra-citlali-carrasco-gonzalez/',
    name: 'Dra. Citlali Carrasco González',
    short: 'Dra. Citlali Carrasco',
    title: 'Cirujana oftalmóloga · Alta especialidad en Oculoplástica',
    titleEn: 'Ophthalmic surgeon · Oculoplastic fellowship',
    cedProf: '7373817',
    cedEsp: '10855406',
    schools: 'UABC · UASLP · UAS',
    facebook: 'https://www.facebook.com/dra.citlalicarrasco/',
    linkedin: 'https://www.linkedin.com/in/citlali-carrasco-5a6ba2177/',
    setmore: 'https://oftalmovision.setmore.com/resourcebookingpage/rab2b1588024211774',
  },
} as const;

/** Enlace de WhatsApp con mensaje prellenado y etiqueta de origen. */
export function waLink(tag: string, text: string) {
  const msg = `[Web · ${tag}] ${text}`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
}
