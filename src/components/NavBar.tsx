import { style } from '@mui/system';
import path from '../assets/Path.png'

interface NavProps{
  Dark:boolean;
  SetDark:any;
}

const NavBar = (props:NavProps) => {
  

  const changeColor =()=>{
    props.SetDark(!props.Dark)
    if(props.Dark){
      document.body.style.backgroundColor=' #fafafa'
  }
  else{
    document.body.style.backgroundColor='#202C36'

  }
  }
  return (
    <nav className="Nav" style={props.Dark?{backgroundColor:'#2B3844',color:'white'}:{}}>
     <h4>Where in the world?</h4>
     <p className="dark-btn" onClick={changeColor}><img src={path} alt='moon-image'/>Dark Mode</p>
    </nav>
  )
}

export default NavBar
