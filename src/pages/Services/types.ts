import { ReactNode } from 'react';

export interface HeroProps {
  title: string;
  description: string;
  image: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ProcessStepProps {
  title: string;
  description: string;
  stepNumber: number;
}

export interface BenefitProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ServiceData {
  hero: HeroProps;
  features: FeatureProps[];
  process: ProcessStepProps[];
  benefits: BenefitProps[];
}

export interface ServicesDataType {
  [key: string]: ServiceData;
}