import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center">
            <div className="space-y-4">
                <h1 className="text-6xl font-bold text-primary">404</h1>
                <h2 className="text-2xl font-semibold text-foreground">Страница не найдена</h2>
                <p className="text-muted-foreground">
                    Данный сайт - образец для портфолио kollusion. <br />Вы можете заказать полностью рабочий сайт <Link className="duration-500 hover:underline text-primary" href={'https://kollusion.pro/'}>здесь</Link>
                </p>
                <div className="pt-4 flex gap-3 justify-center">
                    <Button asChild>
                        <a href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Вернуться на главную
                        </a>
                    </Button>
                    <Button variant={'outline'} asChild>
                        <Link href="https://kollusion.pro/">
                            <ShoppingCart />
                            Заказать сайт
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}