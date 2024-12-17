import emailjs from '@emailjs/browser';

const SERVICE_ID = 'idyahia@gmail.com';
const TEMPLATE_ID_CONTACT = 'template_b8c3pw9';
const TEMPLATE_ID_LEAD = 'template_zn76vom';
const PUBLIC_KEY = 'CEWcYLFQGRAzzGegM';

export const sendContactEmail = async (formData: any) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_CONTACT,
      formData,
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const sendLeadEmail = async (formData: any) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_LEAD,
      formData,
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    throw error;
  }
};