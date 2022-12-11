import {Link, useParams} from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Details from '../CountryComponents/Details';
import { useContext } from 'react';
import { DataContext } from "../DataContext";


interface countryProps{
  Dark:boolean;
}

const Country = (props:countryProps) => {
    const style = {  fontSize: "1.5em" }

    const info =useContext(DataContext)
  
  
    const {code}= useParams()
 
    const countData= info.filter((item)=>{
      if(item.alpha3Code===code){
        return item.name
      }
    }).map((country)=>{
      return  <Details key={country.alpha3Code} Name={country.name} Img={country.flag} Native={country.nativeName}
      Population={country.population} Region={country.region} SubRegion={country.subregion}
      Capital={country.capital} TopLevel={country.topLevelDomain}  Currency={country.currencies} 
      Languages={country.languages}  Borders={country.borders} Dark={props.Dark}
    />
    })
   
 
    console.log(countData)

        

  return (
    <div className ={props.Dark?'country-container active':'country-container'}>
      <div className={props.Dark?'backBtn active':'backBtn'}>
        <Link to='/' className='country'>
            <KeyboardBackspaceIcon style={style} />
          <span className='back'>Back</span>  
        </Link>
      </div>
       {countData}
    </div>
  )
}

export default Country
