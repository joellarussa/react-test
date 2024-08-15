import React from 'react';

const projects = [
    {
      title: "React Space",
      description:
        "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
      getImageSrc: () => require("../images/photo1.jpg"),
    },
    {
      title: "React Infinite Scroll",
      description:
        "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
      getImageSrc: () => require("../images/photo2.jpg"),
    },
    {
      title: "Photo Gallery",
      description:
        "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
      getImageSrc: () => require("../images/photo3.jpg"),
    },
    {
      title: "Event planner",
      description:
        "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
      getImageSrc: () => require("../images/photo4.jpg"),
    },
  ];

const ProjectsSection = () => {
    return (
        <section id="projects" style={{ backgroundColor: '#004400', padding: '2rem' }}>
            <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>Featured Projects</h2>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-around', 
                flexWrap: 'wrap',
                gap: '1rem'  // Adding gap for spacing between items
            }}>
                {projects.map((project, index) => (
                    <div key={index} className="project-card" style={{ 
                        backgroundColor: 'white', 
                        padding: '1rem', 
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                        flexGrow: 1 
                    }}>
                        <img src={project.getImageSrc()} alt={project.title} style={{ 
                            width: '100%', 
                            borderRadius: '8px' 
                        }} />
                        <h3 style={{ margin: '1rem 0' }}>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href="#" style={{ textDecoration: 'none', color: '#007BFF' }}>See more →</a>
                    </div>
                ))}
            </div>
            <style>
                {`
                    @media (min-width: 1200px) {
                        .project-card {
                            width: 22%;
                        }
                    }
                    
                    @media (max-width: 1200px) and (min-width: 768px) {
                        .project-card {
                            width: 48%;
                        }
                    }
                    
                    @media (max-width: 768px) {
                        .project-card {
                            width: 100%;
                        }
                    }
                `}
            </style>
        </section>
    );
};

export default ProjectsSection;
