import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from './pages/Home'
import Shop from './pages/Shop'
import AdminPortal from './pages/AdminPortal'
import About from './pages/About'
import Contact from './pages/Contact'

import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />} >
        <Route path='Contact' element = {<Contact />} />
      </Route>
      <Route path='/Shop' element = {<Shop />}>
      <Route path='Contact' element = {<Contact />} />
      </Route>
      <Route path='/AdminPortal' element = {<AdminPortal />} >
      <Route path='Contact' element = {<Contact />} />
      </Route>
      <Route path='/About' element = {<About />} >
      <Route path='Contact' element = {<Contact />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
