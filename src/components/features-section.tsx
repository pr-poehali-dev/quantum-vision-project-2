import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Предиктивный анализ рисков",
    description: "ИИ-модели выявляют потенциальные угрозы на производстве до их возникновения — сокращение аварийности до 70%.",
    icon: "brain",
    badge: "ИИ",
  },
  {
    title: "Соответствие нормативам",
    description: "Автоматический контроль соответствия требованиям Ростехнадзора, ГОСТ и промышленным стандартам безопасности.",
    icon: "lock",
    badge: "Нормативы",
  },
  {
    title: "Мониторинг в реальном времени",
    description: "Непрерывный анализ 500+ параметров производства: температура, давление, износ оборудования, экологические показатели.",
    icon: "globe",
    badge: "Real-time",
  },
  {
    title: "Прогнозирование отказов",
    description: "ML-алгоритмы предсказывают выход оборудования из строя за 14-30 дней, снижая незапланированные простои.",
    icon: "zap",
    badge: "Предиктив",
  },
  {
    title: "Интеграция с АСУ ТП",
    description: "Бесшовное подключение к существующим системам автоматизации: SCADA, DCS, MES без остановки производства.",
    icon: "link",
    badge: "Интеграция",
  },
  {
    title: "Аналитика инцидентов",
    description: "Автоматическое расследование причин инцидентов, формирование отчётов и рекомендаций для устранения рисков.",
    icon: "target",
    badge: "Аналитика",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Возможности платформы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Комплексный риск-анализ для металлургических предприятий на базе искусственного интеллекта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
