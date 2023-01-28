// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from './Header'
import { ListProducts } from './ListProducts'
import { Contact } from './Contact'
import { Product } from './Product'

export const AppDesafio1 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ListProducts />}/>
        <Route path='contato' element={<Contact />}/>
        <Route path='produto/:id' element={<Product />}/>
      </Routes>
    </BrowserRouter>
  )
}
