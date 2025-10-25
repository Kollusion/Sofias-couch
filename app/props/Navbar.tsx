"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Menu from './Menu';
import { BookingModal } from '@/components/modals/BookingModal';

import { useScrollPosition } from 'react-haiku';
import { MenuIcon, Pencil } from 'lucide-react';

import { useMenuStore } from "@/store/useMenuStore";
import { useBookingStore } from '@/store/useBookingStore';

const Navbar = () => {
    const { openMenu } = useMenuStore();
    const { openModal: openBookingModal } = useBookingStore();

    const [active, setActive] = useState<boolean>(false);
    const [scroll] = useScrollPosition() as [{ x: number, y: number }];

    useEffect(() => {
        if (scroll.y > 10) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    }, [scroll])

    return (
        <>
            <header className={`fixed w-full h-20 z-30 duration-500 ${active ? 'p-0 bg-background' : 'p-6'}`}>
                <nav className='flex justify-between items-center p-6'>
                    <div className='max-lg:hidden'>
                        <Button variant={'secondary'} size={active ? 'lg' : 'default'} className='opacity-100' onClick={openMenu}><MenuIcon /> Меню</Button>
                    </div>
                    <div className='text-3xl font-serif'>
                        Sofia's Couch
                    </div>
                    <div className='flex gap-3'>
                        <Button variant={active ? 'default' : 'secondary'} size={active ? 'lg' : 'default'} className='duration-500' onClick={openBookingModal}><Pencil /> Записаться</Button>
                    </div>
                </nav>
            </header>
            <Menu></Menu>
            <BookingModal></BookingModal>
        </>
    );
};

export default Navbar;