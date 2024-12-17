import { MenuItem } from './types';

export const menuItems: MenuItem[] = [
  { title: 'Accueil', path: '/' },
  { title: 'Qui sommes nous ?', path: '/about' },
  {
    title: 'Nos services',
    path: '#',
    isDropdownOnly: true,
    submenu: [
      { title: 'Constitution de société', path: '/services/constitution' },
      { title: 'Comptabilité', path: '/services/comptabilite' },
      { title: 'Fiscalité', path: '/services/fiscalite' },
      { title: 'Conseils fiscaux', path: '/services/conseil' },
      { title: 'Droit de société', path: '/services/droit' },
    ],
  },
  { title: 'Contact', path: '/contact' },
];