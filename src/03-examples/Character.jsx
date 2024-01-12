import { useLayoutEffect, useRef, useState } from 'react'

/* eslint-disable react/prop-types */
export const Character = ({ name, species }) => {
  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect()
    setBoxSize({ width, height })
  }, [species])

  return (
    <>
      <blockquote
        className="blockquote text-end"
        style={{ display: 'flex' }} // Es lo mismo que style="display: 'flex'", pero con las {} permite modificar el valor que tiene display
      >
        <p ref={pRef} className="mb-1">
          {name}
        </p>
        <footer className="blockquote-footer">{species}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
