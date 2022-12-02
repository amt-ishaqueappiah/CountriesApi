import { ClassNames } from '@emotion/react';
import SearchIcon from '@mui/icons-material/Search';
import {useRef} from 'react';


interface SearchProps{
  Dark:boolean;
  OnChange:any;
  Error:boolean;
}


const Search = (props:SearchProps) => {


  const inputRef=useRef<HTMLInputElement>(null);

  const handleKeyUp=()=>{
      let text:string | any =inputRef.current?.value;
      if(text===''){
        text='a'
      }
      else{
        props.OnChange(text)
      }
      
     
  }
  
  return (
    <form className="search" onSubmit={(e)=>{
        e.preventDefault()
    }}>
      <input type="text" placeholder="Search for a country...." ref={inputRef}  onKeyUp={handleKeyUp} className={props.Dark?'dark':''}  />
       <span className='search-btn'><SearchIcon style={props.Dark?{ color:'white'}:{}}/></span>
       <h5 style={props.Dark?{ color:'white'}:{}}>{props.Error && inputRef !=null? 'country not found':''}</h5>
    </form>
  )
}

export default Search
