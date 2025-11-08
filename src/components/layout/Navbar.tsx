import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/sentinel', label: 'MendonçaSentinel' },
    { to: '/invest', label: 'MendonçaInvest' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-neon">mendonca</span>.eco
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative pb-1 transition-colors ${
                location.pathname === link.to ? 'text-neon' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              {location.pathname === link.to && (
                <motion.div layoutId="navbar-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/10"
        >
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-lg hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  )
}