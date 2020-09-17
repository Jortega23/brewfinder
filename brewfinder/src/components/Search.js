import React, {useState} from 'react'

const Search = () => {
  const [useText, setText] = useState('')
  return (
    <div className='search-bar'>
      <form>
        <input type="text"/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Search
