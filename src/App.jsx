import { useState } from 'react'
import Header from './assets/component/layout/Header-c.jsx'
import Footer from './assets/component/layout/Footer-c.jsx'
import HomePage from './assets/pages/Home.jsx'
import AboutPage from './assets/pages/About.jsx'
import Application from './assets/pages/Application.jsx'
import { Routes, Route, Navigate } from 'react-router'
import './App.css'


function App() {



  return (
    <>
     <Header />
          <main>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/> }/>
        <Route path="/application" element={<Application />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
     </main>
     <Footer />
     
    </>
  )
}

export default App
