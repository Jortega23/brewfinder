import React, {useState, useEffect} from 'react';
import Search from './components/Search'
import axios from 'axios'
import './App.css';

const App = () => {
  const [breweries, setBreweries] = useState([])

  useEffect(async() => {
    const res = await axios.get('https://api.openbrewerydb.org/breweries/1')
    setBreweries(res.data)
    console.log(breweries)
  },[])

  return (

    // Landing Page
    <div className='main-page'>
      <h1 className='main-title'>BrewFinder</h1>
        <br/>
      <h3>Find a brew near you.</h3>
        <br/>
      <Search />
    </div>
  );
}

export default App;
