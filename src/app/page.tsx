'use client';
import Header from "sbt/distro/header/Header";

export default function Home() {
  return (
    <>
      <Header
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
        logoLink = {{
          url: "#",
          title: "nothing"
        }}
        // This Header component needs refactoring. The button needs to be client rendered for Next.
      />
      <main className="p-5">
        <h1 className="text-3xl font-bold mb-2">D3JS Data visualistion demos</h1>
        <hr className="mb-2" />
        <ul>
          <li>• First chart...</li>
        </ul>
      </main>
    </>
  );
}
