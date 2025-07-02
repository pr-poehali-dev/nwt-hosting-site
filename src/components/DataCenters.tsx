import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const datacenters = [
  {
    location: "Москва",
    country: "Россия",
    ping: "< 5ms",
    status: "online",
    servers: "150+",
    icon: "Server",
  },
  {
    location: "Санкт-Петербург",
    country: "Россия",
    ping: "< 8ms",
    status: "online",
    servers: "80+",
    icon: "Server",
  },
  {
    location: "Франкфурт",
    country: "Германия",
    ping: "< 25ms",
    status: "online",
    servers: "200+",
    icon: "Server",
  },
  {
    location: "Амстердам",
    country: "Нидерланды",
    ping: "< 30ms",
    status: "online",
    servers: "120+",
    icon: "Server",
  },
  {
    location: "Нью-Йорк",
    country: "США",
    ping: "< 15ms",
    status: "online",
    servers: "180+",
    icon: "Server",
  },
  {
    location: "Сингапур",
    country: "Сингапур",
    ping: "< 12ms",
    status: "online",
    servers: "90+",
    icon: "Server",
  },
];

export default function DataCenters() {
  return (
    <section
      id="datacenters"
      className="py-20 bg-gradient-to-b from-nwt-black to-nwt-dark-gray"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-nwt-orange/10 border border-nwt-orange/30 rounded-full px-4 py-2 mb-6">
            <Icon name="Globe" size={16} className="text-nwt-orange" />
            <span className="text-sm font-opensans text-nwt-orange">
              Глобальная сеть
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-rubik font-bold text-white mb-6">
            Наши дата-центры
          </h2>
          <p className="text-xl text-nwt-light-gray font-opensans max-w-3xl mx-auto">
            Размещайте свои проекты ближе к пользователям. Выберите из 6
            дата-центров по всему миру
          </p>
        </div>

        {/* World Map Visualization */}
        <div className="relative mb-16">
          <div className="bg-nwt-mid-gray/30 rounded-2xl p-8 backdrop-blur-sm border border-nwt-light-gray/10">
            {/* Decorative World Map */}
            <div className="relative h-64 md:h-80 overflow-hidden rounded-xl bg-gradient-to-r from-nwt-dark-gray to-nwt-mid-gray flex items-center justify-center">
              <div className="text-6xl md:text-8xl text-nwt-orange/20 font-rubik font-bold">
                🌍
              </div>

              {/* Floating Connection Lines */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-nwt-orange rounded-full animate-pulse"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${10 + Math.random() * 80}%`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Data Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {datacenters.map((dc, index) => (
            <Card
              key={dc.location}
              className="bg-nwt-mid-gray/50 backdrop-blur-sm border-nwt-light-gray/20 hover:border-nwt-orange/50 transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-nwt-orange/20 rounded-lg flex items-center justify-center">
                      <Icon
                        name={dc.icon as any}
                        size={24}
                        className="text-nwt-orange"
                      />
                    </div>
                    <div>
                      <h3 className="font-rubik font-bold text-white text-lg">
                        {dc.location}
                      </h3>
                      <p className="text-nwt-light-gray font-opensans text-sm">
                        {dc.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-opensans text-green-500">
                      Online
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-rubik font-bold text-nwt-orange mb-1">
                      {dc.ping}
                    </div>
                    <div className="text-nwt-light-gray font-opensans text-sm">
                      Пинг
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-rubik font-bold text-nwt-orange mb-1">
                      {dc.servers}
                    </div>
                    <div className="text-nwt-light-gray font-opensans text-sm">
                      Серверов
                    </div>
                  </div>
                </div>

                {/* Performance Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs font-opensans text-nwt-light-gray mb-2">
                    <span>Нагрузка</span>
                    <span>{25 + Math.floor(Math.random() * 50)}%</span>
                  </div>
                  <div className="h-2 bg-nwt-dark-gray rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-nwt-orange rounded-full transition-all duration-1000"
                      style={{
                        width: `${25 + Math.floor(Math.random() * 50)}%`,
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-rubik font-bold text-nwt-orange mb-2">
              6
            </div>
            <div className="text-nwt-light-gray font-opensans">
              Дата-центров
            </div>
          </div>
          <div>
            <div className="text-4xl font-rubik font-bold text-nwt-orange mb-2">
              820+
            </div>
            <div className="text-nwt-light-gray font-opensans">Серверов</div>
          </div>
          <div>
            <div className="text-4xl font-rubik font-bold text-nwt-orange mb-2">
              99.9%
            </div>
            <div className="text-nwt-light-gray font-opensans">Доступность</div>
          </div>
          <div>
            <div className="text-4xl font-rubik font-bold text-nwt-orange mb-2">
              &lt; 20ms
            </div>
            <div className="text-nwt-light-gray font-opensans">
              Средний пинг
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
