import React, { useContext } from 'react'
import { DesafioContext } from '../desafios/desafio-useContext/ContextDesafio';

export const ProdutoContext = () => {
  const dadosContext = useContext(DesafioContext);
  console.log(dadosContext)

  return (
    <div>
      Teste Context
    </div>
  )
}
