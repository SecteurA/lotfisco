import { DecorativeElements } from './components/DecorativeElements';
import { SectionTitle } from '../../../../components/shared';
import { StatCard } from './components/StatCard';
import { statistics } from './data';

export const Statistics = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#912c30] to-[#4a1618] py-24">
      <DecorativeElements />

      <div className="relative max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="Notre expertise en chiffres"
          subtitle="Depuis 1995, LOTFISCO FIDUCIAIRE accompagne avec succès les entreprises 
            et les indépendants dans leur gestion financière."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;