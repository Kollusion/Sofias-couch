import React from 'react';
import Image from 'next/image';
import { Gift, Clock, Heart, Sparkle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GiftCardSection = () => {
    const benefits = [
        {
            icon: <Gift />,
            title: 'Универсальный подарок',
            description: 'Подходит для любого повода: день рождения, юбилей, просто так!',
        },
        {
            icon: <Sparkle />,
            title: 'Роскошный уход',
            description: 'Получатель выберет любую услугу',
        },
        {
            icon: <Clock />,
            title: 'Срок действия — 6 месяцев',
            description: 'Успеет использовать в удобное время без спешки.',
        },
        {
            icon: <Heart />,
            title: 'Эмоции и забота',
            description: 'Подарите не просто услугу — подарите внимание и уход.',
        },
    ];

    return (
        <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Подарочные карты
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Идеальный подарок для тех, кто ценит красоту, уход и время для себя.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-full lg:max-w-md aspect-[3/2] rounded-3xl bg-gradient-to-tr from-background to-accent border-2 border-dashed border-chart-2 flex flex-col items-center justify-center p-6 shadow-lg">
                            <div className="text-center">
                                <Image
                                    src="/icons/mramor_giftbox.png"
                                    alt="Подарочная карта"
                                    width={256}
                                    height={256}
                                    className="w-20 h-20 mx-auto"
                                />
                                <h3 className="text-xl font-bold text-primary">Подарочная карта</h3>
                                <p className="text-primary mt-2">От 1 000 ₽</p>
                                <p className="text-sm text-primary mt-3">
                                    На любую сумму и любую услугу
                                </p>
                            </div>
                            <div className="mt-6 text-xs text-primary/80">
                                Срок действия: 6 месяцев
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:bg-accent transition-colors duration-500"
                                >
                                    <div className="mt-1">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center lg:text-left">
                            <Button size={'xl'}>
                                <Gift /> Купить подарочную карту
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftCardSection;