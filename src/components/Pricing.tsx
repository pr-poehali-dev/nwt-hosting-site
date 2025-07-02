import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Starter",
    price: "599",
    period: "мес",
    description: "Идеально для небольших проектов",
    features: [
      "2 CPU ядра",
      "4 GB RAM",
      "50 GB SSD",
      "1 TB трафик",
      "Защита от DDoS",
      "SSL сертификат",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "1299",
    period: "мес",
    description: "Для растущего бизнеса",
    features: [
      "4 CPU ядра",
      "8 GB RAM",
      "100 GB SSD",
      "5 TB трафик",
      "Защита от DDoS Pro",
      "SSL сертификат",
      "Ежедневные бэкапы",
      "Приоритетная поддержка",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "2999",
    period: "мес",
    description: "Максимальная производительность",
    features: [
      "8 CPU ядер",
      "16 GB RAM",
      "200 GB SSD",
      "Безлимитный трафик",
      "Защита от DDoS Enterprise",
      "SSL сертификат",
      "Ежедневные бэкапы",
      "Выделенная поддержка 24/7",
      "Мониторинг сервера",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-nwt-dark-gray to-nwt-black"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-nwt-orange/10 border border-nwt-orange/30 rounded-full px-4 py-2 mb-6">
            <Icon name="DollarSign" size={16} className="text-nwt-orange" />
            <span className="text-sm font-opensans text-nwt-orange">
              Прозрачные цены
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-rubik font-bold text-white mb-6">
            Выберите свой план
          </h2>
          <p className="text-xl text-nwt-light-gray font-opensans max-w-2xl mx-auto">
            Гибкие тарифы для любых задач. Все планы включают защиту от DDoS и
            техподдержку 24/7
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative bg-nwt-mid-gray/50 backdrop-blur-sm border-nwt-light-gray/20 hover:border-nwt-orange/50 transition-all duration-300 transform hover:scale-105 ${
                plan.popular ? "ring-2 ring-nwt-orange" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-nwt-orange text-white px-4 py-2 rounded-full text-sm font-opensans font-semibold">
                    Популярный
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-rubik font-bold text-white mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-rubik font-bold text-nwt-orange">
                    ₽{plan.price}
                  </span>
                  <span className="text-nwt-light-gray font-opensans">
                    /{plan.period}
                  </span>
                </div>
                <p className="text-nwt-light-gray font-opensans">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-nwt-light-gray font-opensans"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-nwt-orange mr-3 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-opensans font-semibold py-3 rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-nwt-orange hover:bg-nwt-orange/90 text-white shadow-lg hover:shadow-nwt-orange/25"
                      : "bg-transparent border-2 border-nwt-orange text-nwt-orange hover:bg-nwt-orange hover:text-white"
                  }`}
                >
                  <Icon name="Zap" size={16} className="mr-2" />
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-nwt-light-gray font-opensans mb-4">
            Нужна индивидуальная конфигурация?
          </p>
          <Button
            variant="outline"
            className="border-nwt-orange text-nwt-orange hover:bg-nwt-orange hover:text-white font-opensans"
          >
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
}
