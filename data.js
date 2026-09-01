/**
 * CONFIG — todo el contenido editable del sitio vive acá.
 * Para rebrandear o cambiar textos/fotos/precios, tocá solo este archivo.
 *
 * TODO antes de publicar:
 *  - whatsapp.number: poner el número real (formato internacional, sin "+", ej: 5491122334455)
 *  - business.email / business.address: completar con los datos reales
 *  - beforeAfter[]: reemplazar las fotos placeholder por fotos reales de "antes" de cada obra
 *    (hoy se muestra la misma foto del "después" con un filtro, solo para poder probar el
 *    componente comparador antes de tener material fotográfico real)
 *  - materials[]: reemplazar por fotos de textura reales de cada tipo de chapa
 *  - services[].priceFrom: ajustar precios "desde" por m² a valores reales
 */
const CONFIG = {
  business: {
    name: "Metales Sur",
    shortName: "Metales Sur",
    tagline: "Fabricación e instalación de paneles de chapa a medida",
    zone: "Zona sur y CABA",
    phoneDisplay: "11 0000-0000",
    email: "hola@metalessur.com.ar",
    address: "Zona Sur, Buenos Aires, Argentina",
    logo: "assets/img/logo-metales-sur.webp",
    instagram: "https://instagram.com/",
  },

  whatsapp: {
    // TODO: reemplazar por el número real, formato 549 + código de área + número
    number: "5491100000000",
    defaultMessage: "Hola! Vi la web de Metales Sur y quiero pedir información.",
    sectionMessages: {
      hero: "Hola! Quiero pedir un presupuesto para transformar mi casa o local con paneles de chapa.",
      servicios: "Hola! Vi la web de Metales Sur y quiero consultar por un servicio.",
      "antes-despues": "Hola! Vi los trabajos de antes/después en la web y quiero uno similar.",
      "por-que-chapa": "Hola! Quiero saber más sobre trabajar con chapa para mi obra.",
      materiales: "Hola! Quiero asesorarme sobre qué tipo de chapa me conviene.",
      proceso: "Hola! Quiero coordinar una visita y medición sin cargo.",
      presupuesto: "Hola! Quiero pedir un presupuesto rápido.",
      faq: "Hola! Tengo una consulta antes de pedir presupuesto.",
      footer: "Hola! Quiero pedir información para mi proyecto.",
    },
  },

  hero: {
    kicker: "Fachadas · Quinchos · Cercos · Interiores",
    title: "Transformá tu casa o local con paneles de chapa a medida",
    subtitle:
      "Fachadas, quinchos, cercos e interiores. Sin obra húmeda, sin escombros, en días y no en meses.",
    image: {
      // "Después" más impactante — placeholder con foto real de panel exterior.
      // TODO: reemplazar por la foto de frente de casa terminada (prompt 1).
      src: "assets/img/panel-exterior-2.webp",
      alt: "Frente de casa revestido con panel de chapa a medida, terminación prepintada",
      width: 858,
      height: 1600,
    },
    ctaPrimary: { label: "Pedí tu presupuesto por WhatsApp" },
    ctaSecondary: { label: "Ver trabajos", href: "#antes-despues" },
  },

  trustBar: [
    { icon: "factory", text: "Fabricación propia" },
    { icon: "wrench", text: "Instalación incluida" },
    { icon: "clipboard", text: "Presupuesto sin cargo" },
    { icon: "pin", text: "Zona sur y CABA" },
  ],

  services: [
    {
      id: "fachadas",
      title: "Fachadas y frentes",
      description: "Renová el frente de tu casa o local sin romper nada por dentro.",
      image: { src: "assets/img/panel-exterior-1.webp", alt: "Fachada revestida con panel de chapa", width: 1009, height: 946 },
      priceFrom: "Desde USD 45/m²",
      waSection: "servicios",
      waMessage: "Hola! Quiero renovar el frente de mi casa/local con paneles de chapa.",
    },
    {
      id: "quinchos",
      title: "Quinchos, galerías y techos",
      description: "Sumá metros cubiertos para disfrutar todo el año, con o sin pérgola.",
      image: { src: "assets/img/pergolas.webp", alt: "Quincho con techo y pérgola de chapa", width: 720, height: 1280 },
      priceFrom: "Desde USD 50/m²",
      waSection: "servicios",
      waMessage: "Hola! Quiero cubrir un quincho/galería con techo de chapa.",
    },
    {
      id: "cercos",
      title: "Cercos, medianeras y portones",
      description: "Tapá la medianera fea o ganá privacidad con un cerco a medida.",
      image: { src: "assets/img/porton.webp", alt: "Portón y cerco de chapa a medida", width: 979, height: 941 },
      priceFrom: "Desde USD 35/m²",
      waSection: "servicios",
      waMessage: "Hola! Quiero hacer un cerco/medianera/portón de chapa a medida.",
    },
    {
      id: "interiores",
      title: "Paredes de acento y cielorrasos",
      description: "Un interior distinto, con calidez y textura, sin obra húmeda.",
      image: { src: "assets/img/panel-interior-1.webp", alt: "Pared de acento interior con panel de chapa", width: 1010, height: 954 },
      priceFrom: "Desde USD 40/m²",
      waSection: "servicios",
      waMessage: "Hola! Quiero hacer una pared de acento o cielorraso con chapa.",
    },
    {
      id: "gastronomico",
      title: "Cocinas y locales gastronómicos",
      description: "Revestimientos resistentes, fáciles de limpiar y con estética premium.",
      image: { src: "assets/img/panel-interior-2.webp", alt: "Revestimiento de chapa en local gastronómico", width: 900, height: 1200 },
      priceFrom: "Desde USD 55/m²",
      waSection: "servicios",
      waMessage: "Hola! Tengo un local gastronómico y quiero revestirlo en chapa.",
    },
    {
      id: "muebles",
      title: "Muebles y detalles a medida",
      description: "Fogoneros, rockets, biombos y piezas únicas fabricadas en nuestro taller.",
      image: { src: "assets/img/fogonero.webp", alt: "Fogonero de chapa fabricado a medida", width: 900, height: 1600 },
      gallery: [
        { src: "assets/img/fogonero.webp", alt: "Fogonero de chapa", width: 900, height: 1600 },
        { src: "assets/img/rocket.webp", alt: "Rocket / cocina a leña de chapa", width: 960, height: 1280 },
      ],
      priceFrom: "Consultar por pieza",
      waSection: "servicios",
      waMessage: "Hola! Quiero consultar por un fogonero/rocket o un mueble a medida.",
    },
  ],

  // Casos de antes/después. Los pares "before" son placeholders (misma foto con filtro)
  // hasta contar con fotografía real del "antes" de cada obra.
  beforeAfter: [
    {
      id: "burzaco",
      title: "Frente en Burzaco",
      description: "Chapa trapezoidal negra + guatambú",
      duration: "3 días de obra",
      after: { src: "assets/img/panel-exterior-1.webp", alt: "Frente terminado con chapa trapezoidal negra", width: 1009, height: 946 },
      placeholder: true,
    },
    {
      id: "quincho-adrogue",
      title: "Quincho en Adrogué",
      description: "Techo con pérgola y chapa sinusoidal",
      duration: "4 días de obra",
      after: { src: "assets/img/pergolas.webp", alt: "Quincho techado con pérgola y chapa", width: 720, height: 1280 },
      placeholder: true,
    },
    {
      id: "porton-lomas",
      title: "Portón en Lomas de Zamora",
      description: "Portón corten a medida con motor",
      duration: "2 días de obra",
      after: { src: "assets/img/porton.webp", alt: "Portón corten a medida", width: 979, height: 941 },
      placeholder: true,
    },
    {
      id: "pared-acento",
      title: "Pared de acento en Banfield",
      description: "Panel perforado interior con luz indirecta",
      duration: "2 días de obra",
      after: { src: "assets/img/panel-interior-1.webp", alt: "Pared de acento con panel perforado", width: 1010, height: 954 },
      placeholder: true,
    },
    {
      id: "local-gastronomico",
      title: "Local gastronómico en Temperley",
      description: "Revestimiento completo de barra y paredes",
      duration: "5 días de obra",
      after: { src: "assets/img/panel-interior-2.webp", alt: "Revestimiento de local gastronómico", width: 900, height: 1200 },
      placeholder: true,
    },
    {
      id: "biombo-quilmes",
      title: "Separador de ambientes en Quilmes",
      description: "Biombo calado a medida",
      duration: "1 día de obra",
      after: { src: "assets/img/biombo.webp", alt: "Biombo calado como separador de ambientes", width: 720, height: 1280 },
      placeholder: true,
    },
  ],

  whyMetal: [
    {
      icon: "bolt",
      title: "Rápido",
      text: "Se fabrica en taller y se monta en el lugar.",
    },
    {
      icon: "broom",
      title: "Limpio",
      text: "Sin escombros ni obra húmeda.",
    },
    {
      icon: "coin",
      title: "Económico",
      text: "Menos costo que revestimientos tradicionales.",
    },
    {
      icon: "shield",
      title: "Duradero",
      text: "Chapa prepintada y galvanizada, mantenimiento casi nulo.",
    },
  ],

  // Fotos de textura placeholder — reemplazar por fotos reales de cada tipo de chapa.
  materials: [
    {
      id: "sinusoidal",
      name: "Sinusoidal",
      image: { src: "assets/img/panel-exterior-1.webp", alt: "Textura de chapa sinusoidal", width: 1009, height: 946 },
      description: "Ideal para techos y cerramientos curvos.",
    },
    {
      id: "trapezoidal",
      name: "Trapezoidal",
      image: { src: "assets/img/panel-exterior-2.webp", alt: "Textura de chapa trapezoidal", width: 858, height: 1600 },
      description: "La más usada en fachadas modernas.",
    },
    {
      id: "lisa",
      name: "Lisa",
      image: { src: "assets/img/panel-interior-1.webp", alt: "Textura de chapa lisa", width: 1010, height: 954 },
      description: "Terminación minimalista para interiores.",
    },
    {
      id: "perforada",
      name: "Perforada",
      image: { src: "assets/img/biombo.webp", alt: "Textura de chapa perforada", width: 720, height: 1280 },
      description: "Filtra luz y da privacidad a la vez.",
    },
    {
      id: "corten",
      name: "Corten",
      image: { src: "assets/img/porton.webp", alt: "Textura de chapa corten oxidada", width: 979, height: 941 },
      description: "Óxido controlado, estética industrial.",
    },
    {
      id: "galvanizada",
      name: "Galvanizada",
      image: { src: "assets/img/panel-interior-2.webp", alt: "Textura de chapa galvanizada", width: 900, height: 1200 },
      description: "Máxima resistencia a la intemperie.",
    },
    {
      id: "prepintada",
      name: "Prepintada",
      image: { src: "assets/img/pergolas.webp", alt: "Textura de chapa prepintada", width: 720, height: 1280 },
      description: "Color de fábrica, no se pinta nunca más.",
    },
  ],

  process: [
    {
      step: 1,
      title: "Visita y medición sin cargo",
      description: "Vamos al lugar, medimos y evacuamos todas tus dudas.",
    },
    {
      step: 2,
      title: "Propuesta con imagen de cómo va a quedar",
      description: "Te mostramos un render de tu obra terminada antes de arrancar.",
    },
    {
      step: 3,
      title: "Fabricación en taller",
      description: "Cortamos y armamos cada pieza a medida en nuestro taller.",
    },
    {
      step: 4,
      title: "Montaje y entrega",
      description: "Instalamos en el lugar, sin escombros ni obra húmeda.",
    },
  ],

  quickForm: {
    workTypes: [
      "Fachada / frente",
      "Quincho / galería / techo",
      "Cerco / medianera / portón",
      "Pared de acento / cielorraso interior",
      "Local gastronómico",
      "Mueble a medida (fogonero, rocket, etc.)",
      "Otro",
    ],
  },

  faq: [
    {
      q: "¿La chapa no se calienta?",
      a: "Se monta con cámara de aire y aislación; no transmite calor al interior.",
    },
    {
      q: "¿Se oxida?",
      a: "La prepintada y galvanizada no. La corten se oxida a propósito, en la superficie, y ahí se frena.",
    },
    {
      q: "¿Hace ruido con la lluvia?",
      a: "En techos se coloca con aislante; en revestimientos no aplica.",
    },
    {
      q: "¿Cuánto tarda?",
      a: "La mayoría de los trabajos, entre 2 y 5 días de montaje.",
    },
    {
      q: "¿Qué zonas cubren?",
      a: "Trabajamos en toda la zona sur del conurbano y CABA. Consultanos por otras zonas.",
    },
    {
      q: "¿Hacen envíos sin instalación?",
      a: "Sí, fabricamos a medida y coordinamos el envío si preferís instalarlo vos mismo.",
    },
  ],
};
