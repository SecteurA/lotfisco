import { Link } from 'react-router-dom';
import { footerLinks, contactInfo, socialLinks } from './data';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Upper Footer */}
      <div className="bg-gradient-to-r from-[#912c30] to-[#4a1618] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <img 
                src="https://i.postimg.cc/SK5wcckQ/Capture-d-e-cran-2024-12-17-a-07-47-55.webp"
                alt="Lotfisco Logo"
                className="h-12 w-auto"
              />
              <p className="text-gray-100">
                Votre partenaire de confiance en comptabilité et fiscalité depuis 1995. 
                Expertise et professionnalisme au service de votre réussite.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-xl mb-6">Liens rapides</h3>
              <ul className="space-y-4">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-100 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-2">›</span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-xl mb-6">Nos services</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((service) => (
                  <li key={service.path}>
                    <Link
                      to={service.path}
                      className="text-gray-100 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-2">›</span>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold text-xl mb-6">Contact</h3>
              <ul className="space-y-6">
                {contactInfo.map((info) => (
                  <li key={info.label} className="flex items-start space-x-3">
                    <span className="bg-white/10 p-2 rounded-lg">{info.icon}</span>
                    <span className="text-gray-100">{info.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#4a1618] text-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {currentYear} Lotfisco. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-white transition-colors duration-300">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-300">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;