import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Сарафан "Русская краса"',
      price: '15 900 ₽',
      image: '/img/4419efa2-15e9-43fb-9371-16609abd28a8.jpg',
      category: 'Платья'
    },
    {
      id: 2,
      name: 'Кокошник "Царевна"',
      price: '8 500 ₽',
      image: '/img/5e861313-6797-400c-9f45-364849f82814.jpg',
      category: 'Аксессуары'
    },
    {
      id: 3,
      name: 'Матрёшка "Золотая"',
      price: '3 200 ₽',
      image: '/img/e0db6c26-8727-4a62-accd-3546742aa2ee.jpg',
      category: 'Сувениры'
    }
  ];

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'catalog', label: 'Каталог', icon: 'Grid3X3' },
    { id: 'womens', label: 'Женское', icon: 'Shirt' },
    { id: 'delivery', label: 'Доставка', icon: 'Truck' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' },
    { id: 'about', label: 'О бренде', icon: 'Info' }
  ];

  const renderContent = () => {
    switch (currentSection) {
      case 'home':
        return (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-russian-brown to-russian-red text-white py-20 px-6 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-20 h-20 border-4 border-russian-gold rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-russian-gold rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-russian-gold rounded-full"></div>
              </div>
              <div className="relative max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-decorative font-bold mb-6 animate-fade-in">
                  🪆 Русская Одёжда 🪆
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Традиционная русская одежда с современным комфортом
                </p>
                <Button size="lg" className="bg-russian-gold hover:bg-yellow-500 text-russian-brown font-bold px-8 py-6 text-lg">
                  Смотреть каталог
                </Button>
              </div>
            </section>

            {/* Featured Products */}
            <section>
              <h2 className="text-3xl font-decorative font-bold text-russian-brown text-center mb-8">
                🌟 Популярные товары
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-russian-gold/20">
                    <CardContent className="p-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <Badge className="mb-2 bg-russian-green text-white">
                          {product.category}
                        </Badge>
                        <h3 className="font-bold text-lg text-russian-brown mb-2">
                          {product.name}
                        </h3>
                        <p className="text-2xl font-bold text-russian-red mb-4">
                          {product.price}
                        </p>
                        <Button className="w-full bg-russian-brown hover:bg-amber-900 text-white">
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* About Section */}
            <section className="bg-russian-cream p-8 rounded-2xl">
              <h2 className="text-3xl font-decorative font-bold text-russian-brown text-center mb-6">
                🎨 О нашем бренде
              </h2>
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <p className="text-lg text-russian-brown">
                  Мы создаём современную одежду, вдохновлённую традициями русского народного костюма. 
                  Каждая вещь — это сочетание вековых традиций с комфортом современной жизни.
                </p>
                <p className="text-lg text-russian-brown">
                  Наши мастера используют натуральные материалы и традиционные техники шитья, 
                  чтобы каждое изделие стало настоящим произведением искусства.
                </p>
              </div>
            </section>
          </div>
        );

      case 'catalog':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-decorative font-bold text-russian-brown text-center">
              📦 Каталог товаров
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.concat(products).map((product, index) => (
                <Card key={`${product.id}-${index}`} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-russian-gold/20">
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <Badge className="mb-2 bg-russian-green text-white">
                        {product.category}
                      </Badge>
                      <h3 className="font-bold text-lg text-russian-brown mb-2">
                        {product.name}
                      </h3>
                      <p className="text-xl font-bold text-russian-red mb-4">
                        {product.price}
                      </p>
                      <Button className="w-full bg-russian-brown hover:bg-amber-900 text-white">
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'womens':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-decorative font-bold text-russian-brown text-center">
              👗 Женская коллекция
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-russian-gold/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-russian-brown mb-4">Сарафаны</h3>
                  <p className="text-russian-brown mb-4">
                    Традиционные русские сарафаны с современным кроем и удобной посадкой.
                  </p>
                  <Button className="bg-russian-green hover:bg-green-700 text-white">
                    Смотреть все
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-russian-gold/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-russian-brown mb-4">Кокошники</h3>
                  <p className="text-russian-brown mb-4">
                    Изысканные головные уборы с золотой вышивкой и жемчугом.
                  </p>
                  <Button className="bg-russian-green hover:bg-green-700 text-white">
                    Смотреть все
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'delivery':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-decorative font-bold text-russian-brown text-center">
              🚚 Доставка и оплата
            </h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <Card className="border-2 border-russian-gold/20">
                <CardHeader>
                  <CardTitle className="text-russian-brown flex items-center gap-2">
                    <Icon name="Truck" size={24} />
                    Способы доставки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Курьерская доставка по Москве</span>
                    <span className="font-bold">500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Доставка по России (Почта России)</span>
                    <span className="font-bold">300 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Самовывоз</span>
                    <span className="font-bold text-russian-green">Бесплатно</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-russian-gold/20">
                <CardHeader>
                  <CardTitle className="text-russian-brown flex items-center gap-2">
                    <Icon name="CreditCard" size={24} />
                    Способы оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Банковские карты (Visa, MasterCard, МИР)</p>
                  <p>• Наличными при получении</p>
                  <p>• Банковский перевод</p>
                  <p>• Электронные кошельки</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'contacts':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-decorative font-bold text-russian-brown text-center">
              📞 Контакты
            </h2>
            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-russian-gold/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={24} className="text-russian-green" />
                    <span className="text-lg">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={24} className="text-russian-green" />
                    <span className="text-lg">info@russkaya-odezhda.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={24} className="text-russian-green" />
                    <span className="text-lg">г. Москва, ул. Арбат, д. 15</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={24} className="text-russian-green" />
                    <span className="text-lg">Пн-Пт: 10:00-19:00, Сб-Вс: 11:00-17:00</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-decorative font-bold text-russian-brown text-center">
              🏛️ О нашем бренде
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-2 border-russian-gold/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-russian-brown mb-4">Наша история</h3>
                  <p className="text-lg text-russian-brown mb-4">
                    "Русская Одёжда" — это семейное предприятие, которое было основано в 2010 году. 
                    Мы начали с маленькой мастерской и мечты возродить интерес к традиционному русскому костюму.
                  </p>
                  <p className="text-lg text-russian-brown">
                    Сегодня мы — признанный бренд, который создаёт одежду для тех, кто ценит красоту, 
                    качество и культурное наследие России.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-russian-gold/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-russian-brown mb-4">Наши ценности</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-russian-green mb-2">🎨 Традиции</h4>
                      <p>Сохранение и развитие традиций русского народного костюма</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-russian-green mb-2">✨ Качество</h4>
                      <p>Использование только натуральных материалов и ручной работы</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-russian-green mb-2">🌿 Экологичность</h4>
                      <p>Забота об окружающей среде и устойчивое производство</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-russian-green mb-2">❤️ Индивидуальность</h4>
                      <p>Каждое изделие уникально и создано с душой</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-russian-cream to-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🪆</div>
              <h1 className="text-2xl font-decorative font-bold text-russian-brown">
                Русская Одёжда
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    currentSection === item.id
                      ? 'bg-russian-brown text-white'
                      : 'text-russian-brown hover:bg-russian-gold/20'
                  }`}
                >
                  <Icon name={item.icon as any} size={20} />
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentSection(item.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                        currentSection === item.id
                          ? 'bg-russian-brown text-white'
                          : 'text-russian-brown hover:bg-russian-gold/20'
                      }`}
                    >
                      <Icon name={item.icon as any} size={24} />
                      {item.label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <Button className="hidden md:flex bg-russian-green hover:bg-green-700 text-white">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-russian-brown text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-decorative font-bold mb-4 flex items-center gap-2">
                <span>🪆</span> Русская Одёжда
              </h3>
              <p className="opacity-90">
                Традиционная русская одежда с современным комфортом. 
                Сохраняем наследие, создаём будущее.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 opacity-90">
                <li>• Каталог товаров</li>
                <li>• О доставке</li>
                <li>• Размерная сетка</li>
                <li>• Уход за изделиями</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 opacity-90">
                <p>📞 +7 (495) 123-45-67</p>
                <p>✉️ info@russkaya-odezhda.ru</p>
                <p>📍 г. Москва, ул. Арбат, д. 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-75">
            <p>&copy; 2024 Русская Одёжда. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;