import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education section">
            <div className="container">
                <h2 className="section-title">
                    Education & <span className="gradient-text">Certifications</span>
                </h2>
                <div className="education-content">
                    <div className="education-card glass-card">
                        <div className="education-icon">🎓</div>
                        <h3>Bachelor's in Computer Science</h3>
                        <h4>National University of Computing and Emerging Science (FAST)</h4>
                        <p className="education-location">Karachi, Pakistan</p>
                        <p className="education-status">Final Year Student</p>
                        <div className="education-highlight">
                            <strong>Final Year Project:</strong> Fake News Detection Using Machine Learning And Blockchain
                        </div>
                    </div>

                    <div className="certifications">
                        <h3 className="cert-title">Certifications</h3>
                        <div className="cert-grid">
                            <div className="cert-card glass-card">
                                <div className="cert-icon">🐳</div>
                                <h4>Docker for Beginners</h4>
                                <p>KodeKloud</p>
                            </div>
                            <div className="cert-card glass-card">
                                <div className="cert-icon">☕</div>
                                <h4>Java Programming For Beginners</h4>
                                <p>Simplile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
