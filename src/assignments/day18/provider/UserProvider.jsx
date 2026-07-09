import React from 'react'
import UserContext from '../context/UserContext';

const UserProvider = ({ children }) => {
  const users = {
    name: "Deepak",
    email: "deepak2k6@gmail.com",
    role: "student",
  };

  return (
    <UserContext.Provider value={users}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider