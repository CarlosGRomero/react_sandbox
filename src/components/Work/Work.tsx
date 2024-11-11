import React from 'react';
import './Work.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Work: React.FC = () => {
    const workList = [
        { company: 'Dell', role: 'Principle Software Engineer', duration: 'Nov 2019 - Oct 2024' },
        { company: 'General Motors', role: 'Senior Software Engineer', duration: 'Jan 2017 - March 2019' },
        { company: 'Viking Cold Solutions', role: 'Software Engineer', duration: 'May 2016 - Dec 2016' },
        { company: 'Harris County IT', role: 'Software Engineer Intern', duration: 'Jan 2016 - May 2016' },
    ];

    return (
        <div className="work">
            <h2 className="mb-4">Work Experience</h2>
            <div className="row">
                {workList.map((work, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{work.company}</h5>
                                <p className="card-text">
                                    {work.role}<br />
                                    <small className="text-muted">{work.duration}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
