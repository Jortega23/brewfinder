import { sanitizeQuery } from 'express-validator';
import React, {useState} from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }
  

  return (
    <div className='search-bar'>
      <form>
        <input type="text" onChange={(e) => onChange(e.target.value)} value={text}/>
      </form>
    </div>
  )
}

export default Search
