// MainPage.tsx
import React from 'react';
import AboutSection from './About-section';
import ExperienceSection from './Experience-section';
import WorkSection from './Work-section';
import ContactSection from './Contact-section';
import SectionGrid from './SectionGrid';

const MainPage: React.FC = () => {
    return (
      <div className="container" style={{ marginTop: '80px' }}>
        <SectionGrid>
          <AboutSection />
          <ExperienceSection />
          <WorkSection />
          <ContactSection />
        </SectionGrid>
      </div>
    );
  };
  
  export default MainPage;