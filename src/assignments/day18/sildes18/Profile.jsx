import React, { useContext } from 'react'
import User from '../context/UserContext'

const Profile = () => {
    const {name,email,role} = useContext(User)
  return (
    <>
    <h1>Name : {name}</h1>
    <h1>Email : {email}</h1>
    <h1>Role : {role}</h1>
    </>
  )
}

export default Profile