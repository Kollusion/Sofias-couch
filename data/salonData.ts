import { FaInstagram, FaTelegram, FaVk, FaWhatsapp } from 'react-icons/fa6';
export const currentYear = new Date().getFullYear();

export const navigation = {
    services: [
        { name: 'Маникюр и педикюр', href: '/uslugi/nogti' },
        { name: 'Парикмахерские услуги', href: '/uslugi/volosy' },
        { name: 'Уход за лицом', href: '/uslugi/lico' },
    ],
    company: [
        { name: 'О салоне', href: '/o-salone' },
        { name: 'Наши мастера', href: '/masters' },
        { name: 'Подарочные карты', href: '/gift-cards' },
        { name: 'Акции', href: '/akcii' },
    ],
    legal: [
        { name: 'Политика конфиденциальности', href: '/privacy' },
        { name: 'Пользовательское соглашение', href: '/terms' },
        { name: 'Реквизиты', href: '/requisites' },
        { name: 'Документы', href: '/documents' },
    ],
};

export const contactInfo = {
    address: 'г. Москва, ул. Примерная, д. 10, ТЦ «Красота», 3 этаж',
    phone: '+7 (495) 123-45-67',
    email: 'info@sofias-couch.ru',
    socials: [
        { name: 'Instagram', href: 'https://instagram.com/example', icon: FaInstagram },
        { name: 'WhatsApp', href: 'https://wa.me/74951234567', icon: FaWhatsapp },
        { name: 'Telegram', href: 'https://t.me/example', icon: FaTelegram },
        { name: 'VK', href: 'https://t.me/example', icon: FaVk },
    ],
};

export const workingHours = [
    { day: 'Пн–Пт', hours: '10:00 – 21:00' },
    { day: 'Сб–Вс', hours: '10:00 – 20:00' },
];