import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { OrderServiceModal } from '../../components/OrderServiceModal';
import { useNavigate } from 'react-router-dom';

const consultationTypes = [
  {
    title: 'Підготовка до техогляду',
    description: 'Консультації щодо підготовки ТЗ до проходження техогляду',
    topics: ['Перевірка документів', 'Технічні вимоги', 'Усунення недоліків'],
    duration: '30-60 хв',
    price: 'Безкоштовно',
    icon: '📋'
  },
  {
    title: 'Технічні питання',
    description: 'Професійні консультації з технічних питань експлуатації ТЗ',
    topics: ['Діагностика несправностей', 'Рекомендації з ремонту', 'Модернізація ТЗ'],
    duration: '30-90 хв',
    price: '200-500 грн',
    icon: '🔧'
  },
  {
    title: 'Правові питання',
    description: 'Консультації з правових аспектів експлуатації транспорту',
    topics: ['Реєстрація ТЗ', 'Страхування', 'Ліцензування'],
    duration: '30-60 хв',
    price: '300-400 грн',
    icon: '⚖️'
  },
  {
    title: 'Комерційний транспорт',
    description: 'Спеціалізовані консультації для комерційного транспорту',
    topics: ['Ліцензії на перевезення', 'Вимоги до водіїв', 'Документооборот'],
    duration: '60-90 хв',
    price: '400-600 грн',
    icon: '🚛'
  }
];

const faqTopics = [
  {
    category: 'Загальні питання',
    questions: [
      'Які документи потрібні для техогляду?',
      'Скільки часу займає процедура?',
      'Які вимоги до технічного стану ТЗ?',
      'Що робити, якщо ТЗ не пройшов техогляд?'
    ]
  },
  {
    category: 'Комерційний транспорт',
    questions: [
      'Особливості техогляду таксі',
      'Вимоги до вантажного транспорту',
      'Ліцензування пасажирських перевезень',
      'Медичні довідки для водіїв'
    ]
  },
  {
    category: 'Спеціальний транспорт',
    questions: [
      'КТЗ для небезпечних вантажів',
      'Автобуси та мікроавтобуси',
      'Сільськогосподарська техніка',
      'Мототранспорт'
    ]
  }
];

const experts = [
  {
    name: 'Олександр Петренко',
    position: 'Головний інженер',
    experience: '15 років досвіду',
    specialization: 'Діагностика транспортних засобів',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMGVuZ2luZWVyfGVufDF8fHx8MTc1ODQ3NzgyN3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Марина Коваленко',
    position: 'Юрист-консультант',
    experience: '12 років досвіду',
    specialization: 'Правові питання транспорту',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4NDc3ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Сергій Мельник',
    position: 'Технічний експерт',
    experience: '18 років досвіду',
    specialization: 'Комерційний транспорт',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTg0Nzc4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function ServiceConsultationsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7F7F7] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#FFD400] text-[#111111] rounded-full px-6 py-3 text-lg font-semibold mb-6">
            💬 Консультації
          </div>
          <h1 className="text-[#111111] font-semibold text-4xl lg:text-5xl mb-6">
            Професійні консультації
          </h1>
          <p className="text-[#111111] text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Отримайте кваліфіковані відповіді на всі питання щодо техогляду, експлуатації та обслуговування транспорту
          </p>
        </div>

        {/* Типи консультацій */}
        <div className="mb-16">
          <h2 className="text-[#111111] font-semibold text-3xl lg:text-4xl text-center mb-12">
            Типи консультацій
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultationTypes.map((consultation, index) => (
              <Card key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{consultation.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#111111] font-semibold text-xl mb-2">{consultation.title}</h3>
                    <p className="text-[#111111] leading-relaxed">{consultation.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-[#111111] font-semibold mb-3">Основні питання:</h4>
                  <div className="space-y-2">
                    {consultation.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-[#111111]">{topic}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-gray-600">Тривалість: </span>
                    <span className="text-[#111111] font-semibold">{consultation.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Вартість: </span>
                    <span className="text-[#FFD400] font-semibold text-lg">{consultation.price}</span>
                  </div>
                </div>
                
                <OrderServiceModal>
                  <Button 
                    className="w-full bg-[#FFD400] text-[#111111] hover:bg-[#FFD400]/90 rounded-full py-3 font-semibold"
                  >
                    Замовити консультацію
                  </Button>
                </OrderServiceModal>
              </Card>
            ))}
          </div>
        </div>

        {/* Наші експерти */}
        <div className="mb-16">
          <h2 className="text-[#111111] font-semibold text-3xl lg:text-4xl text-center mb-12">
            Наші експерти
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <Card key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg border-0">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[#111111] font-semibold text-xl mb-2">{expert.name}</h3>
                <p className="text-[#FFD400] font-semibold mb-2">{expert.position}</p>
                <p className="text-gray-600 mb-3">{expert.experience}</p>
                <p className="text-[#111111]">{expert.specialization}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Часті питання */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-8">Часті питання та теми консультацій</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faqTopics.map((topic, index) => (
              <div key={index}>
                <h3 className="text-[#111111] font-semibold text-lg mb-4">{topic.category}</h3>
                <div className="space-y-3">
                  {topic.questions.map((question, questionIndex) => (
                    <div key={questionIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-[#111111]">{question}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Як отримати консультацію */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6">Як отримати консультацію?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">1. Зв'яжіться</h3>
              <p className="text-[#111111]">Зателефонуйте або залиште заявку онлайн</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">2. Запис</h3>
              <p className="text-[#111111]">Оберіть зручний час для консультації</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">3. Консультація</h3>
              <p className="text-[#111111]">Отримайте відповіді на всі питання</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-[#111111] font-semibold text-lg mb-2">4. Рекомендації</h3>
              <p className="text-[#111111]">Отримайте письмові рекомендації</p>
            </div>
          </div>
        </Card>

        {/* Переваги наших консультацій */}
        <Card className="bg-[#FFD400] rounded-2xl p-8 mb-12">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6 text-center">Переваги наших консультацій</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl">🎓</span>
              </div>
              <h3 className="text-[#111111] font-semibold mb-2">Експертність</h3>
              <p className="text-[#111111]">Понад 15 років досвіду в галузі</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-[#111111] font-semibold mb-2">Оперативність</h3>
              <p className="text-[#111111]">Швидкі та конкретні відповіді</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl">📋</span>
              </div>
              <h3 className="text-[#111111] font-semibold mb-2">Документування</h3>
              <p className="text-[#111111]">Письмові рекомендації</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl">🤝</span>
              </div>
              <h3 className="text-[#111111] font-semibold mb-2">Підтримка</h3>
              <p className="text-[#111111]">Супровід після консультації</p>
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
                Замовити консультацію
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
          <div className="space-y-2">
            <p className="text-gray-600">
              Зателефонуйте: <span className="font-semibold text-[#111111]">+380 (93) 575-90-22</span>
            </p>
            <p className="text-gray-600">
              Або напишіть: <span className="font-semibold text-[#111111]">info@termotrans.com.ua</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}