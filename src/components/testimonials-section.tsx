import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Громов",
    role: "Директор по промышленной безопасности, Северсталь",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "MetalRisk AI позволил сократить количество внеплановых остановок оборудования на 58%. Система предупреждает об отказах за 3 недели — это колоссальная экономия.",
  },
  {
    name: "Марина Светлова",
    role: "Главный инженер, НЛМК",
    avatar: "/professional-woman-scientist.png",
    content:
      "Интеграция с нашей SCADA прошла за 2 недели без остановки производства. Теперь все риски видны в одном дашборде — от газовой безопасности до экологии.",
  },
  {
    name: "Дмитрий Ковалёв",
    role: "Руководитель ОТ и ПБ, ММК",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "За первый год работы платформы снизили травматизм на 42% и прошли плановую проверку Ростехнадзора без единого предписания. Рекомендую.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют лидеры отрасли</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят руководители ведущих металлургических предприятий России
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
