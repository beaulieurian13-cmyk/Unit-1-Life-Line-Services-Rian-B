import { useState } from 'react'

import './App.css'
import Header from './assets/component/layout/header.jsx'
import Footer from './assets/component/layout/footer.jsx'
import HomePage from './assets/pages/home.jsx'
import AboutPage from './assets/pages/AboutPage.jsx'
import Application from './assets/pages/Application.jsx'
import { Routes, Route, Navigate } from 'react-router'

function App() {

  const [currentPage, setCurrentPage] = useState('/')

  return (
    <>
     <Header setCurrentPage={setCurrentPage}/>
     <main>
      <Routes>
        <Route path="/" element={<HomePage setCurrentPage={setCurrentPage}/>}/>
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/application" element={<Application />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
     </main>
     <Footer />
     
    </>
  )
}

export default App
