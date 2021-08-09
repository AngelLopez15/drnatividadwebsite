import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Natividad</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="my-20">
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold text-gray-700 mb-10 linea-decoracion">Dra. Natividad Gutiérrez Chong</h1>
        </div>
        <div className="flex justify-center">
          <div className="w-1/3">
            <picture>
              <img className="rounded-md" src="/Natividad.jpg" alt="Fotografía de la Dra. Natividad Gutiérrez Chong" />
            </picture>
          </div>
        </div>
      </main>
    </>
  )
}
