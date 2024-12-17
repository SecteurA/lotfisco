import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: "Adresse",
      content: "Avenue Clémenceau 99, 1070 Bruxelles",
    },
    {
      icon: <FaPhone size={20} />,
      title: "Téléphone",
      content: (
        <>
          Bureau: +32 (0)2 414 35 00<br />
          Mobile: +32 (0)472 92 00 00<br />
          Fax: +32 (0)2 414 10 66
        </>
      ),
    },
    {
      icon: <FaEnvelope size={20} />,
      title: "Email",
      content: "contact@lotfisco.be",
    },
    {
      icon: <FaClock size={20} />,
      title: "Heures d'ouverture",
      content: (
        <>
          Lundi - Vendredi: 9h00 - 18h00<br />
          Samedi - Dimanche: Fermé
        </>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h2>
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#912c30] bg-opacity-10 rounded-lg 
              flex items-center justify-center text-[#912c30]">
              {detail.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{detail.title}</h3>
              <p className="text-gray-600">{detail.content}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};