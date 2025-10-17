import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { OrderServiceModal } from '../../components/OrderServiceModal';
import { useNavigate } from 'react-router-dom';

const documentTypes = [
  {
    name: 'Протокол ОТК',
    description: 'Офіційний документ про проходження обов\'язкового технічного контролю',
    validity: 'Необмежено (для реєстрації)',
    price: 'Включено в вартість ОТК',
    features: ['Державний бланк', 'Офіційні печатки', 'QR-код для перевірки'],
    icon: '📋'
  },
  {
    name: 'Протокол техогляду',
    description: 'Документ про проходження періодичного технічного огляду',
    validity: '6 місяців / 1-2 роки',
    price: 'Включено в вартість техогляду',
    features: ['Дата наступного огляду', 'Результати всіх перевірок', 'Рекомендації'],
    icon: '📄'
  },
  {
    name: 'Довідка про технічний стан',
    description: 'Детальна довідка про технічний стан транспортного засобу',
    validity: '30 днів',
    price: '150 грн',
    features: ['Детальний опис стану', 'Рекомендації з ремонту', 'Оцінка безпеки'],
    icon: '📊'
  },
  {
    name: 'Експертний висновок',
    description: 'Професійна оцінка технічного стану для спеціальних цілей',
    validity: '60 днів',
    price: '300-500 грн',
    features: ['Для судових справ', 'Оцінка збитків', 'Експертна оцінка'],
    icon: '🔍'
  },
  {
    name: 'Копії документів',
    description: 'Засвідчені копії протоколів та довідок',
    validity: 'Як оригінал',
    price: '50 грн/документ',
    features: ['Офіційне засвідчення', 'Печатка організації', 'Підпис відповідальної особи'],
    icon: '📑'
  },
  {
    name: 'Переклад документів',
    description: 'Офіційний переклад документів іноземними мовами',
    validity: 'Необмежено',
    price: '200-400 грн',
    features: ['Англійська мова', 'Німецька мова', 'Польська мова'],
    icon: '🌐'
  }
];

const documentationProcess = [
  {
    step: '1',
    title: 'Проведення процедури',
    description: 'Спочатку проводиться сам техогляд або діагностика',
    icon: '🔧'
  },
  {
    step: '2',
    title: 'Обробка результатів',
    description: 'Результати перевірок заносяться в електронну базу',
    icon: '💻'
  },
  {
    step: '3',
    title: 'Формування документів',
    description: 'Автоматичне створення офіційних документів',
    icon: '📋'
  },
  {
    step: '4',
    title: 'Перевірка та підписання',
    description: 'Контроль якості та підписання відповідальними особами',
    icon: '✍️'
  },
  {
    step: '5',
    title: 'Видача клієнту',
    description: 'Передача готових документів власнику ТЗ',
    icon: '🤝'
  }
];

const additionalServices = [
  {
    name: 'Експрес-оформлення',
    description: 'Прискорене оформлення документів за 15 хвилин',
    price: '+100 грн',
    icon: '⚡'
  },
  {
    name: 'Електронні копії',
    description: 'Надсилання документів на email у PDF форматі',
    price: 'Безкоштовно',
    icon: '📧'
  },
  {
    name: 'Кур\'єрська доставка',
    description: 'Доставка документів за адресою у Дніпрі',
    price: '150 грн',
    icon: '🚗'
  },
  {
    name: 'Нотаріальне засвідчення',
    description: 'Нотаріальне засвідчення копій документів',
    price: 'За тарифами нотаріуса',
    icon: '⚖️'
  }
];

