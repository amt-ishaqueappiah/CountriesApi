import Card from "../HomeComponents/Card"
import Filter from "../HomeComponents/Filter"
import Search from "../HomeComponents/Search"
import { useEffect, useState } from "react";
import { apiUrl } from "../api";




const Home = () => {
  const [countries, setCountries]=useState<any[]>([]);

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
      key={country.cca2} 
      Name={country.name.common}
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
  return (
    <div className="home">
      <div className="top">
      <Search />
      <Filter OnSelect={getCountryByRegion}/>
      </div>
      <div className="bottom">

       {allCountries}

      </div>
      
    </div>
  )
}

export default Home
