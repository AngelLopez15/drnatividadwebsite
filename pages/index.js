import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Natividad</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="my-40">
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold text-gray-700 mb-20 linea-decoracion">Dra. Natividad Gutiérrez Chong</h1>
        </div>
        <div className="flex justify-center">
          <p>foto</p>
        </div>
      </main>
    </>
  )
}
