// ================================
// MENSTRUACCIÓN WEBSITE BEHAVIOR
// ================================

const translations={
  es:{
    nav_home:"Inicio",
    nav_gap:"La Brecha",
    nav_proposal:"Nuestra Propuesta",
    nav_model:"Modelo en Acción",
    nav_impact:"Impacto y Voces",
    nav_about:"Quiénes Somos",
    nav_resources:"Centro de Recursos",
    nav_allies:"Aliados",
    nav_support:"Súmate",
    hero_eyebrow:"Educación. Equidad. Oportunidad.",
    hero_title:"Dignidad para cada ciclo.",
    hero_lead:"Construimos equidad, acceso y oportunidad mediante educación integral, productos sostenibles y acompañamiento comunitario.",
    hero_primary:"Apoyar el proyecto",
    hero_secondary:"Ver la brecha",
    hero_card_kicker:"MenstruAcción 2026",
    hero_card_line_1: "3 regiones.",
     hero_card_line_2: "3 colegios.",
     hero_card_line_3: "1 misma dignidad.",
    hero_card_text:"Lima, Cajamarca y Amazonas serán parte de un modelo que combina educación menstrual, sexual y financiera con productos reutilizables y seguimiento.",
    region_lima:"Costa",
    region_cajamarca:"Andes",
    region_amazonas:"Amazonía",
    source_read:"Ver fuente ↗",
    source_placeholder:"[PON EL LINK AQUÍ]",
    source_metals:"Metales ↗",
    source_chemicals:"Químicos ↗",
    source_environment:"Impacto ambiental ↗",
    source_school:"Escuela ↗",
    source_transparency:"Transparencia ↗",
    source_policy:"Perú / salud menstrual ↗",
    gap_eyebrow:"La brecha de equidad",
    gap_title:"Cuando falta información, faltan oportunidades.",
    gap_intro:"La pobreza menstrual no es solo falta de productos. También es falta de información, privacidad, salud, dinero, agua, apoyo y espacios seguros.",
    gap_stat_one_number:"1 de cada 3",
    gap_stat_one:"adolescentes falta al colegio durante su menstruación.",
    gap_stat_two_number:"95%",
    gap_stat_two:"reporta entornos escolares hostiles durante su periodo.",
    gap_stat_three_number:"54%",
    gap_stat_three:"no puede pagar productos básicos menstruales.",
    gap_map_center:"Intervenciones incompletas",
    gap_node_products:"Solo productos",
    gap_node_products_text:"Sin educación ni seguimiento, el acceso puede quedarse en una entrega aislada.",
    gap_node_education:"Solo educación",
    gap_node_education_text:"La información no alcanza si una niña no tiene productos, privacidad o apoyo para aplicar lo aprendido.",
    gap_node_health:"Solo salud",
    gap_node_health_text:"Hablar de síntomas sin mirar escuela, economía, agua y estigma deja fuera la realidad completa.",
    angle_center:"La pobreza menstrual es un sistema, no un síntoma aislado.",
    angle_health_kicker:"Lo invisible",
    angle_health_title:"La salud y el cuerpo",
    angle_health_1:"Metales como plomo, arsénico y cadmio detectados en tampones.",
    angle_health_2:"Químicos medibles como ftalatos, fenoles y parabenos en productos menstruales.",
    angle_health_3:"Fragancias, irritación, sequedad, microbioma y seguridad todavía requieren más investigación.",
    angle_environment_kicker:"El rastro",
    angle_environment_title:"Agua y medio ambiente",
    angle_environment_1:"Residuos de productos desechables que terminan en rellenos sanitarios o sistemas de alcantarillado.",
    angle_environment_2:"Impactos de ciclo de vida asociados a materias primas, plásticos, producción y disposición final.",
    angle_environment_3:"Microplásticos y residuos no reciclables como parte del problema de contaminación.",
    angle_system_kicker:"El sistema",
    angle_system_title:"Lo social y económico",
    angle_system_1:"Ausentismo escolar, vergüenza y falta de baños dignos.",
    angle_system_2:"Normalización del dolor menstrual y diagnósticos tardíos.",
    angle_system_3:"Falta de transparencia de ingredientes y necesidad de mejores regulaciones.",
    angle_daily_kicker:"La logística",
    angle_daily_title:"El día a día",
    angle_daily_1:"Baños sin agua, jabón, privacidad o basureros seguros.",
    angle_daily_2:"Miedo al ruido del envoltorio, a mancharse o a pedir ayuda.",
    angle_daily_3:"Dolores incapacitantes sin permisos, cuidado ni atención adecuada.",
    proposal_eyebrow:"Nuestra propuesta",
    proposal_title_main:"No separamos el cuerpo, la economía y la educación.",
    proposal_title_break:"Los conectamos.",
    proposal_intro:"Nuestro modelo integra educación, acceso, comunidad e incidencia para garantizar el derecho a una menstruación digna.",
    solution_one_title:"Educación que traduce el cuerpo",
    solution_one_text:"La información convierte miedo en lenguaje, síntomas en señales y vergüenza en conversación segura.",
    solution_two_title:"Productos sostenibles que duran",
    solution_two_text:"Los productos reutilizables reducen la dependencia mensual de productos desechables y alivian costos a largo plazo.",
    solution_three_title:"Seguimiento que sostiene",
    solution_three_text:"El acompañamiento posterior permite resolver dudas, cuidar el uso correcto y no abandonar a las beneficiarias.",
    proposal_card_one_title:"Educación menstrual",
    proposal_card_one_text:"Ciclo menstrual, anatomía básica, dolor, higiene, señales de alerta, mitos, tabúes y cuidado de productos sostenibles.",
    proposal_card_two_title:"Educación sexual",
    proposal_card_two_text:"Pubertad, consentimiento, autonomía corporal, relaciones sanas, prevención, límites personales y proyecto de vida.",
    proposal_card_three_title:"Educación financiera",
    proposal_card_three_text:"Costos reales de menstruar, ahorro, presupuesto, compra informada, mantenimiento de productos y herramientas de autonomía.",
    reusable_eyebrow:"Por qué productos reutilizables",
    reusable_title:"La solución no es solo “dar algo”. Es dar herramientas que puedan sostenerse.",
    reusable_cost_title:"Alivio económico",
    reusable_cost_text:"Un kit durable puede reducir el gasto mensual repetido y liberar recursos familiares.",
    reusable_waste_title:"Menos residuos",
    reusable_waste_text:"La reutilización reduce la dependencia de productos de un solo uso y su carga ambiental.",
    reusable_body_title:"Más alfabetización corporal",
    reusable_body_text:"Aprender a usar y cuidar productos exige conocer el cuerpo, la higiene y las señales de alerta.",
    reusable_source:"Leer revisión sobre copas menstruales ↗",
    model_eyebrow:"Modelo en acción",
    model_title:"Antes, durante y después. Porque una intervención real no termina cuando acaba el taller.",
    model_before_title:"Antes",
    model_before_text:"Diagnóstico comunitario, estudio de desafíos menstruales, revisión de agua, hábitos, tabúes, bullying y necesidades específicas.",
    model_during_title:"Durante",
    model_during_text:"Talleres participativos, sesiones mixtas y diferenciadas, entrega de productos sostenibles, actividades prácticas y formación de embajadoras.",
    model_after_title:"Después",
    model_after_text:"Línea de WhatsApp, seguimiento a 3, 6 y 9 meses, encuestas, acompañamiento, soporte educativo y continuidad comunitaria.",
    product_cup:"Copa menstrual",
    product_underwear:"Calzones menstruales",
    product_pads:"Toallas reutilizables",
    product_compress:"Compresa de semillas",
    impact_eyebrow:"Impacto y voces",
    impact_title:"Esto no solo se midió. Esto se sintió.",
    impact_intro:"En 2023, el piloto en Puente Piedra mostró que una intervención puede cambiar la forma en que las participantes entienden su cuerpo, su cuidado y su futuro.",
    score_usefulness:"Utilidad del programa",
    score_support:"Acompañamiento",
    score_products:"Confianza en productos",
    score_mindset:"Cambio de mentalidad",
    about_eyebrow:"Quiénes somos",
    about_title:"33 jóvenes construyendo una respuesta desde adentro.",
    about_intro:"Somos un equipo interdisciplinario organizado en cinco áreas para convertir investigación, logística, cuidado, comunicación y alianzas en acción territorial.",
    team_people:"personas voluntarias",
    team_areas:"áreas de trabajo",
    team_regions:"macroregiones del Perú",
    area_programs:"Programas y Proyectos",
    area_programs_text:"Diseño curricular, implementación escolar, facilitación y adaptación comunitaria.",
    area_research:"Investigación y Sostenibilidad",
    area_research_text:"Diagnóstico, reportes, evidencia, evaluación, sostenibilidad ambiental y aprendizaje institucional.",
    area_wellbeing:"Comunidad y Bienestar",
    area_wellbeing_text:"Seguimiento, cuidado, rutas de apoyo, espacios seguros y acompañamiento posterior.",
    area_comms:"Comunicaciones y Marketing",
    area_comms_text:"Narrativa pública, campañas, redes, materiales visuales y movilización comunitaria.",
    area_management:"Gestión, Finanzas y Alianzas",
    area_management_text:"Presupuesto, donaciones, procesos institucionales, articulación legal y alianzas estratégicas.",
    people_placeholder_title:"Próximo paso: directorio del equipo",
    people_placeholder_text:"Aquí podremos añadir tarjetas por persona con foto, nombre, área, región y una frase breve. Por ahora queda listo el espacio para crecer sin saturar la página.",
    resources_eyebrow:"Centro de recursos",
    resources_title:"Notas, reportes y materiales para pensar la menstruación desde evidencia, territorio y sostenibilidad.",
    resources_intro:"Este será el espacio para publicaciones breves del equipo de Investigación y Sostenibilidad, guías para comunidades, reportes de campo y materiales educativos.",
    resource_feature_tag:"Formato sugerido",
    resource_feature_title:"Cada entrada debe tener autora, fecha, tema, fuente principal y una idea accionable.",
    resource_feature_text:"Así el centro no se vuelve solo un blog, sino una biblioteca viva para colegios, donantes, voluntarias y aliadas.",
    note_tag_research:"Investigación",
    note_tag_sustainability:"Sostenibilidad",
    note_tag_territory:"Territorio",
    note_one_title:"Metales pesados en productos menstruales: qué sabemos y qué falta investigar",
    note_one_author:"Por: Equipo de Investigación y Sostenibilidad",
    note_one_text:"Una nota para traducir evidencia científica en preguntas claras para comunidades, colegios y donantes.",
    note_two_title:"¿Por qué no basta con donar productos?",
    note_two_author:"Por: Nombre de autora / Área",
    note_two_text:"Un análisis sobre acceso, educación, seguimiento y el riesgo de intervenciones de corto plazo.",
    note_three_title:"Menstruación, agua y escuela: lo que cambia entre Costa, Andes y Amazonía",
    note_three_author:"Por: Nombre de autora / Área",
    note_three_text:"Una entrada sobre cómo el territorio cambia las posibilidades reales de una menstruación digna.",
    note_coming:"Próximamente",
    allies_eyebrow:"Aliados y patrocinadores",
    allies_title:"Una red que convierte recursos en dignidad.",
    allies_intro:"Gracias a esta red, MenstruAcción puede llegar a tres colegios en Lima, Cajamarca y Amazonas con respaldo, productos y conocimiento.",
    ally_pfp:"Patrocinador principal del proyecto 2026.",
    ally_lfc:"Institución universitaria que respaldó la postulación.",
    ally_coa:"Institución vinculada al liderazgo y desarrollo original de MenstruAcción.",
    ally_vera:"Aliado local para productos menstruales sostenibles y culturalmente pertinentes.",
    support_eyebrow:"Súmate",
    support_title:"Menstruar no debe ser un obstáculo.",
    support_text:"Ayúdanos a escalar este proyecto a más regiones del Perú y cambiar las vidas de más niñas y jóvenes.",
    support_donate:"Donar",
    support_contact:"Contactar",
  },
  en:{
    nav_home:"Home",
    nav_gap:"Equity Gap",
    nav_proposal:"Our Proposal",
    nav_model:"Model in Action",
    nav_impact:"Impact & Voices",
    nav_about:"Who We Are",
    nav_resources:"Resource Center",
    nav_allies:"Allies",
    nav_support:"Support Us",
    hero_eyebrow:"Education. Equity. Opportunity.",
    hero_title:"Dignity for every cycle.",
    hero_lead:"We build equity, access, and opportunity through comprehensive education, sustainable products, and community-based support.",
    hero_primary:"Support the project",
    hero_secondary:"See the gap",
    hero_card_kicker:"MenstruAcción 2026",
    hero_card_line_1: "3 regions.",
     hero_card_line_2: "3 schools.",
     hero_card_line_3: "1 shared dignity.",
    hero_card_text:"Lima, Cajamarca, and Amazonas will be part of a model that combines menstrual, sexual, and financial education with reusable products and follow-up support.",
    region_lima:"Coast",
    region_cajamarca:"Andes",
    region_amazonas:"Amazon",
    source_read:"Read source ↗",
    source_placeholder:"[ADD LINK HERE]",
    source_metals:"Metals ↗",
    source_chemicals:"Chemicals ↗",
    source_environment:"Environmental impact ↗",
    source_school:"School ↗",
    source_transparency:"Transparency ↗",
    source_policy:"Peru / menstrual health ↗",
    gap_eyebrow:"The equity gap",
    gap_title:"When knowledge is scarce, possibilities are too.",
    gap_intro:"Period poverty is not only the absence of products. It is also the absence of information, privacy, health, money, water, support, and safe spaces.",
    gap_stat_one_number:"1 out of 3",
    gap_stat_one:"adolescents misses school during menstruation.",
    gap_stat_two_number:"95%",
    gap_stat_two:"report hostile school environments during their period.",
    gap_stat_three_number:"54%",
    gap_stat_three:"cannot afford basic menstrual products.",
    gap_map_center:"Incomplete interventions",
    gap_node_products:"Products only",
    gap_node_products_text:"Without education or follow-up, access can become a one-time delivery rather than lasting support.",
    gap_node_education:"Education only",
    gap_node_education_text:"Information is not enough if a girl lacks products, privacy, or support to use what she learned.",
    gap_node_health:"Health only",
    gap_node_health_text:"Talking about symptoms without school, economy, water, and stigma leaves the full reality out.",
    angle_center:"Period poverty is a system, not an isolated symptom.",
    angle_health_kicker:"The invisible",
    angle_health_title:"Health and the body",
    angle_health_1:"Metals such as lead, arsenic, and cadmium have been detected in tampons.",
    angle_health_2:"Measurable chemicals such as phthalates, phenols, and parabens have been found in menstrual products.",
    angle_health_3:"Fragrances, irritation, dryness, microbiome effects, and safety still need more research.",
    angle_environment_kicker:"The footprint",
    angle_environment_title:"Water and environment",
    angle_environment_1:"Disposable product waste can end up in landfills or sewer systems.",
    angle_environment_2:"Life-cycle impacts are tied to raw materials, plastics, production, and disposal.",
    angle_environment_3:"Microplastics and non-recyclable waste are part of the pollution problem.",
    angle_system_kicker:"The system",
    angle_system_title:"Social and economic barriers",
    angle_system_1:"School absenteeism, shame, and lack of dignified bathrooms.",
    angle_system_2:"Normalization of menstrual pain and delayed diagnosis.",
    angle_system_3:"Lack of ingredient transparency and the need for stronger regulation.",
    angle_daily_kicker:"The logistics",
    angle_daily_title:"Daily life",
    angle_daily_1:"Bathrooms without water, soap, privacy, or safe disposal bins.",
    angle_daily_2:"Fear of wrapper noise, stains, or asking for help.",
    angle_daily_3:"Disabling pain without leave, care, or adequate attention.",
    proposal_eyebrow:"Our proposal",
    proposal_title_main:"We do not separate the body, economy, and education.",
    proposal_title_break:"We connect them.",
    proposal_intro:"Our model integrates education, access, community, and advocacy to guarantee the right to dignified menstruation.",
    solution_one_title:"Education that translates the body",
    solution_one_text:"Information turns fear into language, symptoms into signals, and shame into safer conversation.",
    solution_two_title:"Sustainable products that last",
    solution_two_text:"Reusable products reduce monthly dependence on disposables and relieve long-term costs.",
    solution_three_title:"Follow-up that sustains",
    solution_three_text:"Aftercare helps answer questions, support correct use, and avoid abandoning beneficiaries after the workshop.",
    proposal_card_one_title:"Menstrual education",
    proposal_card_one_text:"The menstrual cycle, basic anatomy, pain, hygiene, health red flags, myths, taboos, and care for sustainable products.",
    proposal_card_two_title:"Sexual education",
    proposal_card_two_text:"Puberty, consent, bodily autonomy, healthy relationships, prevention, personal boundaries, and life projects.",
    proposal_card_three_title:"Financial education",
    proposal_card_three_text:"The real costs of menstruation, savings, budgeting, informed purchasing, product maintenance, and tools for autonomy.",
    reusable_eyebrow:"Why reusable products",
    reusable_title:"The solution is not just “giving something.” It is giving tools that can last.",
    reusable_cost_title:"Economic relief",
    reusable_cost_text:"A durable kit can reduce repeated monthly expenses and free up family resources.",
    reusable_waste_title:"Less waste",
    reusable_waste_text:"Reuse reduces dependence on single-use products and their environmental burden.",
    reusable_body_title:"More body literacy",
    reusable_body_text:"Learning to use and care for products requires knowing the body, hygiene, and health red flags.",
    reusable_source:"Read menstrual cup review ↗",
    model_eyebrow:"Model in action",
    model_title:"Before, during, and after. Because a real intervention does not end when the workshop ends.",
    model_before_title:"Before",
    model_before_text:"Community diagnosis, menstrual challenge study, and review of water access, habits, taboos, bullying, and specific needs.",
    model_during_title:"During",
    model_during_text:"Participatory workshops, mixed and gender-specific sessions, sustainable product distribution, practical activities, and ambassador formation.",
    model_after_title:"After",
    model_after_text:"WhatsApp line, 3, 6, and 9-month follow-up, surveys, accompaniment, educational support, and community continuity.",
    product_cup:"Menstrual cup",
    product_underwear:"Period underwear",
    product_pads:"Reusable pads",
    product_compress:"Seed compress",
    impact_eyebrow:"Impact and voices",
    impact_title:"This was not only measured. It was felt.",
    impact_intro:"In 2023, the Puente Piedra pilot showed that one intervention can change how participants understand their bodies, care, and future.",
    score_usefulness:"Program usefulness",
    score_support:"Accompaniment",
    score_products:"Trust in products",
    score_mindset:"Mindset shift",
    about_eyebrow:"Who we are",
    about_title:"33 young people building a response from within.",
    about_intro:"We are an interdisciplinary team organized into five areas to turn research, logistics, care, communications, and partnerships into territorial action.",
    team_people:"volunteers",
    team_areas:"work areas",
    team_regions:"macroregions of Peru",
    area_programs:"Programs and Projects",
    area_programs_text:"Curriculum design, school implementation, facilitation, and community adaptation.",
    area_research:"Research and Sustainability",
    area_research_text:"Diagnosis, reports, evidence, evaluation, environmental sustainability, and institutional learning.",
    area_wellbeing:"Community and Wellbeing",
    area_wellbeing_text:"Follow-up, care, support routes, safe spaces, and aftercare.",
    area_comms:"Communications and Marketing",
    area_comms_text:"Public narrative, campaigns, social media, visual materials, and community mobilization.",
    area_management:"Management, Finance, and Partnerships",
    area_management_text:"Budgeting, donations, institutional processes, legal coordination, and strategic partnerships.",
    people_placeholder_title:"Next step: team directory",
    people_placeholder_text:"Here we can add cards for each person with photo, name, area, region, and a short phrase. For now, the space is ready to grow without overcrowding the page.",
    resources_eyebrow:"Resource center",
    resources_title:"Notes, reports, and materials to think about menstruation through evidence, territory, and sustainability.",
    resources_intro:"This will be the space for short publications from the Research and Sustainability team, community guides, field reports, and educational materials.",
    resource_feature_tag:"Suggested format",
    resource_feature_title:"Each entry should include author, date, topic, main source, and one actionable idea.",
    resource_feature_text:"This way the center becomes more than a blog: it becomes a living library for schools, donors, volunteers, and allies.",
    note_tag_research:"Research",
    note_tag_sustainability:"Sustainability",
    note_tag_territory:"Territory",
    note_one_title:"Heavy metals in menstrual products: what we know and what still needs research",
    note_one_author:"By: Research and Sustainability Team",
    note_one_text:"A note to translate scientific evidence into clear questions for communities, schools, and donors.",
    note_two_title:"Why donating products is not enough",
    note_two_author:"By: Author name / Area",
    note_two_text:"An analysis of access, education, follow-up, and the risk of short-term interventions.",
    note_three_title:"Menstruation, water, and school: what changes across the Coast, Andes, and Amazon",
    note_three_author:"By: Author name / Area",
    note_three_text:"A post about how territory changes the real possibilities of dignified menstruation.",
    note_coming:"Coming soon",
    allies_eyebrow:"Allies and sponsors",
    allies_title:"A network that turns resources into dignity.",
    allies_intro:"Thanks to this network, MenstruAcción can reach three schools in Lima, Cajamarca, and Amazonas with support, products, and knowledge.",
    ally_pfp:"Primary sponsor of the 2026 project.",
    ally_lfc:"University institution that supported the application.",
    ally_coa:"Institution linked to the leadership and original development of MenstruAcción.",
    ally_vera:"Local ally for sustainable and culturally relevant menstrual products.",
    support_eyebrow:"Support us",
    support_title:"Menstruation should not be an obstacle.",
    support_text:"Help us scale this project to more regions of Peru and change the lives of more girls and young people.",
    support_donate:"Donate",
    support_contact:"Contact",
  }
};
const testimonials={
  es:[
    {
      name:"Lucia, 23 años",
      text:"Pasé de sentir vergüenza a entender que es algo natural y propio de cada persona. Ahora me siento más segura, más informada y con más confianza para hablar del tema sin miedo."
    },
    {
      name:"Maria, 17 años",
      text:"Yo no sabía que había otras opciones. En el taller descubrí las copas y calzones menstruales, y aprendí sobre mi cuerpo. Ya no me estreso por mancharme en clase ni en deporte."
    },
    {
      name:"Camila, 16 años",
      text:"Me dieron más herramientas de cuidado personal, más comodidad, más seguridad. Ya no me preocupo por mancharme, y eso me ha dado libertad."
    },
    {
      name:"Rosa, 16 años",
      text:"Lo que cambió en mi vida fue la libertad. Mejoró la incomodidad y el dolor. En sí, me cambió la vida."
    }
  ],
  en:[
    {
      name:"Lucia, 23",
      text:"I went from feeling shame to understanding that menstruation is natural. Now I feel more secure, better informed, and more confident speaking about it without fear."
    },
    {
      name:"Maria, 17",
      text:"I did not know there were other options. In the workshop, I discovered menstrual cups and period underwear, and I learned about my body."
    },
    {
      name:"Camila, 16",
      text:"They gave me more self-care tools, more comfort, and more security. I no longer worry about leaking, and that has given me freedom."
    },
    {
      name:"Rosa, 16",
      text:"What changed in my life was freedom. It improved the discomfort and pain. Honestly, it changed my life."
    }
  ]
};
let currentLanguage=localStorage.getItem("menstruaccion-language")||"es";
let currentTestimonialIndex=0;
const tabButtons=document.querySelectorAll(".nav-tab"),
tabLinks=document.querySelectorAll("[data-tab-link]"),
sections=document.querySelectorAll(".page-section"),
languageButtons=document.querySelectorAll(".lang-button"),
mobileMenuButton=document.getElementById("mobileMenuButton"),
siteNav=document.getElementById("siteNav"),
testimonialText=document.getElementById("testimonialText"),
testimonialName=document.getElementById("testimonialName"),
prevTestimonial=document.getElementById("prevTestimonial"),
nextTestimonial=document.getElementById("nextTestimonial");
function activateTab(tabId){
  sections.forEach(s=>s.classList.toggle("active",
  s.id===tabId));
  tabButtons.forEach(b=>b.classList.toggle("active",
  b.dataset.tab===tabId));
  siteNav.classList.remove("open");
  mobileMenuButton.setAttribute("aria-expanded",
  "false");
  if(location.hash!==`#${tabId}`)history.pushState(null,
  "",
  `#${tabId}`);
  requestAnimationFrame(()=>{
    runRevealAnimation();
    animateScoreBars()
  })
} function applyLanguage(lang){
  currentLanguage=lang;
  localStorage.setItem("menstruaccion-language",
  lang);
  document.documentElement.lang=lang;
  document.body.classList.toggle("lang-en", lang === "en");
  document.body.classList.toggle("lang-es", lang === "es");
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k=el.dataset.i18n;
    if(translations[
      lang
    ][
      k
    ])el.textContent=translations[
      lang
    ][
      k
    ]
  });
  languageButtons.forEach(b=>b.classList.toggle("active",
  b.dataset.lang===lang));
  renderTestimonial()
} function renderTestimonial(){
  if(!testimonialText||!testimonialName)return;
  const t=testimonials[
    currentLanguage
  ][
    currentTestimonialIndex
  ];
  testimonialText.textContent=t.text;
  testimonialName.textContent=t.name
} function moveTestimonial(dir){
  const total=testimonials[
    currentLanguage
  ].length;
  currentTestimonialIndex=(currentTestimonialIndex+dir+total)%total;
  renderTestimonial()
} function runRevealAnimation(){
  const active=document.querySelector(".page-section.active");
  active.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top<innerHeight*.9)el.classList.add("visible")
  })
} function animateScoreBars(){
  document.querySelector(".page-section.active").querySelectorAll(".score-bar span").forEach(bar=>bar.style.width=`${bar.dataset.score}%`)
} tabButtons.forEach(b=>b.addEventListener("click",
()=>activateTab(b.dataset.tab)));
tabLinks.forEach(el=>el.addEventListener("click",
e=>{
  e.preventDefault();
  activateTab(el.dataset.tabLink)
}));
languageButtons.forEach(b=>b.addEventListener("click",
()=>applyLanguage(b.dataset.lang)));
document.querySelectorAll(".accordion-trigger").forEach(trigger=>trigger.addEventListener("click",
()=>{
  const card=trigger.closest(".accordion-card"),
  open=card.classList.toggle("open");
  trigger.setAttribute("aria-expanded",
  String(open));
  trigger.querySelector(".accordion-icon").textContent=open?"−":"+"
}));
prevTestimonial.addEventListener("click",
()=>moveTestimonial(-1));
nextTestimonial.addEventListener("click",
()=>moveTestimonial(1));
mobileMenuButton.addEventListener("click",
()=>{
  const open=siteNav.classList.toggle("open");
  mobileMenuButton.setAttribute("aria-expanded",
  String(open))
});
addEventListener("scroll",
runRevealAnimation);
addEventListener("hashchange",
()=>{
  const id=location.hash.replace("#",
  "");
  if(document.getElementById(id))activateTab(id)
});
addEventListener("DOMContentLoaded",
()=>{
  const id=location.hash.replace("#",
  "");
  applyLanguage(currentLanguage);
  activateTab(document.getElementById(id)?id:"inicio")
});
