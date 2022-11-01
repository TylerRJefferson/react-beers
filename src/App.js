import { useState, useEffect } from 'react';
import './App.css';
import SingleBeer from './SingleBeer';

function App() {
const [data, setData] = useState([{name:'', price:''}])

useEffect(() => {
  displayAllBeers()
}, [])

  const displayAllBeers = () => {
    fetch('https://api.sampleapis.com/beers/ale')
    .then(response => response.json())
    .then((data) => setData(data))
    .catch(err => console.error(err))
  }
  return (
    <div className="App">
      <main>
        <h1>Sample API's Brewhaus</h1>
        <div className='menu-items'>
          {data.map(item => {
            console.log('each item ->', item)
            return <SingleBeer entireObject={item} />
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
