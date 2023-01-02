import React from 'react'

export const ApiDesafio = ({dados}) => {
  return (
    <div>
      <h2>{dados.id}</h2>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} />
    </div>
  )
}