export function ServiceDocumentationPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7F7F7] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#FFD400] text-[#111111] rounded-full px-6 py-3 text-lg font-semibold mb-6">
            📋 Документи
          </div>
          <h1 className="text-[#111111] font-semibold text-4xl lg:text-5xl mb-6">
            Оформлення документів
          </h1>
          <p className="text-[#111111] text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Повний пакет офіційних документів після проходження техогляду та додаткові послуги з документооборотом
          </p>
        </div>

        {/* Типи документів */}
        <div className="mb-16">
          <h2 className="text-[#111111] font-semibold text-3xl lg:text-4xl text-center mb-12">
            Типи документів
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentTypes.map((doc, index) => (
              <Card key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">{doc.icon}</span>
                  </div>
                  <h3 className="text-[#111111] font-semibold text-xl mb-3">{doc.name}</h3>
                  <p className="text-[#111111] leading-relaxed mb-4">{doc.description}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Термін дії:</span>
                    <span className="text-[#111111] font-semibold">{doc.validity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Вартість:</span>
                    <span className="text-[#FFD400] font-semibold">{doc.price}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-[#111111] font-semibold mb-3">Особливості:</h4>
                  <div className="space-y-2">
                    {doc.features.map((feature, featureIndex) => (
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
                    Замовити
                  </Button>
                </OrderServiceModal>
              </Card>
            ))}
          </div>
        </div>

        {/* Процес оформлення */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-8 text-center">Процес оформлення документів</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {documentationProcess.map((process, index) => (
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

        {/* Додаткові послуги */}
        <div className="mb-16">
          <h2 className="text-[#111111] font-semibold text-3xl lg:text-4xl text-center mb-12">
            Додаткові послуги
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-[#111111] font-semibold text-lg mb-3">{service.name}</h3>
                  <p className="text-[#111111] leading-relaxed mb-4">{service.description}</p>
                  <p className="text-[#FFD400] font-semibold text-lg">{service.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Вимоги до документів */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-white rounded-2xl p-8 shadow-lg border-0">
            <h2 className="text-[#111111] font-semibold text-2xl mb-6">Вимоги до оформлення</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Всі документи оформлюються на офіційних бланках
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Обов'язкові печатки та підписи відповідальних осіб
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Унікальні номери для перевірки в електронній базі
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-[#111111] leading-relaxed">
                  Відповідність діючим нормативним документам
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-white rounded-2xl p-8 shadow-lg border-0">
            <h2 className="text-[#111111] font-semibold text-2xl mb-6">Терміни готовності</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#111111]">Протокол ОТК/техогляду</span>
                <span className="text-[#FFD400] font-semibold">Відразу</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#111111]">Довідка про технічний стан</span>
                <span className="text-[#FFD400] font-semibold">1-2 години</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#111111]">Експертний висновок</span>
                <span className="text-[#FFD400] font-semibold">1-3 дні</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#111111]">Переклад документів</span>
                <span className="text-[#FFD400] font-semibold">2-5 днів</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#111111]">Копії документів</span>
                <span className="text-[#FFD400] font-semibold">15-30 хв</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Важлива інформація */}
        <Card className="bg-yellow-50 border-l-4 border-[#FFD400] rounded-2xl p-8 mb-12">
          <h2 className="text-[#111111] font-semibold text-xl mb-4">Важлива інформація</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-[#111111]">
                <strong>📋 Оригінали:</strong> Видаються тільки після успішного проходження відповідних процедур.
              </p>
              <p className="text-[#111111]">
                <strong>🔒 Безпека:</strong> Всі документи мають захисні елементи та можуть бути перевірені онлайн.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-[#111111]">
                <strong>📧 Електронні копії:</strong> Надсилаються автоматично після оформлення.
              </p>
              <p className="text-[#111111]">
                <strong>⏰ Архів:</strong> Копії документів зберігаються в нашому архіві протягом 5 років.
              </p>
            </div>
          </div>
        </Card>

        {/* Контактна інформація для документів */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6 text-center">Як замовити додаткові документи?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">Телефон</h3>
              <p className="text-[#111111]">+380 (93) 575-90-22</p>
              <p className="text-gray-600 text-sm">Пн-Пт: 9:00-18:00</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">Email</h3>
              <p className="text-[#111111]">info@termotrans.com.ua</p>
              <p className="text-gray-600 text-sm">Відповідь протягом 24 годин</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">Офіс</h3>
              <p className="text-[#111111]">вул. Верстова, 33</p>
              <p className="text-gray-600 text-sm">м. Дніпро</p>
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
                Замовити документи
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