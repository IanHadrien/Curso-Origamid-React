import React, { useState } from 'react'
import { Input } from '../form/input';
import { useForm } from '../Hooks/useForm';

export const Validacao = () => {
  const cep = useForm('cep');
  const email = useForm('email');

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate()) {
      console.log('Enviou');
    } else {
      console.log('Não Enviou');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        id="cep" 
        type="text"
        label="CEP" 
        placeholder="00000-000"
        {...cep}
      />
      <Input 
        id="email" 
        type="text"
        label="Email" 
        {...email}
      />
    </form>
  )
}
