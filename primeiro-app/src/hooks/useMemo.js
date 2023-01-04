import React, { useMemo, useState } from 'react'

export const UseMemo = () => {
  const [contar, setContar] = useState(0);

  const valor = useMemo(() => {
    const localItem = window.localStorage.getItem('Produto');
    console.log('Aconteceu o memo');
    return localItem;
  }, []);
  console.log(valor);

  return (
    <button onClick={() => setContar(contar + 1)}>{contar}</button>
  )
}
