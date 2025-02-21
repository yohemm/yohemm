import type { Route } from "./+types/home";
import React from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Home() {
  return (<> 
    <section id="about-me">
      <h2>A propos de moi</h2>
      <div className="space-between-vertcal">
        <p>
        Développeur passionné par le domaine du web, notamment en backend, mais aussi par les systèmes, comme la mise en place de serveurs, j&apos;aspire à devenir DevOps. Voulant maîtriser la mise en production continue, je me forme actuellement sur ce sujet.
        </p>
        <p>
        Autodidacte, j&apos;aime apprendre et développer mes compétences en réalisant de nouveaux projets ou en relevant des défis.
        </p>

        <p>
        Je suis également capable de créer des applications avec des outils tels que JavaFX et des jeux vidéo en Python avec des bibliothèques comme Pickle, Pygame et Socket.
        </p>

        <p>
        L&apos;univers des technologies IT me fascine, mais pour me professionnaliser, j&apos;ai choisi de me concentrer sur une expérience en développement backend et en administration système.
        </p>
      </div>
    </section>
    <section id="starting-dev">
      <p>
        J&apos;ai commencé à créer des sites web durant mon collège et, depuis, je ne me suis jamais arrêté. J&apos;ai pu développer mes compétences, notamment en UX/UI design, en référencement et en optimisation SEO. J&apos;ai également appris les logiques et le fonctionnement du backend afin d&apos;être capable de créer des applications complexes intégrant la gestion des utilisateurs, des pages d&apos;administration, des middlewares et des API.
    
      </p>
      <p>
        Je me suis ensuite spécialisé durant mes études supérieures afin de mieux connaître les langages de bas niveau et les systèmes. J&apos;ai ainsi appris à créer des scripts complexes en Bash, comme des explorateurs de fichiers, et à installer différents types de serveurs. Lors de cet apprentissage, j&apos;ai également découvert les bases de la mise en place d&apos;une infrastructure réseau professionnelle sécurisée.
      </p>
    </section>
    </>);
}
