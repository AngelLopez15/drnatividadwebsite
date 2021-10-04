import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Natividad</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold text-gray-700 mb-5 linea-decoracion md:text-xl">Natividad Gutiérrez Chong</h1>
        </div>
        <div className="flex justify-center">
          <div className="w-1/5 md:w-full">
            <picture>
              <img className="rounded-md" src="/Natividad.jpg" alt="Fotografía de la Dra. Natividad Gutiérrez Chong" />
            </picture>
          </div>
        </div>
      </main>
    </>
  )
}
