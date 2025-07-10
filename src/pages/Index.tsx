import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Droplet" className="text-blue-600" size={24} />
              <span className="text-xl font-bold text-gray-900">
                Жемчужина Абхазии
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#certificates"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Сертификаты
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-green-100 text-green-800 mb-4">
                Из источников Абхазии
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Жемчужина
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  {" "}
                  Абхазии
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Чистая мягкая минеральная столовая вода с pH 7.5, добытая из
                экологически чистых источников Абхазии. Природная гармония в
                каждой капле.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Где купить
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  <Icon name="Info" className="mr-2" size={20} />
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/files/de417371-8fa8-4438-b78f-691471e01e4c.jpg"
                  alt="Жемчужина Абхазии - бутылки разных объемов"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Почему выбирают нашу воду
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Каждая бутылка содержит природную силу абхазских гор и заботу о
              вашем здоровье
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Droplet" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">Идеальный pH 7.5</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Слабощелочная вода поддерживает естественный баланс организма
                  и улучшает самочувствие
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mountain" className="text-green-600" size={32} />
                </div>
                <CardTitle className="text-xl">Источник в Абхазии</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Добывается из экологически чистых горных источников,
                  защищенных от промышленного загрязнения
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Leaf" className="text-emerald-600" size={32} />
                </div>
                <CardTitle className="text-xl">Мягкая и чистая</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Природная мягкость и кристальная чистота делают воду идеальной
                  для ежедневного употребления
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-blue-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/img/0c4a0ad3-3a7f-497f-be0b-b7cedafd2198.jpg"
                  alt="Горный источник в Абхазии"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">О нас</h2>
              <p className="text-gray-600 mb-6 text-lg">
                "Жемчужина Абхазии" — это результат многолетней работы с
                природными источниками в экологически чистых районах Абхазии.
                Наша вода добывается из глубоких горных источников, где она
                проходит естественную фильтрацию через слои горных пород.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span className="text-gray-700">
                    Экологически чистый источник
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span className="text-gray-700">
                    Естественная минерализация
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span className="text-gray-700">
                    Строгий контроль качества
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span className="text-gray-700">
                    Сохранение природных свойств
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Сертификаты качества
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наша продукция соответствует всем международным стандартам
              качества и безопасности
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">Сертификат качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Подтверждает соответствие продукции государственным стандартам
                  качества
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-green-600" size={32} />
                </div>
                <CardTitle className="text-xl">
                  Экологическая безопасность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Гарантирует отсутствие вредных примесей и экологическую
                  чистоту продукта
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="FileCheck"
                    className="text-emerald-600"
                    size={32}
                  />
                </div>
                <CardTitle className="text-xl">Лабораторные анализы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Регулярные проверки химического состава и микробиологических
                  показателей
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-50 to-green-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-gray-600">
              Готовы ответить на любые вопросы о нашей продукции
            </p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Контактная информация
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" className="text-blue-600" size={20} />
                      <span className="text-gray-700">+7 (XXX) XXX-XX-XX</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" className="text-blue-600" size={20} />
                      <span className="text-gray-700">
                        info@pearl-abkhazia.com
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" className="text-blue-600" size={20} />
                      <span className="text-gray-700">
                        Абхазия, горный источник
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Время работы
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <div>Пн-Пт: 9:00 - 18:00</div>
                    <div>Сб: 10:00 - 16:00</div>
                    <div>Вс: выходной</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Droplet" className="text-blue-400" size={24} />
                <span className="text-xl font-bold">Жемчужина Абхазии</span>
              </div>
              <p className="text-gray-400">
                Чистая минеральная вода из горных источников Абхазии
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Минеральная вода</li>
                <li>Столовая вода</li>
                <li>Горная вода</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Сертификаты</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Качество</h4>
              <ul className="space-y-2 text-gray-400">
                <li>pH 7.5</li>
                <li>Экологически чистая</li>
                <li>Природная минерализация</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Жемчужина Абхазии. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
