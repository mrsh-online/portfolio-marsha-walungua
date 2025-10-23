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
            <img src="/competence/PHP.svg" />
            PHP 
          </p>
          <p>
            <img src="/competence/Javascript.svg" />
            Javascript
          </p>
          <p>
            <img src="/competence/python.svg" />
           Python
          </p>
          <p>
            <img src="/competence/sql.svg" />
           SQL
          </p>
        </div>
          : null}
        
        {type === 'Backend' ? 
        <div className="pictoContainer">
          <p>
            <img src="/competence/node.svg" />
             node
          </p>
            
          <p>
            <img src="/competence/django.svg" />
             django
          </p>
            
          <p>
            <img src="/competence/mysql.svg" />
           MySql 
          </p>
            
          <p>
            <img src="/competence/mongo.svg" />
            Mongo
          </p>
            
          <p>
            <img src="/competence/express.svg" />
            Express
          </p>
          
        </div>
          : null}
      
        {type === 'Frontend' ? 
        <div className="pictoContainer">
            
          <p>
            <img src="/competence/HTML.svg" />
            HTML </p>
          <p>
            <img src="/competence/CSS.svg" />
            CSS / SASS / SCSS
          </p>
          <p>
            <img src="/competence/Wordpress.svg" />
            Wordpress
          </p>
          
          <p>
            <img src="/competence/Mipise.svg" />
            Mipise
          </p>
          
          
          <p>
            <img src="/competence/Nextjs.svg" />
            Next.JS
          </p>
            
        </div>
          : null}
      
        {type === 'SEO | Marketing' ? 
        <div className="pictoContainer">
          <p>
            <img src="/competence/Semrush.svg" />
            Semrush
          </p>
          
          <p>
            <img src="/competence/Mailchimp.svg" />
            MailChimp
          </p>
          
          <p>
            <img src="/competence/Brevo.svg" />
            Brevo
          </p>
          
          <p>
            <img src="/competence/Google.svg" />
            Search Console
          </p>
        </div>
          : null}
      
        {type === 'Design' ? 
        <div className="pictoContainer">
          <p>
            <img src="/competence/Photoshop.svg" />
            Photoshop
          </p>
          <p>
            <img src="/competence/Illustrator.svg" />
            Illustrator
          </p>
          <p>
            <img src="/competence/Figma.svg" />
            Figma
          </p>
          <p>
            <img src="/competence/Blender.svg" />
            Blender</p>
        </div>
          : null}
      
        {type === 'Productivité' ? 
        <div className="pictoContainer">
          <p>
            <img src="/competence/github.svg" />
            Github
          </p>
            
          <p>
            <img src="/competence/linux.svg" />
            Linux
          </p>
            
          <p>
            <img src="/competence/docker.svg" />
            Docker
          </p>
          <p>
            <img src="/competence/mistral.svg" />
            Mistral
          </p>
            
          <p>
            <img src="/competence/N8N.svg" />
            N8N
          </p>
          
          <p>
            <img src="/competence/Notion.svg" />
            Notion
          </p>
          
          <p>
            <img src="/competence/Obsidian.svg" />
            Obsidian
          </p>
          
          <p>
            <img src="/competence/Google.svg" />
            Google Workspace
          </p>
        </div>
          : null}
      </div>
      
    </section>
  )
}
