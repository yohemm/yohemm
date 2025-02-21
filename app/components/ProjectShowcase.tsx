import { projects } from "~/elements/Project";
import React from 'react';

interface ProjectShowcase {
    name: string;
    displayName: string;
    image: string;
    children: React.ReactNode;
    technos: string[];
}

export const ProjectShowcase = (props:ProjectShowcase) => {
    return (
        
        <div key={props.name} className="card">
            <div key={props.name} className="card-header" style={{backgroundImage: "url("+props.image+")"}}>
                <div className="card-header-content">
                    <h4>{props.displayName}</h4>
                </div>
            </div>
            <div className="card-content">
                <div className="card-details">{props.children}</div>
                <a className="formation-btn" href={ "/projects/" + props.name }>Voir en détaille</a>
                <p className="card-technos-overview">Techonologies utilisées : { props.technos.map((techno, index) => {
                    return index==props.technos.length-1?<><span key={techno}>{techno}</span>.</>:<><span key={techno}>{techno}</span>,</>
                })}</p>
            </div>
        </div>
    );
}

export const projectShowcases = () => {
    return <>{projects.map(project => <ProjectShowcase key={project.name} name={project.displayName} image={project.image} technos={project.getTechnos()} displayName={project.displayName} >{project.presentation}</ProjectShowcase>)}</>
}