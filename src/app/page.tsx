'use client';
import Header from "sbt/distro/header/Header";

export default function Home() {
  
  return (
    <>
      <Header
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
        // This Header component needs refactoring. The button needs to be client rendered for Next.
      />
      <main className="p-5">
        <h1 className="text-3xl font-bold mb-2">D3JS Data visualistion demos</h1>
        <hr className="mb-2" />
        <p className="mb-4">
          Demo NextJS for D3js. Typscript, TailwindCSS and Hintertux.
        </p>
        <a className="bg-transparent hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-700 hover:border-transparent rounded" href="/charts/">
          Bar chart
        </a>
      </main>
    </>
  );
}
