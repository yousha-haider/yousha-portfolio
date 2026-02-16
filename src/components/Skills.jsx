import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: '🎨',
            skills: ['HTML/CSS', 'JavaScript', 'React'],
            color: 'var(--primary-gradient)'
        },
        {
            title: 'Backend',
            icon: '⚙️',
            skills: ['PHP', 'Django', 'Java'],
            color: 'var(--secondary-gradient)'
        },
        {
            title: 'Programming',
            icon: '💻',
            skills: ['C/C++', 'C#', 'Java', 'Python'],
            color: 'var(--accent-gradient)'
        },
        {
            title: 'Testing & Tools',
            icon: '🔧',
            skills: ['Selenium Testing', 'TestNG', 'Git', 'Docker'],
            color: 'var(--success-gradient)'
        }
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">
                    Technical <span className="gradient-text">Skills</span>
                </h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category glass-card" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="skill-icon">{category.icon}</div>
                            <h3 style={{ background: category.color, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                {category.title}
                            </h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
