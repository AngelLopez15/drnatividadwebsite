export default function publicaciones() {

  // libros
  const libros2021 = [
    {
      id: '1',
      portada: '/publicaciones/portadas/jovenes_interseccionalidad_1.png',
      titulo: 'Jóvenes e interseccionalidad I',
      url: '/publicaciones/pdf/jovenes_interseccionalidad_vol_1.pdf',
    },
    {
      id: '2',
      portada: '/publicaciones/portadas/jovenes_interseccionalidad_2.png',
      titulo: 'Jóvenes e interseccionalidad II',
      url: '/publicaciones/pdf/jovenes_interseccionalidad_vol_2.pdf',
    },
  ]

  const libros2020 = [
    {
      id: '1',
      portada: '/publicaciones/portadas/fronteras_de_genero.png',
      titulo: 'Fronteras de género',
      url: '/publicaciones/pdf/fronteras_de_genero.pdf',
    },
  ]

  const libros2019 = [
    {
      id: '1',
      portada: '/publicaciones/portadas/las_palabras.png',
      titulo: 'Las palabras que en mí dormían: discursos indígenas de Bolivia, Ecuador, Chile y México',
      url: '/publicaciones/pdf/palabras_que_domian.pdf',
    },
    {
      id: '2',
      portada: '/publicaciones/portadas/las_culturas.png',
      titulo: 'Las culturas hoy',
      url: '/publicaciones/pdf/las_culturas_hoy.pdf',
    },
  ]

  const libros2015 = [
    {
      id: '1',
      portada: '/publicaciones/portadas/cultura_politica.jpg',
      titulo: 'Cultura política indígena. Bolivia, Ecuador, Chile, México.',
      url: '/publicaciones/pdf/cultura_politica.pdf',
    },
    {
      id: '2',
      portada: '/publicaciones/portadas/indigenismo_pan.jpg',
      titulo: 'El indigenismo del PAN y el festejo del bicentenario del Estado mexicano',
      url: '/publicaciones/pdf/indigenismo_PAN.pdf',
    },
  ]

  const libros2013 = [
    {
      id: '1',
      portada: '/publicaciones/portadas/etnicidad_territorios_reconocimientos_I.png',
      titulo: 'Etnicidad y conflicto en las Américas. Volumen I Territorios y reconocimiento constitucional',
      url: '/publicaciones/pdf/etnicidad_vol1.pdf',
    },
    {
      id: '2',
      portada: '/publicaciones/portadas/etnicidad_violencia_activismo_II.png',
      titulo: 'Etnicidad y conflicto en las Américas. Volumen II Violencia y activismo político',
      url: '/publicaciones/pdf/etnicidad_vol2.pdf',
    },
  ]

  const libros2012 = [
    {
      id: '1',
      portada: '/publicaciones/portadas/Mitos_nacionalistas.jpg',
      titulo: 'Mitos nacionalistas e identidades étnicas: los intelectuales indígenas y el Estado mexicano',
      url: '/publicaciones/pdf/Mitos_nacionalistas_e_identidades_etnicas.pdf',
    },
  ]

  const libros2010 = [
    {
      id: '1',
      portada: '/publicaciones/portadas/El_activismo_politico_indigena_y_la_institucionalizacion_del_estado.jpg',
      titulo: 'El activismo político indígena y la institucionalización del Estado: ¿políticas de indiferencia o de reconocimiento cultural?',
      url: '/publicaciones/pdf/El_activismo_politico_indigena_y_la_institucionalizacion_del_estado.pdf',
    },
    {
      id: '2',
      portada: '/publicaciones/portadas/Los_Pueblos_indígenas.jpg',
      titulo: 'Los Pueblos indígenas en los nacionalismos de independencia y liberación: el colonialismo interno revisitado',
      url: '/publicaciones/pdf/Los_Pueblos_indigenas_en_los_nacionalismos_de_independencia_y_liberación_el_colonialismo_interno_revisitado.pdf',
    },
  ]

  const libros2009 = [
    {
      id: '1',
      portada: '/publicaciones/portadas/Conflictos_etnicos_y_etnonacionalismos_en_las_Americas.jpg',
      titulo: 'Conflictos étnicos y etnonacionalismos en las Américas',
      url: '/publicaciones/pdf/Conflictos_etnicos_y_etnonacionalismos_en_las_Americas.pdf',
    },
  ]

  const libros2004 = [
    {
      id: '1',
      portada: '/publicaciones/portadas/Mujeres_y_Nacionalismos_en_America_Latina.jpg',
      titulo: 'Mujeres y nacionalismos en América Latina. De la independencia a la nación del nuevo milenio',
      url: '/publicaciones/pdf/Mujeres_y_Nacionalismos_en_America_Latina.pdf',
    },
  ]

  return (
    <main>
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold text-gray-700 mb-10 linea-decoracion md:mb-0 md:text-3xl">Publicaciones</h1>
      </div>
      <section>
        <h2>2021</h2>
        <div>
          {
            libros2021.map((item) => (
              <article key={item.id}>
                <picture>
                  <img className="rounded-md" src={item.portada} alt={item.titulo} />
                </picture>
                <p>{item.titulo}</p>
                <a target="_blank" rel="noopener noreferrer" href={item.url} >Descargar</a>
              </article>
            ))
          }
        </div>
      </section>
      <section>
        <h2>2020</h2>
        <div>
          {
            libros2020.map((item) => (
              <article key={item.id}>
                <picture>
                  <img className="rounded-md" src={item.portada} alt={item.titulo} />
                </picture>
                <p>{item.titulo}</p>
                <a target="_blank" rel="noopener noreferrer" href={item.url} >Descargar</a>
              </article>
            ))
          }
        </div>
      </section>
      <section>
        <h2>2019</h2>
        <div>
          {
            libros2019.map((item) => (
              <article key={item.id}>
                <picture>
                  <img className="rounded-md" src={item.portada} alt={item.titulo} />
                </picture>
                <p>{item.titulo}</p>
                <a target="_blank" rel="noopener noreferrer" href={item.url} >Descargar</a>
              </article>
            ))
          }
        </div>
      </section>
      <section>
        <h2>2015</h2>
        <div>
          {
            libros2015.map((item) => (
              <article key={item.id}>
                <picture>
                  <img className="rounded-md" src={item.portada} alt={item.titulo} />
                </picture>
                <p>{item.titulo}</p>
                <a target="_blank" rel="noopener noreferrer" href={item.url} >Descargar</a>
              </article>
            ))
          }
        </div>
      </section>
      <section>
        <h2>2013</h2>
        <div>
          {
            libros2013.map((item) => (
              <article key={item.id}>
                <picture>
                  <img className="rounded-md" src={item.portada} alt={item.titulo} />
                </picture>
                <p>{item.titulo}</p>
                <a target="_blank" rel="noopener noreferrer" href={item.url} >Descargar</a>
              </article>
            ))
          }
        </div>
      </section>
      <section>
        <h2>2012</h2>
        <div>
          {
            libros2012.map((item) => (
              <article key={item.id}>
                <picture>
                  <img className="rounded-md" src={item.portada} alt={item.titulo} />
                </picture>
                <p>{item.titulo}</p>
                <a target="_blank" rel="noopener noreferrer" href={item.url} >Descargar</a>
              </article>
            ))
          }
        </div>
      </section>
      <section>
        <h2>2010</h2>
        <div>
          {
            libros2010.map((item) => (
              <article key={item.id}>
                <picture>
                  <img className="rounded-md" src={item.portada} alt={item.titulo} />
                </picture>
                <p>{item.titulo}</p>
                <a target="_blank" rel="noopener noreferrer" href={item.url} >Descargar</a>
              </article>
            ))
          }
        </div>
      </section>
      <section>
        <h2>2009</h2>
        <div>
          {
            libros2009.map((item) => (
              <article key={item.id}>
                <picture>
                  <img className="rounded-md" src={item.portada} alt={item.titulo} />
                </picture>
                <p>{item.titulo}</p>
                <a target="_blank" rel="noopener noreferrer" href={item.url} >Descargar</a>
              </article>
            ))
          }
        </div>
      </section>
      <section>
        <h2>2004</h2>
        <div>
          {
            libros2004.map((item) => (
              <article key={item.id}>
                <picture>
                  <img className="rounded-md" src={item.portada} alt={item.titulo} />
                </picture>
                <p>{item.titulo}</p>
                <a target="_blank" rel="noopener noreferrer" href={item.url} >Descargar</a>
              </article>
            ))
          }
        </div>
      </section>
    </main>
  )
}
