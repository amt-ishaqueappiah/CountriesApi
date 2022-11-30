import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <form className="search">
      <input type="text" placeholder="Search for a country"/>
       <div className='search-btn'> <SearchIcon/></div>
    </form>
  )
}

export default Search
