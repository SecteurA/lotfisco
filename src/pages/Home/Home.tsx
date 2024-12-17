import { SEO } from '../../components/shared';
import { pageSEO } from '../../config/seo';
import { Hero, Certification, Services, Statistics, Testimonials } from './components';

const Home = () => {
  return (
    <>
      <SEO {...pageSEO.home} />
      <main>
        <Hero />
        <Certification />
        <Services />
        <Statistics />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;