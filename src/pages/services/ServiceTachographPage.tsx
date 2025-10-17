import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { OrderServiceModal } from '../../components/OrderServiceModal';
import { useNavigate } from 'react-router-dom';

const tachographServices = [
  {
    name: 'Калібровка цифрового тахографа',
    description: 'Перевірка та налаштування цифрового тахографа згідно з вимогами ЄС',
    duration: '2-4 години',
    price: '1500-2500 грн',
    features: ['Перевірка точності', 'Налаштування параметрів', 'Видача сертифіката'],
    icon: '📱'
  },
  {
    name: 'Калібровка аналогового тахографа',
    description: 'Налаштування та перевірка аналогового тахографа',
    duration: '1-2 години',
    price: '800-1200 грн',
    features: ['Механічне налаштування', 'Перевірка швидкості', 'Тестування запису'],
    icon: '⏰'
  },
  {
    name: 'Встановлення тахографа',
    description: 'Професійне встановлення тахографа на комерційний транспорт',
    duration: '4-6 годин',
    price: '3000-5000 грн',
    features: ['Монтаж обладнання', 'Підключення', 'Калібровка', 'Сертифікація'],
    icon: '🔧'
  },
  {
    name: 'Технічне обслуговування',
    description: 'Регулярне ТО тахографів для підтримання роботи',
    duration: '1-3 години',
    price: '600-1000 грн',
    features: ['Діагностика', 'Чищення', 'Перевірка функцій', 'Оновлення ПЗ'],
    icon: '🛠️'
  }
];

const tachographTypes = [
  {
    type: 'VDO DTCO 1381',
    manufacturer: 'Continental',
    features: ['DSRC комунікація', 'GPS модуль', 'Широкий дисплей'],
    price: 'від 15000 грн'
  },
  {
    type: 'SE5000',
    manufacturer: 'Stoneridge',
    features: ['Компактний дизайн', 'Проста установка', 'Надійність'],
    price: 'від 12000 грн'
  },
  {
    type: 'EFAS',
    manufacturer: 'Actia',
    features: ['Французька якість', 'Інтуїтивний інтерфейс', 'Довга гарантія'],
    price: 'від 18000 грн'
  }
];

const calibrationProcess = [
  {
    step: '1',
    title: 'Діагностика',
    description: 'Попередня перевірка стану тахографа',
    icon: '🔍'
  },
  {
    step: '2',
    title: 'Демонтаж',
    description: 'Зняття тахографа для калібровки',
    icon: '🔧'
  },
  {
    step: '3',
    title: 'Калібровка',
    description: 'Налаштування на спеціальному стенді',
    icon: '⚙️'
  },
  {
    step: '4',
    title: 'Встановлення',
    description: 'Монтаж відкаліброваного обладнання',
    icon: '🔨'
  },
  {
    step: '5',
    title: 'Сертифікація',
    description: 'Видача сертифіката калібровки',
    icon: '📋'
  }
];

const requirements = [
  {
    category: 'Вантажні ТЗ',
    condition: 'Повна маса понад 3,5 тонни',
    requirement: 'Обов\'язковий цифровий тахограф'
  },
  {
    category: 'Пасажирські ТЗ',
    condition: 'Понад 9 місць для сидіння',
    requirement: 'Обов\'язковий цифровий тахограф'
  },
  {
    category: 'Комерційні перевезення',
    condition: 'Міжнародні рейси',
    requirement: 'Сертифікований ЄС тахограф'
  },
  {
    category: 'Міські перевезення',
    condition: 'Пасажирський транспорт',
    requirement: 'Відповідно до місцевих вимог'
  }
];

