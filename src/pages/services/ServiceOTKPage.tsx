import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { OrderServiceModal } from '../../components/OrderServiceModal';
import { useNavigate } from 'react-router-dom';

const vehicleCategories = [
  {
    id: 'm1',
    code: 'M1',
    title: 'Легкові авто',
    image: 'https://images.unsplash.com/photo-1648178326808-30e03de8049d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBzZWRhbnxlbnwxfHx8fDE3NTgyMjY2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    path: '/m1'
  },
  {
    id: 'm2-m3',
    code: 'M2/M3',
    title: 'Автобуси',
    image: 'https://images.unsplash.com/photo-1756723701257-46513cd36fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVzJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc1ODI4MjA2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    path: '/m2-m3'
  },
  {
    id: 'n1-n3',
    code: 'N1/N2/N3',
    title: 'Вантажні',
    image: 'https://images.unsplash.com/photo-1695222833131-54ee679ae8e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGNhcmdvJTIwdmVoaWNsZXxlbnwxfHx8fDE3NTgyODIwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    path: '/n1-n2-n3'
  },
  {
    id: 'o1-o4',
    code: 'O1/O2/O3/O4',
    title: 'Причепи',
    image: 'https://images.unsplash.com/photo-1698321170838-27f96d9463af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cnVjayUyMHRyYWlsZXIlMjB0cmFuc3BvcnR8ZW58MXx8fHwxNzU4NDcyNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    path: '/o1-o2-o3-o4'
  },
  {
    id: 'ktz-dangerous',
    code: 'КТЗ',
    title: 'КТЗ для перевезення небезпечних вантажів',
    image: 'https://images.unsplash.com/photo-1695601510327-1553ba5f8bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdWVsJTIwdGFua2VyJTIwdHJ1Y2slMjB0cmFuc3BvcnR8ZW58MXx8fHwxNzU4NDc3NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    path: '/ktz-dangerous'
  }
];

export function ServiceOTKPage() {
  const navigate = useNavigate();

  const handleCategoryClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="bg-[#F7F7F7] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#FFD400] text-[#111111] rounded-full px-6 py-3 text-lg font-semibold mb-6">
            🔧 ОТК
          </div>
          <h1 className="text-[#111111] font-semibold text-4xl lg:text-5xl mb-6">
            Обов'язковий технічний контроль
          </h1>
          <p className="text-[#111111] text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Державна процедура перевірки технічного стану транспортних засобів на відповідність вимогам безпеки дорожнього руху
          </p>
        </div>

        {/* Категорії транспорту */}
        <div className="mb-16">
          <h2 className="text-[#111111] font-semibold text-3xl lg:text-4xl text-center mb-12">
            Виберіть категорію вашого транспорту
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {vehicleCategories.map((category) => (
              <Card 
                key={category.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border-0"
                onClick={() => handleCategoryClick(category.path)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center justify-center bg-[#FFD400] text-[#111111] rounded-full px-4 py-2 text-sm font-semibold mb-3">
                    {category.code}
                  </div>
                  <h3 className="text-[#111111] font-semibold text-lg mb-3">
                    {category.title}
                  </h3>
                  <div className="inline-flex items-center text-[#FFD400] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Детальніше →
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>



        {/* Технічні вимоги */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6">Технічні вимоги</h2>
          
          <div className="space-y-6">
            <p className="text-[#111111] leading-relaxed">
              Транспортний засіб повинен бути чистим, як зовні, так і всередині. Лобове скло без тріщин, 
              а елементи кузова без іржі. Транспортний засіб повинен бути заправлений усіма необхідними 
              експлуатаційними рідинами.
            </p>

            <div>
              <h3 className="text-[#111111] font-semibold text-lg mb-4">
                Перед приїздом в випробувальну лабораторію автовласник повинен перевірити:
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111] leading-relaxed">Справність зовнішніх світлових приладів, аварійної сигналізації</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111] leading-relaxed">Ефективність гальмівної системи</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111] leading-relaxed">Стан елементів рульового управління та ходової частини, сходження коліс</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111] leading-relaxed">Рівномірність зносу покришок та залишкова висота протектора</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111] leading-relaxed">Цілісність та герметичність ємностей технічних рідин</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111] leading-relaxed">Вміст забруднюючих речовин СО у відпрацьованих вихлопних газах</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111] leading-relaxed">Цілісність лобового скла, рівень тонування скла</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111] leading-relaxed">Справність склоомивача та склоочисника</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111] leading-relaxed">Укомплектованість вогнегасником, медичною аптечкою та знаком аварійної зупинки</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111] leading-relaxed">Відсутність великих осередків корозії на знімних елементах кузова</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mt-6">
              <p className="text-[#111111] leading-relaxed">
                <strong>📋 Ознайомитися з вимогами:</strong> Ознайомитеся з вимогами до перевірки конструкції 
                та технічного стану колісного транспортного засобу, методи такої перевірки Міністерство 
                інфраструктури УКРАЇНИ НАКАЗ 26.11.2012 № 710 
                <a href="http://zakon.rada.gov.ua/laws/show/z2169-12" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 hover:text-blue-800 underline ml-2">
                  http://zakon.rada.gov.ua/laws/show/z2169-12
                </a>
              </p>
            </div>
          </div>
        </Card>

        {/* Необхідні документи */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6">Необхідні документи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-[#111111] font-semibold text-lg">Для фізичних осіб:</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Паспорт власника або довіреність</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Документи на ТЗ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Документ про придбання ТЗ</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-[#111111] font-semibold text-lg">Для юридичних осіб:</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Довіреність на представника</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Документи на ТЗ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[#111111]">Витяг з єдиного державного реєстру</p>
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
                Записатися на ОТК
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