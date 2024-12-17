import HeroBackground from './HeroBackground';
import HeroSlider from './HeroSlider';
import LeadForm from './LeadForm';

const Hero = () => {
  return (
    <section className="relative min-h-[500px] bg-gradient-to-r from-[#912c30] to-[#4a1618] z-10 overflow-hidden">
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-[440px] items-center">
          {/* Left Column - Slider */}
          <HeroSlider />

          {/* Right Column - Form */}
          <div className="flex justify-center lg:justify-end">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;