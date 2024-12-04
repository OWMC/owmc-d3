"use client"
import BarChart from '../components/BarChart';
import React, {useState} from 'react';
import styles from './ChartsPage.module.css';

export default function Charts() {

  const [data, setData] = useState([12, 31, 22, 17, 25, 18]);
  const [inputValue, setInputValue] = useState('12, 31, 22, 17, 25, 18');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  
  const handleClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const numbers = inputValue.split(',').map(Number);
    if (numbers.length === 6 && numbers.every((num) => Number.isInteger(num) && num >= 0 && num <= 40)) {
      setData(numbers);
      setError(null); 
    } else {
      setError('Invalid input. Please enter 6 comma-separated numbers between 0 and 40.');
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Charts</h1>
      <hr className="mb-8" />
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="shadow-[#ccc] dark:shadow-[#404040] shadow-md p-4 bg-white dark:bg-black rounded-sm">
          <h2 className="text-2xl font-bold mb-2">Simple bar chart component</h2>
          <hr className="mb-2" />
          <p>Edit these 6 comma-separated numbers between 0 and 40 and click Save to view changes in the chart display.</p>
          <input type="text" value={inputValue} onChange={handleChange} className={styles.arrayInput} />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <br />
          {/* Use Button from Hintertux with onclick once it is working */}
          <button onClick={handleClick} className={styles.arrayInput}>Save and do something</button>
          <BarChart data={data} />
        </div>
      </div>
    </>
  );
}
