import { Navigate, createBrowserRouter } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { MainApp } from './MainApp'

export const getRoutes = () =>
  createBrowserRouter([
    {
      // Ruta principal:
      path: '/', // path de la ruta
      element: <MainApp />, // componente al que apunta

      // Rutas hijas:
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: '*', // Ruta por defecto (cuando se recibe una ruta no existente)
          element: <Navigate to={'/'} />,
        },
      ],
    },
  ])
