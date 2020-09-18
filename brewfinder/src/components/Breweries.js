import React from 'react'

const Breweries = ({ breweries }) => {
  return (
    <div>
      {breweries.map(brew => (
        <h1 key={brew.id}>{brew.name}</h1>
      ))}
    </div>
  )
}

export default Breweries
