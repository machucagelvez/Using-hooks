import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'

export const MainApp = () => {
  return (
    <>
      {/* <h1>MainApp</h1> */}
      <NavBar />
      <hr />

      {/* Con Oulet se indica que se debe mostrar la ruta principal y las rutas hijas (si el path así lo indica) */}
      <Outlet />
    </>
  )
}
