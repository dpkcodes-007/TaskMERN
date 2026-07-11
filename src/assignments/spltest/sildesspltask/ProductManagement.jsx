import React, { useState } from 'react'

const ProductManagement = () => {
  const [product, setProduct] = useState({ name: '', price: '', category: '', brand: '' })
  const [savedata, setSaveData] = useState([])

  const handleChange = (e) => {
    //2nd method
    const { name, value } = e.target
    setProduct((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const objparse = JSON.parse(localStorage.getItem('datas')) || []
    const changedata = [...objparse, product]
    localStorage.setItem('datas', JSON.stringify(changedata))
    
    setSaveData(changedata)
    setProduct({ name: '', price: '', category: '', brand: '' })
  }

  return (
    <div className="w-96 mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Product Management System</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleChange} className="border w-full p-2" />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} className="border w-full p-2" />
        <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} className="border w-full p-2" />
        <input type="text" name="brand" placeholder="Brand" value={product.brand} onChange={handleChange} className="border w-full p-2" />

        <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded">
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Product List</h2>

        <div className="grid grid-cols-1 gap-4">
          {savedata.map((e, i) => (
            <div key={i} className="bg-white border rounded-lg shadow p-5">
              <p><span className="font-semibold">Name:</span> {e.name}</p>
              <p><span className="font-semibold">Price:</span> {e.price}</p>
              <p><span className="font-semibold">Category:</span> {e.category}</p>
              <p><span className="font-semibold">Brand:</span> {e.brand}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductManagement
