import React from 'react';
import { useNavigate, useParams } from "react-router"
import { ToolsAndServices } from "~/components/ToolsAndServices";
import { WebTechno } from "~/components/WebTechno";
import { Project, WebProject, getProjectByName } from "~/elements/Project";

export default function SingleProject(){
    const navigate = useNavigate();
    const params = useParams();
    if(!params.project) {navigate('/projects'); return;};
    if(!getProjectByName(params.project)) {navigate('/projects'); return;}
    
    const iproject: Project | WebProject = getProjectByName(params.project) as Project | WebProject;
    
    let project:Project|null = null;
    let webproject:WebProject|null = null;
    if(iproject instanceof Project){
        project = iproject;
    }
    else{
        webproject = iproject;
    }
    
    return(
        <>
            <h2>{iproject.displayName}</h2>
            { getProjectByName(params.project)?.intro }
            { webproject? (<WebTechno back={webproject.webTechnos.back} front={webproject.webTechnos.front}/>):"" }
            { project? (<ToolsAndServices tools={project.toolsAndServices.tools} services={project.toolsAndServices.services}/>):"" }
            { getProjectByName(params.project)?.mainContent }
        </>
    )
}