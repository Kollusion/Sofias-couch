import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { currentYear, navigation, contactInfo, workingHours } from '@/data/salonData';

const Footer = () => {

    return (
        <footer className="bg-muted/30 border-t border-border mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-4 font-serif text-3xl">
                            Sofia's Couch
                        </div>
                        <p className="text-muted-foreground max-w-md">
                            Премиальный салон красоты в центре Москвы. Профессиональный уход за волосами, ногтями и кожей лица с 2018 года.
                        </p>
                        <div className="mt-4 flex space-x-4">
                            {contactInfo.socials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label={social.name}
                                >
                                    <Button variant={'outline'} size={'icon-sm'}><social.icon /></Button>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Услуги</h3>
                        <ul className="space-y-2">
                            {navigation.services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Салон</h3>
                        <ul className="space-y-2">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Контакты</h3>
                        <address className="not-italic text-muted-foreground space-y-2">
                            <p className="flex items-start">
                                <span className="mr-2">📍</span>
                                <span>{contactInfo.address}</span>
                            </p>
                            <p>
                                <Link
                                    href={`tel:${contactInfo.phone.replace(/\s|\(|\)|-/g, '')}`}
                                    className="hover:text-primary transition-colors"
                                >
                                    📞 {contactInfo.phone}
                                </Link>
                            </p>
                            <p>
                                <Link
                                    href={`mailto:${contactInfo.email}`}
                                    className="hover:text-primary transition-colors"
                                >
                                    ✉️ {contactInfo.email}
                                </Link>
                            </p>
                        </address>

                        <div className="mt-4">
                            <h4 className="font-medium text-foreground">Режим работы:</h4>
                            <ul className="mt-1 space-y-1 text-muted-foreground">
                                {workingHours.map((item) => (
                                    <li key={item.day} className="flex justify-between">
                                        <span>{item.day}</span>
                                        <span>{item.hours}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-6 text-center text-sm text-muted-foreground">
                    <p>
                        © {currentYear} Салон красоты «Sofia's Couch». Все права защищены.
                    </p>
                    <p className="mt-1">
                        ИП Иванова А.С. | ОГРНИП 123456789012345 | Лицензия № Л-12345 от 01.01.2020
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;