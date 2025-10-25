type Category = 'discounts' | 'nails' | 'hair' | 'face';

interface BaseItem {
    id: string;
    name: string;
}

interface DiscountItem extends BaseItem {
    discount: string;
}

interface ServiceItem extends BaseItem {
    price: string;
    duration: string;
}

type PriceItem = DiscountItem | ServiceItem;