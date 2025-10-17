import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { OrderServiceModal } from '../../components/OrderServiceModal';
import { useNavigate } from 'react-router-dom';

const periodicSchedule = [
  {
    category: 'M1 (Легкові авто)',
    commercial: 'Кожні 2 роки',
    taxi: 'Кожні 12 місяців',
    price: '350-450 грн'
  },
  {
    category: 'M2/M3 (Автобуси)',
    commercial: 'Кожні 6 місяців',
    taxi: 'Кожні 6 місяців',
    price: '550-650 грн'
  },
  {
    category: 'N1 (Вантажні до 3,5т)',
    commercial: 'Кожні 2 роки',
    taxi: 'Кожні 12 місяців',
    price: '450-550 грн'
  },
  {
    category: 'N2/N3 (Вантажні понад 3,5т)',
    commercial: 'Кожні 6 місяців',
    taxi: 'Кожні 6 місяців',
    price: '650-750 грн'
  },
  {
    category: 'O1/O2 (Причепи до 3,5т)',
    commercial: 'Кожні 2 роки',
    taxi: 'Кожні 12 місяців',
    price: '300-400 грн'
  },
  {
    category: 'O3/O4 (Причепи понад 3,5т)',
    commercial: 'Кожні 6 місяців',
    taxi: 'Кожні 6 місяців',
    price: '500-600 грн'
  }
];

export function ServicePeriodicPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7F7F7] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#FFD400] text-[#111111] rounded-full px-6 py-3 text-lg font-semibold mb-6">
            🔄 Техогляд
          </div>
          <h1 className="text-[#111111] font-semibold text-4xl lg:text-5xl mb-6">
            Періодичний техогляд
          </h1>
          <p className="text-[#111111] text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Регулярна перевірка технічного стану транспортних засобів для підтримання їх експлуатаційної придатності та безпеки
          </p>
        </div>

        {/* Основна інформація */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-white rounded-2xl p-8 shadow-lg border-0">
            <h2 className="text-[#111111] font-semibold text-2xl mb-6">Коли потрібен техогляд?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  <strong>Комерційні перевезення:</strong> таксі, вантажоперевезення, пасажирські перевезення
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  <strong>Автобуси:</strong> всі види пасажирських перевезень
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  <strong>Вантажні ТЗ:</strong> понад 3,5 тонни незалежно від використання
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  <strong>Небезпечні вантажі:</strong> КТЗ ADR кожні 6 місяців
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-white rounded-2xl p-8 shadow-lg border-0">
            <h2 className="text-[#111111] font-semibold text-2xl mb-6">Переваги регулярного техогляду</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Дозвіл на комерційну експлуатацію ТЗ
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Виявлення проблем на ранній стадії
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Підтримання безпеки дорожнього руху
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Економія на дорогих ремонтах у майбутньому
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Графік техоглядів */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6">Графік проходження техоглядів</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 pr-6 text-[#111111] font-semibold">Категорія ТЗ</th>
                  <th className="text-left py-4 pr-6 text-[#111111] font-semibold">Особисте використання</th>
                  <th className="text-left py-4 pr-6 text-[#111111] font-semibold">Комерційне використання</th>
                  <th className="text-left py-4 text-[#111111] font-semibold">Вартість</th>
                </tr>
              </thead>
              <tbody>
                {periodicSchedule.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 pr-6 text-[#111111] font-semibold">{item.category}</td>
                    <td className="py-4 pr-6 text-[#111111]">{item.commercial}</td>
                    <td className="py-4 pr-6 text-[#111111]">{item.taxi}</td>
                    <td className="py-4 text-[#FFD400] font-semibold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Процедура техогляду */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6">Процедура техогляду</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">1. Реєстрація</h3>
              <p className="text-[#111111]">Подача документів та оплата послуг</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">2. Діагностика</h3>
              <p className="text-[#111111]">Перевірка всіх систем на стендах</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">3. Аналіз</h3>
              <p className="text-[#111111]">Обробка результатів та висновки</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">4. Протокол</h3>
              <p className="text-[#111111]">Видача протоколу техогляду</p>
            </div>
          </div>
        </Card>

        {/* Необхідні документи */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6">Необхідні документи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-[#111111] font-semibold text-lg">Основні документи:</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Свідоцтво про реєстрацію ТЗ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Паспорт власника або довіреність</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Попередній протокол техогляду</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-[#111111] font-semibold text-lg">Для комерційного транспорту:</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Ліцензія на перевезення</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Страховий поліс ОСЦПВ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Медичні довідки водіїв</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Кнопки дій */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OrderServiceModal>
              <Button 
                className="bg-[#FFD400] text-[#111111] hover:bg-[#FFD400]/90 rounded-full px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-all font-semibold"
              >
                Записатися на техогляд
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