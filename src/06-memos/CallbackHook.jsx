import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  // useCallback es similar a useMemo pero para funciones
  // Graba en el mismo espacio en memoria la función que se le indique:
  const incrementFather = useCallback((value) => {
    // Se debe enviar de esta forma para que sea el valor actualizado del counter, no se puede counter + value
    // El callback que se da como argumento de este hook es la función que se va a ejecutar, en este caso increment() (en ShowIncrement)
    setCounter((c) => c + value)
  }, [])

  // const incrementFather = () => {
  //   setCounter(counter + 1)
  // }

  return (
    <>
      <h1>useCallbackHook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  )
}
