import { motion } from 'framer-motion';

const TermsOfUse = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose max-w-none"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions d'utilisation</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptation des conditions</h2>
            <p className="text-gray-600 mb-4">
              En accédant et en utilisant le site web de LOTFISCO FIDUCIAIRE, vous acceptez 
              d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, 
              veuillez ne pas utiliser notre site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services proposés</h2>
            <p className="text-gray-600 mb-4">
              LOTFISCO FIDUCIAIRE fournit des services de comptabilité, fiscalité et conseil. 
              Les informations présentées sur ce site sont à titre informatif uniquement et ne 
              constituent pas un conseil professionnel.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
            <p className="text-gray-600 mb-4">
              Tout le contenu présent sur ce site (textes, images, logos, etc.) est la propriété 
              exclusive de LOTFISCO FIDUCIAIRE et est protégé par les lois sur la propriété 
              intellectuelle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Responsabilité</h2>
            <p className="text-gray-600 mb-4">
              LOTFISCO FIDUCIAIRE s'efforce de maintenir les informations de ce site à jour, 
              mais ne peut garantir leur exactitude complète. Nous nous réservons le droit de 
              modifier ces conditions à tout moment.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfUse;