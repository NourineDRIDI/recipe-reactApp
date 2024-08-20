import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

function Router() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<App/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default Router
