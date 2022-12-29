import React from 'react'

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

export const Produtos = () => {
  return (
    <>
      <h2>Produtos</h2>

      {
        produtos.map(({nome, propriedades}) => (
          <div key={nome}>
            <h3>{nome}</h3>
            
            <u>{
              propriedades.map((p, index) => (
                <li key={index}>{p}</li>
              ))  
            }</u>
          </div>
        ))
      }
    </>
  )
}
