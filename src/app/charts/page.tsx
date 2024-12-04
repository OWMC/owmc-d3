"use client"
import BarChart from '../components/BarChart';
import React, {useState} from 'react';
import styles from './ChartsPage.module.css';

export default function Charts() {

  const [data, setData] = useState([12, 31, 22, 17, 25, 18, 29, 14, 9]);
  const [inputValue, setInputValue] = useState('12, 31, 22, 17, 25, 18, 29, 14, 9');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  
  // @ts-nocheck
  const handleClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log('Button clicked with input value:', inputValue);
    const numbers = inputValue.split(',').map(Number);
    if (numbers.every((num) => Number.isInteger(num) && num >= 0 && num <= 40)) {
      setData(numbers);
      setError(null); 
    } else {
      setError('Invalid input. Please enter 9 comma-separated numbers between 0 and 40.');
    }
  };


  

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Charts</h1>
      <hr className="mb-2" />
      <h2 className="text-2xl font-bold mb-2 pt-4">Simple bar chart component</h2>
      <hr className="mb-2" />
      <p>Edit these 9 comma-separated numbers between 0 and 40 and click Save to view changes in the chart display.</p>
      <input type="text" value={inputValue} onChange={handleChange} className={styles.arrayInput} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <br />
      {/* Use Button from Hintertux with onclick once it is working */}
      <button onClick={handleClick} className={styles.arrayInput}>Save and do something</button>
      <BarChart data={data} />
    </>
  );
}
