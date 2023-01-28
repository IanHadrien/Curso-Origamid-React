import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();

  async function getProduct(id) {
    try {
      setLoading(true);
      const res = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
      const json = await res.json();
      setProduct(json);
    } catch (erro) {
      setError('Um erro ocorreu');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProduct(id);
  }, [id])

  if(loading) return <div className='loading'></div>;
  if(error) return <p>{error}</p>
  if(product === null) return null;
  return (
    <div className='grid grid-cols-2 gap-4'>
      
      <div className='text-right'>
        {product.fotos.map((foto, index) => {
          return (
            <img
              key={index} 
              className='w-32' 
              src={foto.src} 
            />
          )
        })}
      </div> 
      <div className='text-left'>
        <h2>{product.nome}</h2>
        <p>R$ {product.preco}</p>
        <p>{product.descricao}</p>
      </div>

    </div>
  )
}
