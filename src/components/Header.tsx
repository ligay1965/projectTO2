import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onModalOpen?: () => void;
}

export function Header({ onModalOpen }: HeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOrderService = () => {
    setIsModalOpen(true);
    onModalOpen?.();
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const scrollToContacts = () => {
    // If not on home page, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const contactsSection = document.getElementById('contacts');
        contactsSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Already on home page, just scroll
      const contactsSection = document.getElementById('contacts');
      contactsSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Логотип */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavigation('/')}
            >
              <div className="relative">
                {/* Основний шестикутник */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFD400] to-[#FFC400] border-2 border-[#111111] transform rotate-0 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                     style={{
                       clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
                     }}>
                  {/* Внутрішній елемент */}
                  <div className="w-5 h-5 bg-[#111111] transform rotate-45 rounded-sm"></div>
                </div>
                
                {/* Декоративні елементи */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFD400] rounded-full border border-[#111111] opacity-80"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#FFD400] rounded-full border border-[#111111] opacity-60"></div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-[#111111] text-xl font-bold tracking-tight group-hover:text-[#FFD400] transition-colors duration-300">
                  Термотранс
                </span>
                <span className="text-[#111111]/60 text-xs font-medium tracking-wider uppercase">
                  Випробувальна лабораторія
                </span>
              </div>
            </div>

            {/* Навігація */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('/')}
                className="text-[#111111] hover:text-[#FFD400] transition-colors"
              >
                Послуги
              </button>
              <button 
                onClick={() => handleNavigation('/about')}
                className="text-[#111111] hover:text-[#FFD400] transition-colors"
              >
                Про компанію
              </button>
              <button 
                onClick={scrollToContacts}
                className="text-[#111111] hover:text-[#FFD400] transition-colors"
              >
                Контакти
              </button>
              <Button 
                onClick={handleOrderService}
                className="bg-[#FFD400] text-[#111111] hover:bg-[#FFD400]/90 rounded-full px-6 shadow-md hover:shadow-lg transition-all"
              >
                Замовити послугу
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Модальне вікно */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-[#111111] text-2xl">Замовити послугу</DialogTitle>
            <DialogDescription className="text-[#111111]/80">
              Заповніть форму і ми зв'яжемося з вами для узгодження деталей
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Ім'я *</Label>
              <Input id="name" placeholder="Ваше ім'я" className="border-gray-300" />
            </div>
            <div>
              <Label htmlFor="phone">Телефон *</Label>
              <Input id="phone" placeholder="+380" className="border-gray-300" />
            </div>
            <div>
              <Label htmlFor="car-number">Держ. номер авто (опціонально)</Label>
              <Input id="car-number" placeholder="AA 0000 AA" className="border-gray-300" />
            </div>
            <div>
              <Label htmlFor="category">Категорія</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Оберіть категорію" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="m1">M1 — Легкові авто</SelectItem>
                  <SelectItem value="m2-m3">M2/M3 — Автобуси</SelectItem>
                  <SelectItem value="n1-n3">N1/N2/N3 — Вантажні</SelectItem>
                  <SelectItem value="o1-o4">O1/O2/O3/O4 — Причепи</SelectItem>
                  <SelectItem value="l1-l7">L1–L7 — Мототранспорт</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="comment">Коментар</Label>
              <Textarea id="comment" placeholder="Додаткова інформація..." className="border-gray-300" />
            </div>
            <div className="flex gap-3 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsModalOpen(false)}
                className="flex-1"
              >
                Скасувати
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-[#FFD400] text-[#111111] hover:bg-[#FFD400]/90"
              >
                Відправити заявку
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}