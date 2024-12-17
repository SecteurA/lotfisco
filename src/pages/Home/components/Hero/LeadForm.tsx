import { motion } from 'framer-motion';
import { useState } from 'react';
import { sendLeadEmail } from '../../../../utils/emailjs';
import { Toast } from '../../../../components/shared/Toast';
import { useToast } from '../../../../hooks/useToast';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isVisible, message, type, showToast, hideToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendLeadEmail(formData);
      showToast('Demande envoyée avec succès!', 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
      });
    } catch (error) {
      showToast('Erreur lors de l\'envoi de la demande. Veuillez réessayer.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white/10 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-white/20 w-full max-w-md"
    >
      <h3 className="text-2xl font-bold text-white mb-6">
        Demander un rendez-vous
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom et prénom"
            required
            className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/20 text-white 
              placeholder-gray-100 outline-none focus:border-[#912c30] focus:ring-[#912c30]"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Adresse email"
            required
            className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/20 text-white 
              placeholder-gray-100 outline-none focus:border-[#912c30] focus:ring-[#912c30]"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Numéro de téléphone"
            required
            className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/20 text-white 
              placeholder-gray-100 outline-none focus:border-[#912c30] focus:ring-[#912c30]"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-[#912c30] py-3 px-6 rounded-md font-semibold 
            hover:bg-gray-100 transition duration-300 disabled:opacity-50"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Demander un rendez-vous'}
        </button>
      </form>
      <Toast
        message={message}
        type={type}
        isVisible={isVisible}
        onClose={hideToast}
      />
    </motion.div>
  );
};

export default LeadForm;