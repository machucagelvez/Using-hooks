import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
  // Con el useContext se toma la información que hay en UserContext:
  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, name: 'Ozzy', email: 'ozzy@gmail.com' })
        }
      >
        Set User
      </button>
    </>
  )
}
