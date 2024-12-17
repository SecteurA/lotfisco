import { ServiceProps } from './types';
import { serviceImages } from '../../../../config/images';

export const services: ServiceProps[] = [
  {
    id: 'constitution',
    title: 'Constitution de société',
    description: 'Accompagnement complet dans la création de votre entreprise, de l\'étude de faisabilité aux démarches administratives.',
    path: '/services/constitution',
    imageSrc: serviceImages.constitution,
  },
  {
    id: 'comptabilite',
    title: 'Comptabilité',
    description: 'Tenue complète de votre comptabilité, suivi régulier et conseils personnalisés pour optimiser votre gestion.',
    path: '/services/comptabilite',
    imageSrc: serviceImages.comptabilite,
  },
  {
    id: 'fiscalite',
    title: 'Fiscalité',
    description: 'Optimisation fiscale, déclarations fiscales et accompagnement dans vos relations avec l\'administration.',
    path: '/services/fiscalite',
    imageSrc: serviceImages.fiscalite,
  },
  {
    id: 'conseil',
    title: 'Conseil fiscaux',
    description: 'Conseils stratégiques pour optimiser votre situation fiscale et prendre les meilleures décisions pour votre entreprise.',
    path: '/services/conseil',
    imageSrc: serviceImages.conseil,
  },
  {
    id: 'droit',
    title: 'Droit de société',
    description: 'Assistance juridique complète pour toutes les questions relatives au droit des sociétés.',
    path: '/services/droit',
    imageSrc: serviceImages.droit,
  },
];