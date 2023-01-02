import React, { useState } from 'react'
import { ApiDesafio } from './apiDesafio'

export const Desafio2useState = () => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const handleClick = async(event) => {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <button onClick={() => handleClick('notebook')}>
        notebook
      </button>
      <button onClick={() => handleClick('smartphone')}>
        smartphone
      </button>
      <button onClick={() => handleClick('tablet')}>
        tablet
      </button>
      { carregando &&  <p>Carregando...</p> }
      { !carregando && dados && <ApiDesafio dados={dados}/>}
    </>
  )
}
