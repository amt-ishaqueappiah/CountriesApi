import { ClassNames } from '@emotion/react';
import SearchIcon from '@mui/icons-material/Search';
import {useRef} from 'react';


interface SearchProps{
  Dark:boolean;
  OnChange:any;
}


const Search = (props:SearchProps) => {


  const inputRef=useRef<HTMLInputElement>(null);
  const handleKeyUp=()=>{
      console.log(inputRef.current?.value)
      let text:string | any =inputRef.current?.value
      props.OnChange(text)
     
  }
  
  return (
    <form className="search">
      <input type="text" placeholder="Search for a country...." ref={inputRef}  onKeyUp={handleKeyUp} className={props.Dark?'dark':''}  />
       <span className='search-btn'><SearchIcon style={props.Dark?{ color:'white'}:{}}/></span>
    </form>
  )
}

export default Search
