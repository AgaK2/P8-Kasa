import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error404'
import Apropos from './pages/Apropos'
import Logement from './pages/Logement'
import "./styles/Global.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="global">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/apropos' element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
)
