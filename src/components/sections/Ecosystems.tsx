import { motion } from 'framer-motion'
import { Shield, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const ecosystems = [
  {
    title: 'MendonçaSentinel',
    icon: Shield,
    color: 'from-emerald-500 to-teal-600',
    description: 'Cibersegurança + Inteligência Artificial',
    link: '/sentinel',
  },
  {
    title: 'MendonçaInvest',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-600',
    description: 'Trading Algorítmico + Finanças Descentralizadas',
    link: '/invest',
  },
]

export default function Ecosystems() {
  return (
    <section id="ecosystems" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-20"
        >
          Escolha seu ecossistema
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {ecosystems.map((eco, i) => (
            <motion.div
              key={eco.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Link to={eco.link}>
                <div className="glass p-12 group hover:border-neon/50 transition-all duration-500">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${eco.color} p-6 mb-8 group-hover:scale-110 transition-transform`}>
                    <eco.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-4xl font-bold mb-4">{eco.title}</h3>
                  <p className="text-xl text-gray-400">{eco.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}