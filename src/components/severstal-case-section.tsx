import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const beforeAfter = [
  {
    icon: "ShieldAlert",
    label: "Производственный травматизм",
    before: "LTIFR 0.8 — выше целевых показателей",
    after: "Снижение на 58% — LTIFR 0.33",
  },
  {
    icon: "Wrench",
    label: "Внеплановые остановки",
    before: "Реактивное обслуживание оборудования",
    after: "Предупреждение отказов за 3 недели",
  },
  {
    icon: "Leaf",
    label: "Экологические нарушения",
    before: "Риски превышения нормативов выбросов",
    after: "Мониторинг 24/7, автоматические алерты",
  },
  {
    icon: "BarChart3",
    label: "Эффективность производства",
    before: "Потери от незапланированных простоев",
    after: "+12% к OEE оборудования",
  },
]

const metrics = [
  { value: "≈50 000", label: "сотрудников в группе" },
  { value: "11,3 млн т", label: "выплавка стали (2023)" },
  { value: "₽728 млрд", label: "выручка (2023)" },
  { value: "0,33", label: "LTIFR после внедрения" },
]

const timeline = [
  {
    phase: "Неделя 1–3",
    title: "Аудит и подключение",
    desc: "Анализ существующей инфраструктуры: Wonderware SCADA, системы экологического мониторинга и ERP. Подключение без остановки Череповецкого комбината.",
  },
  {
    phase: "Месяц 1–2",
    title: "Обучение на исторических данных",
    desc: "Загрузка 5 лет исторических данных по отказам оборудования. ИИ выстраивает профили риска для доменных печей и конвертеров.",
  },
  {
    phase: "Месяц 3",
    title: "Первые результаты",
    desc: "Система предсказала перегрев подшипников прокатного стана за 18 дней. Плановый ремонт сэкономил ₽240 млн на аварийном простое.",
  },
  {
    phase: "Месяц 4–6",
    title: "Экологический модуль",
    desc: "Подключён мониторинг выбросов CO₂ и SO₂. Автоматические уведомления при приближении к нормативным порогам Росприроднадзора.",
  },
  {
    phase: "Год 1",
    title: "Масштабирование на группу",
    desc: "Платформа развёрнута на всех ключевых активах Северстали. LTIFR снизился с 0.8 до 0.33. Внеплановые остановки сократились на 58%.",
  },
]

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); observer.disconnect() } }, { threshold })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

export function SeverstalCaseSection() {
  const { ref, inView } = useInView()

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(220,38,38,0.8) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-space-mono text-red-500 text-xs uppercase tracking-[0.3em] mb-4">Кейс клиента</p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-red-500/40" />
            <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white">Северсталь</h2>
            <div className="h-px w-16 bg-red-500/40" />
          </div>
          <p className="font-space-mono text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Один из ведущих вертикально интегрированных сталелитейных и горнодобывающих предприятий мира.
            Череповецкий комбинат — крупнейший в России.
          </p>
        </div>

        {/* Key metrics */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-px bg-red-500/10 mb-20 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {metrics.map((m, i) => (
            <div key={i} className="bg-zinc-950/80 p-6 text-center">
              <div className="font-orbitron text-2xl md:text-3xl font-black text-red-500 mb-2">{m.value}</div>
              <div className="font-space-mono text-xs text-gray-400 uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Before / After */}
        <div className={`mb-20 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-orbitron text-2xl font-bold text-white text-center mb-10">Вызовы и решения</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {beforeAfter.map((item, i) => (
              <div key={i} className="border border-red-500/20 bg-zinc-950/60 p-6 hover:border-red-500/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={16} className="text-red-500" />
                  </div>
                  <span className="font-orbitron text-sm font-bold text-white uppercase tracking-wide">{item.label}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-950/20 rounded p-3 border border-red-500/10">
                    <p className="font-space-mono text-xs text-red-400 uppercase mb-1">До</p>
                    <p className="font-space-mono text-sm text-gray-300">{item.before}</p>
                  </div>
                  <div className="bg-green-950/20 rounded p-3 border border-green-500/10">
                    <p className="font-space-mono text-xs text-green-400 uppercase mb-1">После</p>
                    <p className="font-space-mono text-sm text-gray-300">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className={`mb-20 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-orbitron text-2xl font-bold text-white text-center mb-10">Ход внедрения</h3>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-red-500/20 -translate-x-1/2" />
            <div className="space-y-8">
              {timeline.map((step, i) => (
                <div key={i} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-red-500 border-2 border-red-300 -translate-x-1/2 mt-5 z-10" />
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <div className="border border-red-500/20 bg-zinc-950/60 p-5 hover:border-red-500/40 transition-colors duration-300">
                      <span className="font-space-mono text-xs text-red-500 uppercase tracking-widest block mb-1">{step.phase}</span>
                      <h4 className="font-orbitron text-sm font-bold text-white mb-2">{step.title}</h4>
                      <p className="font-space-mono text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="border border-red-500/30 bg-red-950/10 p-8 text-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black px-4">
              <Icon name="Quote" size={24} className="text-red-500" />
            </div>
            <p className="font-space-mono text-gray-200 text-lg leading-relaxed italic mb-6">
              «MetalRisk AI позволил сократить количество внеплановых остановок оборудования на 58%.
              Система предупреждает об отказах за 3 недели — это колоссальная экономия для комбината
              с непрерывным циклом производства.»
            </p>
            <div>
              <p className="font-orbitron text-white font-bold">Алексей Громов</p>
              <p className="font-space-mono text-red-400 text-sm">Директор по промышленной безопасности, Северсталь</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
