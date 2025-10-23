import {useState} from 'react'
export default function Competences(){
  const [type, setType] = useState('Languages')
  return (
    <section className="Competences" id="stack">
      <h2>Stack</h2>
      <div className='CompetencesType'>
        <a onClick={()=>{setType('Languages')}} >Language</a>
        <a onClick={()=>{setType('Frontend')}}>Frontend</a>
        <a onClick={()=>{setType('Backend')}}>Backend</a>
        <a onClick={()=>{setType('SEO | Marketing')}}>SEO | Marketing</a>
        <a onClick={()=>{setType('Design')}}>Design</a>
        <a onClick={()=>{setType('Productivité')}}>Productivité</a>
      </div>
      
      
      
        <h3>{type}</h3>
      
      <div className="CompetencesFramework">
        {type === 'Languages' ? 
        <div className="pictoContainer">
          <p>
            <img src="/portfolio-marsha-walungua/competence/PHP.svg" />
            PHP 
          </p>
          <p>
            <img src="/portfolio-marsha-walungua/competence/Javascript.svg" />
            Javascript
          </p>
          <p>
            <img src="/portfolio-marsha-walungua/competence/python.svg" />
           Python
          </p>
          <p>
            <img src="/portfolio-marsha-walungua/competence/sql.svg" />
           SQL
          </p>
        </div>
          : null}
        
        {type === 'Backend' ? 
        <div className="pictoContainer">
          <p>
            <img src="/portfolio-marsha-walungua/competence/node.svg" />
             Node
          </p>
            
          <p>
            <img src="/portfolio-marsha-walungua/competence/django.svg" />
             Django
          </p>
            
          <p>
            <img src="/portfolio-marsha-walungua/competence/mysql.svg" />
           MySql 
          </p>
            
          <p>
            <img src="/portfolio-marsha-walungua/competence/mongo.svg" />
            Mongo
          </p>
            
          <p>
            <img src="/portfolio-marsha-walungua/competence/express.svg" />
            Express
          </p>
          
        </div>
          : null}
      
        {type === 'Frontend' ? 
        <div className="pictoContainer">
            
          <p>
            <img src="/portfolio-marsha-walungua/competence/HTML.svg" />
            HTML </p>
          <p>
            <img src="/portfolio-marsha-walungua/competence/CSS.svg" />
            CSS 
          </p>
          <p>
            <img src="/portfolio-marsha-walungua/competence/Wordpress.svg" />
            Wordpress
          </p>
          
          <p>
            <img src="/portfolio-marsha-walungua/competence/Mipise.svg" />
            Mipise
          </p>
          
          
          <p>
            <img src="/portfolio-marsha-walungua/competence/Nextjs.svg" />
            Next.JS
          </p>
            
          <p>
            <img src="/portfolio-marsha-walungua/competence/Sass.svg" />
              Sass
          </p>
            
        </div>
          : null}
      
        {type === 'SEO | Marketing' ? 
        <div className="pictoContainer">
          <p>
            <img src="/portfolio-marsha-walungua/competence/Semrush.svg" />
            Semrush
          </p>
          
          <p>
            <img src="/portfolio-marsha-walungua/competence/Mailchimp.svg" />
            MailChimp
          </p>
          
          <p>
            <img src="/portfolio-marsha-walungua/competence/Brevo.svg" />
            Brevo
          </p>
          
          <p>
            <img src="/portfolio-marsha-walungua/competence/Google.svg" />
            Search Console
          </p>
        </div>
          : null}
      
        {type === 'Design' ? 
        <div className="pictoContainer">
          <p>
            <img src="/portfolio-marsha-walungua/competence/Photoshop.svg" />
            Photoshop
          </p>
          <p>
            <img src="/portfolio-marsha-walungua/competence/Illustrator.svg" />
            Illustrator
          </p>
          <p>
            <img src="/portfolio-marsha-walungua/competence/Figma.svg" />
            Figma
          </p>
          <p>
            <img src="/portfolio-marsha-walungua/competence/Blender.svg" />
            Blender</p>
        </div>
          : null}
      
        {type === 'Productivité' ? 
        <div className="pictoContainer">
          <p>
            <img src="/portfolio-marsha-walungua/competence/github.svg" />
            Github
          </p>
            
          <p>
            <img src="/portfolio-marsha-walungua/competence/linux.svg" />
            Linux
          </p>
            
          <p>
            <img src="/portfolio-marsha-walungua/competence/docker.svg" />
            Docker
          </p>
          <p>
            <img src="/portfolio-marsha-walungua/competence/mistral.svg" />
            Mistral
          </p>
            
          <p>
            <img src="/portfolio-marsha-walungua/competence/N8N.svg" />
            N8N
          </p>
          
          <p>
            <img src="/portfolio-marsha-walungua/competence/Notion.svg" />
            Notion
          </p>
          
          <p>
            <img src="/portfolio-marsha-walungua/competence/Obsidian.svg" />
            Obsidian
          </p>
          
          <p>
            <img src="/portfolio-marsha-walungua/competence/Google.svg" />
            Google Workspace
          </p>
        </div>
          : null}
      </div>
      
    </section>
  )
}
