import React from 'react';
import { Button } from '@/components/ui/button';
import { ListCheck, Pencil } from 'lucide-react';
import Image from 'next/image';
import { FaInstagram, FaVk } from "react-icons/fa6";

const HeroSection = () => {
    return (
        <section className='h-screen w-full lg:p-6'>
            <div className='h-full w-full lg:rounded-2xl max-lg:rounded-b-3xl bg-gradient-to-br from-accent to-chart-1/70 p-3 lg:p-12 flex max-lg:flex-col justify-center lg:justify-between items-center gap-6 overflow-clip relative'>
                <div className='lg:flex-1 w-min space-y-8 max-lg:text-center'>
                    <h1 className='text-3xl lg:text-7xl font-bold font-sans'>
                        Искусство, рожденное в атмосфере комфорта
                    </h1>
                    <h2 className='text-accent-foreground max-w-xl lg:text-lg max-lg:text-sm font-medium'>
                        Пространство, где рождается красота и комфорт
                        Философия заботы о вашей естественной элегантности
                        Мастерство, вдохновленное вниманием к деталям
                    </h2>
                    <div className='flex gap-3 max-lg:flex-col'>
                        <Button size={'xl'} className='w-sm'><Pencil /> Записаться</Button>
                        <Button size={'xl'} variant={'secondary'}><ListCheck /> Услуги мастера</Button>
                    </div>
                    <div className='flex gap-3 max-lg:justify-center w-full'>
                        <Button variant={'ghost'}><FaInstagram className='text-primary' /> Мы в Instagram</Button>
                        <Button variant={'ghost'}><FaVk className='text-primary' /> Мы в VK</Button>
                    </div>
                </div>
                <div className='flex-1 relative max-lg:hidden h-full '>
                    <Image src='/background/hero/hand.png' alt='hand' width={1020} height={1020} quality={100} className='absolute -bottom-70 scale-75'></Image>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;