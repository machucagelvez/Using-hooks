import { useState } from 'react'
import { UserContext } from './UserContext'

// const user = {
//   id: 123,
//   name: 'Ozzy',
//   email: 'ozzy@gmail.com',
// }

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState()

  return (
    // value es en donde se almacena la inofrmación del UserContext:
    // <UserContext.Provider value={{ hola: 'mundo', user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
