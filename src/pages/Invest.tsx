import { investProducts } from '../ecosystems/invest'
import { TrendingUp, Zap, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Invest() {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <TrendingUp className="w-16 h-16 text-purple" />
            <Zap className="w-12 h-12 text-yellow-400" />
          </div>
          <h1 className="text-6xl font-bold">
            Mendonça<span className="text-purple">Invest</span>
          </h1>
          <p className="text-2xl text-gray-400 mt-4">
            Trading algorítmico que não dorme nunca.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {investProducts.map((product, i) => (
            <motion.a
              key={product.name}
              href={product.link}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 hover:border-purple/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition" />
              <h3 className="text-2xl font-bold mb-2 relative z-10">{product.name}</h3>
              <p className="text-gray-400 mb-4 relative z-10">{product.tagline}</p>
              <span className={`text-sm px-3 py-1 rounded-full relative z-10 ${
                product.status === 'Lançado' ? 'bg-purple/20 text-purple' :
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