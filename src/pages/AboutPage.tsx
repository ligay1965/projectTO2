import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { OrderServiceModal } from '../components/OrderServiceModal';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import laboratoryImage from 'figma:asset/e847fed4f2579e9a179f627a69a1cf35483a7014.png';

const advantages = [
  {
    title: 'Акредитоване обладнання',
    description: 'Сучасне обладнання, що відповідає всім міжнародним стандартам та пройшло офіційну акредитацію',
    image: 'https://images.unsplash.com/photo-1656597631672-9a3bc4d3c72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBicmFrZSUyMHRlc3RpbmclMjBlcXVpcG1lbnQlMjBhdXRvbW90aXZlJTIwc2VydmljZXxlbnwxfHx8fDE3NTg0NzY4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Ціна—якість',
    description: 'Справедливі ціни за професійні послуги без прихованих платежів та додаткових витрат',
    image: 'https://images.unsplash.com/photo-1710761522946-fb8b390547fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25leSUyMGNhc2glMjBidW5kbGVzJTIwYmFuayUyMHBhY2thZ2luZ3xlbnwxfHx8fDE3NTg0NzY4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Швидкість та Якість роботи',
    description: 'Оперативне проведення всіх процедур без черг та затримок, зручний графік роботи',
    icons: '🕒🏆'
  }
];

const servicesTable = [
  { icon: '🚗', name: 'Обов\'язковий технічний контроль (ОТК)', bgColor: 'bg-[#FFD400]' },
  { icon: '📋', name: 'МСТО Міжнародний сертифікат технічного огляду', bgColor: 'bg-[#FFD400]' },
  { icon: '📜', name: 'Страхування транспортних засобів', bgColor: 'bg-[#FFD400]' },
  { icon: '⚙️', name: 'Калібровка тахографів', bgColor: 'bg-[#FFD400]' }
];

const vehicleCategories = [
  {
    code: 'M1',
    name: 'Легкові автомобілі',
    image: 'https://images.unsplash.com/photo-1648178326808-30e03de8049d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aGl0ZSUyMHNlZGFuJTIwY2FyfGVufDF8fHx8MTc1ODQ3NTk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    code: 'M2, M3',
    name: 'Автобуси та маршрутні такси',
    image: 'https://images.unsplash.com/photo-1756723701257-46513cd36fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVzJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzU4NDY1ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    code: 'N1, N2, N3',
    name: 'Вантажні автомобілі',
    image: 'https://images.unsplash.com/photo-1695222833131-54ee679ae8e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGNhcmdvJTIwdmVoaWNsZXxlbnwxfHx8fDE3NTg0NzU5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    code: 'O1, O2, O3, O4',
    name: 'Причепи та напівпричепи',
    image: 'https://images.unsplash.com/photo-1721072624083-e9c4b0f691b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRyYWlsZXIlMjB0cnVja3xlbnwxfHx8fDE3NTg0NzU5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    code: 'КТЗ',
    name: 'КТЗ для перевезення небезпечних вантажів',
    image: 'https://images.unsplash.com/photo-1668966780406-169062b17149?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW5nZXJvdXMlMjBnb29kcyUyMHRyYW5zcG9ydCUyMHRydWNrJTIwaGF6bWF0fGVufDF8fHx8MTc1ODYxMDEzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function AboutPage() {
  return (
    <div className="bg-[#F7F7F7]">
      {/* Фото лабораторії на всю ширину */}
      <div className="w-full h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={laboratoryImage}
          alt="ТОВ Термотранс - випробувальна лабораторія у Дніпрі"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h1 className="text-[#111111] font-semibold text-4xl lg:text-5xl mb-6">
              ТОВ Термотранс — випробувальна лабораторія у Дніпрі
            </h1>
            <p className="text-[#111111] text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
              Наша лабораторія акредитована відповідно до міжнародного стандарту ISO/IEC 17025 
              та має всі необхідні дозволи для проведення технічного огляду та сертифікації 
              транспортних засобів. Ми гарантуємо високу якість послуг, дотримання всіх 
              технічних вимог та прозорість процесів.
            </p>
          </div>

          {/* Переваги */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <Card key={index} className="bg-white rounded-2xl p-8 shadow-lg border-0 text-center">
                <div className="mb-4 h-16 flex items-center justify-center">
                  {advantage.image ? (
                    <ImageWithFallback
                      src={advantage.image}
                      alt={advantage.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-4xl">{advantage.icons}</div>
                  )}
                </div>
                <h3 className="text-[#111111] font-semibold text-xl mb-4">
                  {advantage.title}
                </h3>
                <p className="text-[#111111] leading-relaxed">
                  {advantage.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Секція послуг */}
          <div className="mb-16">
            <h2 className="text-[#111111] font-semibold text-2xl lg:text-3xl mb-8 text-center">Наші послуги</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Лівий блок - Послуги */}
              <Card className="bg-white rounded-2xl p-8 shadow-lg border-0">
                <h3 className="text-[#111111] font-semibold text-xl mb-6">Наші послуги</h3>
                
                <div className="space-y-3">
                  {servicesTable.map((service, index) => (
                    <div key={index} className={`${service.bgColor} rounded-lg p-4 flex items-center gap-4`}>
                      <div className="text-2xl">{service.icon}</div>
                      <span className="text-[#111111] font-medium">{service.name}</span>
                    </div>
                  ))}
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
                    onClick={() => window.open('https://maps.google.com/?q=48.4830,35.0250+(ТОВ+Термотранс,+вул.+Верстова,+33,+Дніпро)', '_blank')}
                  >
                    Прокласти маршрут
                  </Button>
                </div>
              </Card>

              {/* Правий блок - Категорії транспорту */}
              <Card className="bg-white rounded-2xl p-8 shadow-lg border-0">
                <h3 className="text-[#111111] font-semibold text-xl mb-6">Категорії транспортних засобів підлежащих ОТК</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {vehicleCategories.map((category, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-gray-100 rounded-lg p-4 mb-3 h-32 flex items-center justify-center overflow-hidden">
                        <ImageWithFallback
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div className="font-semibold text-[#111111] text-lg mb-1">{category.code}</div>
                      <div className="text-[#111111] text-sm">{category.name}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {/* Контактна інформація */}
            <Card className="bg-white rounded-2xl p-8 shadow-lg border-0 max-w-2xl mx-auto">
              <h2 className="text-[#111111] font-semibold text-2xl mb-6 text-center">Контакти</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-[#111111] font-semibold mb-2">Адреса</h3>
                  <p className="text-[#111111]">м. Дніпро, вул. Верстова, 33</p>
                </div>
                
                <div>
                  <h3 className="text-[#111111] font-semibold mb-2">Графік роботи</h3>
                  <div className="space-y-1 text-[#111111]">
                    <p>Пн–Пт: 9:00–18:00</p>
                    <p>Сб: 9:00–15:00 (за записом)</p>
                    <p>Нд: вихідний</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-[#111111] font-semibold mb-2">Телефон</h3>
                  <div className="space-y-1 text-[#111111]">
                    <p>+380 (93) 575-90-22</p>
                    <p className="text-sm text-gray-600">Пн-Пт: 9:00-18:00, Сб: 9:00-15:00</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-[#111111] font-semibold mb-2">Email</h3>
                  <p className="text-[#111111]">termotrans.ua@gmail.com</p>
                </div>
              </div>
              
              <div className="pt-6 mt-6 border-t border-gray-100 text-center">
                <p className="text-red-600 font-bold text-lg">Висота воріт: 4,5 м</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}