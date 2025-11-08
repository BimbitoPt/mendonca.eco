import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import MouseTrail from './components/layout/MouseTrail'
import Home from './pages/Home'
import Sentinel from './pages/Sentinel'
import Invest from './pages/Invest'
import { Analytics } from '@vercel/analytics/react'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <MouseTrail />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sentinel" element={<Sentinel />} />
          <Route path="/invest" element={<Invest />} />
        </Routes>
        <Footer />
        <Analytics />
      </div>
    </BrowserRouter>
  )
}