import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { OrderServiceModal } from '../../components/OrderServiceModal';
import { useNavigate } from 'react-router-dom';

const insuranceTypes = [
  {
    name: 'ОСЦПВ (Обов\'язкове страхування)',
    description: 'Обов\'язкове страхування цивільно-правової відповідальності власників ТЗ',
    coverage: 'До 960 000 грн',
    duration: '1 рік',
    price: 'від 500 грн',
    features: ['Покриття майнової шкоди', 'Компенсація моральної шкоди', 'Захист третіх осіб'],
    icon: '🛡️',
    required: true
  },
  {
    name: 'КАСКО',
    description: 'Добровільне комплексне автострахування від різних ризиків',
    coverage: 'За вартістю ТЗ',
    duration: '1 рік',
    price: 'від 3-8% вартості ТЗ',
    features: ['Угон/крадіжка', 'ДТП', 'Стихійні лиха', 'Вандалізм', 'Пожежа'],
    icon: '🚗',
    required: false
  },
  {
    name: 'Страхування вантажу',
    description: 'Страхування товарів під час транспортування',
    coverage: 'За вартістю вантажу',
    duration: 'На час перевезення',
    price: 'від 0.1-1% вартості',
    features: ['Втрата вантажу', 'Пошкодження', 'Затримка доставки'],
    icon: '📦',
    required: false
  },
  {
    name: 'Страхування пасажирів',
    description: 'Страхування життя та здоров\'я пасажирів',
    coverage: 'До 100 000 грн/особу',
    duration: '1 рік',
    price: 'від 200 грн',
    features: ['Травми', 'Інвалідність', 'Смерть', 'Медичні витрати'],
    icon: '👥',
    required: false
  }
];

const insuranceProcess = [
  {
    step: '1',
    title: 'Консультація',
    description: 'Визначення потрібного типу страхування',
    icon: '💬'
  },
  {
    step: '2',
    title: 'Розрахунок',
    description: 'Калькуляція вартості страхового покриття',
    icon: '🧮'
  },
  {
    step: '3',
    title: 'Оформлення',
    description: 'Укладання договору страхування',
    icon: '📋'
  },
  {
    step: '4',
    title: 'Оплата',
    description: 'Сплата страхових внесків',
    icon: '💳'
  },
  {
    step: '5',
    title: 'Отримання поліса',
    description: 'Видача страхового поліса',
    icon: '📄'
  }
];

const insurancePartners = [
  {
    name: 'ПрАТ "Провідна"',
    specialty: 'ОСЦПВ, КАСКО',
    rating: '4.8/5',
    experience: '25+ років'
  },
  {
    name: 'Оранта',
    specialty: 'ОСЦПВ, КАСКО, Вантажні перевезення',
    rating: '4.9/5',
    experience: '30+ років'
  },
  {
    name: 'АрхеТип',
    specialty: 'Комерційний транспорт',
    rating: '4.7/5',
    experience: '15+ років'
  },
  {
    name: 'ТАС СГ',
    specialty: 'Вантажні перевезення',
    rating: '4.6/5',
    experience: '20+ років'
  },
  {
    name: 'АСКА',
    specialty: 'Пасажирські перевезення',
    rating: '4.8/5',
    experience: '30+ років'
  }
];

const benefits = [
  {
    title: 'Офіційне партнерство',
    description: 'Співпрацюємо з перевіреними страховими компаніями',
    icon: '🤝'
  },
  {
    title: 'Швидке оформлення',
    description: 'Оформлення поліса за 15-30 хвилин',
    icon: '⚡'
  },
  {
    title: 'Вигідні умови',
    description: 'Спеціальні тарифи для наших клієнтів',
    icon: '💰'
  },
  {
    title: 'Комплексний підхід',
    description: 'Техогляд + страхування в одному місці',
    icon: '🔧'
  }
];

