export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E0E0E] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Логотип та опис */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#FFD400] border-2 border-white rounded-lg flex items-center justify-center transform rotate-45">
                <div className="w-6 h-6 bg-[#0E0E0E] transform -rotate-45 rounded-sm"></div>
              </div>
              <span className="text-white text-xl font-semibold">Термотранс</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Акредитована випробувальна лабораторія у Дніпрі. Швидкий та якісний техогляд 
              і сертифікація транспортних засобів за справедливими цінами.
            </p>
          </div>

          {/* Контакти */}
          <div className="space-y-4">
            <h3 className="text-[#FFD400] font-semibold text-lg">Контакти</h3>
            <div className="space-y-2 text-gray-300">
              <p>м. Дніпро, вул. Верстова, 33</p>
              <p>Телефон: +380 (67) 123-45-67</p>
              <p>Email: info@termotrans.com.ua</p>
            </div>
          </div>

          {/* Графік роботи */}
          <div className="space-y-4">
            <h3 className="text-[#FFD400] font-semibold text-lg">Графік роботи</h3>
            <div className="space-y-2 text-gray-300">
              <p>Пн–Пт: 9:00–18:00</p>
              <p>Сб: 9:00–15:00 (за записом)</p>
              <p>Нд: вихідний</p>
              <p className="text-[#FFD400]">Висота воріт: 4,3 м</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} ТОВ Термотранс. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}