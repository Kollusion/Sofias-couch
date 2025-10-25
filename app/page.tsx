import HeroSection from "./sections/heroSection";
import ServicesSection from "./sections/servicesSection";
import GiftCardSection from "./sections/giftCardSection";
import WhyChooseUsSection from "./sections/whyChooseUsSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <GiftCardSection />
            <WhyChooseUsSection />
        </>
    );
}
