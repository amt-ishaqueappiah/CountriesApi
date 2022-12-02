import Card from "../HomeComponents/Card"
import Filter from "../HomeComponents/Filter"
import Search from "../HomeComponents/Search"
import { useEffect, useState } from "react";
import { apiUrl } from "../api";


interface homeProps{
  Dark:boolean;
}

const Home = (props:homeProps) => {
  const [countries, setCountries]=useState<any[]>([]);
  const [error,setError]=useState<boolean>(false);

  const getCountries=async()=>{
    try{
        const responds = await fetch(`${apiUrl}/all`)
        if(!responds.ok) throw new Error('Data recovery not succesfull')
       
        const data =await responds.json()
        setCountries(data)
    }
    catch(err){
      console.log(err ,' error occured')
      
      
    }
  }

  useEffect(()=>{
    getCountries();
  },[])


  const allCountries:any = countries.map(country=>{

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

  const getCountryByRegion=async(regionName:string)=>{
      try{
        const res =await fetch(`${apiUrl}/region/${regionName}`)
        if(!res.ok) throw new Error('Region retrieval Error')
        const data = await res.json()
        setCountries(data)

      }catch(error){
        console.log('Network Error')
      }
  }

  const getCountryByName=async(countryName:string)=>{
    try{
      const res = await fetch(`${apiUrl}/name/${countryName}`)
      if(!res.ok) throw new Error('country name not found'+setError(prev=>prev=true));
      if(res.ok)setError(prev=>prev=false)
      const data= await res.json()
      setCountries(data)
    }
    catch(err){
      console.log(err, 'country name error')
    }
  }
  return (
    <div className="home">
      <div className="top">
      <Search Dark={props.Dark} OnChange={getCountryByName} Error={error}/>
      <Filter OnSelect={getCountryByRegion} Dark={props.Dark}/>
      </div>
      <div className="bottom" >
       {allCountries}
      </div>
    </div>
  )
}

export default Home
