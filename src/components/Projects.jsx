import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id='projects'
      className='s-projects'
      aria-label='Scrolled to Projects'
    >
      <h2 className='rotate'>Projects</h2>
      <div className='project-grid'>
        {projects.map((project, index) => {
          return <ProjectCard {...project} key={project.id} number={index} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
