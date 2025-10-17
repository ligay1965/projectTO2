import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';

interface OrderServiceModalProps {
  children: React.ReactNode;
}

const serviceTypes = [
  'Техогляд легкових авто',
  'Техогляд вантажних авто',
  'Техогляд автобусів',
  'Техогляд причепів',
  'Страхування транспортних засобів',
  'Калібровка тахографів',
  'МСТО (Міжнародна сертифікація технічного огляду)',
  'ЄКМТ (Європейська конференція міністрів транспорту)',
  'Консультація',
  'Інше'
];

export function OrderServiceModal({ children }: OrderServiceModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    vehicleInfo: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валідація
    if (!formData.name || !formData.phone || !formData.serviceType) {
      toast.error('Будь ласка, заповніть обов\'язкові поля');
      return;
    }

    // Симуляція відправки форми
    console.log('Форма відправлена:', formData);
    
    toast.success('Ваша заявка надіслана! Ми зв\'яжемося з вами найближчим часом.');
    
    // Очищення форми та закриття модального вікна
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: '',
      vehicleInfo: '',
      message: ''
    });
    setIsOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isWorkingHours = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = неділя, 1 = понеділок, ..., 6 = субота
    const hour = now.getHours();
    
    // Понеділок-П'ятниця: 9:00-18:00
    if (day >= 1 && day <= 5) {
      return hour >= 9 && hour < 18;
    }
    // Субота: 9:00-15:00 (за записом)
    if (day === 6) {
      return hour >= 9 && hour < 15;
    }
    // Неділя: вихідний
    return false;
  };

  const handleCall = () => {
    if (isWorkingHours()) {
      window.open('tel:+380935759022', '_self');
    } else {
      toast.error('Зараз поза робочим часом. Графік роботи: Пн-Пт 9:00-18:00, Сб 9:00-15:00');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#111111]">
            Замовлення послуги
          </DialogTitle>
          <DialogDescription className="text-[#111111]/70 text-sm">
            Заповніть форму і ми зв'яжемося з вами для уточнення деталей
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-[#111111]">
                Ім'я *
              </Label>
              <Input
                id="name"
                placeholder="Введіть ваше ім'я"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="border-gray-300 focus:border-[#FFD400] focus:ring-[#FFD400]"
                required
              />
            </div>
            
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-[#111111]">
                Телефон *
              </Label>
              <Input
                id="phone"
                placeholder="+380 (67) 123-45-67"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="border-gray-300 focus:border-[#FFD400] focus:ring-[#FFD400]"
                required
              />
            </div>
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-[#111111]">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="border-gray-300 focus:border-[#FFD400] focus:ring-[#FFD400]"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="serviceType" className="text-[#111111]">
              Тип послуги *
            </Label>
            <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
              <SelectTrigger className="border-gray-300 focus:border-[#FFD400] focus:ring-[#FFD400]">
                <SelectValue placeholder="Оберіть тип послуги" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="vehicleInfo" className="text-[#111111]">
              Інформація про ТЗ
            </Label>
            <Input
              id="vehicleInfo"
              placeholder="Марка, модель, рік"
              value={formData.vehicleInfo}
              onChange={(e) => handleInputChange('vehicleInfo', e.target.value)}
              className="border-gray-300 focus:border-[#FFD400] focus:ring-[#FFD400]"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-[#111111]">
              Додаткова інформація
            </Label>
            <Textarea
              id="message"
              placeholder="Побажання щодо часу обслуговування"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="border-gray-300 focus:border-[#FFD400] focus:ring-[#FFD400] resize-none"
              rows={2}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 pt-3">
            <Button
              type="submit"
              className="bg-[#FFD400] text-[#111111] hover:bg-[#FFD400]/90 rounded-full px-6 font-semibold transition-all flex-1"
            >
              Відправити
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleCall}
              className="border-[#FFD400] text-[#FFD400] hover:bg-[#FFD400] hover:text-[#111111] rounded-full px-6 font-semibold transition-all"
            >
              📞 Виклик
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white rounded-full px-6 font-semibold transition-all"
            >
              Скасувати
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}