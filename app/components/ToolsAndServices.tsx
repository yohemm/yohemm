import React from 'react';

export const Icon: {[id:string]:string} = {
    "MySQL": "devicon-mysql-plain colored", 
    "PostGreSQL":"devicon-postgresql-plain colored", 
    "MongoDB": "devicon-mongodb-plain colored", 
    "PHP":"devicon-php-plain colored", 
    "laravel": "devicon-laravel-original colored",
    "Node Js": "devicon-nodejs-plain colored", 
    "Express": "devicon-express-original colored", 
    "ReactRouter": "devicon-reactrouter-plain colored", 
    "React": "devicon-react-original colored", 
    "VueJs": "devicon-vuejs-plain colored", 
    "JavaScript": "devicon-javascript-plain colored", 
    "TypeScript": "devicon-typescript-plain colored", 
    "CSS": "devicon-css3-plain colored",
    "Git": "devicon-git-plain colored",
    "GitHub": "devicon-github-original colored",
    "Java": "devicon-java-plain colored",
    "Python": "devicon-python-plain colored",
    "Bash": "devicon-bash-plain colored",
    "Debian": "devicon-debian-plain colored",
    "Docker": "devicon-docker-plain colored", 
    "MarkDown": "devicon-markdown-original colored", 
    "Prometheus": "devicon-prometheus-original colored", 
    "Grafana": "devicon-grafana-plain colored", 
    "Windows Server": "devicon-windows11-original colored", 
    "NumPy": "devicon-numpy-plain colored", 
    "Apache": "devicon-apache-plain colored", 
    "NGINX": "devicon-nginx-original colored", 
}

export interface ToolsAndServices {
    tools: string[];
    services: string[];
}

export const ToolsAndServices = (props:ToolsAndServices) => {
    return (
        <div id="used-skills" className="">
            <div id="tools-skills" className="container-subtitle-async">
                <div className="skill-title-container">
                    <h3 className="subtitle">Les outils que j&apos;ai pu utilisé : </h3>
                </div>
                <div className="all-section-skill-container">
                    { 
                        props.tools.map( (name)=>{
                            return (
                                <div className="skill-container" key={name}>
                                    {Icon[name]?<i className={Icon[name]}></i>:"devicon-json-plain colored"}
                                    <p>{ name }</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div id="service-skills" className="container-subtitle-async">
                <div className="skill-title-container">
                    <h3 className="subtitle">Les services que j&apos;ai pu utilisé : </h3>
                </div>
                <div className="all-section-skill-container">
                    { 
                        props.services.map( (name)=>{
                            return (
                                <div className="skill-container" key={name}>
                                    {Icon[name]?<i className={Icon[name]}></i>:"devicon-json-plain colored"}
                                    <p>{ name }</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}