export function ServiceTachographPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7F7F7] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#FFD400] text-[#111111] rounded-full px-6 py-3 text-lg font-semibold mb-6">
            📱 Тахографи
          </div>
          <h1 className="text-[#111111] font-semibold text-4xl lg:text-5xl mb-6">
            Калібровка тахографів
          </h1>
          <p className="text-[#111111] text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Професійна калібровка, встановлення та обслуговування тахографів для комерційного транспорту
          </p>
        </div>

        {/* Що таке тахограф */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-white rounded-2xl p-8 shadow-lg border-0">
            <h2 className="text-[#111111] font-semibold text-2xl mb-6">Що таке тахограф?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Пристрій для контролю режиму праці та відпочинку водіїв
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Реєструє швидкість, пробіг, час руху та зупинок
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Обов'язковий для комерційного транспорту понад 3,5т
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Захищає права водіїв та безпеку на дорогах
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-white rounded-2xl p-8 shadow-lg border-0">
            <h2 className="text-[#111111] font-semibold text-2xl mb-6">Навіщо потрібна калібровка?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Забезпечення точності вимірювань
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Відповідність європейським стандартам
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Уникнення штрафів та санкцій
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Можливість міжнародних перевезень
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Послуги калібровки */}
        <div className="mb-16">
          <h2 className="text-[#111111] font-semibold text-3xl lg:text-4xl text-center mb-12">
            Наші послуги
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tachographServices.map((service, index) => (
              <Card key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#111111] font-semibold text-xl mb-2">{service.name}</h3>
                    <p className="text-[#111111] leading-relaxed">{service.description}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-gray-600">Тривалість: </span>
                    <span className="text-[#111111] font-semibold">{service.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Вартість: </span>
                    <span className="text-[#FFD400] font-semibold text-lg">{service.price}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-[#111111] font-semibold mb-3">Включено:</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-[#111111]">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <OrderServiceModal>
                  <Button 
                    className="w-full bg-[#FFD400] text-[#111111] hover:bg-[#FFD400]/90 rounded-full py-3 font-semibold"
                  >
                    Замовити послугу
                  </Button>
                </OrderServiceModal>
              </Card>
            ))}
          </div>
        </div>

        {/* Процедура калібровки */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-8 text-center">Процедура калібровки</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {calibrationProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">{process.icon}</span>
                </div>
                <div className="mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-[#111111] text-white rounded-full font-semibold">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-[#111111] font-semibold text-lg mb-2">{process.title}</h3>
                <p className="text-[#111111] text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Типи тахографів */}
        <div className="mb-16">
          <h2 className="text-[#111111] font-semibold text-3xl lg:text-4xl text-center mb-12">
            Типи тахографів, з якими працюємо
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tachographTypes.map((tachograph, index) => (
              <Card key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg border-0">
                <h3 className="text-[#111111] font-semibold text-xl mb-3">{tachograph.type}</h3>
                <p className="text-[#FFD400] font-semibold mb-4">{tachograph.manufacturer}</p>
                <div className="space-y-2 mb-6">
                  {tachograph.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-[#111111] text-left">{feature}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[#111111] font-semibold text-lg">{tachograph.price}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Вимоги до встановлення */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6">Вимоги до встановлення тахографів</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 pr-6 text-[#111111] font-semibold">Категорія ТЗ</th>
                  <th className="text-left py-4 pr-6 text-[#111111] font-semibold">Умови</th>
                  <th className="text-left py-4 text-[#111111] font-semibold">Вимоги</th>
                </tr>
              </thead>
              <tbody>
                {requirements.map((req, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 pr-6 text-[#111111] font-semibold">{req.category}</td>
                    <td className="py-4 pr-6 text-[#111111]">{req.condition}</td>
                    <td className="py-4 text-[#111111]">{req.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Необхідні документи */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6">Необхідні документи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-[#111111] font-semibold text-lg">Для калібровки:</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Свідоцтво про реєстрацію ТЗ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Паспорт власника</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Попередній сертифікат калібровки</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-[#111111] font-semibold text-lg">Для встановлення:</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Документи власника ТЗ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Технічний паспорт ТЗ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Сертифікат відповідності тахографа</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Важлива інформація */}
        <Card className="bg-yellow-50 border-l-4 border-[#FFD400] rounded-2xl p-8 mb-12">
          <h2 className="text-[#111111] font-semibold text-xl mb-4">Важлива інформація</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-[#111111]">
                <strong>📅 Періодичність:</strong> Калібровка потрібна кожні 2 роки або після ремонту ТЗ.
              </p>
              <p className="text-[#111111]">
                <strong>🔒 Пломбування:</strong> Після калібровки тахограф опломбовується.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-[#111111]">
                <strong>⚠️ Штрафи:</strong> За неправильну роботу тахографа штраф від 17000 грн.
              </p>
              <p className="text-[#111111]">
                <strong>🌍 Міжнародні перевезення:</strong> Обов'язково для роботи в ЄС.
              </p>
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
                Замовити калібровку
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