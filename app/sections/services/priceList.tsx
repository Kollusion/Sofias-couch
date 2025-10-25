"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { priceData } from '@/data/servicesData';

const isDiscount = (item: PriceItem): item is DiscountItem => {
    return 'discount' in item;
};

const categoryLabels: Record<Category, string> = {
    discounts: 'Скидки',
    nails: 'Ногти',
    hair: 'Волосы',
    face: 'Лицо',
};

const categoryIcons: Record<Category, string> = {
    discounts: '/icons/mramor_percent.png',
    nails: '/icons/mramor_nail.png',
    hair: '/icons/mramor_hair.png',
    face: '/icons/mramor_face.png',
};

const PriceList = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('nails');

    return (
        <>
            <div className="flex flex-wrap justify-center lg:w-2/3 max-lg:px-3 mx-auto">
                {(['discounts', 'nails', 'hair', 'face'] as Category[]).map((category, index, arr) => (
                    <div
                        key={category}
                        className={`flex-1 lg:p-3 border-2 lg:gap-3 flex items-center justify-center relative duration-500 hover:bg-accent cursor-pointer ${activeCategory === category ? 'bg-accent' : ''
                            } ${index === 0 ? 'rounded-l-2xl' : ''} ${index === arr.length - 1 ? 'rounded-r-2xl' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        <Image
                            src={categoryIcons[category]}
                            alt={categoryLabels[category]}
                            width={512}
                            height={512}
                            quality={100}
                            className="w-12 h-12"
                        />
                        <p className="lg:text-2xl max-lg:text-sm max-md:text-xs font-medium">{categoryLabels[category]}</p>
                    </div>
                ))}
            </div>

            <div className="max-w-4xl mx-auto mt-8 max-lg:px-3 min-h-72">
                <Table className='lg:min-w-xl '>
                    <TableCaption>Прайс-лист: {categoryLabels[activeCategory]}</TableCaption>
                    <TableHeader>
                        <TableRow>
                            {activeCategory === 'discounts' ? (
                                <>
                                    <TableHead>Скидка</TableHead>
                                    <TableHead className="text-right">Размер</TableHead>
                                </>
                            ) : (
                                <>
                                    <TableHead>Услуга</TableHead>
                                    <TableHead className="text-right">Цена</TableHead>
                                    <TableHead className="text-right">Время</TableHead>
                                </>
                            )}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {priceData[activeCategory].map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.name}</TableCell>
                                {isDiscount(item) ? (
                                    <TableCell className="text-right">{item.discount}</TableCell>
                                ) : (
                                    <>
                                        <TableCell className="text-right">{item.price}</TableCell>
                                        <TableCell className="text-right">{item.duration}</TableCell>
                                    </>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
};

export default PriceList;