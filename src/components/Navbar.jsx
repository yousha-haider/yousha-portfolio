import './Navbar.css';

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar glass-card">
            <div className="navbar-container container">
                <div className="navbar-brand">
                    <span className="gradient-text">YH</span>
                </div>
                <ul className="navbar-menu">
                    <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                    <li><button onClick={() => scrollToSection('about')}>About</button></li>
                    <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
                    <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                    <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
                    <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
