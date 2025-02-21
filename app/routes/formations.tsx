import React  from 'react';
import { useEffect } from "react";
import { SchoolCuriculum } from "~/components/SchoolCurriculum";

export default function Formations() {
    useEffect(() => {
        const svgScript = document.createElement("script");
        svgScript.src = "./js/formationSvg.js";
        svgScript.async = true;
        document.body.appendChild(svgScript);
        return () => {
            document.body.removeChild(svgScript)
        }
    }, [])
    return (
        <>
            <SchoolCuriculum schoolSteps={[
                {diploma:"Baccalauréat mention asséz bien", establishment:"Lycée Georges Baumont, Saint-Dié-des-Vosges", name:"Lycée", children:(<p>test</p>)},
                {diploma:"BUT", establishment:"IUT du Littoral Côte d'Opale, Calais", name:"Licence Technologique en Informatique", children:(<p>test</p>)},
            ]} />
            <p>AUTODIDACT A FAIRE</p>
        </>
    );
}