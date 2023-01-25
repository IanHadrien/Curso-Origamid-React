import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'/>
          <Route path='sobre'/>
          <Route path='*'/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
