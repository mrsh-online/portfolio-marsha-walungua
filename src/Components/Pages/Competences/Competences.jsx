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
        <a onClick={() => setType('Systèmes')}>Systèmes</a>
        <a onClick={() => setType('Réseaux')}>Réseaux</a>
        <a onClick={() => setType('Virtualisation')}>Virtualisation / Cloud</a>
        <a onClick={() => setType('Outils')}>Outils</a>
        <a onClick={() => setType('Documentation')}>Documentation</a>
        <a onClick={() => setType('Design')}>Design</a>
      </div>
    
      <h3>{type}</h3>
      
      <div className="CompetencesFramework">
        {type === 'Languages' ? 
        <div className="pictoContainer">
          <p><img src="/portfolio-marsha-walungua/competence/PHP.svg" />PHP</p>
          <p><img src="/portfolio-marsha-walungua/competence/Javascript.svg" />Javascript</p>
          <p><img src="/portfolio-marsha-walungua/competence/python.svg" />Python</p>
          <p><img src="/portfolio-marsha-walungua/competence/sql.svg" />SQL</p>
          <p><img src="/portfolio-marsha-walungua/competence/bash.svg"/>Bash</p>
          <p><img src="/portfolio-marsha-walungua/competence/powershell.svg"/>PowerShell</p>
        </div>
          : null}
        
        {type === 'Backend' ? 
        <div className="pictoContainer">
          <p><img src="/portfolio-marsha-walungua/competence/node.svg" />Node</p>
          <p><img src="/portfolio-marsha-walungua/competence/django.svg" />Django</p>
          <p><img src="/portfolio-marsha-walungua/competence/mysql.svg" />MySql</p>
          <p><img src="/portfolio-marsha-walungua/competence/mongo.svg" />Mongo</p>
          <p><img src="/portfolio-marsha-walungua/competence/express.svg" />Express</p>
        </div>
          : null}
      
        {type === 'Frontend' ? 
        <div className="pictoContainer">
          <p><img src="/portfolio-marsha-walungua/competence/HTML.svg" />HTML </p>
          <p><img src="/portfolio-marsha-walungua/competence/CSS.svg" />CSS</p>
          <p><img src="/portfolio-marsha-walungua/competence/Wordpress.svg" />Wordpress</p>
          <p><img src="/portfolio-marsha-walungua/competence/Nextjs.svg" />Next.JS</p>
          <p><img src="/portfolio-marsha-walungua/competence/Sass.svg" />Sass</p>
        </div>
          : null}
      
      
          {type === 'Systèmes' && (
      <div className="pictoContainer">
            
      <p><img src="/portfolio-marsha-walungua/competence/linux.svg" />Linux (Arch, Ubuntu, Alpine)</p>
      <p><img src="/portfolio-marsha-walungua/competence/windows.svg" /> Windows Server (AD, GPO)</p>
      <p><img src="/portfolio-marsha-walungua/competence/apple.svg" />Mac Os</p>
      <p><img src="/portfolio-marsha-walungua/competence/ansible.svg" />Ansible</p>
      </div>
      )}


      {type === 'Réseaux' && (
      <div className="pictoContainer">
      <p><img src="/portfolio-marsha-walungua/competence/WIFI.svg" />WiFi & LAN</p>
      <p><img src="/portfolio-marsha-walungua/competence/opnsense.svg" />Opnsense</p>
      <p><img src="/portfolio-marsha-walungua/competence/Tailscale.svg" />Tailscale</p>
      <p><img src="/portfolio-marsha-walungua/competence/LAN.svg" />DHCP / DNS</p>
      </div>
      )}




      {type === 'Virtualisation' && (
      <div className="pictoContainer">
      <p><img src="/portfolio-marsha-walungua/competence/proxmox.svg" />Proxmox</p>
      <p><img src="/portfolio-marsha-walungua/competence/docker.svg" />Docker</p>
      <p><img src="/portfolio-marsha-walungua/competence/kubernetes.svg" />Kubernetes (Bases)</p>
      </div>
      )}
    
      {type === 'Documentation' && (
      <div className="pictoContainer">
        <p><img src="/portfolio-marsha-walungua/competence/Notion.svg" />Notion</p>
        <p><img src="/portfolio-marsha-walungua/competence/Obsidian.svg" />Obsidian</p>
        <p><img src="/portfolio-marsha-walungua/competence/Google.svg" />Google Workspace</p>
      </div>
      )}
    

      {type === 'Design' && (
      <div className="pictoContainer">
        <p><img src="/portfolio-marsha-walungua/competence/Photoshop.svg" />Photoshop</p>
        <p><img src="/portfolio-marsha-walungua/competence/Illustrator.svg" />Illustrator</p>
        <p><img src="/portfolio-marsha-walungua/competence/Figma.svg" />Figma</p>
      </div>
      )}



      {type === 'Outils' && (
        <div className="pictoContainer">
          <p><img src="/portfolio-marsha-walungua/competence/wazuh.svg" />Wazuh</p>
          <p><img src="/portfolio-marsha-walungua/competence/github.svg" />Github</p>
          <p><img src="/portfolio-marsha-walungua/competence/mistral.svg" />Mistral</p>
          <p><img src="/portfolio-marsha-walungua/competence/N8N.svg" />N8N</p>
        </div>
      )}
            </div>
      
    </section>
  )
}
