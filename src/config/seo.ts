export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  metaTags: MetaTag[];
}

export interface ServicesSEOConfig {
  [key: string]: SEOConfig;
}

export interface PageSEOConfig {
  home: SEOConfig;
  about: SEOConfig;
  contact: SEOConfig;
  services: ServicesSEOConfig;
}

export const defaultSEO: SEOConfig = {
  title: "Lotfisco | Expert Comptable et Fiscal à Bruxelles",
  description: "Cabinet d'expertise comptable et fiscale à Bruxelles. Services professionnels pour indépendants, PME et ASBL depuis 1995.",
  keywords: [
    "expert comptable",
    "fiscaliste",
    "comptabilité",
    "fiscalité",
    "Bruxelles",
    "création société",
    "conseil fiscal",
    "PME",
    "indépendant",
    "ASBL"
  ],
  metaTags: [
    {
      property: "og:title",
      content: "Lotfisco | Expert Comptable et Fiscal à Bruxelles"
    },
    {
      property: "og:description",
      content: "Cabinet d'expertise comptable et fiscale à Bruxelles. Services professionnels pour indépendants, PME et ASBL depuis 1995."
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:image",
      content: "https://i.postimg.cc/YCQx9kVn/Lotfisco.png"
    }
  ]
};

export const pageSEO: PageSEOConfig = {
  home: {
    ...defaultSEO
  },
  about: {
    title: "Qui sommes-nous ? | Lotfisco",
    description: "Découvrez Lotfisco, votre cabinet d'expertise comptable et fiscale à Bruxelles. Plus de 25 ans d'expérience au service des entreprises.",
    keywords: [
      "à propos",
      "expertise comptable",
      "cabinet fiscal",
      "Bruxelles",
      "histoire",
      "valeurs",
      "équipe"
    ],
    metaTags: [
      {
        property: "og:title",
        content: "Qui sommes-nous ? | Lotfisco"
      },
      {
        property: "og:description",
        content: "Découvrez Lotfisco, votre cabinet d'expertise comptable et fiscale à Bruxelles. Plus de 25 ans d'expérience au service des entreprises."
      }
    ]
  },
  contact: {
    title: "Contact | Lotfisco",
    description: "Contactez notre cabinet d'expertise comptable et fiscale à Bruxelles. Prenez rendez-vous pour un premier entretien gratuit.",
    keywords: [
      "contact",
      "rendez-vous",
      "devis",
      "expertise comptable",
      "Bruxelles",
      "consultation"
    ],
    metaTags: [
      {
        property: "og:title",
        content: "Contact | Lotfisco"
      },
      {
        property: "og:description",
        content: "Contactez notre cabinet d'expertise comptable et fiscale à Bruxelles. Prenez rendez-vous pour un premier entretien gratuit."
      }
    ]
  },
  services: {
    constitution: {
      title: "Constitution de Société | Lotfisco",
      description: "Accompagnement expert dans la création de votre société à Bruxelles. Conseils personnalisés et suivi complet des démarches administratives.",
      keywords: [
        "création société",
        "constitution entreprise",
        "statuts",
        "démarches administratives",
        "Bruxelles"
      ],
      metaTags: [
        {
          property: "og:title",
          content: "Constitution de Société | Lotfisco"
        },
        {
          property: "og:description",
          content: "Accompagnement expert dans la création de votre société à Bruxelles. Conseils personnalisés et suivi complet des démarches administratives."
        }
      ]
    },
    comptabilite: {
      title: "Services Comptables | Lotfisco",
      description: "Services comptables professionnels pour entreprises et indépendants à Bruxelles. Tenue de comptabilité, reporting et conseils personnalisés.",
      keywords: [
        "comptabilité",
        "tenue comptable",
        "bilan",
        "reporting",
        "Bruxelles"
      ],
      metaTags: [
        {
          property: "og:title",
          content: "Services Comptables | Lotfisco"
        },
        {
          property: "og:description",
          content: "Services comptables professionnels pour entreprises et indépendants à Bruxelles. Tenue de comptabilité, reporting et conseils personnalisés."
        }
      ]
    },
    fiscalite: {
      title: "Services Fiscaux | Lotfisco",
      description: "Expertise fiscale pour entreprises et particuliers à Bruxelles. Optimisation fiscale, déclarations et conseil personnalisé.",
      keywords: [
        "fiscalité",
        "impôts",
        "déclaration fiscale",
        "optimisation fiscale",
        "Bruxelles"
      ],
      metaTags: [
        {
          property: "og:title",
          content: "Services Fiscaux | Lotfisco"
        },
        {
          property: "og:description",
          content: "Expertise fiscale pour entreprises et particuliers à Bruxelles. Optimisation fiscale, déclarations et conseil personnalisé."
        }
      ]
    },
    conseil: {
      title: "Conseil Fiscal | Lotfisco",
      description: "Conseil fiscal professionnel à Bruxelles. Expertise et accompagnement personnalisé pour optimiser votre situation fiscale.",
      keywords: [
        "conseil fiscal",
        "consultation fiscale",
        "optimisation",
        "stratégie fiscale",
        "Bruxelles"
      ],
      metaTags: [
        {
          property: "og:title",
          content: "Conseil Fiscal | Lotfisco"
        },
        {
          property: "og:description",
          content: "Conseil fiscal professionnel à Bruxelles. Expertise et accompagnement personnalisé pour optimiser votre situation fiscale."
        }
      ]
    },
    droit: {
      title: "Droit des Sociétés | Lotfisco",
      description: "Expertise en droit des sociétés à Bruxelles. Accompagnement juridique complet pour votre entreprise.",
      keywords: [
        "droit des sociétés",
        "juridique",
        "conseil juridique",
        "entreprise",
        "Bruxelles"
      ],
      metaTags: [
        {
          property: "og:title",
          content: "Droit des Sociétés | Lotfisco"
        },
        {
          property: "og:description",
          content: "Expertise en droit des sociétés à Bruxelles. Accompagnement juridique complet pour votre entreprise."
        }
      ]
    }
  }
};