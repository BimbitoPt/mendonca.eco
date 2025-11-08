import { useEffect } from 'react'

export default function MouseTrail() {
  useEffect(() => {
    const trail = document.createElement('div')
    trail.className = 'fixed w-4 h-4 bg-neon/30 rounded-full pointer-events-none z-50 mix-blend-screen'
    document.body.appendChild(trail)

    const move = (e: MouseEvent) => {
      trail.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return null
}