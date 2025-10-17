import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { OrderServiceModal } from '../../components/OrderServiceModal';
import { useNavigate } from 'react-router-dom';

const mstoServices = [
  {
    name: 'Базова МСТО',
    description: 'Стандартний пакет послуг МСТО для звичайних ТЗ',
    features: ['Діагностика основних систем', 'Перевірка документів', 'Оформлення результатів'],
    icon: '🔧'
  },
  {
    name: 'Розширена МСТО',
    description: 'Повний комплекс послуг МСТО з додатковими перевірками',
    features: ['Повна діагностика', 'Тестування екології', 'Перевірка безпеки', 'Детальний звіт'],
    icon: '🔍'
  },
  {
    name: 'МСТО для комерційного транспорту',
    description: 'Спеціалізована МСТО для вантажного та пасажирського транспорту',
    features: ['Професійна діагностика', 'Перевірка спеціального обладнання', 'Сертифікація'],
    icon: '🚛'
  },
  {
    name: 'Екстрена МСТО',
    description: 'Прискорена процедура МСТО в терміновому порядку',
    features: ['Пріоритетне обслуговування', 'Швидке оформлення', 'Цілодобово'],
    icon: '⚡'
  }
];

const mstoProcess = [
  {
    step: '1',
    title: 'Реєстрація',
    description: 'Подача документів та запис на МСТО',
    icon: '📋'
  },
  {
    step: '2',
    title: 'Попередня перевірка',
    description: 'Огляд документів та стану ТЗ',
    icon: '👁️'
  },
  {
    step: '3',
    title: 'Технічна діагностика',
    description: 'Повна перевірка всіх систем на стендах',
    icon: '🔧'
  },
  {
    step: '4',
    title: 'Аналіз результатів',
    description: 'Обробка даних та підготовка висновків',
    icon: '📊'
  },
  {
    step: '5',
    title: 'Оформлення документів',
    description: 'Видача сертифікату та протоколу МСТО',
    icon: '📄'
  }
];

const requirements = [
  {
    category: 'Документи власника',
    items: [
      'Паспорт громадянина України',
      'Довіреність (для представника)',
      'Документи про право власності'
    ]
  },
  {
    category: 'Документи на ТЗ',
    items: [
      'Свідоцтво про реєстрацію ТЗ',
      'Технічний паспорт',
      'Поліс ОСЦПВ'
    ]
  },
  {
    category: 'Технічні вимоги',
    items: [
      'Справний технічний стан',
      'Наявність усіх деталей',
      'Відсутність критичних несправностей'
    ]
  }
];

export function ServiceMSTOPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7F7F7] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#FFD400] text-[#111111] rounded-full px-6 py-3 text-lg font-semibold mb-6">
            🏢 МСТО
          </div>
          <h1 className="text-[#111111] font-semibold text-4xl lg:text-5xl mb-6">
            Міжнародний сертифікат технічного огляду
          </h1>
          <p className="text-[#111111] text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Повний комплекс послуг МСТО для транспортних засобів всіх категорій з видачею міжнародних сертифікатів
          </p>
        </div>

        {/* Що таке МСТО */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-white rounded-2xl p-8 shadow-lg border-0">
            <h2 className="text-[#111111] font-semibold text-2xl mb-6">Що таке МСТО?</h2>
            <div className="space-y-4">
              <p className="text-[#111111] leading-relaxed">
                Перевірка транспортних засобів регламентується Віденською угодою, прийнятою у 1997 році. 
                У ній визначені єдині умови для періодичного техогляду автомобілів та укладено договір 
                про взаємне визнання таких оглядів.
              </p>
              <p className="text-[#111111] leading-relaxed">
                Перевірка транспорту передбачає оцінку його безпеки та справності, можливості подальшої 
                експлуатації; перевірку кількості та складу відпрацьованих газів, а також рівня шуму.
              </p>
            </div>
          </Card>

          <Card className="bg-white rounded-2xl p-8 shadow-lg border-0">
            <h2 className="text-[#111111] font-semibold text-2xl mb-6">Переваги МСТО</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Міжнародне визнання сертифікатів
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Можливість роботи на європейському ринку
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Високий рівень безпеки та надійності
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Професійна діагностика на сучасному обладнанні
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Типи послуг МСТО */}
        <div className="mb-16">
          <h2 className="text-[#111111] font-semibold text-3xl lg:text-4xl text-center mb-12">
            Типи послуг МСТО
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mstoServices.map((service, index) => (
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
                    Замовити МСТО
                  </Button>
                </OrderServiceModal>
              </Card>
            ))}
          </div>
        </div>

        {/* Процедура МСТО */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-8 text-center">Процедура проходження МСТО</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {mstoProcess.map((process, index) => (
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

        {/* Вимоги та документи */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6">Вимоги та необхідні документи</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div key={index}>
                <h3 className="text-[#111111] font-semibold text-lg mb-4">{req.category}</h3>
                <div className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-[#111111]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Важлива інформація */}
        <Card className="bg-yellow-50 border-l-4 border-[#FFD400] rounded-2xl p-8 mb-12">
          <h2 className="text-[#111111] font-semibold text-xl mb-4">Важлива інформація про міжнародний сертифікат технічного огляду</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-[#111111]">
                <strong>📋 Термін дії:</strong> Міжнародний сертифікат технічного огляду діє 1 рік з дати видачі.
              </p>
              <p className="text-[#111111]">
                <strong>🌍 Визнання:</strong> Сертифікати визнаються в країнах ЄС та СНД.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-[#111111]">
                <strong>⏰ Графік:</strong> Міжнародний сертифікат технічного огляду проводиться за попереднім записом.
              </p>
              <p className="text-[#111111]">
                <strong>💼 Бізнес:</strong> Обов'язковий для комерційних міжнародних перевезень.
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
                Записатися на МСТО
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