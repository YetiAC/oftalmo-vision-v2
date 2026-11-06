// Padecimientos y tratamientos. Basado en el contenido del sitio anterior,
// ampliado para SEO. PENDIENTE: revisión médica de cada texto por los doctores.

export type Doctor = 'juvenal' | 'citlali' | 'equipo';
export interface Padecimiento {
  slug: string;
  name: string;
  group: 'retina' | 'parpados' | 'anterior';
  seoTitle: string;
  description: string;
  h1: string;
  lede: string;
  doctor: Doctor;
  photo: string;
  photoAlt: string;
  symptoms: string[];
  procedure: string;
  sections: { h: string; html: string }[];
  faq: { q: string; a: string }[];
  related: string[];
  blog?: string[];
  video?: { id: string; title: string };
  /** Ilustración médica del sitio anterior (ojo sano vs. afectado). */
  illustration?: { src: string; w: number; h: number; alt: string };
  isNew?: boolean;
}

export const padecimientos: Padecimiento[] = [
  {
    slug: 'catarata',
    illustration: { src: '/img/padecimientos/catarata-ojo-normal-vs-catarata.webp', w: 600, h: 300, alt: 'Ilustración: ojo normal comparado con un ojo con catarata' },
    name: 'Cataratas',
    group: 'anterior',
    seoTitle: 'Cirugía de Catarata en Tijuana | Oftalmo Visión',
    description: 'Cirugía de catarata en Tijuana con anestesia local y lente intraocular. Valoración con oftalmólogos certificados en Zona Río, a minutos de San Ysidro.',
    h1: 'Cirugía de catarata en Tijuana',
    lede: 'Si ves nublado, como a través de neblina, o te deslumbran las luces de los autos por la noche, puede ser una catarata. Se corrige con una cirugía ambulatoria y sin dolor.',
    doctor: 'equipo',
    photo: 'dra-citlali-carrasco-lampara-hendidura',
    photoAlt: 'Oftalmóloga revisando el cristalino con lámpara de hendidura en Oftalmo Visión Tijuana',
    symptoms: ['Visión nublada o borrosa', 'Deslumbramiento con luces de noche', 'Colores apagados', 'Cambios frecuentes de graduación'],
    procedure: 'Facoemulsificación con implante de lente intraocular',
    sections: [
      { h: '¿Qué es la catarata?', html: '<p>La catarata es la opacidad del cristalino, el lente natural que está dentro del ojo. Es la principal causa de ceguera reversible en el mundo. La edad es su causa más frecuente, por lo que cualquier persona mayor de 60 años puede presentarla.</p><p>También aparece antes en personas con enfermedades metabólicas como la diabetes mellitus, después de un traumatismo ocular o por el uso prolongado de algunos medicamentos.</p>' },
      { h: 'Síntomas más comunes', html: '<p>La visión baja o nublada, como si vieras a través de neblina, y el deslumbramiento excesivo con las luces delanteras de los autos son los síntomas más típicos. Muchas personas notan que necesitan más luz para leer o que su graduación cambia con frecuencia.</p>' },
      { h: 'Tratamiento: cirugía de catarata', html: '<p>No existen gotas que impidan o desaparezcan la catarata. El tratamiento adecuado es la cirugía, que consiste en retirar el cristalino opaco y colocar un lente intraocular dentro del ojo.</p><p>Existen distintas técnicas, como la extracción extracapsular y la facoemulsificación del cristalino. Se realiza con anestesia local o regional: el paciente está consciente en todo momento y no siente dolor. En la valoración el especialista te explica qué tipo de lente conviene a tu caso y a tu estilo de vida.</p>' },
      { h: 'Antes y después de la cirugía', html: '<ul><li><strong>Valoración:</strong> consulta completa, medición del ojo y estudios para calcular el lente.</li><li><strong>Día de la cirugía:</strong> procedimiento ambulatorio; regresas a casa el mismo día con un acompañante.</li><li><strong>Recuperación:</strong> gotas durante algunas semanas y revisiones de control. La mayoría retoma actividades ligeras en pocos días, según indique tu médico.</li></ul>' },
    ],
    faq: [
      { q: '¿La cirugía de catarata duele?', a: 'No. Se realiza con anestesia local o regional y el paciente permanece despierto y cómodo durante el procedimiento.' },
      { q: '¿La catarata se puede quitar con gotas?', a: 'No. No existen gotas que eviten o eliminen la catarata; el tratamiento es quirúrgico.' },
      { q: '¿Cuándo es momento de operarse?', a: 'Cuando la catarata limita tus actividades diarias, como manejar, leer o trabajar. El oftalmólogo lo determina en la valoración.' },
      { q: '¿Atienden pacientes que vienen de Estados Unidos?', a: 'Sí. Muchos pacientes cruzan desde San Diego y el sur de California. Te ayudamos a coordinar la valoración, la cirugía y las revisiones.' },
    ],
    related: ['glaucoma', 'retinopatia-diabetica', 'pterigion'],
  },
  {
    slug: 'glaucoma',
    illustration: { src: '/img/padecimientos/glaucoma-ojo-sano-vs-glaucoma.webp', w: 540, h: 583, alt: 'Ilustración: ojo sano comparado con glaucoma y presión alta en el nervio óptico' },
    name: 'Glaucoma',
    group: 'anterior',
    seoTitle: 'Tratamiento para el Glaucoma en Tijuana | Oftalmo Visión',
    description: 'Detección y tratamiento del glaucoma en Tijuana: medición de presión ocular, campo visual y tomografía del nervio óptico. Agenda tu revisión.',
    h1: 'Glaucoma: detección y tratamiento en Tijuana',
    lede: 'El glaucoma casi nunca da síntomas hasta que ya hay daño. Por eso le llaman la ceguera silenciosa. Detectarlo a tiempo es la mejor forma de proteger tu visión.',
    doctor: 'equipo',
    photo: 'dr-juvenal-guzman-lampara-hendidura-monitor',
    photoAlt: 'Revisión del nervio óptico y presión ocular para detectar glaucoma en Tijuana',
    symptoms: ['Sin síntomas en etapas iniciales', 'Pérdida gradual de la visión lateral', 'Antecedentes familiares de glaucoma', 'Presión ocular elevada'],
    procedure: 'Tratamiento médico y quirúrgico del glaucoma',
    sections: [
      { h: '¿Qué es el glaucoma?', html: '<p>Es una enfermedad del nervio óptico asociada, en la mayoría de los casos, a una presión interna del ojo elevada. Se estima que en México hasta 1.5 millones de personas tienen glaucoma, y la mayoría no lo sabe porque nunca se ha revisado.</p><p>Se asocia a factores hereditarios y a enfermedades como la hipertensión arterial y la diabetes.</p>' },
      { h: '¿Quién debe revisarse?', html: '<p>Se recomienda que toda persona mayor de 40 años acuda a una consulta oftalmológica para detectarlo a tiempo, y antes si hay familiares con glaucoma, diabetes o miopía alta. En la revisión pueden indicarse estudios de campo visual y tomografía del nervio óptico.</p>' },
      { h: 'Tratamiento del glaucoma', html: '<p>El tratamiento busca bajar la presión intraocular para detener el daño al nervio óptico. Puede hacerse con medicamentos en gotas, láser o cirugía, según el tipo y la etapa del glaucoma. El daño que ya ocurrió no se recupera, por eso el diagnóstico temprano es tan importante.</p>' },
    ],
    faq: [
      { q: '¿El glaucoma tiene cura?', a: 'Es una enfermedad crónica que se controla. Con tratamiento constante se puede frenar el daño y conservar la visión.' },
      { q: '¿Cada cuánto debo revisarme?', a: 'A partir de los 40 años se recomienda una revisión periódica. Tu oftalmólogo te dirá la frecuencia según tus factores de riesgo.' },
      { q: '¿Las gotas son para toda la vida?', a: 'En muchos casos sí, aunque algunos pacientes pueden beneficiarse de láser o cirugía. Nunca suspendas tus gotas sin indicación médica.' },
    ],
    related: ['catarata', 'retinopatia-diabetica', 'desprendimiento-de-retina'],
  },
  {
    slug: 'pterigion',
    illustration: { src: '/img/padecimientos/pterigion-ojo-sano-vs-pterigion.webp', w: 675, h: 900, alt: 'Ilustración: ojo sano comparado con un pterigión que crece sobre la córnea' },
    name: 'Pterigión',
    group: 'anterior',
    seoTitle: 'Cirugía de Pterigión (carnosidad) en Tijuana | Oftalmo Visión',
    description: 'Cirugía de pterigión o carnosidad en el ojo en Tijuana, con técnica de injerto para reducir que vuelva a crecer. Valoración con oftalmólogos especialistas.',
    h1: 'Cirugía de pterigión en Tijuana',
    lede: 'La “carnosidad” en el ojo crece poco a poco y puede llegar a cubrir la pupila. No se quita con gotas: se retira con una cirugía que reduce el riesgo de que regrese.',
    doctor: 'equipo',
    photo: 'dra-citlali-carrasco-exploracion-monitor',
    photoAlt: 'Exploración del ojo con imagen ampliada para valorar un pterigión',
    symptoms: ['Tejido rosado que crece sobre el ojo', 'Ojo rojo e irritado', 'Sensación de basura o arena', 'Visión borrosa si invade la córnea'],
    procedure: 'Resección de pterigión con autoinjerto conjuntival',
    sections: [
      { h: '¿Qué es el pterigión?', html: '<p>El pterigión, conocido como “carnosidad”, es una lesión en forma de ala que crece poco a poco sobre la parte blanca del ojo, generalmente del lado de la nariz, y puede llegar hasta el centro de la pupila.</p><p>Sus causas principales son la exposición al sol y a irritantes ambientales como el polvo, el viento y el smog. En una ciudad soleada y seca como Tijuana es un motivo de consulta frecuente.</p>' },
      { h: 'Tratamiento', html: '<p>Lo primero es reducir la exposición que lo provoca, con lentes de sol y lubricantes. No existen gotas que lo hagan desaparecer. Cuando crece, molesta o afecta la visión, se retira con una cirugía.</p><p>La técnica con más aceptación hoy coloca un injerto en el sitio donde se retiró el pterigión, lo que disminuye el riesgo de que vuelva a crecer.</p>' },
    ],
    faq: [
      { q: '¿El pterigión puede regresar después de la cirugía?', a: 'Puede ocurrir, pero la técnica con injerto reduce de forma importante ese riesgo. Protegerte del sol después de la cirugía también ayuda.' },
      { q: '¿Es una cirugía larga?', a: 'Es un procedimiento ambulatorio con anestesia local. Regresas a casa el mismo día.' },
    ],
    related: ['catarata', 'chalazion', 'glaucoma'],
  },
  {
    slug: 'chalazion',
    illustration: { src: '/img/padecimientos/chalazion-en-el-parpado.webp', w: 352, h: 528, alt: 'Ilustración de un chalazión en el párpado superior' },
    name: 'Chalazión',
    group: 'parpados',
    seoTitle: 'Tratamiento del Chalazión en Tijuana | Oftalmo Visión',
    description: 'Tratamiento del chalazión y orzuelo en Tijuana con especialista en párpados (oculoplástica). Fomentos, medicamento o cirugía menor según el caso.',
    h1: 'Tratamiento del chalazión en Tijuana',
    lede: 'Un chalazión es una bolita dura en el párpado que puede durar semanas. Casi siempre mejora con medidas sencillas; si no, se retira con una cirugía menor.',
    doctor: 'citlali',
    photo: 'dra-citlali-carrasco-consultorio',
    photoAlt: 'Dra. Citlali Carrasco, especialista en párpados, en su consultorio de Tijuana',
    symptoms: ['Bolita dura en el párpado', 'Inflamación sin mucho dolor', 'Párpado pesado', 'Molestia al parpadear'],
    procedure: 'Drenaje quirúrgico de chalazión',
    sections: [
      { h: '¿Qué es un chalazión?', html: '<p>Es un abultamiento duro y poco doloroso en el párpado que puede durar semanas o meses. Se produce por la obstrucción de las glándulas sebáceas del párpado, lo que provoca inflamación.</p><p>Se parece al orzuelo, pero el orzuelo sí duele porque se debe a una infección, generalmente por bacterias.</p>' },
      { h: 'Tratamiento', html: '<p>El tratamiento inicial, tanto para el chalazión como para el orzuelo, son los fomentos de agua tibia y el masaje de los párpados para mejorar el funcionamiento de las glándulas. En algunos casos se indican antibióticos o esteroides en gotas, ungüento o inyectados.</p><p>Los casos que no responden se resuelven con una cirugía menor en consultorio. Al tratarlo una especialista en párpados se cuida la estética y se descartan otras lesiones.</p>' },
    ],
    faq: [
      { q: '¿El chalazión se quita solo?', a: 'Muchos mejoran con fomentos tibios y masaje en algunas semanas. Si persiste o crece, conviene valorarlo.' },
      { q: '¿Deja cicatriz la cirugía?', a: 'Generalmente se drena por la parte interna del párpado, por lo que no queda cicatriz visible.' },
    ],
    related: ['ptosis-parpado-caido', 'obstruccion-via-lagrimal', 'pterigion'],
  },
  {
    slug: 'retinopatia-diabetica',
    illustration: { src: '/img/padecimientos/retinopatia-diabetica-ojo-sano-vs-retinopatia.webp', w: 713, h: 248, alt: 'Ilustración: ojo sano comparado con retinopatía diabética, con aneurismas, vasos anormales y hemorragias' },
    name: 'Retinopatía diabética',
    group: 'retina',
    seoTitle: 'Retinopatía Diabética: Tratamiento en Tijuana | Oftalmo Visión',
    description: 'Tratamiento de la retinopatía diabética en Tijuana con retinólogo: láser, inyecciones intravítreas y vitrectomía. Revisión de retina para personas con diabetes.',
    h1: 'Tratamiento de la retinopatía diabética en Tijuana',
    lede: 'Es la principal causa de ceguera en México en personas en edad de trabajar, y al principio no da síntomas. Si tienes diabetes, revisa tu retina aunque veas bien.',
    doctor: 'juvenal',
    photo: 'dr-juvenal-guzman-imagen-retina',
    photoAlt: 'Dr. Juvenal Guzmán, retinólogo, analizando una imagen del ojo en Tijuana',
    symptoms: ['Sin síntomas al inicio', 'Manchas oscuras o rojas que flotan', 'Visión borrosa que va y viene', 'Pérdida súbita de visión'],
    procedure: 'Panfotocoagulación con láser, inyección intravítrea y vitrectomía',
    sections: [
      { h: '¿Qué es la retinopatía diabética?', html: '<p>Es una enfermedad de la retina, la capa delgada que está en el interior del ojo, que daña sus venas y arterias como consecuencia de la diabetes mellitus.</p><p>En las etapas iniciales no hay síntomas. En etapas avanzadas aparecen manchas oscuras o rojas que se mueven, por hemorragias, o pérdida de visión súbita o paulatina por un desprendimiento de retina.</p>' },
      { h: '¿Por qué revisarte aunque veas bien?', html: '<p>Detectar la retinopatía en fases iniciales permite evitar la ceguera. Toda persona con diabetes necesita una valoración oftalmológica desde que sabe que tiene diabetes, y después revisiones periódicas.</p>' },
      { h: 'Tratamiento', html: '<p>La base es el control de la diabetes y de las enfermedades que suelen acompañarla: obesidad, hipertensión, colesterol y ácido úrico elevados.</p><ul><li><strong>Láser (panfotocoagulación):</strong> en fases avanzadas, para frenar los vasos anormales.</li><li><strong><a href="/padecimiento/inyecciones-intravitreas/">Inyecciones intravítreas</a>:</strong> en casos seleccionados, sobre todo con edema macular.</li><li><strong><a href="/padecimiento/vitrectomia/">Vitrectomía</a>:</strong> en casos avanzados, para detener la enfermedad y evitar la ceguera.</li></ul>' },
    ],
    faq: [
      { q: 'Tengo diabetes y veo bien, ¿necesito revisión?', a: 'Sí. La retinopatía diabética no da síntomas al inicio. La revisión de retina detecta cambios antes de que afecten tu visión.' },
      { q: '¿La retinopatía diabética tiene tratamiento?', a: 'Sí. Láser, inyecciones intravítreas y vitrectomía, además del control de la glucosa, permiten frenar la enfermedad en la mayoría de los casos.' },
      { q: '¿Quién me atiende?', a: 'El Dr. Juvenal Guzmán, cirujano oftalmólogo con alta especialidad en retina y vítreo por el Instituto Mexicano de Oftalmología, avalado por la UNAM.' },
    ],
    related: ['inyecciones-intravitreas', 'vitrectomia', 'desprendimiento-de-retina'],
    blog: ['por-que-pierden-la-vista-las-personas-que-padecen-diabetes-mellitus-retinopatia-diabetica'],
  },
  {
    slug: 'desprendimiento-de-retina',
    illustration: { src: '/img/padecimientos/desprendimiento-de-retina-ojo-sano.webp', w: 540, h: 583, alt: 'Ilustración: ojo sano comparado con un desprendimiento de retina' },
    name: 'Desprendimiento de retina',
    group: 'retina',
    seoTitle: 'Desprendimiento de Retina: Cirugía en Tijuana | Oftalmo Visión',
    description: 'Destellos, moscas flotantes o una cortina en la visión pueden ser desprendimiento de retina. Atención urgente y cirugía con retinólogo en Tijuana.',
    h1: 'Desprendimiento de retina: tratamiento urgente en Tijuana',
    lede: 'Destellos de luz, muchas “moscas” flotando de golpe o una sombra como cortina son señales de alarma. El desprendimiento de retina es una urgencia: entre más rápido se atienda, mejor.',
    doctor: 'juvenal',
    photo: 'dr-juvenal-guzman-exploracion-ocular',
    photoAlt: 'Retinólogo explorando la retina con lámpara de hendidura en Tijuana',
    symptoms: ['Destellos de luz como flash', 'Moscas o telarañas flotantes nuevas', 'Sombra o cortina en la visión', 'Baja de visión súbita'],
    procedure: 'Vitrectomía, neumoretinopexia, cerclaje y láser de retina',
    video: { id: '_cQ6yUYee1M', title: 'Tipos de desprendimiento de retina' },
    sections: [
      { h: '¿Qué es el desprendimiento de retina?', html: '<p>La retina es un tejido delgado en el interior del ojo, formado por células especializadas para la visión. Cuando se separa de su lugar deja de recibir nutrientes y, sin tratamiento, puede causar ceguera.</p>' },
      { h: 'Tipos de desprendimiento', html: '<ul><li><strong>Regmatógeno:</strong> por un agujero o desgarro en la retina. Puede ocurrir a cualquier edad; el riesgo es mayor en personas con miopía alta o que se operaron de catarata.</li><li><strong>Traccional:</strong> por membranas que jalan la retina. Es el más frecuente en pacientes con diabetes.</li><li><strong>Exudativo:</strong> por inflamación o acumulación de líquido, en enfermedades como Vogt‑Koyanagi‑Harada o complicaciones del embarazo. Es el menos frecuente.</li></ul>' },
      { h: 'Síntomas: cuándo acudir de inmediato', html: '<p>Ver de pronto partículas flotantes oscuras, como moscas o telarañas, destellos de luz, una cortina que limita tu campo visual o una baja de visión considerable. Si notas cualquiera de estos síntomas, busca atención médica de inmediato.</p><p>El diagnóstico se hace con una revisión de retina; a veces se necesita un ultrasonido ocular.</p>' },
      { h: 'Tratamiento', html: '<p>Depende del tipo de desprendimiento, del tiempo de evolución y de los antecedentes de cada persona. Puede incluir láser, inyección de gas (neumoretinopexia), <a href="/padecimiento/vitrectomia/">vitrectomía</a> o un cerclaje, una banda especial que se coloca alrededor del ojo. En las cirugías se usa gas o aceite de silicón para mantener la retina en su sitio.</p>' },
    ],
    faq: [
      { q: '¿El desprendimiento de retina es una urgencia?', a: 'Sí. Entre más pronto se trate, mayores son las probabilidades de conservar la visión. Ante síntomas, busca atención el mismo día.' },
      { q: '¿Las moscas flotantes siempre son graves?', a: 'No siempre, pero si aparecen de golpe, en gran cantidad o con destellos, requieren una revisión de retina el mismo día.' },
      { q: '¿Quién realiza la cirugía?', a: 'El Dr. Juvenal Guzmán, retinólogo con alta especialidad en retina y vítreo.' },
    ],
    related: ['vitrectomia', 'retinopatia-diabetica', 'degeneracion-macular'],
    blog: ['ver-puntos-flotantes-o-centelleos-puede-ser-un-sintoma-previo-a-un-desprendimiento-de-retina'],
  },
  {
    slug: 'ptosis-parpado-caido',
    name: 'Párpado caído (ptosis)',
    group: 'parpados',
    seoTitle: 'Párpado Caído (Ptosis): Cirugía en Tijuana | Oftalmo Visión',
    description: 'Corrección de párpado caído (ptosis palpebral) en Tijuana con cirujana oculoplástica. Mejora la visión y la apariencia de la mirada.',
    h1: 'Corrección de párpado caído (ptosis) en Tijuana',
    lede: 'Cuando el párpado superior cae y tapa parte de la pupila, cansa la vista y hace que la mirada se vea triste. La ptosis se corrige con una cirugía especializada de párpado.',
    doctor: 'citlali',
    photo: 'valoracion-blefaroplastia-sillon',
    photoAlt: 'Dra. Citlali Carrasco valorando el párpado superior de una paciente',
    symptoms: ['Párpado que cubre parte de la pupila', 'Levantar las cejas para ver', 'Cansancio visual al final del día', 'Asimetría entre ambos ojos'],
    procedure: 'Corrección quirúrgica de ptosis palpebral',
    isNew: true,
    sections: [
      { h: '¿Qué es la ptosis palpebral?', html: '<p>Es la caída del párpado superior por debilidad o desinserción del músculo que lo eleva. Puede ser de nacimiento o aparecer con la edad, después de una cirugía de ojo, por el uso prolongado de lentes de contacto o por algunas enfermedades.</p><p>No es lo mismo que el exceso de piel (dermatocalasia), que se corrige con <a href="/padecimiento/cirugia-cosmetica-de-parpados/">blefaroplastia</a>. Muchas personas tienen ambas condiciones y se corrigen en el mismo procedimiento.</p>' },
      { h: 'Tratamiento', html: '<p>La corrección es quirúrgica: se reposiciona o refuerza el músculo elevador del párpado. Es una cirugía delicada, porque unos milímetros hacen la diferencia en la simetría y la función. Por eso conviene que la realice una cirujana oftalmóloga con alta especialidad en oculoplástica.</p>' },
    ],
    faq: [
      { q: '¿La ptosis se corrige con blefaroplastia?', a: 'No exactamente. La blefaroplastia retira exceso de piel; la ptosis requiere ajustar el músculo del párpado. La especialista determina qué necesitas en la valoración.' },
      { q: '¿Con qué anestesia se hace?', a: 'Generalmente con anestesia local, lo que permite ajustar la altura del párpado durante la cirugía.' },
    ],
    related: ['chalazion', 'obstruccion-via-lagrimal', 'catarata'],
    blog: ['la-piel-excesiva-en-parpados-provoca-un-aspecto-envejecido-y-disminucion-de-la-vision'],
  },
  {
    slug: 'obstruccion-via-lagrimal',
    name: 'Obstrucción de la vía lagrimal',
    group: 'parpados',
    seoTitle: 'Obstrucción de Vía Lagrimal: Tratamiento en Tijuana | Oftalmo Visión',
    description: 'Ojo que llora sin parar o se infecta seguido puede ser obstrucción de la vía lagrimal. Diagnóstico y cirugía con especialista en oculoplástica en Tijuana.',
    h1: 'Tratamiento de la obstrucción de la vía lagrimal',
    lede: 'Si tu ojo lagrimea todo el tiempo o se infecta con frecuencia cerca de la nariz, puede que el conducto de la lágrima esté tapado. Tiene solución.',
    doctor: 'citlali',
    photo: 'dra-citlali-carrasco-oculoplastica',
    photoAlt: 'Dra. Citlali Carrasco, cirujana oftalmóloga especialista en oculoplástica y vía lagrimal',
    symptoms: ['Lagrimeo constante', 'Lagañas o secreción', 'Infecciones repetidas cerca de la nariz', 'Bulto doloroso en el lagrimal'],
    procedure: 'Dacriocistorrinostomía y sondeo de vía lagrimal',
    isNew: true,
    sections: [
      { h: '¿Qué es?', html: '<p>La lágrima drena del ojo hacia la nariz por un conducto llamado vía lagrimal. Cuando se obstruye, la lágrima se acumula: el ojo llora sin motivo, se forman lagañas y puede infectarse el saco lagrimal (dacriocistitis).</p><p>Puede presentarse en bebés, de forma congénita, o en adultos por la edad, inflamación crónica o traumatismos.</p>' },
      { h: 'Tratamiento', html: '<p>En bebés muchas veces se resuelve con masaje o un sondeo. En adultos, la solución definitiva suele ser una cirugía que crea un nuevo camino para la lágrima (dacriocistorrinostomía). La Dra. Citlali Carrasco tiene alta especialidad en órbita, párpados y vía lagrimal.</p>' },
    ],
    faq: [
      { q: '¿Atienden a bebés con lagrimeo?', a: 'Sí. Valoramos niños de cualquier edad y te orientamos sobre masaje, sondeo o cirugía según el caso.' },
      { q: '¿Las gotas lo quitan?', a: 'Las gotas tratan la infección, pero no destapan el conducto. Si la obstrucción persiste, puede requerir un procedimiento.' },
    ],
    related: ['chalazion', 'ptosis-parpado-caido', 'pterigion'],
  },
  {
    slug: 'inyecciones-intravitreas',
    name: 'Inyecciones intravítreas',
    group: 'retina',
    seoTitle: 'Inyecciones Intravítreas en Tijuana | Retinólogo | Oftalmo Visión',
    description: 'Inyecciones intravítreas (anti‑VEGF) en Tijuana para edema macular, degeneración macular y retinopatía diabética. Aplicadas por retinólogo.',
    h1: 'Inyecciones intravítreas en Tijuana',
    lede: '“¿Inyección en el ojo?” Suena peor de lo que es. Es un procedimiento rápido, con anestesia en gotas, que ayuda a conservar o mejorar la visión en varias enfermedades de la retina.',
    doctor: 'juvenal',
    photo: 'dr-juvenal-guzman-retinologo',
    photoAlt: 'Dr. Juvenal Guzmán, retinólogo que aplica inyecciones intravítreas en Tijuana',
    symptoms: ['Edema macular diabético', 'Degeneración macular húmeda', 'Oclusiones venosas de la retina', 'Visión central distorsionada'],
    procedure: 'Inyección intravítrea de antiangiogénicos',
    isNew: true,
    sections: [
      { h: '¿Qué es una inyección intravítrea?', html: '<p>Es la aplicación de un medicamento directamente en el vítreo, el gel que llena el interior del ojo, para que actúe sobre la retina. Los más usados son los antiangiogénicos (anti‑VEGF), que reducen la hinchazón y los vasos anormales.</p>' },
      { h: '¿Para qué enfermedades se usa?', html: '<ul><li><a href="/padecimiento/retinopatia-diabetica/">Retinopatía diabética</a> y edema macular diabético.</li><li><a href="/padecimiento/degeneracion-macular/">Degeneración macular</a> relacionada con la edad, forma húmeda.</li><li>Oclusiones de venas de la retina y otras causas de edema macular.</li></ul>' },
      { h: '¿Cómo es el procedimiento?', html: '<p>Se realiza en condiciones estériles, con anestesia en gotas. La aplicación dura unos segundos. La mayoría de los pacientes describe presión más que dolor. Según la enfermedad, pueden necesitarse varias aplicaciones con un intervalo que el retinólogo ajusta en cada revisión.</p>' },
    ],
    faq: [
      { q: '¿Duele la inyección en el ojo?', a: 'Se aplica con anestesia en gotas y dura segundos. La mayoría siente presión, no dolor.' },
      { q: '¿Cuántas inyecciones voy a necesitar?', a: 'Depende de la enfermedad y de la respuesta. El retinólogo define el esquema en cada revisión.' },
    ],
    related: ['retinopatia-diabetica', 'degeneracion-macular', 'vitrectomia'],
    blog: ['disculpe-doctor-dijo-inyeccion-en-el-ojo-inyecciones-intravitreas'],
  },
  {
    slug: 'vitrectomia',
    name: 'Vitrectomía',
    group: 'retina',
    seoTitle: 'Vitrectomía en Tijuana | Cirugía de Retina | Oftalmo Visión',
    description: 'Vitrectomía en Tijuana para desprendimiento de retina, hemorragia vítrea, agujero macular y retinopatía diabética avanzada. Cirugía con retinólogo.',
    h1: 'Vitrectomía: cirugía de retina en Tijuana',
    lede: 'La vitrectomía permite al retinólogo trabajar dentro del ojo para reparar la retina. Es la cirugía clave en desprendimientos, hemorragias y enfermedades avanzadas de la retina.',
    doctor: 'juvenal',
    photo: 'dr-juvenal-guzman-lampara-hendidura-monitor',
    photoAlt: 'Dr. Juvenal Guzmán, cirujano de retina, en consulta con equipo de imagen ocular',
    symptoms: ['Desprendimiento de retina', 'Hemorragia dentro del ojo', 'Agujero macular', 'Membrana epirretiniana'],
    procedure: 'Vitrectomía posterior',
    isNew: true,
    sections: [
      { h: '¿Qué es la vitrectomía?', html: '<p>Es una cirugía en la que se retira el vítreo, el gel que llena el ojo, para acceder a la retina y tratarla: recolocarla, retirar membranas, limpiar sangre o cerrar agujeros. Al final se puede dejar gas o aceite de silicón para mantener la retina en su lugar mientras sana.</p>' },
      { h: '¿Cuándo se necesita?', html: '<ul><li><a href="/padecimiento/desprendimiento-de-retina/">Desprendimiento de retina</a>.</li><li>Hemorragia vítrea, por ejemplo en <a href="/padecimiento/retinopatia-diabetica/">retinopatía diabética</a> avanzada.</li><li>Agujero macular y membrana epirretiniana.</li><li>Complicaciones de una cirugía de catarata.</li></ul>' },
      { h: 'Recuperación', html: '<p>Cuando se usa gas, puede indicarse una posición de la cabeza durante algunos días y no viajar en avión ni subir a gran altura hasta que el gas se absorba. El retinólogo te dará indicaciones precisas para tu caso.</p>' },
    ],
    faq: [
      { q: '¿La vitrectomía se hace despierto?', a: 'Generalmente con anestesia local y sedación, para que estés tranquilo y sin dolor.' },
      { q: 'Vengo de Estados Unidos, ¿puedo regresar manejando?', a: 'No debes manejar el día de la cirugía. Te recomendamos venir con acompañante y planear tus revisiones de control.' },
    ],
    related: ['desprendimiento-de-retina', 'retinopatia-diabetica', 'inyecciones-intravitreas'],
  },
  {
    slug: 'degeneracion-macular',
    name: 'Degeneración macular',
    group: 'retina',
    seoTitle: 'Degeneración Macular: Tratamiento en Tijuana | Oftalmo Visión',
    description: 'Degeneración macular relacionada con la edad en Tijuana: diagnóstico con imagen de retina y tratamiento con inyecciones intravítreas por retinólogo.',
    h1: 'Degeneración macular: diagnóstico y tratamiento en Tijuana',
    lede: 'Si las líneas rectas se ven onduladas o aparece una mancha en el centro de tu visión, la mácula puede estar dañada. Un tratamiento oportuno ayuda a conservar la visión central.',
    doctor: 'juvenal',
    photo: 'dr-juvenal-guzman-imagen-retina',
    photoAlt: 'Imagen de retina en monitor para valorar degeneración macular',
    symptoms: ['Líneas rectas onduladas', 'Mancha en el centro de la visión', 'Dificultad para leer o reconocer caras', 'Colores menos intensos'],
    procedure: 'Tratamiento con inyecciones intravítreas antiangiogénicas',
    isNew: true,
    sections: [
      { h: '¿Qué es la degeneración macular?', html: '<p>Es el deterioro de la mácula, la zona central de la retina que permite leer, manejar y reconocer rostros. Es una causa importante de pérdida de visión después de los 50 años.</p><p>Existe una forma seca, de avance lento, y una forma húmeda, con vasos anormales que pueden dañar la visión rápidamente.</p>' },
      { h: 'Tratamiento', html: '<p>La forma húmeda se trata con <a href="/padecimiento/inyecciones-intravitreas/">inyecciones intravítreas</a> que frenan los vasos anormales. En la forma seca se vigila con imagen de retina y se dan recomendaciones de estilo de vida y suplementos cuando están indicados. Dejar de fumar es una de las medidas más importantes.</p>' },
    ],
    faq: [
      { q: '¿La degeneración macular causa ceguera total?', a: 'Afecta la visión central; la visión lateral suele conservarse. Con tratamiento oportuno de la forma húmeda se puede frenar el daño.' },
      { q: '¿Cómo me reviso en casa?', a: 'Con la rejilla de Amsler: si las líneas se ven torcidas o falta una zona, agenda una revisión de retina.' },
    ],
    related: ['inyecciones-intravitreas', 'retinopatia-diabetica', 'desprendimiento-de-retina'],
  },
];

export const bySlug = Object.fromEntries(padecimientos.map((p) => [p.slug, p]));
export const groups = {
  retina: { label: 'Retina y vítreo', doctor: 'Dr. Juvenal Guzmán' },
  parpados: { label: 'Párpados, órbita y vía lagrimal', doctor: 'Dra. Citlali Carrasco' },
  anterior: { label: 'Catarata, glaucoma y superficie ocular', doctor: 'Equipo Oftalmo Visión' },
} as const;
