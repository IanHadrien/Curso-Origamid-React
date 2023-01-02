import React, { useEffect, useState } from 'react'
import { Produto } from './produto';

export const AppD = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if(produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    if(produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  const handleClick = ({target}) => {
    setProduto(target.innerText);
  };

  return (
    <>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>
        smartphone
      </button>
      <Produto produto={produto}/>
    </>
  )
}
