/* eslint-disable react/prop-types */
import { memo } from 'react'

// memo memoriza el componente para no renderizarlo a menos que cambien las props
// memo se utiliza cuando las props del componente no cambian a menudo
// Solo cuando las props cambian se ejecuta el componente:
export const Small = memo(({ value }) => {
  console.log('Me volví a dibujar')
  return <small>{value}</small>
})

Small.displayName = 'Small' // Corrije un error que muestra eslint
