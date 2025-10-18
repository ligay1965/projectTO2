import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function ContactsPage() {
  const handleOrderService = () => {
    // Логіка відкриття модального вікна
    console.log('Open order service modal');
  };

  const handleRoute = () => {
    window.open('https://maps.google.com/?q=48.4830,35.0250+(ТОВ+Термотранс,+вул.+Верстова,+33,+Дніпро)', '_blank');
  };

  return (
    <div className="bg-[#F7F7F7] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-[#111111] font-semibold text-4xl lg:text-5xl mb-6">
            Контакти
          </h1>
          <p className="text-[#111111] text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Ми знаходимося у зручному місці Дніпра з легким доступом для всіх типів транспорту. 
            Зв'яжіться з нами для запису або консультації.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактна інформація */}
          <div className="space-y-8">
            <Card className="bg-white rounded-2xl p-8 shadow-lg border-0">
              <h2 className="text-[#111111] font-semibold text-2xl mb-6">Як нас знайти</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-[#111111] font-semibold text-lg mb-2 flex items-center">
                    📍 Адреса
                  </h3>
                  <p className="text-[#111111] text-lg">м. Дніпро, вул. Верстова, 33</p>
                </div>
                
                <div>
                  <h3 className="text-[#111111] font-semibold text-lg mb-2 flex items-center">
                    🕒 Графік роботи
                  </h3>
                  <div className="space-y-1 text-[#111111]">
                    <p>Понеділок – П'ятниця: 9:00–18:00</p>
                    <p>Субота: 9:00–15:00 (за записом)</p>
                    <p>Неділя: вихідний</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-[#111111] font-semibold text-lg mb-2 flex items-center">
                    📞 Телефони
                  </h3>
                  <div className="space-y-1 text-[#111111]">
                    <p>+380 (67) 123-45-67</p>
                    <p>+380 (93) 123-45-67</p>
                    <p>+380 (50) 123-45-67</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-[#111111] font-semibold text-lg mb-2 flex items-center">
                    ✉️ Email
                  </h3>
                  <p className="text-[#111111]">termotrans.ua@gmail.com</p>
                </div>
                
                <div className="bg-[#FFD400] rounded-lg p-4">
                  <h3 className="text-[#111111] font-semibold text-lg mb-2 flex items-center">
                    🚛 Важлива інформація
                  </h3>
                  <p className="text-[#111111] font-semibold">Висота воріт: 4,3 метри</p>
                  <p className="text-[#111111] text-sm mt-1">
                    Підходить для більшості вантажних автомобілів та автобусів
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  onClick={handleOrderService}
                  className="bg-[#FFD400] text-[#111111] hover:bg-[#FFD400]/90 rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Замовити послугу
                </Button>
                <Button 
                  onClick={handleRoute}
                  variant="outline"
                  className="border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Прокласти маршрут
                </Button>
              </div>
            </Card>
          </div>

          {/* Карта */}
          <Card className="bg-white rounded-2xl overflow-hidden shadow-lg border-0">
            <div className="h-full min-h-[500px] bg-gray-100 relative">
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
                    onClick={handleRoute}
                    className="bg-[#FFD400] text-[#111111] hover:bg-[#FFD400]/90 rounded-full px-6 py-2"
                  >
                    Відкрити в Google Maps
                  </Button>
                </div>
              </div>
              
              {/* Можна додати інтеграцію з Google Maps або іншим сервісом карт */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.123456!2d35.0250!3d48.4830!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe29c7e3b2c47%3A0x12345!2z0LLRg9C7LiDQktC10YDRgdGC0L7QstCwLCAzMywg0JTQvdGW0L_RgNC-LCDQsNC90LXQuNGA0L7QstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA0OTAwMA!5e0!3m2!1suk!2sua!4v1640995200000"
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

        {/* Додаткова інформація */}
        <Card className="bg-white rounded-2xl p-8 shadow-lg border-0 mt-12">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6">Додаткова інформація</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#111111] font-semibold text-lg mb-3">Як добратися</h3>
              <ul className="space-y-2 text-[#111111]">
                <li>• Громадським транспортом: автобуси №15, 27, 45</li>
                <li>• На автомобілі: є парковка для клієнтів</li>
                <li>• Поблизу зупинка "Верстова"</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[#111111] font-semibold text-lg mb-3">Рекомендації</h3>
              <ul className="space-y-2 text-[#111111]">
                <li>• Попередній запис прискорить обслуговування</li>
                <li>• Майте при собі документи на транспортний засіб</li>
                <li>• Оплата готівкою або карткою</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}