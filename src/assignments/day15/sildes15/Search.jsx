import React, { useEffect, useState } from 'react'

const Search = () => {

  const [product,SetProduct] = useState([])
  const [unicat,setUnicat] = useState([])
  const [search,setSearch] = useState("")
  const [category,setCategory] = useState("")
  const [sort,setSort] = useState("")

  const fetchapi = async () => {
    try {
      const getData = await fetch('https://dummyjson.com/products')
      const changeData = await getData.json()
      SetProduct(changeData.products)
      const catData = changeData.products.map((e) => e.category)
      const newarray = [...new Set(catData)]
      setUnicat(newarray)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    }
  }

  useEffect(() => {
    fetchapi()
  },[])

  let condition = [...product]

  const handlesearch = (e) => {
    setSearch(e.target.value)
  }
  if(search){
    condition = condition.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))
  }

  const handlecategory = (e)=>{
    setCategory(e.target.value)
  }

  if(category){
    condition = condition.filter((e)=>e.category === category)
  }

  const handlesort =(e)=>{
    setSort(e.target.value)
  }
  if(sort === "des"){
    condition = condition.sort((a,b)=>a.price-b.price)
  }
  if(sort === "asc"){
    condition = condition.sort((a,b)=>b.price-a.price)
  }

    return (
<>
  <div>
    <input
      type="text"
      placeholder="Search the products"
      value={search}
      onChange={handlesearch}
    />

    <select onChange={handlecategory}>
      <option value="">Select Category</option>
      {unicat.map((e, i) => (
        <option key={i} value={e}>
          {e}
        </option>
      ))}
    </select>

    <select onChange={handlesort}>
      <option value="" >
        Sort
      </option>
      <option value="asc">Low - High</option>
      <option value="des">High - Low</option>
    </select>
  </div>

  <div>
    {condition.map((e) => (
      <div key={e.id}>
        <h1>{e.title}</h1>

        <h3>{e.category}</h3>

        <h4>₹{e.price}</h4>
      </div>
    ))}
  </div>
</>
  )
}

export default Search