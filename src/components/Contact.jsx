import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title">
                    Get In <span className="gradient-text">Touch</span>
                </h2>
                <div className="contact-content">
                    <p className="contact-intro">
                        I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
                    </p>

                    <div className="contact-info">
                        <a href="mailto:youshahaider85@gmail.com" className="contact-card glass-card">
                            <div className="contact-icon">📧</div>
                            <h3>Email</h3>
                            <p>youshahaider85@gmail.com</p>
                        </a>

                        <a href="tel:+923171261467" className="contact-card glass-card">
                            <div className="contact-icon">📱</div>
                            <h3>Phone</h3>
                            <p>0317-1261467</p>
                        </a>

                        <a href="https://www.linkedin.com/in/yousha-haider110/" target="_blank" rel="noopener noreferrer" className="contact-card glass-card">
                            <div className="contact-icon">💼</div>
                            <h3>LinkedIn</h3>
                            <p>Connect with me</p>
                        </a>

                        <div className="contact-card glass-card">
                            <div className="contact-icon">📍</div>
                            <h3>Location</h3>
                            <p>Karachi, Sindh, Pakistan</p>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <p>© 2026 Yousha Haider. Built with React & 💜</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
