import { projectShowcases } from "~/components/ProjectShowcase";
import React from 'react';

export default function Projects() {
    return (
        <div className="projects-container">
            { projectShowcases() }
            {/* { projects.map(project => <ProjectShowcase key={project.name} name={project.displayName} image={project.image} technos={project.getTechnos()}>{project.presentation}</ProjectShowcase>) } */}
        </div>
    );
}