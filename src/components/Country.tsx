import {Link, useParams} from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Details from '../CountryComponents/Details';
import { useEffect, useState } from 'react';
import { apiUrl } from '../api';


interface countryProps{
  Dark:boolean;
}

const Country = (props:countryProps) => {
    const style = {  fontSize: "1.5em" }

    const [country,setCountry] =useState<{name: string; flag: string; nativeName:string;
      population:string; region:string; subregion:string; capital:string; 
      topLevelDomain:[];  currencies:{}[]; borders:[]; languages:{}[];


      }>({
      name: '',
      flag: '',
      nativeName:'',
      population:'',
      region:'',
      subregion:'',
      capital:"",
      topLevelDomain:[],
      borders:[],
      currencies:[{
      code:" ",
      name:"",
      symbol:""
      }],
      languages:[{
        iso639_1:"",
        iso639_2:"",
        name:"",
        nativeName:""
      }]
     

    });
    const {code}= useParams()
 

    const fetchCountryData=async()=>{

      const res=await fetch(`${apiUrl}/alpha/${code}`)
      if(!res.ok) throw new Error('Fetching countries Error')
      const country = await res.json()
      setCountry(country)
    }

    

    useEffect(()=>{
      fetchCountryData()
    },[])

        

  return (
    <div className ={props.Dark?'country-container active':'country-container'}>
      <div className={props.Dark?'backBtn active':'backBtn'}>
        <Link to='/' className='country'>
            <KeyboardBackspaceIcon style={style} />
          <span className='back'>Back</span>  
        </Link>
      </div>
        <Details Name={country.name} Img={country.flag} Native={country.nativeName}
          Population={country.population} Region={country.region} SubRegion={country.subregion}
          Capital={country.capital} TopLevel={country.topLevelDomain}  Currency={country.currencies} 
          Languages={country.languages} Borders={country.borders} Dark={props.Dark}
        />
    </div>
  )
}

export default Country
