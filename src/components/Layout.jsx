import { Link, Outlet } from "react-router-dom"

export const Layout = () =>{

return(
    <>
    
      <nav className="pokemon-header">
        <ul className="pokemon-types">
          <li><Link to="/fire">Fuego</Link></li>
          <li><Link to="/water">Agua</Link></li>
          <li><Link to="/grass">Planta</Link></li>
          <li><Link to="/electric">Eléctrico</Link></li>
        </ul>
      </nav>

      
      <Outlet/>
    </>
    
)
}
