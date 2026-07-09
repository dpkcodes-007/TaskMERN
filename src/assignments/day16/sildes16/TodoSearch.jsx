import React, { useState } from 'react'

const TodoSearch = () => {

    const [formData, setFormdata] = useState({name: "",mobile: "",email: "",})
    const [saveData, setSaveData] = useState([])
    const [isEdit, setIsEdit] = useState(null)
    const [search, setSearch] = useState("")

  
    const handleChange = (e) => {
        setFormdata({...formData,[e.target.name]: e.target.value})
    }


const handleAdd = (e) => {
    e.preventDefault()

    const id = saveData.length + 1

    const temp = {
        id,
        ...formData
    }

    setSaveData((prev) => [...prev, temp])

    setFormdata({
        name: "",
        mobile: "",
        email: "",
    })
}

    // Edit User
    const handleEdit = (e) => {

        setIsEdit(e.id)

        setFormdata({name: e.name,mobile: e.mobile,email: e.email,})
    }

    // Update User
    const handleUpdate = (e) => {

        e.preventDefault()

        const findObj = saveData.map((e) =>
        isEdit === e.id? { id: isEdit, ...formData }:e)

        setSaveData(findObj)

        setIsEdit(null)

        setFormdata({
            name: "",mobile: "",email: "",
        })
    }

    // Delete User
    const handleDelete = (id) => {

        const removeUser = saveData.filter((e) => e.id !== id)

        setSaveData(removeUser)
    }

    // Search Input
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    let displayData = [...saveData]

    console.log(displayData)

    if (search) {

        displayData = displayData.filter((e) =>
            e.name.toLowerCase().includes(search.toLowerCase()) ||
            e.email.toLowerCase().includes(search.toLowerCase()) ||
            e.mobile.includes(search)
        )
    }

    return (
        <>
            <div>

                <h2>User Register Form</h2>

                <form>

                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <br /><br />

                    <input
                        type="text"
                        placeholder="Mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                    />

                    <br /><br />

                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <br /><br />


                    {isEdit?<button onClick={handleUpdate}>Update</button>:<button onClick={handleAdd}>Add</button>}

                </form>

                <br />

                <input type="text" placeholder="Search User" onChange={handleSearch}/>

                <br /><br />

                <table border="1">

                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            displayData.map((e, i) => (
                                <tr key={i + 1}>

                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.mobile}</td>
                                    <td>{e.email}</td>
                                  

                                    <td>
                                        <button onClick={() => handleEdit(e)}>
                                            Edit
                                        </button>
                                    </td>

                                    <td>
                                        <button onClick={() => handleDelete(e.id)}>
                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>
        </>
    )
}

export default TodoSearch