import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import BookingWidget from "@/components/BookingWidget";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookingBar from "@/components/MobileBookingBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TreatmentsSection />
        <WhyChooseUsSection />
        <BookingWidget />
        <ExperienceSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBookingBar />
    </div>
  );
};

export default Index;
