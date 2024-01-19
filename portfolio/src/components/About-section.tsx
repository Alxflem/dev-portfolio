// AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div id="about" className="content-box">
      <div className="card">
        <div className="card-content has-text-centered">
          <h2 className="title">About Me</h2>
          <p>
            Welcome to my portfolio! I am a passionate developer with a focus on creating
            meaningful and impactful software solutions.
          </p>
          <p>
            I specialize in [Your Technology Stack]. Feel free to explore my experiences,
            projects, and get in touch if you have any questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
