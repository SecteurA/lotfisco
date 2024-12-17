import { SEO } from '../../components/shared';
import { pageSEO } from '../../config/seo';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';

const Contact = () => {
  return (
    <>
      <SEO {...pageSEO.contact} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#912c30] to-[#4a1618] text-white">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contactez-nous</h1>
                <p className="text-xl text-gray-100 max-w-2xl pb-5">
                  Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions 
                  et vous accompagner dans vos démarches comptables et fiscales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 -mt-16 mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;