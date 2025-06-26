import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/components/ServicesPreview';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Team from '@/components/Team';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesPreview />
        <WhyChooseUs />
        <Testimonials />
        {/* Add Team page route rendering if needed */}
      </main>
      <Footer />
    </div>
  );
}
