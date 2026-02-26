import { useEffect, useRef, useState } from "react"

interface StatItem {
  value: number
  suffix: string
  label: string
  description: string
}

const stats: StatItem[] = [
  {
    value: 94,
    suffix: "%",
    label: "Точность прогнозов",
    description: "Предсказание отказов оборудования до их возникновения",
  },
  {
    value: 55,
    suffix: "%",
    label: "Снижение простоев",
    description: "Сокращение незапланированных остановок производства",
  },
  {
    value: 340,
    suffix: "%",
    label: "Средний ROI",
    description: "Возврат инвестиций за первый год эксплуатации",
  },
  {
    value: 70,
    suffix: "%",
    label: "Меньше аварий",
    description: "Снижение производственного травматизма и инцидентов",
  },
]

function useCountUp(target: number, duration: number = 2000, started: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, started])

  return count
}

function StatCard({ stat, started }: { stat: StatItem; started: boolean }) {
  const count = useCountUp(stat.value, 2200, started)

  return (
    <div className="group relative flex flex-col items-center text-center p-8 border border-red-500/20 bg-black/60 backdrop-blur-sm hover:border-red-500/60 transition-all duration-500 hover:bg-red-950/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="font-orbitron text-6xl md:text-7xl font-black text-white mb-1 tabular-nums tracking-tight">
        <span className="text-red-500">{count}</span>
        <span className="text-3xl md:text-4xl">{stat.suffix}</span>
      </div>

      <h3 className="font-orbitron text-lg font-bold text-white mt-3 mb-2">{stat.label}</h3>
      <p className="font-space-mono text-sm text-gray-400 leading-relaxed">{stat.description}</p>
    </div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.08)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="font-space-mono text-red-500 text-sm uppercase tracking-[0.3em] mb-4">
            Результаты клиентов
          </p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white">
            Цифры говорят сами за себя
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-red-500/10">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} started={started} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="font-space-mono text-xs text-gray-600 uppercase tracking-widest">
            По данным 47 внедрений на предприятиях России и СНГ · 2022–2025
          </p>
        </div>
      </div>
    </section>
  )
}
