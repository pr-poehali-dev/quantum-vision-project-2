import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const beforeAfter = [
  {
    icon: "Gauge",
    label: "Интеграция систем управления",
    before: "Разрозненные SCADA, DCS и MES без единого риск-центра",
    after: "Единый дашборд: газовая, пожарная, экологическая безопасность",
  },
  {
    icon: "Thermometer",
    label: "Мониторинг доменных печей",
    before: "Ручной контроль температурных режимов",
    after: "Автоматический анализ 200+ параметров в реальном времени",
  },
  {
    icon: "FileCheck",
    label: "Регуляторная отчётность",
    before: "Подготовка отчётов занимала 3–5 дней",
    after: "Автогенерация отчётов для Ростехнадзора за 2 часа",
  },
  {
    icon: "Globe",
    label: "Экспортные риски",
    before: "Отсутствие прогнозирования качественных отклонений",
    after: "Контроль качества слябов для EU-сертификации",
  },
]

const metrics = [
  { value: "≈54 000", label: "сотрудников в группе" },
  { value: "15,8 млн т", label: "мощность (сталь/год)" },
  { value: "₽933 млрд", label: "выручка группы (2023)" },
  { value: "3 страны", label: "производственные активы" },
]

const timeline = [
  {
    phase: "Неделя 1–2",
    title: "Картирование рисков",
    desc: "Аудит 4 производственных площадок: Липецк, Калуга, Урал. Выявлено 127 зон критического риска, не охваченных существующими системами мониторинга.",
  },
  {
    phase: "Месяц 1",
    title: "Интеграция с ABB и Siemens",
    desc: "Подключение к DCS ABB 800xA на доменном переделе и Siemens PCS 7 на прокатных станах через OPC-UA без изменения производственного контура.",
  },
  {
    phase: "Месяц 2–3",
    title: "Газовый и пожарный модуль",
    desc: "Приоритетное внедрение контроля доменного газа. Первый инцидент предотвращён на 4-й неделе: утечка на газопроводе выявлена за 11 дней до критического порога.",
  },
  {
    phase: "Месяц 4–5",
    title: "Регуляторный модуль",
    desc: "Автоматизирована подготовка отчётности для Ростехнадзора и Росприроднадзора. Время подготовки сократилось с 5 дней до 2 часов.",
  },
  {
    phase: "Год 1",
    title: "Итоги и масштабирование",
    desc: "Все риски видны в едином дашборде. Проверка Ростехнадзора пройдена без предписаний. Планируется подключение европейских активов группы.",
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

export function NlmkCaseSection() {
  const { ref, inView } = useInView()

  return (
    <section ref={ref} className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(45deg, rgba(220,38,38,0.4) 25%, transparent 25%, transparent 75%, rgba(220,38,38,0.4) 75%), linear-gradient(45deg, rgba(220,38,38,0.4) 25%, transparent 25%, transparent 75%, rgba(220,38,38,0.4) 75%)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-space-mono text-red-500 text-xs uppercase tracking-[0.3em] mb-4">Кейс клиента</p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-red-500/40" />
            <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white">НЛМК</h2>
            <div className="h-px w-16 bg-red-500/40" />
          </div>
          <p className="font-space-mono text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Новолипецкий металлургический комбинат — международная сталелитейная группа с производственными
            активами в России, Европе и США. Один из крупнейших производителей слябов в мире.
          </p>
        </div>

        {/* Key metrics */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-px bg-red-500/10 mb-20 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {metrics.map((m, i) => (
            <div key={i} className="bg-black/80 p-6 text-center">
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
              <div key={i} className="border border-red-500/20 bg-black/60 p-6 hover:border-red-500/50 transition-colors duration-300">
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
                    <div className="border border-red-500/20 bg-black/60 p-5 hover:border-red-500/40 transition-colors duration-300">
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
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-950 px-4">
              <Icon name="Quote" size={24} className="text-red-500" />
            </div>
            <p className="font-space-mono text-gray-200 text-lg leading-relaxed italic mb-6">
              «Интеграция с нашей SCADA прошла за 2 недели без остановки производства.
              Теперь все риски — от газовой безопасности до экологии — видны в одном дашборде.
              Подготовка отчётности для регуляторов сократилась с 5 дней до 2 часов.»
            </p>
            <div>
              <p className="font-orbitron text-white font-bold">Марина Светлова</p>
              <p className="font-space-mono text-red-400 text-sm">Главный инженер, НЛМК</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
