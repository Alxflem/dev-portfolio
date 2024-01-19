// SectionGrid.tsx
import React from 'react';

interface SectionGridProps {
  children: React.ReactNode;
}

const SectionGrid: React.FC<SectionGridProps> = ({ children }) => {
  return (
    <div className="columns is-centered">
      <div className="column is-half">
        {React.Children.map(children, (child, index) => (
          <section key={index} className="mb-6 section is-large">
            {child}
          </section>
        ))}
      </div>
    </div>
  );
};

export default SectionGrid;
