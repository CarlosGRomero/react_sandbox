import React from 'react';
import './Education.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import university1 from '../../assets/university_of_houston.png';
import university2 from '../../assets/university_of_texas.svg';

const Education: React.FC = () => {
    const educationList = [
        { 
            school: 'University of Houston', 
            degree: 'B.Sc. Computer Science', 
            year: 'Graduated Fall 2016', 
            image: university1 
        },
        { 
            school: 'University of Texas at Austin', 
            degree: 'B.Sc. Computer Science', 
            year: 'Attended 2011-2014', 
            image: university2 
        }
    ];

    return (
        <div className="education">
            <h2 className="mb-4">Education</h2>
            <div className="row">
                {educationList.map((edu, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{edu.school}</h5>
                                <p className="card-text">
                                    {edu.degree}<br />
                                    <small className="text-muted">{edu.year}</small>
                                </p>
                                <img src={edu.image} alt={edu.school} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
