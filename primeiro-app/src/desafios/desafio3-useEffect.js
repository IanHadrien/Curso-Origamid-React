import React, { useEffect, useState } from 'react'
import { ProdutoDS3 } from './produtoDS3';
// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


export const Desafio3useEffect = () => {
  const [dados, setDados] = useState(null);
  const [preferencia, setPreferencia] = useState(null);

  const handleClick = async(event) => {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event}`
    );
    const json = await response.json();
    setDados(json);
    setPreferencia(json.id);
    localStorage.setItem('produto', json.id);
  };

  useEffect(() => {
    console.log("Reload")
    setPreferencia(localStorage.getItem('produto'));
    if(preferencia) handleClick(preferencia);
  }, [])

  return (
    <>
      {preferencia && <h2>Preferencia: {preferencia}</h2>}

      <button onClick={() => handleClick('notebook')}>
        notebook
      </button>
      <button onClick={() => handleClick('smartphone')}>
        smartphone
      </button>

      {dados && <ProdutoDS3 nome={dados.nome} preco={dados.preco}/>}
    </>
  )
}
