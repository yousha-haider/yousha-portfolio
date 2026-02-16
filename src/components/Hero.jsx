import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge fade-in-up">
                        <span>👋 Welcome to my portfolio</span>
                    </div>
                    <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Hi, I'm <span className="gradient-text">Yousha Haider</span>
                    </h1>
                    <h2 className="hero-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Software Engineer & Full-Stack Developer
                    </h2>
                    <p className="hero-description fade-in-up" style={{ animationDelay: '0.3s' }}>
                        Passionate about building clean, reliable, and scalable software solutions
                        that solve real-world problems. Experienced in full-stack development,
                        automated testing, and machine learning.
                    </p>
                    <div className="hero-cta fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Get In Touch
                        </button>
                        <button className="btn btn-secondary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                            View Projects
                        </button>
                    </div>
                    <div className="hero-stats fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <div className="stat-item">
                            <h3 className="gradient-text">10+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <h3 className="gradient-text">5+</h3>
                            <p>Technologies</p>
                        </div>
                        <div className="stat-item">
                            <h3 className="gradient-text">Final Year</h3>
                            <p>CS Student</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="scroll-arrow">↓</div>
            </div>
        </section>
    );
};

export default Hero;
