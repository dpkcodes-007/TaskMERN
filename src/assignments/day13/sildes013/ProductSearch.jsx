import React, { useState } from 'react'

const ProductSearch = () => {
    const [search,setSearch] = useState('')

    const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Laptop Stand" },
  { id: 3, name: "Laptop Bag" },
  { id: 4, name: "Mouse" },
  { id: 5, name: "Wireless Mouse" },
  { id: 6, name: "Keyboard" },
  { id: 7, name: "Mechanical Keyboard" },
  { id: 8, name: "Monitor" },
  { id: 9, name: "USB Cable" },
  { id: 10, name: "Pendrive" },
  { id: 11, name: "Hard Disk" },
  { id: 12, name: "SSD" },
  { id: 13, name: "Printer" },
  { id: 14, name: "Scanner" },
  { id: 15, name: "Webcam" },
  { id: 16, name: "Speaker" },
  { id: 17, name: "Bluetooth Headset" },
  { id: 18, name: "Power Bank" },
  { id: 19, name: "Smart Watch" },
  { id: 20, name: "Mobile Charger" },
];

const filterDatas = products.filter((e)=>e.name.toLowerCase().includes(search.toLowerCase()))
const handleproduct = (e)=>{
    setSearch(e.target.value)
} 
  return (
    <>
    <div>
        <input type="text" placeholder='Search Product' value={search} onChange={handleproduct} />
        {filterDatas.map((e)=>(
            <p key={e.id}>{e.name}</p>
        ))}
    </div>
    
    </>
  )
}

export default ProductSearch