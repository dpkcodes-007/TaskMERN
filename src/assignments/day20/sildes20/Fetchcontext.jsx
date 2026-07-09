import React from 'react'
import useFetch from '../hooks20/useFetch'

const Fetchcontext = () => {
  const { savedata, load, error, handleChange, search } = useFetch("https://dummyjson.com/products")

  if (load) {
    return <h1>The Page Is Loadingggg....!!!!</h1>
  }

  if (error) {
    return <h1>ERRORR</h1>
  }

  const filteredProducts = savedata.filter((e) =>e.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <input type="text" onChange={handleChange} placeholder="Search the Products" />
      {filteredProducts.map((e) => (
        <div key={e.id}>
          <h1>Title:{e.title}</h1>
          <h1>Category:{e.category}</h1>
          <h1>Price:{e.price}</h1>
          <h1>Brand:{e.brand}</h1>
          <h1>Ratings:{e.rating}</h1>
        </div>
      ))}
    </>
  )
}

export default Fetchcontext