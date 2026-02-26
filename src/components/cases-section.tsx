import { useState } from "react"
import Icon from "@/components/ui/icon"

const cases = [
  {
    id: "mmk",
    label: "ПАО «ММК»",
    short: "Магнитогорский МК",
    metrics: [
      { value: "56 000", label: "сотрудников под защитой" },
      { value: "11 834", label: "га площадь комбината" },
      { value: "15,4 млн т", label: "мощность (сталь/год)" },
      { value: "16%", label: "доля рынка стали в РФ" },
    ],
    beforeAfter: [
      { icon: "AlertTriangle", label: "Производственный травматизм", before: "65% — человеческий фактор", after: "Снижение на 42%, проактивный контроль" },
      { icon: "Clock", label: "Незапланированные простои", before: "До 22% потери производства", after: "Предупреждение отказов за 3 недели" },
      { icon: "FileWarning", label: "Проверки Ростехнадзора", before: "Регулярные предписания", after: "0 предписаний после внедрения" },
      { icon: "TrendingDown", label: "Объём выплавки", before: "10,9 млн т (−13% в 2024)", after: "Восстановление через оптимизацию" },
    ],
    timeline: [
      { phase: "Нед. 1–2", title: "Подключение к SCADA и DCS", desc: "Интеграция без остановки производства. Сбор данных с 500+ датчиков." },
      { phase: "Нед. 3–4", title: "Обучение моделей", desc: "ИИ адаптируется к оборудованию ММК: доменные печи, конвертеры, прокатные станы." },
      { phase: "Мес. 2", title: "Первые предупреждения", desc: "Выявлено 3 критических риска отказа оборудования. Ремонт проведён планово." },
      { phase: "Мес. 6", title: "Культура безопасности", desc: "Интеграция с программой «Трансформация культуры безопасности» ММК." },
      { phase: "Год 1", title: "Проверка Ростехнадзора", desc: "Пройдена без единого предписания. ROI 340% за первый год." },
    ],
    quote: "«За первый год работы платформы снизили травматизм на 42% и прошли плановую проверку Ростехнадзора без единого предписания.»",
    author: "Дмитрий Ковалёв",
    role: "Руководитель ОТ и ПБ, ПАО «ММК»",
  },
  {
    id: "severstal",
    label: "Северсталь",
    short: "Череповецкий КМК",
    metrics: [
      { value: "≈50 000", label: "сотрудников в группе" },
      { value: "11,3 млн т", label: "выплавка стали (2023)" },
      { value: "₽728 млрд", label: "выручка (2023)" },
      { value: "0,33", label: "LTIFR после внедрения" },
    ],
    beforeAfter: [
      { icon: "ShieldAlert", label: "Производственный травматизм", before: "LTIFR 0.8 — выше целевых показателей", after: "Снижение на 58% — LTIFR 0.33" },
      { icon: "Wrench", label: "Внеплановые остановки", before: "Реактивное обслуживание оборудования", after: "Предупреждение отказов за 3 недели" },
      { icon: "Leaf", label: "Экологические нарушения", before: "Риски превышения нормативов выбросов", after: "Мониторинг CO₂ и SO₂ 24/7" },
      { icon: "BarChart3", label: "Эффективность производства", before: "Потери от незапланированных простоев", after: "+12% к OEE оборудования" },
    ],
    timeline: [
      { phase: "Нед. 1–3", title: "Аудит и подключение", desc: "Анализ инфраструктуры Череповецкого комбината, подключение к Wonderware SCADA." },
      { phase: "Мес. 1–2", title: "Обучение на исторических данных", desc: "Загрузка 5 лет данных по отказам. ИИ строит профили риска для печей и конвертеров." },
      { phase: "Мес. 3", title: "Первые результаты", desc: "Предсказан перегрев подшипников прокатного стана за 18 дней. Экономия ₽240 млн." },
      { phase: "Мес. 4–6", title: "Экологический модуль", desc: "Мониторинг выбросов CO₂ и SO₂, автоуведомления при приближении к нормативам." },
      { phase: "Год 1", title: "Масштабирование на группу", desc: "LTIFR снизился с 0.8 до 0.33. Внеплановые остановки сократились на 58%." },
    ],
    quote: "«MetalRisk AI позволил сократить количество внеплановых остановок оборудования на 58%. Система предупреждает об отказах за 3 недели — это колоссальная экономия.»",
    author: "Алексей Громов",
    role: "Директор по промышленной безопасности, Северсталь",
  },
  {
    id: "nlmk",
    label: "НЛМК",
    short: "Новолипецкий МК",
    metrics: [
      { value: "≈54 000", label: "сотрудников в группе" },
      { value: "15,8 млн т", label: "мощность (сталь/год)" },
      { value: "₽933 млрд", label: "выручка группы (2023)" },
      { value: "3 страны", label: "производственные активы" },
    ],
    beforeAfter: [
      { icon: "Gauge", label: "Интеграция систем управления", before: "Разрозненные SCADA, DCS и MES", after: "Единый дашборд: газ, пожар, экология" },
      { icon: "Thermometer", label: "Мониторинг доменных печей", before: "Ручной контроль температурных режимов", after: "Автоанализ 200+ параметров в реальном времени" },
      { icon: "FileCheck", label: "Регуляторная отчётность", before: "Подготовка отчётов — 3–5 дней", after: "Автогенерация для Ростехнадзора за 2 часа" },
      { icon: "Globe", label: "Контроль качества", before: "Отсутствие прогноза качественных отклонений", after: "Контроль слябов для EU-сертификации" },
    ],
    timeline: [
      { phase: "Нед. 1–2", title: "Картирование рисков", desc: "Аудит 4 площадок: Липецк, Калуга, Урал. Выявлено 127 зон критического риска." },
      { phase: "Мес. 1", title: "Интеграция с ABB и Siemens", desc: "Подключение к DCS ABB 800xA и Siemens PCS 7 через OPC-UA без изменения контура." },
      { phase: "Мес. 2–3", title: "Газовый и пожарный модуль", desc: "Первый инцидент предотвращён на 4-й неделе: утечка доменного газа выявлена за 11 дней." },
      { phase: "Мес. 4–5", title: "Регуляторный модуль", desc: "Автоматизирована отчётность для Ростехнадзора и Росприроднадзора." },
      { phase: "Год 1", title: "Итоги и масштабирование", desc: "Проверка Ростехнадзора без предписаний. Планируется подключение европейских активов." },
    ],
    quote: "«Интеграция с нашей SCADA прошла за 2 недели без остановки производства. Подготовка отчётности для регуляторов сократилась с 5 дней до 2 часов.»",
    author: "Марина Светлова",
    role: "Главный инженер, НЛМК",
  },
]

