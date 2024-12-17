import { useParams } from 'react-router-dom';
import { SEO } from '../../components/shared';
import { servicesData } from './data/servicesData';
import { pageSEO } from '../../config/seo';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Process from './components/Process/Process';
import Benefits from './components/Benefits/Benefits';
import CallToAction from './components/CallToAction/CallToAction';

const Services = () => {
  const { serviceId = 'constitution' } = useParams<{ serviceId: string }>();
  const serviceData = servicesData[serviceId as keyof typeof servicesData] || servicesData.constitution;
  const seoData = pageSEO.services[serviceId as keyof typeof pageSEO.services] || pageSEO.services.constitution;

  return (
    <>
      <SEO {...seoData} />
      <div className="min-h-screen">
        <div className="bg-gradient-to-r from-[#912c30] to-[#4a1618] text-white">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <Hero {...serviceData.hero} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 -mt-16">
          <div className="space-y-16 mb-20">
            <Features features={serviceData.features} />
            <Process steps={serviceData.process} />
            <Benefits benefits={serviceData.benefits} />
            <CallToAction />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;