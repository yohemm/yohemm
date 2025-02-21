import React from 'react';

export const SchoolCuriculum = (props:SchoolCuriculum) => {
    return (
        <section id="schoolcuriculum">
            {
                props.schoolSteps.map((value)=> {
                    return(<SchoolStep key={value.name.replace(' ', '-')} name={value.name} establishment={value.establishment} diploma={value.diploma}> {value.children} </SchoolStep>);
                })
            }
        </section>
    )
}

interface SchoolCuriculum {
    schoolSteps:SchoolStep[];
}

export const SchoolStep = (props:SchoolStep) => {
    return (
        <div className="school-step">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="svg-animate"> 
                <path fill="none" d="M0,0 L0,100"/>
                <path fill="none" d="M0,100 L100,100" />
                <path fill="none" d="M100,100 L100,0" />
                <path fill="none" d="M100,0 0,0" />
            </svg>
            <div className="text">
            <h3>{ props.name }</h3>
                <p className="diploma">Diplôme obtenue : {props.diploma} </p>
                <p className="etablishement">Etablissement : {props.establishment} </p>
                <div className="details">{ props.children }</div>
            </div>
        </div>
    )
}

export interface SchoolStep {
    name: string;
    establishment: string;
    diploma: string;
    children: React.ReactNode;
}