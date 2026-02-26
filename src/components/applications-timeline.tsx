import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Доменное и сталеплавильное производство",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Контроль рисков в наиболее опасных переделах металлургического цикла. Анализ тепловых режимов,
            давления газов, состояния футеровки и критического оборудования в режиме реального времени.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Мониторинг состояния доменных печей и конвертеров
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Контроль газовой безопасности и утечек CO/CO₂
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Прогнозирование прорывов металла и шлака
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Прокатное и отделочное производство",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Управление рисками механических повреждений, пожаробезопасности и охраны труда на прокатных
            станах, в цехах термообработки и отделки металлопроката.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Диагностика валков, подшипников и приводного оборудования
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Контроль соблюдения технологических регламентов
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Мониторинг пожарных и экологических рисков
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Экологические и регуляторные риски",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Автоматическое отслеживание экологических показателей, соответствия лицензионным требованиям
            и предупреждение нарушений нормативов выбросов до наступления штрафных санкций.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Мониторинг выбросов и соответствия НДТ
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Контроль лицензионных условий и Ростехнадзора
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Автоматическая отчётность для регуляторов
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Области применения</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            MetalRisk AI охватывает все переделы металлургического производства — от сырья до готовой продукции,
            обеспечивая комплексную защиту активов и персонала.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
