import React, { useContext } from 'react'
import ProductContext from '../context/ProductsContext'

const Products = () => {
  const products = useContext(ProductContext) 

  return (
    <>
      <div>
        {products.map((e) => (
          <div key={e.id}>
            <h1>Title : {e.title}</h1>
            <h1>$ : {e.price}</h1>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products