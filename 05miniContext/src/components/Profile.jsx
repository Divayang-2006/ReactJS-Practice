import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
   const {user} = useContext(UserContext)
   if(!user) return <div>Please Login</div>
   else
   return (
      <div>{user.username} Pass: {user.password}</div>
   )
}

export default Profile