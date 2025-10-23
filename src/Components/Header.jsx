import {Link} from "react-router"
import {useState} from "react"

function Header({setLang}){

  const [active, setActive] = useState(false)
  
  return(
    <header>

      {active===true ? 
        <>
      <nav>
        <ul onClick={()=>setActive(false)}>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Work">Work</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#cv">CV</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
        
        <div onClick={()=>setActive(false)} className="HomeLang">
          <p onClick={() => setLang("fr")}>FR</p>
          <p onClick={() => setLang("en")}>EN</p>
        </div>
        </>
      :""}

      <div className={active === true ? "burger active" : "burger"} onClick={()=>setActive(!active)}>
        <span className="burgerOne"></span>
        <span className="burgerTwo"></span>
        <span className="burgerThree"></span>
      </div>
      
        <a href="/" className="logo">
      <div className="logoPrenom">
      <p className="one">M</p>
      <p className="two">A</p>
      <p className="two">R</p>
      <p className="three">S</p>
      <p className="four">H</p>
      <p className="four">A</p>
      </div>
      <div className="logoNom">
        <p className="two">Wa</p>
        <p className="one">lu</p>
        <p className="four">ng</p>
        <p className="three">ua</p>
      </div>
        </a>
      
    
  </header>)
}

export default Header;
