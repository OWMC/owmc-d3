'use client';
import Header from "sbt/distro/header/Header";
import { BarChart } from '../components/BarChart';

export default function Charts() {

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
      />
      <main className="p-5">
        <h1 className="text-2xl font-bold mb-2">Charts</h1>
        <hr className="mb-2" />

        <BarChart data={[1,2,3]}/>

      </main>
    </>
  );
}
