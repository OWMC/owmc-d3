'use client';

export default function About() {
  
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">About</h1>
      <hr className="mb-2" />
      <p className="mb-2">Demo NextJS for D3js. Typscript, TailwindCSS and Hintertux.</p>
      <h2 className="text-2xl mb-2 font-bold pt-4">Scope</h2>
      <hr className="mb-2" />
      <p className="mb-2">Demonstrate what D3js can do in terms of rendering graphs.</p>
      <p className="mb-2">A simple bar chart inspired by the initial exercises in the FCC data visualisation course.</p>
      <p className="mb-2">Demos for each of the FCC certificate tests</p>
      <h2 className="text-2xl mb-2 font-bold pt-4">Tech</h2>
      <hr className="mb-2" />
      <h3 className="mb-2 font-bold">React - NextJS</h3>
      <p className="mb-2">Setup with app-router. Custom build config for SSG in next.config.js.</p>
      <p className="mb-2">Use client directive currently used on BarChart component, this is so we can allow the chart to update via user input (SSG not approriate, though maybe the initial render should be static? To be investigated).</p>
      <p className="mb-2">A separate bar chart can hopefully be made to allow for static generation.</p>
      <h3 className="mb-2 font-bold">Typescript</h3>
      <p className="mb-2">Barchart component.</p>
      <h3 className="mb-2 font-bold">TailwindCSS</h3>
      <p className="mb-2">Really just used for text formatting and margins at the moment.</p>
      <h3 className="mb-2 font-bold">Hintertux</h3>
      <p className="mb-2">Header (nav) and Button instances.</p>
    </>
  );
}
