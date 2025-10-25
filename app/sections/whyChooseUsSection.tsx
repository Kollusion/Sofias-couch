import React from 'react';
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { Sparkles, ShieldCheck } from 'lucide-react'

const WhyChooseUsSection = () => {
    const features = [
        {
            icon: <GrUserExpert className='size-6' />,
            title: 'Мастера-профессионалы',
            description: 'Сертифицированные специалисты с опытом от 5 лет и постоянным обучением.',
        },
        {
            icon: <MdOutlineWorkspacePremium className='size-6' />,
            title: 'Премиум-косметика',
            description: 'Работаем только с проверенными брендами: Dior, OPI, Olaplex, SkinCeuticals.',
        },
        {
            icon: <Sparkles className='size-6' />,
            title: 'Уютная атмосфера',
            description: 'Тихо, чисто, ароматно — пространство, где хочется остаться подольше.',
        },
        {
            icon: <ShieldCheck className='size-6' />,
            title: 'Гарантия качества',
            description: 'Если что-то не так — бесплатно исправим в течение 7 дней.',
        },
    ];

    return (
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Почему нас выбирают?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Более 2 500 клиентов доверили нам свою красоту. Вот почему они возвращаются снова и снова.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card hover:bg-accent/30 transition-all duration-300 group"
                        >
                            <div className="mb-4 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-muted-foreground italic max-w-3xl mx-auto">
                        «Здесь не просто делают красиво — здесь заботятся о тебе как о близком человеке.»
                    </p>
                    <p className="mt-2 font-medium text-foreground">— Анна, постоянная клиентка с 2021 года</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUsSection;