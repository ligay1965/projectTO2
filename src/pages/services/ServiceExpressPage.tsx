import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { OrderServiceModal } from '../../components/OrderServiceModal';
import { useNavigate } from 'react-router-dom';

const expressDiagnostics = [
  {
    name: 'Експрес-перевірка гальм',
    description: 'Швидка перевірка ефективності гальмівної системи',
    time: '10-15 хв',
    price: '150 грн',
    icon: '🛑'
  },
  {
    name: 'Діагностика світла',
    description: 'Перевірка всіх зовнішніх світлових приладів',
    time: '5-10 хв',
    price: '100 грн',
    icon: '💡'
  },
  {
    name: 'Перевірка кермового управління',
    description: 'Діагностика люфту керма та схождення коліс',
    time: '15-20 хв',
    price: '200 грн',
    icon: '🚗'
  },
  {
    name: 'Аналіз викидів',
    description: 'Експрес-перевірка димності відпрацьованих газів',
    time: '5-10 хв',
    price: '120 грн',
    icon: '💨'
  },
  {
    name: 'Комплексна експрес-діагностика',
    description: 'Повна перевірка готовності до техогляду',
    time: '30-45 хв',
    price: '350 грн',
    icon: '🔍'
  }
];

const benefits = [
  {
    title: 'Швидко',
    description: 'Результат за 5-45 хвилин залежно від типу перевірки',
    icon: '⚡'
  },
  {
    title: 'Без черг',
    description: 'Експрес-діагностика проводиться без попереднього запису',
    icon: '🚫'
  },
  {
    title: 'Економія часу',
    description: 'Виявіть проблеми до основного техогляду',
    icon: '⏰'
  },
  {
    title: 'Консультації',
    description: 'Отримайте рекомендації щодо усунення недоліків',
    icon: '💬'
  }
];

export function ServiceExpressPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7F7F7] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#FFD400] text-[#111111] rounded-full px-6 py-3 text-lg font-semibold mb-6">
            ⚡ Експрес
          </div>
          <h1 className="text-[#111111] font-semibold text-4xl lg:text-5xl mb-6">
            Експрес-діагностика
          </h1>
          <p className="text-[#111111] text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Швидка перевірка основних систем безпеки вашого транспорту без черг та довгого очікування
          </p>
        </div>

        {/* Переваги */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border-0">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">{benefit.icon}</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-[#111111] leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Типи експрес-діагностики */}
        <div className="mb-16">
          <h2 className="text-[#111111] font-semibold text-3xl lg:text-4xl text-center mb-12">
            Типи експрес-діагностики
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expressDiagnostics.map((diagnostic, index) => (
              <Card key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">{diagnostic.icon}</span>
                  </div>
                  <h3 className="text-[#111111] font-semibold text-xl mb-3">{diagnostic.name}</h3>
                  <p className="text-[#111111] leading-relaxed mb-4">{diagnostic.description}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Час виконання:</span>
                    <span className="text-[#111111] font-semibold">{diagnostic.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Вартість:</span>
                    <span className="text-[#FFD400] font-semibold text-lg">{diagnostic.price}</span>
                  </div>
                </div>
                
                <OrderServiceModal>
                  <Button 
                    className="w-full mt-6 bg-[#FFD400] text-[#111111] hover:bg-[#FFD400]/90 rounded-full py-3 font-semibold"
                  >
                    Замовити
                  </Button>
                </OrderServiceModal>
              </Card>
            ))}
          </div>
        </div>

        {/* Коли потрібна експрес-діагностика */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6">Коли потрібна експрес-діагностика?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-[#111111] font-semibold text-lg">Перед техоглядом:</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Для впевненості у проходженні основного техогляду</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Виявлення проблем заздалегідь</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Економія часу на основному техогляді</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-[#111111] font-semibold text-lg">При підозрах на неспра...</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Погіршення ефективності гальм</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Проблеми зі світлом або сигналізацією</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Збільшення димності випускних газів</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Процедура експрес-діагностики */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6">Як проходить експрес-діагностика?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">1. Прибуття</h3>
              <p className="text-[#111111]">Приїжджайте без запису у робочі години</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">2. Оформлення</h3>
              <p className="text-[#111111]">Швидке оформлення та оплата послуги</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">3. Перевірка</h3>
              <p className="text-[#111111]">Швидка діагностика обраних систем</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">4. Результат</h3>
              <p className="text-[#111111]">Отримання результатів та рекомендацій</p>
            </div>
          </div>
        </Card>

        {/* Важлива інформація */}
        <Card className="bg-yellow-50 border-l-4 border-[#FFD400] rounded-2xl p-8 mb-12">
          <h2 className="text-[#111111] font-semibold text-xl mb-4">Важлива інформація</h2>
          <div className="space-y-3">
            <p className="text-[#111111]">
              <strong>⚠️ Увага:</strong> Експрес-діагностика не замінює повноцінний техогляд, а лише допомагає виявити очевидні проблеми.
            </p>
            <p className="text-[#111111]">
              <strong>📋 Документи:</strong> Для експрес-діагностики потрібні лише документи на ТЗ.
            </p>
            <p className="text-[#111111]">
              <strong>🕒 Графік:</strong> Експрес-діагностика доступна у всі робочі дні з 9:00 до 17:00.
            </p>
          </div>
        </Card>

        {/* Кнопки дій */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OrderServiceModal>
              <Button 
                className="bg-[#FFD400] text-[#111111] hover:bg-[#FFD400]/90 rounded-full px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-all font-semibold"
              >
                Замовити експрес-діагностику
              </Button>
            </OrderServiceModal>
            <Button 
              variant="outline"
              onClick={() => navigate('/')}
              className="border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white rounded-full px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              Повернутися на головну
            </Button>
          </div>
          <p className="text-gray-600">
            Або зателефонуйте нам: <span className="font-semibold text-[#111111]">+380 (93) 575-90-22</span>
          </p>
        </div>
      </div>
    </div>
  );
}