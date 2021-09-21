export default function productos() {
  return (
    <main>
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold text-gray-700 mb-10 linea-decoracion md:text-3xl">Productos digitales</h1>
      </div>
      <section>
        <div className="flex w-full justify-center">
          <picture>
            <img className="rounded-md" src="/productos/Juventidades.png" alt="imagen portada sitio web juventidades" />
          </picture>
        </div>
        <div>
          <h2 className="text-center">Juventidades</h2>
          <p className="text-justify"><span className="font-bold">Jóvenes de identidades diversas en dinámicas metropolitanas Juventidades</span>, es una plataforma que presenta un esfuerzo creativo, disciplinario y metodológico, usando métodos cualitativos y cuantitativos para mostrar evidencias de cómo vive la juventud en la zona metropolitana. Por supuesto que la información y análisis que aquí presentamos no es exhaustiva, pues ningún esfuerzo sería suficiente para mostrar una vasta diversidad que aquí buscamos analizar a través de un enfoque interseccional. Hemos recogido y sistematizado información de acuerdo con tres grupos de edad, sexo, género, clase social, color de piel y etnicidad. Un hallazgo de este estudio ha sido observar con especificidad, el entramado de oportunidades, privilegios, exclusión, racismo y discriminación que experimenta la juventud.</p>
          <p className="text-justify">Asimismo, se encuentran disponibles las siguientes galerías multimedias, que muestran contenidos audiovisuales.</p>
        </div>
        <div className="flex w-full justify-center">
          <picture>
            <img className="rounded-md" src="/productos/galeria.png" alt="imagen logo juventidades enfrente de la biblioteca central de la UNAM" />
          </picture>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://juventidades.sociales.unam.mx/videos/">Ir al sitio web</a>
        </div>
      </section>
      <section>
        <div className="flex w-full justify-center">
          <picture>
            <img className="rounded-md" src="/productos/PluriversoDigital.png" alt="imagen portada sitio web Pluriverso Digital" />
          </picture>
        </div>
        <div>
          <h2 className="text-center">Pluriverso Digital</h2>
          <p className="text-justify">La <span className="font-bold">Plataforma Digital sobre Estudios de la Diversidad Cultural en México Pluriverso DIGITAL</span>, es una herramienta digital que ofrece un panorama de la complejidad de la cultura y sus interconexiones de estos seis conceptos o ejes relacionados con el estudio de las culturas, la era del reconocimiento a minorías, y las políticas públicas. Estos ejes son: identidad, interseccionalidad, interculturalidad, interculturalismo, multiculturalidad y multiculturalismo.</p>
        </div>
        <div className="flex w-full justify-center">
          <picture>
            <img className="rounded-md" src="/productos/galeriaPluriverso.png" alt="imagen de los videos del sitio web pluriverso digital" />
          </picture>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="http://pluriversodigital.unam.mx/">Ir al sitio web</a>
        </div>
      </section>
      <section>
        <div>
          <h2 className="text-center">SICETNO</h2>
          <p className="text-justify"><span className="font-bold">SICETNO Sistema de consulta de organizaciones indígenas y conflictos étnicos en las Américas</span>, es una plataforma digital desarrollada con herramientas innovadoras para vincular la investigación en ciencias sociales con las tecnologías de la información sobre temas de democracia y derechos humanos en el continente.</p>
          <p className="text-justify">SICETNO incluye dos bases de datos: <span className="font-bold">Organizaciones indígenas de América Latina (ORGINDAL*)</span> y <span className="font-bold">Conflictos étnicos y nacionalismos en las Américas (CETNA*)</span></p>
        </div>
        <div className="flex w-full justify-center">
          <picture>
            <img className="rounded-md" src="/productos/SICETNO.png" alt="imagen portada sitio web SICETNO" />
          </picture>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="http://www.sicetno.org">Ir al sitio web</a>
        </div>
      </section>
    </main>
  )
}
