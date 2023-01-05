import React, { useState } from 'react'

export const DesafioInput = () => {
  const [sucesso, setSucesso] = useState('');
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const json = await response.json();
    setSucesso(json);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id='nome' value={form.nome} onChange={handleChange}/>

      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={form.email} onChange={handleChange}/>
      
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" value={form.senha} onChange={handleChange}/>

      <label htmlFor="cep">Cep</label>
      <input type="text" id="cep" value={form.cep} onChange={handleChange}/>

      <label htmlFor="rua">Rua</label>
      <input type="text" id="rua" value={form.rua} onChange={handleChange}/>

      <label htmlFor="numero">Número</label>
      <input type="number" id="numero" value={form.numero} onChange={handleChange}/>

      <label htmlFor="bairro">Bairro</label>
      <input type="text" id="bairro" value={form.bairro} onChange={handleChange}/>

      <label htmlFor="cidade">Cidade</label>
      <input type="text" id="cidade" value={form.cidade} onChange={handleChange}/>

      <label htmlFor="estado">Estado</label>
      <input type="text" id="estado" value={form.estado} onChange={handleChange}/>

      { sucesso.ID && <p>Dados enviados com sucesso!</p> }
      { sucesso.message && <p>{ sucesso.message }</p> }

      <button>Enviar</button>
    </form>
  )
}
