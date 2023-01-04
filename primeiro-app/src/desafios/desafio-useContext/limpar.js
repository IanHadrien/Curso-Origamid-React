import React, { useContext } from 'react'
import { DesafioContext } from './ContextDesafio';

export const Limpar = () => {
  const { limparDados } = useContext(DesafioContext);
  console.log(limparDados)

  return (
    <button onClick={limparDados()}>limpar</button>
  )
}
