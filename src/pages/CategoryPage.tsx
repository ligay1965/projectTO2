import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { OrderServiceModal } from '../components/OrderServiceModal';
import { useNavigate } from 'react-router-dom';

interface CategoryData {
  code: string;
  title: string;
  description: {
    otk: string;
    technical: string;
    laboratories: string;
  };
  parameters: {
    seats?: string;
    weight?: string;
    frequency: string;
    examples: string;
  };
}

const categoryData: Record<string, CategoryData> = {
  'm1': {
    code: 'M1',
    title: 'легкові автомобілі',
    description: {
      otk: 'ОТК обов\'язковий для всіх легкових автомобілів при реєстрації та періодично',
      technical: 'Техогляд потрібен для комерційних перевезень (таксі, оренда)',
      laboratories: 'Проводиться лише акредитованими лабораторіями з відповідним обладнанням'
    },
    parameters: {
      seats: 'не більше 8 місць (без водія)',
      weight: 'до 5 тонн',
      frequency: 'кожні 2 роки (таксі — 1 раз на рік)',
      examples: 'легкові автомобілі, універсали, хетчбеки, купе, кабріолети'
    }
  },
  'm2-m3': {
    code: 'M2/M3',
    title: 'автобуси',
    description: {
      otk: 'ОТК обов\'язковий для всіх автобусів при реєстрації та періодично',
      technical: 'Техогляд обов\'язковий для комерційних пасажирських перевезень',
      laboratories: 'Проводиться лише акредитованими лабораторіями з спеціальним обладнанням'
    },
    parameters: {
      seats: 'M2: більше 8 місць, M3: більше 8 місць',
      weight: 'M2: до 5 тонн, M3: більше 5 тонн',
      frequency: 'двічі на рік',
      examples: 'міські автобуси, маршрутні таксі, туристичні автобуси, шкільні автобуси'
    }
  },
  'n1-n2-n3': {
    code: 'N1/N2/N3',
    title: 'вантажні автомобілі',
    description: {
      otk: 'ОТК обов\'язковий для всіх вантажних автомобілів при реєстрації',
      technical: 'Техогляд обов\'язковий для комерційних вантажних перевезень',
      laboratories: 'Проводиться лише акредитованими лабораторіями з відповідною базою'
    },
    parameters: {
      weight: 'N1: до 3,5 т, N2: 3,5-12 т, N3: більше 12 т',
      frequency: 'N1: кожні 2 роки, N2/N3: кожні 6 місяців',
      examples: 'фургони, самоскиди, тягачі, спецтехніка, вантажівки'
    }
  },
  'o1-o2-o3-o4': {
    code: 'O1/O2/O3/O4',
    title: 'причепи та напівпричепи',
    description: {
      otk: 'ОТК обов\'язковий для всіх причепів при реєстрації',
      technical: 'Техогляд потрібен при використанні у комерційних перевезеннях',
      laboratories: 'Проводиться акредитованими лабораторіями відповідно до стандартів'
    },
    parameters: {
      weight: 'O1: до 0,75 т, O2: 0,75-3,5 т, O3: 3,5-10 т, O4: більше 10 т',
      frequency: 'O1/O2: кожні 2 роки, O3/O4: кожні 6 місяців',
      examples: 'легкові причепи, вантажні причепи, напівпричепи, цистерни'
    }
  },
  'l1-l7': {
    code: 'L1–L7',
    title: 'мототранспортні засоби',
    description: {
      otk: 'ОТК обов\'язковий для мототранспорту при реєстрації',
      technical: 'Техогляд потрібен для комерційного використання (курՙєрські послуги, оренда)',
      laboratories: 'Проводиться акредитованими лабораторіями з відповідним обладнанням'
    },
    parameters: {
      frequency: 'кожні 2 роки',
      examples: 'мопеди, мотоцикли, квадроцикли, трицикли, мотоколяски'
    }
  },
  'ktz-dangerous': {
    code: 'КТЗ',
    title: 'КТЗ для перевезення небезпечних вантажів',
    description: {
      otk: 'ОТК обов\'язковий для всіх КТЗ, що перевозять небезпечні вантажі, при реєстрації та періодично',
      technical: 'Техогляд обов\'язковий згідно з ADR та національними вимогами безпеки',
      laboratories: 'Проводиться тільки акредитованими лабораторіями з спеціальним обладнанням для перевірки КТЗ ADR'
    },
    parameters: {
      weight: 'всі масові категорії (залежно від базового шасі)',
      frequency: 'кожні 6 місяців (підвищені вимоги безпеки)',
      examples: 'бензовози, газовози, цистерни для хімічних речовин, вибухівки, радіоактивні матеріали'
    }
  }
};

interface CategoryPageProps {
  categoryId: string;
}

export function CategoryPage({ categoryId }: CategoryPageProps) {
  const category = categoryData[categoryId];
  const navigate = useNavigate();

  if (!category) {
    return (
      <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#111111] mb-4">Категорію не знайдено</h1>
          <Button 
            onClick={() => navigate('/')}
            className="bg-[#FFD400] text-[#111111] hover:bg-[#FFD400]/90"
          >
            Повернутися на головну
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F7F7] py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#FFD400] text-[#111111] rounded-full px-6 py-3 text-lg font-semibold mb-6">
            {category.code}
          </div>
          <h1 className="text-[#111111] font-semibold text-4xl lg:text-5xl capitalize">
            {category.title}
          </h1>
        </div>

        {/* Опис */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6">Основна інформація</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-[#111111] leading-relaxed">{category.description.otk}</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-[#111111] leading-relaxed">{category.description.technical}</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#FFD400] rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-[#111111] leading-relaxed">{category.description.laboratories}</p>
            </div>
          </div>
        </Card>

        {/* Таблиця параметрів */}
        <Card className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-0">
          <h2 className="text-[#111111] font-semibold text-2xl mb-6">Параметри та вимоги</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="space-y-4">
                {category.parameters.seats && (
                  <tr className="border-b border-gray-100">
                    <td className="py-4 pr-8 font-semibold text-[#111111] align-top">Кількість місць для сидіння</td>
                    <td className="py-4 text-[#111111]">{category.parameters.seats}</td>
                  </tr>
                )}
                {category.parameters.weight && (
                  <tr className="border-b border-gray-100">
                    <td className="py-4 pr-8 font-semibold text-[#111111] align-top">Повна маса ТЗ</td>
                    <td className="py-4 text-[#111111]">{category.parameters.weight}</td>
                  </tr>
                )}
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-8 font-semibold text-[#111111] align-top">Періодичність проходження</td>
                  <td className="py-4 text-[#111111]">{category.parameters.frequency}</td>
                </tr>
                <tr>
                  <td className="py-4 pr-8 font-semibold text-[#111111] align-top">Приклади</td>
                  <td className="py-4 text-[#111111]">{category.parameters.examples}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Кнопка замовлення */}
        <div className="text-center">
          <OrderServiceModal>
            <Button 
              className="bg-[#FFD400] text-[#111111] hover:bg-[#FFD400]/90 rounded-full px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              Замовити послугу
            </Button>
          </OrderServiceModal>
        </div>
      </div>
    </div>
  );
}