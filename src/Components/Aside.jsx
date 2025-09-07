import {Link} from "react-router"

function Aside({list}){
  console.log(list)
  return (
    <aside>
      <ul>
      {list.map((el,key)=><li key={key}><Link to={el.titre}>{el.titre}</Link></li> )}
      </ul>
    
  </aside>)
}

export default Aside;
