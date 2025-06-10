import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {
   const [user, setUser] = React.useState(null)
   return(
      <UserContext.Provider value = {{user,  setUser}}>
         {children}
      </UserContext.Provider>
   )
   //It provides the user and setUser values to all components inside it.
   // Any child component inside this provider can now access or update user using useContext(UserContext).
}

export default UserContextProvider