import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как быстро внедряется платформа?",
      answer:
        "Базовое внедрение занимает от 2 до 6 недель в зависимости от масштаба предприятия. Мы подключаемся к существующим системам (SCADA, DCS, ERP) без остановки производства. Первые результаты и риск-отчёты вы видите уже в первую неделю.",
    },
    {
      question: "Какие системы поддерживает MetalRisk AI?",
      answer:
        "Платформа интегрируется с ведущими SCADA-системами (Wonderware, Siemens, ABB), DCS, MES, а также с промышленными датчиками через OPC-UA и Modbus. Поддерживается подключение к 1С, SAP и другим ERP-системам для управленческой отчётности.",
    },
    {
      question: "Как обеспечивается безопасность данных предприятия?",
      answer:
        "Платформа разворачивается в защищённом контуре предприятия (on-premise) или в выделенном облаке с соблюдением всех требований ФЗ-152 и отраслевых стандартов. Данные производства не передаются третьим сторонам. Система сертифицирована по ГОСТ Р ИСО/МЭК 27001.",
    },
    {
      question: "Насколько точны предсказания отказов оборудования?",
      answer:
        "Точность предиктивных моделей составляет 87–94% в зависимости от типа оборудования и объёма накопленной истории данных. Модели обучаются на специфике вашего производства и улучшаются с каждым месяцем эксплуатации.",
    },
    {
      question: "Нужно ли специальное обучение для работы с платформой?",
      answer:
        "Интерфейс разработан для инженеров и руководителей без специальных IT-знаний. Мы проводим обучение для всех групп пользователей (операторы, инженеры, ОТиПБ, менеджмент). Занимает 1-2 дня. Техподдержка работает 24/7.",
    },
    {
      question: "Каков возврат инвестиций (ROI)?",
      answer:
        "По данным наших клиентов, средний ROI составляет 340% за первый год. Основные статьи экономии: сокращение простоев оборудования (−55%), снижение расходов на ремонты (−30%), отсутствие штрафов регуляторов и страховая экономия за счёт снижения рисков.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о внедрении, интеграции и работе платформы MetalRisk AI.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
