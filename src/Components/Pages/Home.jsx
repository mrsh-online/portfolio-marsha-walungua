import {useState} from "react"

function Home({ lang}){

  return(
    <section className="Home" id="Home">
      <div>

        {lang === "en" ? 
          <>
            
          <p>Hi, I’m Marsha 👋 </p>
          <p> 
            Former student of the 3WA Academy, where I developed a wide range of skills in web development and design, I am now focusing my career on system and network administration. I am currently studying at IPSSI, specializing in infrastructure management, virtualization, and security.
            This portfolio showcases a selection of my projects and skills, highlighting my transition toward the system and network administration field.
          </p>
          </>
          : "" }
        
        {lang === "fr" ? 
          <>
            
          <p>Bonjour, je suis Marsha  👋 </p>
            <br/>
          <p> 
            Ancienne élève de la 3WA Academy, où j’ai développé des compétences variées en développement web et en design, j’oriente désormais mon parcours vers l’administration systèmes et réseaux. Actuellement en formation à l’IPSSI, je me spécialise dans la gestion d’infrastructures, la virtualisation et la sécurité.
            Ce portfolio présente une sélection de mes projets et compétences, illustrant mon évolution vers le domaine système et réseau.
          </p>
          </>
          : "" }
        
      </div>
    </section>
  )
  
};
export default Home;
