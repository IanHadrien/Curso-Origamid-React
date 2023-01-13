import React, { useEffect } from 'react'

export const ValidationResponse = ({ response }) => {
  return (
    <div>
      Você acertou: {response} de 4
    </div>
  )
}
