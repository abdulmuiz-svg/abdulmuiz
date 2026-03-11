import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import HomePage from './components/HomePage.jsx'
import ClassPage from './components/ClassPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element={< HomePage />} />
      <Route path="/Home" element={< HomePage />} />
      <Route path="/About" element={< AboutPage/>} />
      <Route path="/Contact" element={< ContactPage />} />
      <Route path="/Class" element={< ClassPage />} />
    </Routes>
  </BrowserRouter>,

)
