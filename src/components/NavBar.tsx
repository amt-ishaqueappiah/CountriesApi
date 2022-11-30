import path from '../assets/Path.png'

const NavBar:React.FC = () => {
  return (
    <nav className="Nav">
     <h4>Where in the world?</h4>
     <p className="dark-btn"><img src={path}></img>Dark Mode</p>
    </nav>
  )
}

export default NavBar
