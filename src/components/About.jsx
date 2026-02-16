import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">
                    About <span className="gradient-text">Me</span>
                </h2>
                <div className="about-content">
                    <div className="about-card glass-card">
                        <div className="about-icon">👨‍💻</div>
                        <h3>Who I Am</h3>
                        <p>
                            I'm a motivated Software Engineer currently in my final year at FAST-NUCES, Karachi.
                            I specialize in full-stack development and automated testing, with a passion for
                            creating innovative solutions to real-world problems.
                        </p>
                    </div>
                    <div className="about-card glass-card">
                        <div className="about-icon">🎯</div>
                        <h3>What I Do</h3>
                        <p>
                            I build clean, reliable, and scalable software applications using modern web technologies.
                            My expertise spans from front-end development with HTML, CSS, and JavaScript to back-end
                            development and automated testing with Selenium.
                        </p>
                    </div>
                    <div className="about-card glass-card">
                        <div className="about-icon">🚀</div>
                        <h3>My Goal</h3>
                        <p>
                            I'm passionate about leveraging technology to solve complex problems. My final year
                            project on "Fake News Detection Using Machine Learning and Blockchain" demonstrates
                            my commitment to building impactful solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
