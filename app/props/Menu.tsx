import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigation } from '@/data/salonData';

import { useMenuStore } from "@/store/useMenuStore";

const Menu = () => {
    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    const { isOpen, closeMenu } = useMenuStore();

    return (
        <div className={`fixed top-0 left-0 w-full h-full duration-700 ${isOpen ? 'bg-black/50' : 'bg-black/0 pointer-events-none'} z-40`} onClick={closeMenu}>
            <div className={`lg:w-md h-full bg-background lg:rounded-r-2xl duration-500 p-6 ${isOpen ? '' : '-translate-x-full'}`} onClick={handleContentClick}>
                <div className='flex justify-between items-center'>
                    <p className='text-3xl font-bold'>Меню</p>
                    <Button variant={'ghost'} size={'icon'} onClick={closeMenu}><X /></Button>
                </div>

                <div className='flex flex-col justify-start gap-3 mt-6 h-full'>
                    <p className='font-medium'>Услуги</p>
                    {navigation.services.map((item) => (
                        <Button key={item.href} size={'xl'}>{item.name}</Button>
                    ))}

                    <p className='font-medium mt-3'>Салон</p>
                    {navigation.company.map((item) => (
                        <Button key={item.href} size={'lg'} variant={'secondary'}>{item.name}</Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;