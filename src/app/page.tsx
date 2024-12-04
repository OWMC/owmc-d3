'use client';
import Button from "sbt/distro/button/Button";
import style from './Page.module.css'
import './globals.css';

export default function Home() {
  
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">D3JS Data visualistion demos</h1>
      <hr className="mb-2" />
      <p className="mb-4">
        Demo NextJS for D3js. Typscript, TailwindCSS and <a href="https://hintertux.owmc.co.uk/?path=/docs/configure-your-project--docs" target="_blank" rel="noopener noreferrer" className="textLink">Hintertux</a>.
      </p>
      <Button size='small' label='View Charts' href='/charts/' />
      <hr className={style.logoLine} />
      <img src="d3.png" alt="D3 logo" className={style.logo} />
      <img src="nextjs.webp" alt="NextJS logo" className={style.logo} />
      <img src="tailwind.webp" alt="Tailwind logo" className={style.logo} />
      <img src="typescript.webp" alt="TypeScript logo" className={style.logo} />
    </>
  );
}
