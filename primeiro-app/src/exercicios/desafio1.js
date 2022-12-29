import React from 'react'
import { Header } from './Header';
import { Home } from './home';
import { Produtos } from './produtos';

export const Desafio1 = () => {
  const { pathname } = window.location;
  console.log(pathname)

  let Componentt;
  if(pathname == "/produtos") {
    Componentt = Produtos;
  } else {
    Componentt = Home;
  }

  return (
    <>
      <Header />
      <Componentt />
    </>
  )
}
