import {Link, useParams} from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Details from '../CountryComponents/Details';
import { useEffect, useState } from 'react';
import { apiUrl } from '../api';


interface countryProps{
  Dark:boolean;
}

const Country = (props:countryProps) => {
    const style = { color: "black", fontSize: "1.5em" }

    const [country,setCountry] =useState<{name: string; flag: string; nativeName:string;
      population:string; region:string; subregion:string; capital:string; 
      topLevelDomain:[]; borders:[];


      }>({
      name: '',
      flag: '',
      nativeName:'',
      population:'',
      region:'',
      subregion:'',
      capital:"",
      topLevelDomain:[],
      borders:[]
     

    });
    const {code}= useParams()
 

    const fetchCountryData=async()=>{

      const res=await fetch(`${apiUrl}/alpha/${code}`)
      if(!res.ok) throw new Error('Fetching countries Error')
      const country = await res.json()
      console.log(country)
      setCountry(country)
    }

    

    useEffect(()=>{
      fetchCountryData()
    },[])

        

  return (
    <div className='country-container' style={props.Dark?{color:'#fff'}:{}}>
        <Link to='/' className='country'>
        <button className='backBtn'>
            <KeyboardBackspaceIcon style={style} />
          <span className='back'>Back</span>  
            </button>
        </Link>
        <Details Name={country.name} Img={country.flag} Native={country.nativeName}
          Population={country.population} Region={country.region} SubRegion={country.subregion}
          Capital={country.capital} TopLevel={country.topLevelDomain}  Borders={country.borders}
        />
    </div>
  )
}

export default Country
