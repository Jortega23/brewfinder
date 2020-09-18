import React, {useState, useEffect} from 'react';
import Search from './components/Search'
import Breweries from './components/Breweries'
import axios from 'axios'
import './App.css';

const App = () => {
  const [breweries, setBreweries] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const getBreweries = async () => {
      const res = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${query}`)
      setBreweries(res.data)
    }

    getBreweries()
  },[query])

  return (

    // Landing Page
    <div className='main-page'>
      <h1 className='main-title'>BrewFinder</h1>
        <br/>
      <h3>Find a brew near you.</h3>
        <br/>
      <Search getQuery={(q) => setQuery(q)}/>
      <Breweries breweries={breweries}/>
    </div>
  );
}

export default App;
