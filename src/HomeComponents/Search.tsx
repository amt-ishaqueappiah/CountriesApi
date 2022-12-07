import SearchIcon from '@mui/icons-material/Search';



interface SearchProps{
  Dark:boolean;
  Error:boolean;
  SetSearchCountry:any;
}


const Search = (props:SearchProps) => {


 

  
  
  return (
    <form className="search" onSubmit={(e)=>{
        e.preventDefault()
    }}>
      <input type="text" placeholder="Search for a country...."   onChange={(e)=>{props.SetSearchCountry(e.target.value)}} className={props.Dark?'dark':''}  />
       <span className='search-btn'><SearchIcon style={props.Dark?{ color:'white'}:{}}/></span>
    </form>
  )
}

export default Search
