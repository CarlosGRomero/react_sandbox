import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
    const skillsList = ['JavaScript', 'React', 'CSS', 'HTML', 'TypeScript', "Node", "Express", "Docker", "AWS EC2", "AWS Route 53"];

    return (
        <div className="skills">
            <h2>Skills</h2>
            <ul className="skills-list">
                {skillsList.map((skill, index) => (
                    <li key={index} className="skills-item">{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
