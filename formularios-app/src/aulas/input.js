import React, { useState } from 'react'

export const Input = () => {
  const [nome, setNome] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input 
        id='nome'
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  )
}
