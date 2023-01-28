import React from 'react'
import { NavLink } from 'react-router-dom'
import "./componentcss.css"

export const Header = () => {
  return (
    <header className='flex items-center justify-center p-2'>
      <NavLink className="px-2" to="/" end>
        Produtos
      </NavLink>
      <div>
        |
      </div>
      <NavLink className="px-2" to="contato">
        Contato
      </NavLink>
    </header>
  )
}
