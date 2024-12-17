import { SEO } from '../../components/shared';
import { pageSEO } from '../../config/seo';
import { Hero, Expertise, Vision, Commitment } from './components';

const About = () => {
  return (
    <>
      <SEO {...pageSEO.about} />
      <div className="min-h-screen">
        {/* Hero Section with Background Gradient */}
        <div className="bg-gradient-to-r from-[#912c30] to-[#4a1618] text-white">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <Hero />
          </div>
        </div>

        {/* Main Content with Offset Cards */}
        <div className="max-w-7xl mx-auto px-4 -mt-16">
          <div className="space-y-16">
            <Expertise />
            <Vision />
            <Commitment />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;