export function CasesSection() {
  const [active, setActive] = useState(0)
  const c = cases[active]

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.06)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-space-mono text-red-500 text-xs uppercase tracking-[0.3em] mb-4">Кейсы клиентов</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">Результаты внедрения</h2>
          <p className="font-space-mono text-gray-400 max-w-2xl mx-auto">
            Реальные данные трёх крупнейших металлургических предприятий России
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-2 justify-center mb-12">
          {cases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className={`group relative px-6 py-4 font-orbitron text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                active === i
                  ? "bg-red-600 border-red-500 text-white"
                  : "bg-transparent border-red-500/20 text-gray-400 hover:border-red-500/50 hover:text-white"
              }`}
            >
              <span className="block">{c.label}</span>
              <span className={`block font-space-mono text-xs font-normal normal-case tracking-normal mt-0.5 ${active === i ? "text-red-200" : "text-gray-600 group-hover:text-gray-400"}`}>
                {c.short}
              </span>
              {active === i && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-600" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div key={active} className="animate-in fade-in duration-300">

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-red-500/10 mb-10">
            {c.metrics.map((m, i) => (
              <div key={i} className="bg-black/80 p-6 text-center">
                <div className="font-orbitron text-2xl md:text-3xl font-black text-red-500 mb-2">{m.value}</div>
                <div className="font-space-mono text-xs text-gray-400 uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Before / After */}
            <div>
              <h3 className="font-orbitron text-lg font-bold text-white mb-6">Вызовы и решения</h3>
              <div className="space-y-3">
                {c.beforeAfter.map((item, i) => (
                  <div key={i} className="border border-red-500/20 bg-black/60 p-4 hover:border-red-500/40 transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon} size={13} className="text-red-500" />
                      </div>
                      <span className="font-orbitron text-xs font-bold text-white uppercase tracking-wide">{item.label}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-red-950/20 rounded p-2 border border-red-500/10">
                        <p className="font-space-mono text-xs text-red-400 mb-1">До</p>
                        <p className="font-space-mono text-xs text-gray-300 leading-relaxed">{item.before}</p>
                      </div>
                      <div className="bg-green-950/20 rounded p-2 border border-green-500/10">
                        <p className="font-space-mono text-xs text-green-400 mb-1">После</p>
                        <p className="font-space-mono text-xs text-gray-300 leading-relaxed">{item.after}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline + Quote */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-orbitron text-lg font-bold text-white mb-6">Ход внедрения</h3>
                <div className="relative pl-6 border-l border-red-500/20 space-y-4">
                  {c.timeline.map((step, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-red-500 border border-red-300" />
                      <span className="font-space-mono text-xs text-red-500 uppercase tracking-widest block mb-0.5">{step.phase}</span>
                      <h4 className="font-orbitron text-xs font-bold text-white mb-1">{step.title}</h4>
                      <p className="font-space-mono text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="border border-red-500/30 bg-red-950/10 p-6 relative mt-2">
                <div className="absolute -top-3 left-5 bg-zinc-950 px-2">
                  <Icon name="Quote" size={18} className="text-red-500" />
                </div>
                <p className="font-space-mono text-gray-200 text-sm leading-relaxed italic mb-4">{c.quote}</p>
                <p className="font-orbitron text-white text-sm font-bold">{c.author}</p>
                <p className="font-space-mono text-red-400 text-xs">{c.role}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
