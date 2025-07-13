const malla = {
  "1° Semestre": [
    { nombre: "Software de gestión de datos" },
    { nombre: "Economía" },
    { nombre: "Administración" },
    { nombre: "Creatividad en los Negocios" },
    { nombre: "Formación Ciudadana" },
    { nombre: "Resolución de Problemas en Álgebra" }
  ],
  "2° Semestre": [
    { nombre: "Marketing" },
    { nombre: "Finanzas" },
    { nombre: "Contabilidad" },
    { nombre: "Ventas y Servicios" },
    { nombre: "Legislación Tributaria" },
    { nombre: "Funciones y Progresiones", requisitos previos.: "Resolución de Problemas en Álgebra" }
  ],
  "3° Semestre": [
    { nombre: "Gestión de Personas" },
    { nombre: "Costo y Presupuesto" },
    { nombre: "Software ERP", requisitos previos.: "Contabilidad" },
    { nombre: "Legislación Comercial" },
    { nombre: "Estadística", requisitos previos.: "Resolución de Problemas en Álgebra" },
    { nombre: "Innovación y Emprendimiento" }
  ],
  "4° Semestre": [
    { nombre: "Software de Remuneraciones", requisitos previos.: "Gestión de Personas" },
    { nombre: "Legislación Laboral" },
    { nombre: "Electivo Tendencias Sector I" },
    { nombre: "Electivo Tendencias Sector II" },
    { nombre: "Proyecto Integrado", requisitos previos.: "Marketing y Finanzas" },
    { nombre: "Inglés Inicial" }
  ],
  "5° Semestre": [
    { nombre: "Liderazgo y Trabajo en Equipo" },
    { nombre: "Finanzas para la Toma de Decisiones", requisitos previos.: "Finanzas" },
    { nombre: "Dirección de Personas" },
    { nombre: "Cálculo Diferencial", requisitos previos.: "Funciones y Progresiones" },
    { nombre: "Probabilidad", requisitos previos.: "Estadística" },
    { nombre: "Innovación y Emprendimiento II", requisitos previos.: "Innovación y Emprendimiento" }
  ],
  "6° Semestre": [
    { nombre: "Economía para la Gestión" },
    { nombre: "Formulación y Evaluación de Proyectos" },
    { nombre: "Gestión de Proyectos" },
    { nombre: "Gestión del Cambio", requisitos previos.: "Dirección de Personas" },
    { nombre: "Estadística Inferencial", requisitos previos.: "Probabilidad" },
    { nombre: "Inglés Habilitante", requisitos: "Inglés Inicial" }
  ],
  "7° Semestre": [
    { nombre: "Investigación de Mercados", requisitos previos.: "Probabilidad" },
    { nombre: "Planificación Estratégica y Control de Gestión" },
    { nombre: "Entorno Económico" },
    { nombre: "Marketing estratégico" },
    { nombre: "Simulación de Negocios", requisitos previos.: "Finanzas para la Toma de Decisiones" },
    { nombre: "Inglés Intermedio", requisitos previos.: "Inglés Habilitante" }
  ],
  "8° Semestre": [
    { nombre: "Análisis de negocios" },
    { nombre: "Sostenibilidad en los Negocios" },
    { nombre: "Electivo Tendencias Sector III" },
    { nombre: "Electivo Tendencias Sector IV" },
    { nombre: "Proyecto de Título Profesional", requisitos: "Marketing Estratégico y Formulación y Evaluación de Proyectos" },
    { nombre: "Innovación y Emprendimiento III", requisitos: "Innovación y Emprendimiento II" }
  ]
};

const contenedor = documento.obtener Elemento por  Id("Contenedor-Malla");

Objeto.entradas (malla).Para cada uno (([Semestre, ramos]) => {entradas(malla).Para cada uno(([Semestre, ramos]) => {
 const semestreDiv = documento.crear elemento elemento ("Div"); const semestreDiv = documento.crear elemento elemento("Div");
 semestreDiv.claseNombre = "Semestre"; semestreDiv.claseNombre = "Semestre";

 Consttulo = documento.crear elemento elemento ("H2"); const titulo = documento.crear elemento elemento("H2");
 titulo.textContenido = Semestre; titulo.textContenido = Semestre;
 semestreDiv.apender niño  niño (titulo); semestreDiv.apender niño  niño(titulo);

 ramos.Para cada uno ((Ramo, I) => { ramos.Para cada uno((Ramo, I) => {
 constramoDiv = documento.crear elemento elemento ("Div"); const ramoDiv = documento.crear elemento elemento("Div");
 ramoDiv.claseNombre = "Ramo"; ramoDiv.claseNombre = "Ramo";
     ramoDiv.textContenido = Ramo.nombre; ramoDiv.textContenido = Ramo.nombre;
 const infoDiv = documento.crear elemento elemento ("Div"); const infoDiv = documento.crear elemento elemento("Div");
 infoDiv.claseNombre = "info"; infoDiv.claseNombre = "info";
 infoDiv.textContenido = Ramo.requisitos previos. infoDiv.textContenido = Ramo.requisitos previos.
 ? 'Prerrequisito (s): ${ramo.prerequisitos}' 'prerrequisito (s): ${ramo.prerequisitos}'
 : "Prerrequisitos del pecado"; "Sin prerrequisitos";

 const ID = '${semestre.replace (/\s/g, ") }-ramo${i}'; const ID = /\s/g\ss/g, ") }-ramo${i}';
 infoDiv.ID = ID; infoDiv.ID = ID;

 ramoDiv.Onclick = () => { ramoDiv.Onclick = () => {
"bloque"
"ninguno"
 }; };

 semestreDiv.apender niño  niño (ramoDiv); semestreDiv.apender niño  niño(ramoDiv);
 semestreDiv.apender niño  niño (infoDiv); semestreDiv.apender niño  niño(infoDiv);
 }); });

 contenedor.apender niño  niño (semestreDiv); contenedor.apender niño  niño(semestreDiv);
})});
