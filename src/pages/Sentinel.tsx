import { sentinelProducts } from '../ecosystems/sentinel'
import { Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Sentinel() {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <Shield className="w-24 h-24 mx-auto text-neon mb-8" />
          <h1 className="text-6xl font-bold">Mendonça<span className="text-neon">Sentinel</span></h1>
          <p className="text-2xl text-gray-400 mt-4">Cibersegurança do futuro, hoje.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sentinelProducts.map((product, i) => (
            <motion.a
              key={product.name}
              href={product.link}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 hover:border-neon/50 transition-all group"
            >
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-4">{product.tagline}</p>
              <span className={`text-sm px-3 py-1 rounded-full ${
                product.status === 'Lançado' ? 'bg-neon/20 text-neon' :
                product.status === 'Beta Fechado' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {product.status}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}