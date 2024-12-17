export interface StatProps {
  id: string;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface StatValueProps {
  value: number;
  prefix?: string;
  suffix?: string;
}

export interface SectionHeaderProps {
  title: string;
  description: string;
}

export interface StatisticsContentProps {
  title: string;
  description: string;
  stats: StatProps[];
}