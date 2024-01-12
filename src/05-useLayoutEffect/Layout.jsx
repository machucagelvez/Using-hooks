import { useCounter, useFetch } from '../hooks'
import { Character, LoadingCharacter } from '../03-examples'

export const Layout = () => {
  const { counter, increment } = useCounter(1)
  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`,
  )
  const { name, species } = !!data && data

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <hr />

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
