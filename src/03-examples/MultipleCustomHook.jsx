import { useCounter, useFetch } from '../hooks'
import { Character, LoadingCharacter } from './'

export const MultipleCustomHook = () => {
  const { counter, increment } = useCounter(1)
  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`,
  )
  // Verifica que data no sea null y hace la desestructuración:
  const { name, species } = !!data && data
  // console.log({ data, isLoading, error })

  // Una forma de hacer el loading...:
  // if (isLoading) {
  //   return (<h1>Loading...</h1>)
  // }

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <hr />

      {/* {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{name}</p>
          <footer className="blockquote-footer">{species}</footer>
        </blockquote>
      )} */}

      {isLoading ? (
        <LoadingCharacter />
      ) : (
        <Character name={name} species={species} />
      )}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment(1)}
      >
        Next Character
      </button>
    </>
  )
}
