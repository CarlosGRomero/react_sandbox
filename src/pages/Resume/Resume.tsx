import React from 'react';
import Education from '../../components/Education/Education';
import Work from '../../components/Work/Work';
import Skills from '../../components/Skills/Skills';
import './Resume.css';

const Resume: React.FC = () => {
    return (
        <div className="resume container">
            <h1>Resume</h1>
            <Education />
            <Work />
            <Skills />
        </div>
    );
};

export default Resume;
