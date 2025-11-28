import projets from "./projet.js"

function Projets({lang}){
  return(
    <section className="Projets" id="Projets">
      <h1>Projets</h1>

      {projets.map((e,i)=>{return(
      <>
        <div className="ProjetsEl" key={`project${i}`}>
          <div className="ProjetsElText">
            <h2>{e.titre}</h2>
              
          <a href={e.link} target="_blank" className="ProjetsElImg">
                
            <img src={`/portfolio-marsha-walungua/${e.img}`} />
          </a>
              
            {lang ==="fr" ?
              <>
              <p>{e.sumaryFr}</p>
              <a href={e.link} target="_blank" className="ProjetsElLink">Plus d'info</a>
            </>
            :
            <>
              <p>{e.sumaryEn}</p>
              <a href={e.link} target="_blank" className="ProjetsElLink">More</a>
            </>
            }
          </div>
        </div>
        
        <div className="underHeaderLine"></div>
        </>
      )})}
      
    
  </section>)
  
}
export default Projets
