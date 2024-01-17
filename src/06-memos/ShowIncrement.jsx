import { memo } from 'react'

/* eslint-disable react/prop-types */
export const ShowIncrement = memo(({ increment }) => {
  // Esta re-renderización no se puede solucionar solo con memo porque
  // la función increment se está guardando en un espacio en memoria diferente cada vez que se genera (Así funciona JS)
  console.log('Me volví a generar')

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5)
      }}
    >
      Incrementar
    </button>
  )
})

ShowIncrement.displayName = 'ShowIncrement'
