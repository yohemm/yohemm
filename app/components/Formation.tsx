import type React from "react";

export interface Formation {
    name: string;
    date: string;
    children:  React.ReactNode;
}


export const Formation = (props: Formation) =>{
 return (
    <div className="formation">
    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="svg-animate"> 
        <path fill="none" d="M0,0 L0,100"/>
        <path fill="none" d="M0,100 L100,100" />
        <path fill="none" d="M100,100 L100,0" />
        <path fill="none" d="M100,0 0,0" />
    </svg>
    <div className="text">
        <h4>{props.name}</h4>
        <p className="date">{props.date}</p>
        <p className="desc">{props.children}</p>
    </div>
    </div>
 )
}
