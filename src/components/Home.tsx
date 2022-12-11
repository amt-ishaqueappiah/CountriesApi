import Card from "../HomeComponents/Card"
import Filter from "../HomeComponents/Filter"
import Search from "../HomeComponents/Search"
import { useEffect, useState,useContext } from "react";
import { apiUrl } from "../api";
import { DataContext } from "../DataContext";

interface homeProps{
  Dark:boolean;
}

type country ={
  name:string,
  alpha3Code:string,
  flags: {
    svg:string,
    png:string
  },
  region:string,
  population:string,
  capital:string

}




const Home = (props:homeProps) => {
  const data= useContext(DataContext)

  const [error,setError]=useState<boolean>(false);

  const [searchCountry, setSearchCountry]=useState<string>('')

  const [countries, setCountries]=useState<country[]>([]);
  

  useEffect(()=>{
    setCountries(data)
  },[data])

  const allCountries = countries?.filter((value)=>{
    if(searchCountry===''){
      return value
    }
    else if(value.name.toLowerCase().includes(searchCountry.toLowerCase())){
      return value
    }
  }). map(country=>{

    return  <Card 
      Dark={props.Dark}
      key={country.alpha3Code} 
      Countries={country}
      Name={country.name}
       Flag={country.flags.png} 
       Region={country.region} 
       Population={country.population}
       Capital={country.capital}
       />
      
  })

  const getCountryByRegion=(regionName:string)=>{
     
    const regionData= data.filter((region)=>{
      if(region.region===regionName){
        return region
      }
    })
        setCountries(regionData)

    
  }

 
  return (
    <div className="home">
      <div className="top">
      <Search Dark={props.Dark} SetSearchCountry={setSearchCountry} Error={error}/>
      <Filter OnSelect={getCountryByRegion} Dark={props.Dark}/>
      </div>
      <div className="bottom" >
       {allCountries}
      </div>
    </div>
  )
}

export default Home
