import React from 'react'
import Hero from './components/hero'
import { BrowserRouter } from "react-router"
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';


const App = () => {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <Hero />
    </div>
  )
}

export default App
