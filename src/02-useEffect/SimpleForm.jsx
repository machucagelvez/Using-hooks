import { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'ozzy',
    email: 'ozzy@gmail.com',
  })

  const { username, email } = formState

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      // Al poner [name] se está haciendo referencia al atributo. Si se pone name: value se crea un nuevo elemento en el objeto con key = name
      [name]: value,
    })
  }

  // El callback que tiene el useEffect como argumento es el que se ejecuta cuando se dispara el useEffect
  useEffect(() => {
    console.log('useEffect called')
  }, [])

  // Se recomienda usar un useEffect por cada cambio que se quiera seguir.
  // El segundo argumento del useEffect es la dependencia, indica al useEffect cuando ejecutarse, es decir, cuando cambie la dependencia.
  useEffect(() => {
    console.log('formState changed')
  }, [formState])

  useEffect(() => {
    console.log('email changed')
  }, [email])

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="ozzy@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === 'ozzy2' && <Message />}
    </>
  )
}
