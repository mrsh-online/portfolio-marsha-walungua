import works from "./works.js"

function Work({lang}){
  return(
    <section className="Works">
      <h1>Works</h1>

      {works.map((e,i)=>{return(
      <>
        <div className="WorkEl">
          <div className="WorkElText">
            <h2>{e.titre}</h2>
              
          <a href={e.link} target="_blank" className="WorkElImg">
            <img src={e.img} />
          </a>
              
            {lang ==="fr" ?
              <>
              <p>{e.sumaryFr}</p>
              <a href={e.link} target="_blank" className="WorkElLink">Accéder au site</a>
            </>
            :
            <>
              <p>{e.sumaryEn}</p>
              <a href={e.link} target="_blank" className="WorkElLink">Go to the site</a>
            </>
            }
          </div>
        </div>
        
        <div className="underHeaderLine"></div>
        </>
      )})}
      
    
  </section>)
  
}
export default Work
