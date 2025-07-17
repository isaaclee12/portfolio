import React from 'react';
import projectList from './projectList.json';

const ProjectsPage: React.FC = () => {
  return (
    <section className="grid place-items-center">
      <h1 className="text-7xl pt-14 pb-14">Projects</h1>

      <div className="w-full grid grid-cols-2">
        {/* Map projectList.json over multiple div's */}
        {projectList.map((project, index) => (
          <div key={index} className="card bg-base-100 shadow-xl my-6 mx-12 p-10">
            <div className="card-body">
              <h2 className="card-title">
                <a 
                  href={project.url} 
                  target="_blank" 
                  className="text-xl text-sky-600 hover:text-sky-900 underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
                >
                  {project.title}
                </a>
              </h2>
              <br />
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
