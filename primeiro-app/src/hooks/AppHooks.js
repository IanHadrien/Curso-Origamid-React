import React, { useState } from 'react'
import { ButtonModal } from './ButtonModal'
import { Modal } from './Modal';

export const AppHooks = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal modal={modal} setModal={setModal}/>
      <ButtonModal setModal={setModal}/>
    </>
  )
}
