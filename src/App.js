import Card from './UI/card';
import './App.css';
import { useState } from 'react';
import Item from './Item';
import LoadingSpinner from './UI/LoadingSpinner';

function App() {
  const URL = 'https://restcountries.com/v3/region/asia';

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  const aa = async () => {
    setIsLoading(true);
    try {

      const response = await fetch(URL);
      if (!response.ok) {
        setIsLoading(false);
        throw new Error();
      }

      const responseData = await response.json();
      setData(responseData);
      console.log(responseData);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      alert(err.message);
    }
  }


  function onLoad() {
    setIsFirst(false);
    aa();
  }

  return (
    <div className="App">
      {isFirst && <header className='App-header'>
        <button className='center' type='button' onClick={onLoad}>Load Data</button>
      </header>}
      {isLoading && <LoadingSpinner />}
      {
        !isFirst && !isLoading && <header className="App-header">
          <button type='button' onClick={aa}>Refresh Data</button>
          <div className='details'>
            {data.map((country, index) => {
              return <Card key={index}><Item item={country} /></Card>
            })}
          </div>
        </header>
      }
    </div >
  );
}

export default App;
