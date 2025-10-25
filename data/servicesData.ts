export const priceData: Record<Category, PriceItem[]> = {
    discounts: [
        { id: 'd1', name: 'Запись онлайн', discount: '10%' },
        { id: 'd2', name: 'Первый визит', discount: '15%' },
        { id: 'd3', name: 'Приведи друга — получи скидку', discount: '20%' },
    ],
    nails: [
        // === МАНИКЮР ===
        { id: 'n1', name: 'Маникюр классический', price: '1500 ₽', duration: '60 мин' },
        { id: 'n2', name: 'Маникюр аппаратный', price: '1800 ₽', duration: '75 мин' },
        { id: 'n3', name: 'Покрытие гель-лаком', price: '1200 ₽', duration: '45 мин' },
        { id: 'n4', name: 'Укрепление ногтей (база + топ)', price: '2000 ₽', duration: '90 мин' },
        { id: 'n5', name: 'Снятие гель-лака', price: '300 ₽', duration: '15 мин' },
        { id: 'n6', name: 'Коррекция наращивания', price: '2500 ₽', duration: '120 мин' },
        { id: 'n7', name: 'Дизайн ногтей (1 элемент)', price: '300 ₽', duration: '20 мин' },

        // === ПЕДИКЮР ===
        { id: 'p1', name: 'Педикюр классический', price: '2000 ₽', duration: '75 мин' },
        { id: 'p2', name: 'Педикюр аппаратный', price: '2500 ₽', duration: '90 мин' },
        { id: 'p3', name: 'Медицинский педикюр', price: '3000 ₽', duration: '120 мин' },
        { id: 'p4', name: 'SPA-педикюр с парафином', price: '3500 ₽', duration: '120 мин' },
        { id: 'p5', name: 'Покрытие стоп гель-лаком', price: '1500 ₽', duration: '45 мин' },
    ],
    hair: [
        { id: 'h1', name: 'Стрижка женская', price: '2500 ₽', duration: '60 мин' },
        { id: 'h2', name: 'Стрижка мужская', price: '1500 ₽', duration: '45 мин' },
        { id: 'h3', name: 'Окрашивание корней', price: '3000 ₽', duration: '90 мин' },
        { id: 'h4', name: 'Полное окрашивание', price: '4500 ₽', duration: '120 мин' },
        { id: 'h5', name: 'Укладка', price: '1200 ₽', duration: '30 мин' },
        { id: 'h6', name: 'Кератиновое выпрямление', price: '6000 ₽', duration: '180 мин' },
        { id: 'h7', name: 'Ламинирование волос', price: '3500 ₽', duration: '90 мин' },
        { id: 'h8', name: 'Мелирование (до 30 прядей)', price: '5000 ₽', duration: '150 мин' },
        { id: 'h9', name: 'Мужская борода — стрижка + укладка', price: '800 ₽', duration: '20 мин' },
    ],
    face: [
        { id: 'f1', name: 'Чистка лица (механическая)', price: '2800 ₽', duration: '75 мин' },
        { id: 'f2', name: 'Химический пилинг (миндальный)', price: '2200 ₽', duration: '45 мин' },
        { id: 'f3', name: 'Мезотерапия лица', price: '4000 ₽', duration: '60 мин' },
        { id: 'f4', name: 'Ботокс (1 зона)', price: '5000 ₽', duration: '30 мин' },
        { id: 'f5', name: 'Уходовая маска + массаж', price: '1000 ₽', duration: '20 мин' },
        { id: 'f6', name: 'RF-лифтинг лица', price: '3500 ₽', duration: '50 мин' },
        { id: 'f7', name: 'Плазмолифтинг', price: '6000 ₽', duration: '60 мин' },
        { id: 'f8', name: 'Комплексный уход (чистка + маска)', price: '3200 ₽', duration: '90 мин' },
    ],
};


export const nailServices = [
    { id: "n1", name: "Маникюр классический", duration: 60 },
    { id: "n2", name: "Маникюр аппаратный", duration: 75 },
    { id: "n3", name: "Покрытие гель-лаком", duration: 45 },
    { id: "p1", name: "Педикюр классический", duration: 75 },
    { id: "p2", name: "Педикюр аппаратный", duration: 90 },
];