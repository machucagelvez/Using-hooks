import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
  return (
    // Cualquier elemento que esté dentro del <UserProvider> tiene acceso a la información que tiene ese <UserProvider>
    <UserProvider>
      {/* <h1>MainApp</h1> */}
      <NavBar />
      <hr />

      {/* Con Oulet se indica que se debe mostrar la ruta principal y las rutas hijas (si el path así lo indica) */}
      <Outlet />
    </UserProvider>
  )
}
