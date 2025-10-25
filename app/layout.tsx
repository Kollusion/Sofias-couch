import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./props/Navbar";
import Footer from "./props/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: {
        template: "%s | Салон красоты «Sofia's Couch»",
        default: "Салон красоты «Sofia's Couch» — уход за волосами, ногтями и лицом в Москве",
    },
    description:
        "Премиальный салон красоты в центре Москвы. Маникюр, стрижки, уход за лицом, SPA-процедуры. Онлайн-запись. Подарочные карты. Акции.",
    keywords: [
        "салон красоты Москва",
        "маникюр",
        "стрижка",
        "уход за лицом",
        "подарочная карта салон красоты",
        "акции салон красоты",
    ],
    authors: [{ name: "Салон красоты «Sofia's Couch»", url: "https://sofias-couch.ru" }],
    creator: "Салон красоты «Sofia's Couch»",
    publisher: "Салон красоты «Sofia's Couch»",
    openGraph: {
        type: "website",
        locale: "ru_RU",
        url: "https://sofias-couch.ru",
        title: "Салон красоты «Sofia's Couch» — уход за волосами, ногтями и лицом в Москве",
        description:
            "Премиальный салон красоты в центре Москвы. Маникюр, стрижки, уход за лицом, SPA-процедуры. Онлайн-запись. Подарочные карты. Акции.",
        siteName: "Салон красоты «Sofia's Couch»",
        images: [
            {
                url: "https://sofias-couch.ru/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Салон красоты «Sofia's Couch» — интерьер и услуги",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Салон красоты «Sofia's Couch» — уход за волосами, ногтями и лицом в Москве",
        description:
            "Премиальный салон красоты в центре Москвы. Маникюр, стрижки, уход за лицом, SPA-процедуры.",
        images: ["https://sofias-couch.ru/og-image.jpg"],
        creator: "@mramor_salon",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://sofias-couch.ru",
    },
    category: "beauty, health",

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },

    other: {
        "yandex-verification": "ваш_код_яндекса",
        "google-site-verification": "ваш_код_google",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Салон красоты «Sofia's Couch»",
    image: "https://sofias-couch.ru/logo.svg",
    url: "https://sofias-couch.ru",
    telephone: "+74951234567",
    address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Примерная, д. 10, ТЦ «Красота», 3 этаж",
        addressLocality: "Москва",
        postalCode: "123456",
        addressCountry: "RU",
    },
    priceRange: "₽₽₽",
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "21:00",
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "10:00",
            closes: "20:00",
        },
    ],
    geo: {
        "@type": "GeoCoordinates",
        latitude: 55.7558,
        longitude: 37.6176,
    },
    sameAs: [
        "https://instagram.com/mramor_salon",
        "https://wa.me/74951234567",
        "https://t.me/mramor_salon",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}