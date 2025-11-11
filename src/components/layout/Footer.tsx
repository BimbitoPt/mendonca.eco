import { Link } from 'react-router-dom'
import { Github, Twitter, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-surface/50 border-t border-white/5 py-20 mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              mendonca<span className="text-neon">.eco</span>
            </h3>
            <p className="text-gray-400">
              Dois ecossistemas. Uma visão.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Ecossistemas</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/sentinel" className="hover:text-neon transition">MendonçaSentinel</Link></li>
              <li><Link to="/invest" className="hover:text-neon transition">MendonçaInvest</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-neon transition">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-neon transition">Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Social</h4>
            <div className="flex gap-4">
              <a href="https://github.com/BimbitoPt" className="glass p-3 hover:bg-neon/20 transition">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://x.com/BimbitoPt1" className="glass p-3 hover:bg-sky/20 transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://mendonca-eco.vercel.app/" className="glass p-3 hover:bg-purple/20 transition">
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-gray-500 text-sm"
        >
          © 2025 mendonca.eco — Todos os direitos reservados.
        </motion.div>
      </div>
    </footer>
  )
}