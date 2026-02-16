import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title">
                    Work <span className="gradient-text">Experience</span>
                </h2>
                <div className="timeline">
                    <div className="timeline-item glass-card">
                        <div className="timeline-icon">💼</div>
                        <div className="timeline-content">
                            <div className="timeline-date">Aug 2024 - Sept 2024</div>
                            <h3>Web Intern</h3>
                            <h4>Information Technology Services (I.T.S)</h4>
                            <ul>
                                <li>Used PHP for creating dynamic functionalities and ensuring smooth back-end operations</li>
                                <li>Assisted in maintaining and optimizing websites hosting research articles, ensuring accuracy, functionality, and user-friendly experiences</li>
                                <li>Collaborated with the development team to troubleshoot and resolve technical issues related to website content and layout</li>
                            </ul>
                            <div className="experience-tags">
                                <span>PHP</span>
                                <span>Web Development</span>
                                <span>Backend</span>
                                <span>Troubleshooting</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
