import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax, FaLinkedin, FaClock } from 'react-icons/fa';

export const footerLinks = {
  quickLinks: [
    { title: 'Accueil', path: '/' },
    { title: 'Qui sommes nous ?', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ],
  services: [
    { title: 'Constitution de société', path: '/services/constitution' },
    { title: 'Comptabilité', path: '/services/comptabilite' },
    { title: 'Fiscalité', path: '/services/fiscalite' },
    { title: 'Conseil fiscaux', path: '/services/conseil' },
    { title: 'Droit de société', path: '/services/droit' },
  ],
};

export const contactInfo = [
  {
    label: 'address',
    icon: <FaMapMarkerAlt size={16} />,
    value: 'Avenue Clémenceau 99, 1070 Bruxelles',
  },
  {
    label: 'mobile',
    icon: <FaPhone size={16} />,
    value: '+32 (0)472 92 00 00',
  },
  {
    label: 'phone',
    icon: <FaPhone size={16} />,
    value: '+32 (0)2 414 35 00',
  },
  {
    label: 'fax',
    icon: <FaFax size={16} />,
    value: '+32 (0)2 414 10 66',
  },
  {
    label: 'email',
    icon: <FaEnvelope size={16} />,
    value: 'contact@lotfisco.be',
  },
  {
    label: 'hours',
    icon: <FaClock size={16} />,
    value: (
      <>
        Lundi à Jeudi : 10h00 - 17h00<br />
        Vendredi : 10h00 - 13h00<br />
        Samedi - Dimanche : Fermé
      </>
    ),
  },
];

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/lotfisco-fiduciaire/?originalSubdomain=ae',
    icon: <FaLinkedin size={20} />,
  },
];