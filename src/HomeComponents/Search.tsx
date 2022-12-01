import SearchIcon from '@mui/icons-material/Search';

interface SearchProps{
  Dark:boolean;
}

const Search = (props:SearchProps) => {
  return (
    <form className="search">
      <input type="text" placeholder="Search for a country" style={props.Dark?{backgroundColor:'#2B3844', color:'#fff'}:{}}/>
       <span className='search-btn'><SearchIcon/></span>
    </form>
  )
}

export default Search
