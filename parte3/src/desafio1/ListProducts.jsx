import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

export const ListProducts = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await fetch("https://ranekapi.origamid.dev/json/api/produto");
    const json = await res.json();
    setProducts(json);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='grid grid-cols-3 gap-4'>
      {products.map((item) => {
        return (
          <Link to={`produto/${item.id}`} key={item.id}>
            <div className='w-20'>
              <img src={item.fotos[0].src} />
              <p>{item.nome}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
