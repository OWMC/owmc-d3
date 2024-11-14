import { BarChart } from '../components/BarChart';

export default function Charts() {
  const data = [12, 31, 22, 17, 25, 18, 29, 14, 9];

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Charts</h1>
      <hr className="mb-2" />
      <h2 className="text-2xl font-bold mb-2 pt-4">Simple bar chart component</h2>
      <hr className="mb-2" />
      <p>Data: {data.join(', ')}</p>
      <BarChart data={data} />
    </>
  );
}
