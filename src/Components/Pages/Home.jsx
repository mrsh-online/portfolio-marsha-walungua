import {useState} from "react"

function Home({ lang}){

  return(
    <section className="Home">
      <div>

        {lang === "en" ? 
          <>
            
          <p>Hi, I’m Marsha 👋 </p>
          <p> 
          I am a former student of the 3WA Academy, where I was able to acquire diverse skills in web development and design.
          This portfolio was created with the purpose of showcasing all of my work.
          </p>
          </>
          : "" }
        
        {lang === "fr" ? 
          <>
            
          <p>Bonjour, je suis Marsha  👋 </p>
            <br/>
          <p> 
              Ancienne élève de la 3WA Academy, où j’ai pu acquérir des compétences 
              diverce dans le domaine du développement web et du design. 

              Ce portfolio a été conçu dans le but de présenter l’ensemble de mon travail.
              
          </p>
          </>
          : "" }
        
      </div>
    </section>
  )
  
};
export default Home;
