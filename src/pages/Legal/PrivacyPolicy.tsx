import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose max-w-none"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              LOTFISCO FIDUCIAIRE s'engage à protéger la vie privée des utilisateurs de son site web 
              et de ses services. Cette politique de confidentialité explique comment nous collectons, 
              utilisons et protégeons vos données personnelles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Collecte des données</h2>
            <p className="text-gray-600 mb-4">
              Nous collectons uniquement les données nécessaires à la fourniture de nos services :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Informations de contact (nom, email, téléphone)</li>
              <li>Informations professionnelles</li>
              <li>Données de navigation sur notre site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Utilisation des données</h2>
            <p className="text-gray-600 mb-4">
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Fournir nos services comptables et fiscaux</li>
              <li>Communiquer avec vous concernant nos services</li>
              <li>Améliorer notre site web et nos services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Protection des données</h2>
            <p className="text-gray-600 mb-4">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données 
              contre tout accès non autorisé, modification, divulgation ou destruction.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;