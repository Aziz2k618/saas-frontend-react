import "./projects.css";
import ProjectCard from './ProjectCard';


export default function Projects() {
  const projects = [
  {
    title: "E-Commerce Website",
    description: "A modern online shopping website.",
    category: "Web Development",
    link: "#"
  },
  {
    title: "Weather App",
    description: "A responsive weather application.",
    category: "Web Application",
    link: "#"
  },
  {
    title: "Task Manager",
    description: "A simple application for managing daily tasks.",
    category: "Productivity",
    link: "#"
  }
];

  return (
    <section className="projects">
      <h2>Our Projects</h2>

    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard 
        key={project.title} 
        title={project.title} 
        description={project.description} 
        category={project.category}
        link={project.link}
        />
        
      ))}
      </div>
    </section>
  );
}