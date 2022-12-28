import React from 'react'

const Titulo = ({cor, titulo, children}) => {
  return <h1 style={{color: cor}}>
    {titulo}, {children}
  </h1>
}

export const Props = () => {
  return (
    <>
      <Titulo cor="red" titulo="Teste 1">
        Teste Children
      </Titulo>
      <Titulo cor="green" titulo="Teste 2"/>
    </>
  )
}
