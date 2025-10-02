import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <main className="bg-gray-900 text-white px-4 md:px-24">
      <Hero />
      {/* Aquí irán las otras secciones */}
    </main>
    </main>
  )
}