export function ServiceInsurancePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7F7F7] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#FFD400] text-[#111111] rounded-full px-6 py-3 text-lg font-semibold mb-6">
            🛡️ Страхування
          </div>
          <h1 className="text-[#111111] font-semibold text-4xl lg:text-5xl mb-6">
            Страхування транспортних засобів
          </h1>
          <p className="text-[#111111] text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Повний спектр страхових послуг для автомобільного транспорту від надійних партнерів
          </p>
        </div>

        {/* Переваги нашого сервісу */}
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

        {/* Наші партнери */}
        <div className="mb-16">
          <h2 className="text-[#111111] font-semibold text-3xl lg:text-4xl text-center mb-12">
            Наші страхові партнери
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {insurancePartners.map((partner, index) => (
              <Card key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border-0">
                <h3 className="text-[#111111] font-semibold text-lg mb-3">{partner.name}</h3>
                <p className="text-[#FFD400] font-semibold mb-2">{partner.specialty}</p>
                <div className="space-y-1">
                  <p className="text-[#111111]">Рейтинг: <span className="font-semibold">{partner.rating}</span></p>
                  <p className="text-gray-600 text-sm">{partner.experience}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Типи страхування */}
        <div className="mb-16">
          <h2 className="text-[#111111] font-semibold text-3xl lg:text-4xl text-center mb-12">
            Типи страхування
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insuranceTypes.map((insurance, index) => (
              <Card key={index} className={`rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-0 ${insurance.required ? 'bg-[#FFD400] text-[#111111]' : 'bg-white'}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${insurance.required ? 'bg-white text-[#111111]' : 'bg-[#FFD400] text-[#111111]'}`}>
                      <span className="text-2xl">{insurance.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className={`font-semibold text-xl ${insurance.required ? 'text-[#111111]' : 'text-[#111111]'}`}>
                          {insurance.name}
                        </h3>
                        {insurance.required && (
                          <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            ОБОВ'ЯЗКОВЕ
                          </span>
                        )}
                      </div>
                      <p className={`leading-relaxed ${insurance.required ? 'text-[#111111]' : 'text-[#111111]'}`}>
                        {insurance.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <span className={`text-sm ${insurance.required ? 'text-[#111111]' : 'text-gray-600'}`}>Покриття:</span>
                    <p className={`font-semibold ${insurance.required ? 'text-[#111111]' : 'text-[#111111]'}`}>{insurance.coverage}</p>
                  </div>
                  <div>
                    <span className={`text-sm ${insurance.required ? 'text-[#111111]' : 'text-gray-600'}`}>Термін:</span>
                    <p className={`font-semibold ${insurance.required ? 'text-[#111111]' : 'text-[#111111]'}`}>{insurance.duration}</p>
                  </div>
                  <div>
                    <span className={`text-sm ${insurance.required ? 'text-[#111111]' : 'text-gray-600'}`}>Вартість:</span>
                    <p className={`font-semibold text-lg ${insurance.required ? 'text-red-600' : 'text-[#FFD400]'}`}>{insurance.price}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 ${insurance.required ? 'text-[#111111]' : 'text-[#111111]'}`}>Покриває:</h4>
                  <div className="space-y-2">
                    {insurance.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 ${insurance.required ? 'bg-[#111111]' : 'bg-[#FFD400]'}`}></div>
                        <p className={insurance.required ? 'text-[#111111]' : 'text-[#111111]'}>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <OrderServiceModal>
                  <Button 
                    className={`w-full rounded-full py-3 font-semibold ${
                      insurance.required 
                        ? 'bg-[#111111] text-white hover:bg-[#111111]/90' 
                        : 'bg-[#FFD400] text-[#111111] hover:bg-[#FFD400]/90'
                    }`}
                  >
                    Оформити поліс
                  </Button>
                </OrderServiceModal>
              </Card>
            ))}
          </div>
        </div>

        {/* Процедура оформлення */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-8 text-center">Процедура оформлення страхування</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {insuranceProcess.map((process, index) => (
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

        {/* Необхідні документи */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6">Необхідні документи для страхування</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-[#111111] font-semibold text-lg">Для ОСЦПВ:</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Паспорт власника ТЗ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Технічний паспорт ТЗ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Посвідчення водія</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Довідка про відсутність ДТП (за бажанням)</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-[#111111] font-semibold text-lg">Для КАСКО:</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Усі документи для ОСЦПВ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Довідка про вартість ТЗ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Фотографії ТЗ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Огляд ТЗ експертом (можливо)</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Важлива інформація */}
        <Card className="bg-red-50 border-l-4 border-red-500 rounded-2xl p-8 mb-12">
          <h2 className="text-[#111111] font-semibold text-xl mb-4">Важлива інформація</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-[#111111]">
                <strong>⚠️ ОСЦПВ обов'язкове:</strong> Експлуатація ТЗ без поліса ОСЦПВ заборонена законом.
              </p>
              <p className="text-[#111111]">
                <strong>💰 Штраф:</strong> За відсутність ОСЦПВ штраф 850-1700 грн.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-[#111111]">
                <strong>📅 Термін дії:</strong> Слідкуйте за терміном дії поліса.
              </p>
              <p className="text-[#111111]">
                <strong>📱 Електронний поліс:</strong> Має таку ж силу, як паперовий.
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
                Оформити страхування
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