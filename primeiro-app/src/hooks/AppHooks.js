import React, { useState } from 'react'
import { ButtonModal } from './ButtonModal'
import { Modal } from './Modal';

export const AppHooks = () => {
  const [modal, setModal] = useState(false);
  const [contar, setContar] = useState(1);
  const [items, setItems] = useState(['Item 1']);

  const handClick = () => {
    setContar(contar + 1);
    setItems([...items, 'Item ' + (contar + 1)]);
  };

  return (
    <>
      <Modal modal={modal} setModal={setModal}/>
      <ButtonModal setModal={setModal}/>

      <h2>useState pt2</h2>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handClick}>{contar}</button>
    </>
  )
}
