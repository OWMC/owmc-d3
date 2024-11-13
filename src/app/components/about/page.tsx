'use client';
import Header from "sbt/distro/header/Header";

export default function About() {
  
  return (
    <>
      <Header
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
        // This Header component needs refactoring. The button needs to be client rendered for Next.
      />
      <main className="p-5">
      <h1 className="text-3xl font-bold mb-2">About</h1>
        <hr className="mb-2" />
        <p className="mb-2">
          Demo NextJS for D3js. Typscript, TailwindCSS and Hintertux.
        </p>
      </main>
    </>
  );
}
