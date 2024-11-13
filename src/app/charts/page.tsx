'use client';
import Header from "sbt/distro/header/Header";
import { BarChart } from '../components/BarChart';

export default function Charts() {
  const data = [12, 31, 22, 17, 25, 18, 29, 14, 9];

  return (
    <>
      <Header
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
      />
      <main className="p-5">
        <h1 className="text-3xl font-bold mb-2">Bar chart component</h1>
        <hr className="mb-2" />
        <p>Data: {data.join(', ')}</p>
        <BarChart data={data}/>
      </main>
    </>
  );
}
