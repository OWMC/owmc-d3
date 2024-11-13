'use client';
import Button from "sbt/distro/button/Button";

export default function Home() {
  
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">D3JS Data visualistion demos</h1>
      <hr className="mb-2" />
      <p className="mb-4">
        Demo NextJS for D3js. Typscript, TailwindCSS and Hintertux.
      </p>
      <Button size='small' label='Charts' href='/charts/' />
    </>
  );
}
