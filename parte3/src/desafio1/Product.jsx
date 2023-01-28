import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

export const Product = () => {
  const [product, setProduct] = useState([]);
  const location = useLocation();

  async function getProduct(id) {
    const res = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
    const json = await res.json();
    console.log(json);
    setProduct(json);
  }

  useEffect(() => {
    const pathname = location.pathname.split('/');
    getProduct(pathname[pathname.length - 1]);
  }, [])

  return (
    <div className='grid grid-cols-2 gap-4'>
      
      <div className='text-right'>
        <img className='w-32' src={product.fotos} />
      </div> 
      <div className='text-left'>
        <h2>{product.nome}</h2>
        <p>R$ {product.preco}</p>
        <p>{product.descricao}</p>
      </div>

    </div>
  )
}
