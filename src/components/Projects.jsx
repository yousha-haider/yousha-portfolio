import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Fake News Detection System',
            description: 'Final year project utilizing Machine Learning and Blockchain technology to detect and verify fake news. Implements advanced ML algorithms for content analysis and blockchain for immutable record-keeping.',
            tags: ['Machine Learning', 'Blockchain', 'Python', 'YOLO'],
            icon: '🔍',
            gradient: 'var(--primary-gradient)'
        },
        {
            title: 'Missing Object Detector',
            description: 'Developed a missing object detection system utilizing the YOLO v4 model. Focused on identifying and locating objects that are missing from a predefined set with high accuracy.',
            tags: ['YOLO v4', 'Computer Vision', 'Python', 'Deep Learning'],
            icon: '🎯',
            gradient: 'var(--secondary-gradient)'
        },
        {
            title: 'E-commerce Website',
            description: 'Created a comprehensive e-commerce platform with a modern, responsive front-end and robust back-end. Features include product catalog, shopping cart, checkout process, and user authentication.',
            tags: ['HTML/CSS', 'JavaScript', 'Django', 'PostgreSQL'],
            icon: '🛒',
            gradient: 'var(--accent-gradient)'
        },
        {
            title: 'E-Commerce Testing Suite',
            description: 'Performed automated testing on an e-commerce website using Selenium with TestNG. Designed and executed functional test cases for key features like login, cart, and checkout with comprehensive assertions.',
            tags: ['Selenium', 'TestNG', 'Java', 'Automated Testing'],
            icon: '🧪',
            gradient: 'var(--success-gradient)'
        }
    ];

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass-card" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="project-icon" style={{ background: project.gradient }}>
                                {project.icon}
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
