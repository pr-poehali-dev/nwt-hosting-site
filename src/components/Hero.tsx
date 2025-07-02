import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-nwt-black via-nwt-dark-gray to-nwt-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-nwt-orange/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute top-60 right-20 w-48 h-48 bg-nwt-orange/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-24 h-24 bg-nwt-orange/30 rounded-full blur-lg animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-nwt-orange rounded-lg flex items-center justify-center animate-pulse-glow">
            <Icon name="Zap" size={24} className="text-white" />
          </div>
          <span className="text-2xl font-rubik font-bold text-white">NWT</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#pricing"
            className="text-nwt-light-gray hover:text-nwt-orange transition-colors font-opensans"
          >
            Тарифы
          </a>
          <a
            href="#datacenters"
            className="text-nwt-light-gray hover:text-nwt-orange transition-colors font-opensans"
          >
            Дата-центры
          </a>
          <a
            href="#support"
            className="text-nwt-light-gray hover:text-nwt-orange transition-colors font-opensans"
          >
            Помощь
          </a>
          <Button className="bg-nwt-orange hover:bg-nwt-orange/90 text-white font-opensans">
            Личный кабинет
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden text-white">
          <Icon name="Menu" size={24} />
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-nwt-dark-gray/50 backdrop-blur-sm border border-nwt-orange/30 rounded-full px-4 py-2 mb-8">
            <Icon name="Shield" size={16} className="text-nwt-orange" />
            <span className="text-sm font-opensans text-nwt-light-gray">
              Защита от DDoS атак
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-rubik font-bold text-white mb-6 leading-tight">
            Надёжный хостинг
            <span className="block text-nwt-orange animate-pulse-glow">
              для профессионалов
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-nwt-light-gray font-opensans mb-12 max-w-3xl mx-auto leading-relaxed">
            Высокопроизводительные серверы с защитой от DDoS, 99.9% uptime и
            техподдержкой 24/7
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button
              size="lg"
              className="bg-nwt-orange hover:bg-nwt-orange/90 text-white font-opensans font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-nwt-orange/25 transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать сейчас
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-nwt-orange text-nwt-orange hover:bg-nwt-orange hover:text-white font-opensans font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-rubik font-bold text-nwt-orange mb-2">
                99.9%
              </div>
              <div className="text-nwt-light-gray font-opensans">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-rubik font-bold text-nwt-orange mb-2">
                24/7
              </div>
              <div className="text-nwt-light-gray font-opensans">Поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-rubik font-bold text-nwt-orange mb-2">
                5мин
              </div>
              <div className="text-nwt-light-gray font-opensans">
                Развертывание
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-nwt-orange" />
      </div>
    </section>
  );
}
