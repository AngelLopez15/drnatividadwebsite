import Gallery from "react-photo-gallery"

export default function biografia() {

  const inspiracion = [
    {
      src: "/biografia/inspiracion/inspiracion1.JPG",
      width: 7,
      height: 3
    },
    {
      src: "/biografia/inspiracion/inspiracion2.jpg",
      width: 6,
      height: 3
    },
    {
      src: "/biografia/inspiracion/inspiracion3.JPG",
      width: 6,
      height: 3
    },
    {
      src: "/biografia/inspiracion/inspiracion4.jpg",
      width: 6,
      height: 3
    },
    {
      src: "/biografia/inspiracion/inspiracion5.jpg",
      width: 6,
      height: 3
    },
    {
      src: "/biografia/inspiracion/inspiracion6.JPG",
      width: 6,
      height: 3
    },
    {
      src: "/biografia/inspiracion/inspiracion8.jpg",
      width: 6,
      height: 3
    },
    {
      src: "/biografia/inspiracion/inspiracion9.JPG",
      width: 6,
      height: 3
    },
    {
      src: "/biografia/inspiracion/inspiracion10.jpg",
      width: 7,
      height: 3
    },
    {
      src: "/biografia/inspiracion/inspiracion7.jpg",
      width: 4,
      height: 4
    },
  ]

  const aulas = [
    {
      src: "/biografia/aulas/aulas1.jpg",
      width: 8,
      height: 3
    },
    {
      src: "/biografia/aulas/aulas2.png",
      width: 8,
      height: 3
    },
    {
      src: "/biografia/aulas/aulas3.png",
      width: 8,
      height: 3
    },
    {
      src: "/biografia/aulas/aulas4.jpg",
      width: 8,
      height: 3
    },
    {
      src: "/biografia/aulas/aulas5.jpg",
      width: 8,
      height: 3
    },
    {
      src: "/biografia/aulas/aulas6.jpg",
      width: 8,
      height: 3
    },
    {
      src: "/biografia/aulas/aulas7.JPG",
      width: 8,
      height: 3
    },
    {
      src: "/biografia/aulas/aulas8.jpg",
      width: 8,
      height: 3
    },
    {
      src: "/biografia/aulas/aulas9.jpg",
      width: 8,
      height: 3
    },
  ]
  return (
    <main className="my-20">
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold text-gray-700 mb-10 linea-decoracion md:text-3xl">Biografia Visual</h1>
      </div>
      <section>
        <h2 className="text-center">Inspiraciones</h2>
        <div>
          <Gallery photos={inspiracion} />
        </div>
      </section>
      <section>
        <h2 className="text-center">Aulas y cuadernos en las investigaciones</h2>
        <div>
          <Gallery photos={aulas} />
        </div>
      </section>
    </main>
  )
}
