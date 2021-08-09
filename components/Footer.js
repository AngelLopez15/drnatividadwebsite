export default function Footer() {

  let dateFull = new Date()
  let onlyYear = dateFull.getFullYear()

  return (
    <footer className="w-full py-6 bg-gray-200">
      <p className="text-center font-medium text-lg text-gray-700">©Doctora​ Natividad Gutiérrez Chong. Todos los derechos reservados. {onlyYear}</p>
    </footer>
  )
}
