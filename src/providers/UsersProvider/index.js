import React, { useCallback, useState } from 'react'
import { UserContext } from './context'

const UsersProvider = ({children}) => {
    const [users, setUsers] = useState([]);

    const addUserData = useCallback((e) => {
        e.preventDefault();
        setUsers(prev => [...prev, {
            fname: e.target[0].value,
            lname: e.target[1].value,
            email: e.target[2].value,
            password: e.target[4].value,
            dob: e.target[5].value    
        }])
    }, []);

  return (
      <UserContext.Provider value={{
          users,
          addUserData
      }
    }>
      {children}
    </UserContext.Provider>
  )
}

export default UsersProvider
