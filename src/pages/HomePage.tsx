import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { OrderServiceModal } from '../components/OrderServiceModal';
import { useNavigate } from 'react-router-dom';
import { Clock, DollarSign, CheckCircle, Zap, Shield, Award, FileCheck, MapPin } from 'lucide-react';

export function HomePage() {
  const navigate = useNavigate();

  const handleCategoryClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="bg-white">
      {/* Hero секція з жовтим градієнтом */}
      <section className="relative bg-gradient-to-br from-[#FFD400] via-[#FFC700] to-[#FFB800] py-20 lg:py-32 overflow-hidden">
        {/* Геометричний патерн */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#111111] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#111111] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Бейдж акредитації */}
          <div className="flex justify-center mb-6">
            <Badge className="bg-[#111111] text-[#FFD400] hover:bg-[#111111] px-4 py-2 rounded-full shadow-lg">
              <Award className="w-4 h-4 mr-2" />
              Акредитована лабораторія
            </Badge>
          </div>
          
          <h1 className="text-[#111111] text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 text-center max-w-5xl mx-auto">
            Техогляд у Дніпрі — акредитована випробувальна лабораторія
          </h1>
          
          <h2 className="text-[#111111]/80 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed mb-10 text-center">
            Повний технічний огляд усіх видів транспорту: легкових авто, автобусів, вантажівок та спецтехніки.
            Сертифікати, прозорі ціни, швидке обслуговування.
          </h2>
          
          {/* Ключові пункти */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center text-center hover:bg-white/30 transition-all">
              <div className="w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-[#FFD400]" />
              </div>
              <p className="text-[#111111] text-sm font-semibold">Акредитоване обладнання</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center text-center hover:bg-white/30 transition-all">
              <div className="w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-[#FFD400]" />
              </div>
              <p className="text-[#111111] text-sm font-semibold">30-60 хвилин</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center text-center hover:bg-white/30 transition-all">
              <div className="w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center mb-3">
                <FileCheck className="w-6 h-6 text-[#FFD400]" />
              </div>
              <p className="text-[#111111] text-sm font-semibold">Офіційні сертифікати</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center text-center hover:bg-white/30 transition-all">
              <div className="w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-[#FFD400]" />
              </div>
              <p className="text-[#111111] text-sm font-semibold">вул. Верстова, 33</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OrderServiceModal>
              <Button 
                className="bg-[#111111] text-[#FFD400] hover:bg-[#111111]/90 rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all font-semibold"
              >
                Замовити послугу
              </Button>
            </OrderServiceModal>
            <Button 
              variant="outline"
              onClick={() => handleCategoryClick('/about')}
              className="border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#FFD400] rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all font-semibold bg-white/50 backdrop-blur-sm"
            >
              Про компанію
            </Button>
          </div>
        </div>
        
        {/* Діагональний розділювач */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)' }}></div>
      </section>

      {/* Секція послуг */}
      <section className="relative py-20 bg-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-[#111111] font-semibold text-4xl lg:text-5xl mb-4">
                Наші послуги
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[#FFD400] to-[#FFB800] rounded-full mx-auto"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Обов'язковий технічний контроль */}
            <Card 
              className="bg-gradient-to-br from-white to-[#F7F7F7] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group border border-[#F7F7F7]"
              onClick={() => handleCategoryClick('/services/otk')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFD400] to-[#FFB800] rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-[#111111] font-semibold text-xl mb-4">
                  Обов'язковий технічний контроль
                </h3>
                <p className="text-[#111111]/70 leading-relaxed mb-6">
                  Проведення ОТК для всіх категорій транспортних засобів відповідно до державних стандартів
                </p>
                <div className="inline-flex items-center text-[#FFD400] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Детальніше →
                </div>
              </div>
            </Card>

            {/* МСТО */}
            <Card 
              className="bg-gradient-to-br from-white to-[#F7F7F7] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group border border-[#F7F7F7]"
              onClick={() => handleCategoryClick('/services/msto')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFD400] to-[#FFB800] rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-[#111111] font-semibold text-xl mb-4">
                  МСТО Міжнародний сертифікат технічного огляду
                </h3>
                <p className="text-[#111111]/70 leading-relaxed mb-6">
                  Міжнародний сертифікат технічного огляду для комерційного транспорту та міжнародних перевезень
                </p>
                <div className="inline-flex items-center text-[#FFD400] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Детальніше →
                </div>
              </div>
            </Card>

            {/* Страхування транспортних засобів */}
            <Card 
              className="bg-gradient-to-br from-white to-[#F7F7F7] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group border border-[#F7F7F7]"
              onClick={() => handleCategoryClick('/services/insurance')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFD400] to-[#FFB800] rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-[#111111] font-semibold text-xl mb-4">
                  Страхування транспортних засобів
                </h3>
                <p className="text-[#111111]/70 leading-relaxed mb-6">
                  ОСЦПВ, КАСКО та інші види страхування для повного захисту вашого транспорту
                </p>
                <div className="inline-flex items-center text-[#FFD400] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Детальніше →
                </div>
              </div>
            </Card>

            {/* Калібровка тахографів */}
            <Card 
              className="bg-gradient-to-br from-white to-[#F7F7F7] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group border border-[#F7F7F7]"
              onClick={() => handleCategoryClick('/services/tachograph')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFD400] to-[#FFB800] rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-[#111111] font-semibold text-xl mb-4">
                  Калібровка тахографів
                </h3>
                <p className="text-[#111111]/70 leading-relaxed mb-6">
                  Професійна калібровка та обслуговування цифрових і аналогових тахографів
                </p>
                <div className="inline-flex items-center text-[#FFD400] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Детальніше →
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Діагональний розділювач */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 0, 100% 50%, 100% 100%, 0 100%)' }}></div>
      </section>

      {/* Секція переваг */}
      <section className="relative py-20 bg-[#F7F7F7] overflow-hidden">
        {/* Геометричний патерн фон */}
        <div className="absolute inset-0 opacity-40">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-[#111111] font-semibold text-4xl lg:text-5xl mb-4">
                Чому обирають нас
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[#FFD400] to-[#FFB800] rounded-full mx-auto"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Швидкість */}
            <Card className="bg-[#E5E5E5] rounded-2xl p-8 text-center shadow-lg border-0 hover:shadow-2xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD400] to-[#FFB800] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-md">
                <Zap className="w-8 h-8 text-[#111111]" />
              </div>
              <h3 className="text-[#111111] font-semibold text-xl mb-3">Швидко</h3>
              <p className="text-[#111111]/70 leading-relaxed">
                Техогляд за 30-60 хвилин. Сучасне обладнання та налагоджені процеси
              </p>
            </Card>

            {/* Доступність */}
            <Card className="bg-[#E5E5E5] rounded-2xl p-8 text-center shadow-lg border-0 hover:shadow-2xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD400] to-[#FFB800] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-md">
                <DollarSign className="w-8 h-8 text-[#111111]" />
              </div>
              <h3 className="text-[#111111] font-semibold text-xl mb-3">Доступно</h3>
              <p className="text-[#111111]/70 leading-relaxed">
                Прозорі ціни без прихованих доплат. Всі тарифи фіксовані
              </p>
            </Card>

            {/* Зручність */}
            <Card className="bg-[#E5E5E5] rounded-2xl p-8 text-center shadow-lg border-0 hover:shadow-2xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD400] to-[#FFB800] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-md">
                <Clock className="w-8 h-8 text-[#111111]" />
              </div>
              <h3 className="text-[#111111] font-semibold text-xl mb-3">Зручно</h3>
              <p className="text-[#111111]/70 leading-relaxed">
                Запис онлайн або по телефону. Зручний графік роботи та розташування
              </p>
            </Card>

            {/* Якість */}
            <Card className="bg-[#E5E5E5] rounded-2xl p-8 text-center shadow-lg border-0 hover:shadow-2xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD400] to-[#FFB800] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-md">
                <CheckCircle className="w-8 h-8 text-[#111111]" />
              </div>
              <h3 className="text-[#111111] font-semibold text-xl mb-3">Якісно</h3>
              <p className="text-[#111111]/70 leading-relaxed">
                Акредитована лабораторія з сучасним обладнанням та досвідченими фахівцями
              </p>
            </Card>
          </div>
        </div>
        
        {/* Діагональний розділювач */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F7F7F7]" style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)' }}></div>
      </section>

      {/* Секція контактів */}
      <section id="contacts" className="relative py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-[#111111] font-semibold text-4xl lg:text-5xl mb-4">
                Контакти
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[#FFD400] to-[#FFB800] rounded-full mx-auto"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Контактна інформація */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-white to-[#F7F7F7] rounded-2xl p-8 shadow-xl border border-[#F7F7F7]">
                <h3 className="text-[#111111] font-semibold text-2xl mb-6">Наша лабораторія</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#111111] font-semibold text-lg mb-2 flex items-center">
                      📍 Адреса
                    </h4>
                    <p className="text-[#111111] text-lg">м. Дніпро, вул. Верстова, 33</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[#111111] font-semibold text-lg mb-2 flex items-center">
                      🕒 Графік роботи
                    </h4>
                    <div className="space-y-1 text-[#111111]">
                      <p>Понеділок – П'ятниця: 9:00–18:00</p>
                      <p>Субота: 9:00–15:00 (за записом)</p>
                      <p>Неділя: вихідний</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-[#111111] font-semibold text-lg mb-2 flex items-center">
                      📞 Телефони
                    </h4>
                    <div className="space-y-1 text-[#111111]">
                      <p>+380 (93) 575-90-22</p>
                      <p className="text-sm text-gray-600">Пн-Пт: 9:00-18:00, Сб: 9:00-15:00</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-[#111111] font-semibold text-lg mb-2 flex items-center">
                      ✉️ Email
                    </h4>
                    <p className="text-[#111111]">info@termotrans.com.ua</p>
                  </div>
                  
                  <div className="bg-[#FFD400] rounded-lg p-4">
                    <h4 className="text-[#111111] font-semibold text-lg mb-2 flex items-center">
                      🚛 Висота воріт
                    </h4>
                    <p className="text-red-600 font-bold text-lg">4,5 метри</p>
                    <p className="text-[#111111] text-sm mt-1">
                      Підходить для більшості вантажних ТЗ
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <OrderServiceModal>
                    <Button 
                      className="bg-[#FFD400] text-[#111111] hover:bg-[#FFD400]/90 rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      Замовити послугу
                    </Button>
                  </OrderServiceModal>
                  <Button 
                    variant="outline"
                    className="border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                    onClick={() => window.open('https://maps.app.goo.gl/392Nkbh5wrRjJ7is5', '_blank')}
                  >
                    Прокласти маршрут
                  </Button>
                </div>
              </Card>
            </div>

            {/* Карта */}
            <Card className="bg-white rounded-2xl overflow-hidden shadow-lg border-0">
              <div className="h-full min-h-[600px] bg-gray-100 relative">
                {/* Заглушка для карти */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <h3 className="text-[#111111] font-semibold text-xl mb-2">
                      Карта розташування
                    </h3>
                    <p className="text-[#111111] mb-4">
                      м. Дніпро, вул. Верстова, 33
                    </p>
                    <Button
                      onClick={() => window.open('https://maps.app.goo.gl/392Nkbh5wrRjJ7is5', '_blank')}
                      className="bg-[#FFD400] text-[#111111] hover:bg-[#FFD400]/90 rounded-full px-6 py-2"
                    >
                      Відкрити в Google Maps
                    </Button>
                  </div>
                </div>
                
                {/* Інтеграція з Google Maps */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.004061778901!2d35.014153!3d48.4948141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3143ec4f1e3%3A0x61c267bcc258ab73!2sVantazhne%20Sto%20Termotrans!5e0!3m2!1sru!2sua!4v1760693920764!5m2!1sru!2sua"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта розташування ТОВ Термотранс"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}