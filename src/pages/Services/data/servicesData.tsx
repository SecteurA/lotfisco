import { ServicesDataType } from '../types';
import { serviceImages } from '../../../config/images';
import { FaBuilding, FaCalculator, FaChartLine, FaLightbulb, FaBalanceScale, 
  FaCheckCircle, FaClipboardList, FaClock, FaHandshake, FaShieldAlt, 
  FaUserTie, FaFileContract } from 'react-icons/fa';

export const servicesData: ServicesDataType = {
  constitution: {
    hero: {
      title: "Constitution de société",
      description: "Un accompagnement expert pour créer votre entreprise en toute sérénité. Nous vous guidons à chaque étape, de l'étude de faisabilité jusqu'à l'immatriculation.",
      image: serviceImages.constitution,
    },
    features: [
      {
        title: "Analyse personnalisée",
        description: "Étude approfondie de votre projet et de vos besoins spécifiques",
        icon: <FaLightbulb size={24} />
      },
      {
        title: "Accompagnement complet",
        description: "Support à chaque étape de la création de votre société",
        icon: <FaHandshake size={24} />
      },
      {
        title: "Expertise juridique",
        description: "Conseils sur la forme juridique la plus adaptée",
        icon: <FaBalanceScale size={24} />
      }
    ],
    process: [
      {
        title: "Consultation initiale",
        description: "Analyse de votre projet et de vos objectifs pour définir la meilleure structure juridique.",
        stepNumber: 1
      },
      {
        title: "Préparation des documents",
        description: "Rédaction des statuts et préparation de tous les documents nécessaires.",
        stepNumber: 2
      },
      {
        title: "Démarches administratives",
        description: "Gestion de toutes les formalités auprès des organismes compétents.",
        stepNumber: 3
      }
    ],
    benefits: [
      {
        title: "Gain de temps",
        description: "Évitez les erreurs et les délais inutiles",
        icon: <FaClock size={24} />
      },
      {
        title: "Sécurité juridique",
        description: "Conformité garantie avec la législation en vigueur",
        icon: <FaShieldAlt size={24} />
      },
      {
        title: "Suivi personnalisé",
        description: "Un expert dédié à votre projet",
        icon: <FaUserTie size={24} />
      }
    ]
  },
  comptabilite: {
    hero: {
      title: "Comptabilité",
      description: "Une gestion comptable professionnelle et rigoureuse pour votre entreprise. Nous assurons la tenue complète de votre comptabilité et le suivi de vos obligations légales.",
      image: serviceImages.comptabilite,
    },
    features: [
      {
        title: "Tenue comptable",
        description: "Gestion complète de votre comptabilité au quotidien",
        icon: <FaCalculator size={24} />
      },
      {
        title: "Reporting mensuel",
        description: "Suivi détaillé de vos performances financières",
        icon: <FaChartLine size={24} />
      },
      {
        title: "Conformité légale",
        description: "Respect des obligations comptables et fiscales",
        icon: <FaCheckCircle size={24} />
      }
    ],
    process: [
      {
        title: "Collecte des documents",
        description: "Organisation et classement de vos pièces comptables.",
        stepNumber: 1
      },
      {
        title: "Traitement comptable",
        description: "Saisie et analyse de vos opérations financières.",
        stepNumber: 2
      },
      {
        title: "Reporting et conseils",
        description: "Production des états financiers et recommandations.",
        stepNumber: 3
      }
    ],
    benefits: [
      {
        title: "Expertise professionnelle",
        description: "Une équipe qualifiée à votre service",
        icon: <FaUserTie size={24} />
      },
      {
        title: "Gestion optimisée",
        description: "Meilleure visibilité sur votre activité",
        icon: <FaChartLine size={24} />
      },
      {
        title: "Conformité assurée",
        description: "Respect des délais et des obligations",
        icon: <FaClipboardList size={24} />
      }
    ]
  },
  fiscalite: {
    hero: {
      title: "Fiscalité",
      description: "Optimisez votre situation fiscale avec nos experts. Nous vous accompagnons dans vos déclarations et vous conseillons pour une gestion fiscale optimale.",
      image: serviceImages.fiscalite,
    },
    features: [
      {
        title: "Optimisation fiscale",
        description: "Stratégies pour minimiser votre charge fiscale",
        icon: <FaCalculator size={24} />
      },
      {
        title: "Déclarations fiscales",
        description: "Préparation et suivi de vos obligations déclaratives",
        icon: <FaFileContract size={24} />
      },
      {
        title: "Conseil fiscal",
        description: "Accompagnement personnalisé selon vos besoins",
        icon: <FaLightbulb size={24} />
      }
    ],
    process: [
      {
        title: "Analyse fiscale",
        description: "Évaluation de votre situation fiscale actuelle.",
        stepNumber: 1
      },
      {
        title: "Optimisation",
        description: "Identification des opportunités d'optimisation fiscale.",
        stepNumber: 2
      },
      {
        title: "Mise en œuvre",
        description: "Application des stratégies fiscales recommandées.",
        stepNumber: 3
      }
    ],
    benefits: [
      {
        title: "Économies fiscales",
        description: "Optimisation de votre charge fiscale",
        icon: <FaCalculator size={24} />
      },
      {
        title: "Tranquillité d'esprit",
        description: "Gestion professionnelle de vos obligations",
        icon: <FaShieldAlt size={24} />
      },
      {
        title: "Conseil stratégique",
        description: "Accompagnement dans vos décisions",
        icon: <FaLightbulb size={24} />
      }
    ]
  },
  conseil: {
    hero: {
      title: "Conseil fiscal",
      description: "Des conseils fiscaux stratégiques pour optimiser votre situation. Notre expertise au service de vos décisions importantes.",
      image: serviceImages.conseil,
    },
    features: [
      {
        title: "Conseil stratégique",
        description: "Orientation dans vos choix fiscaux",
        icon: <FaLightbulb size={24} />
      },
      {
        title: "Analyse d'impact",
        description: "Évaluation des conséquences fiscales",
        icon: <FaChartLine size={24} />
      },
      {
        title: "Solutions sur mesure",
        description: "Recommandations adaptées à votre situation",
        icon: <FaHandshake size={24} />
      }
    ],
    process: [
      {
        title: "Diagnostic initial",
        description: "Analyse approfondie de votre situation fiscale.",
        stepNumber: 1
      },
      {
        title: "Élaboration stratégique",
        description: "Développement de solutions personnalisées.",
        stepNumber: 2
      },
      {
        title: "Accompagnement",
        description: "Suivi et ajustement des stratégies mises en place.",
        stepNumber: 3
      }
    ],
    benefits: [
      {
        title: "Expertise pointue",
        description: "Conseils basés sur une expertise solide",
        icon: <FaUserTie size={24} />
      },
      {
        title: "Vision claire",
        description: "Meilleure compréhension des enjeux",
        icon: <FaLightbulb size={24} />
      },
      {
        title: "Décisions éclairées",
        description: "Choix optimaux pour votre situation",
        icon: <FaCheckCircle size={24} />
      }
    ]
  },
  droit: {
    hero: {
      title: "Droit des sociétés",
      description: "Une expertise juridique complète pour votre entreprise. Nous vous accompagnons dans tous les aspects du droit des sociétés.",
      image: serviceImages.droit,
    },
    features: [
      {
        title: "Conseil juridique",
        description: "Expertise en droit des sociétés",
        icon: <FaBalanceScale size={24} />
      },
      {
        title: "Gestion administrative",
        description: "Suivi des obligations légales",
        icon: <FaBuilding size={24} />
      },
      {
        title: "Documentation juridique",
        description: "Rédaction et révision des actes",
        icon: <FaFileContract size={24} />
      }
    ],
    process: [
      {
        title: "Analyse juridique",
        description: "Évaluation de votre situation et de vos besoins.",
        stepNumber: 1
      },
      {
        title: "Conseil et orientation",
        description: "Proposition de solutions adaptées.",
        stepNumber: 2
      },
      {
        title: "Mise en application",
        description: "Exécution et suivi des démarches juridiques.",
        stepNumber: 3
      }
    ],
    benefits: [
      {
        title: "Sécurité juridique",
        description: "Protection de vos intérêts",
        icon: <FaShieldAlt size={24} />
      },
      {
        title: "Conformité légale",
        description: "Respect des obligations sociétaires",
        icon: <FaCheckCircle size={24} />
      },
      {
        title: "Support continu",
        description: "Accompagnement dans la durée",
        icon: <FaHandshake size={24} />
      }
    ]
  }
};