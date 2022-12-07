import {useState,useEffect} from 'react'
import { apiUrl } from '../api';

interface DetailsProp{
  Name:string;
  Img:string;
  Native:string;
  Population:string;
  Region:string;
  SubRegion:string;
  Capital:string;
  TopLevel:[];
  Borders:[];
  Currency:{}[];
  Languages:{}[];
  Dark:boolean;

  
}


type DetailsInfo={
  name:string,
  alpha3Code:number,
}
    

const Details = (props:DetailsProp) => {
  const[info,setInfo]=useState<DetailsInfo[]>([])

  const countriesData=async()=>{
      try{
        const res = await fetch(`${apiUrl}/all`)
        if(!res.ok) throw new Error('Data recovery not succesfull')
        const data =await res.json()
        setInfo(data)
      }

      catch(err){
        console.log(err ,' error occured')
        
      }
  }

  useEffect(()=>{
    countriesData()
  },[])


  return (
    <div className="Details">
    <div className="backFlag">
        <img src={`${props.Img}`} alt="" />
    </div>
    <div className="sub-details">
      <div className="info">
      <h4 className="details-country-name"> {props.Name}</h4>
      <div className="leftDetails">
          
          <p><span className="details-text-bold">Native Name:</span> {props.Native}</p>
          <p><span className="details-text-bold">Population:</span> {props.Population}</p>
          <p><span className="details-text-bold">Region:</span> {props.Region}</p>
          <p><span className="details-text-bold">Sub Region:</span> {props.SubRegion}</p>
          <p><span className="details-text-bold">Capital:</span> {props.Capital || 'no capital found'}</p>
      </div>

        <div className="rightDetails">
          <p><span className="details-text-bold">Top Level Domain:</span> {props.TopLevel}</p>
        
          <p><span className="details-text-bold">Currencies:</span> {props.Currency?.map((item:any)=>{
            if(item===undefined || item.name===''){
              return '';
            }
            return item.name;
          })}</p>

          <p><span className="details-text-bold">Languages:</span> {props.Languages?.map((lan:any)=>{
            if(lan===undefined || lan.name===''){
             return '';
          } 
          return lan.name
          }).join(', ')}</p>
        </div>
        </div>

        <div className="border-countries">
            <h4 className="border-header">{props.Borders?'Border Countries:':'No Border Countries'}</h4>
            <div className="border-details">
              {props.Borders?.map(item=>{
                return  item
                }).map((border,index)=>{
                  return <p key={index} className={props.Dark? 'box active':'box'}>{info.map((item)=>{if(item.alpha3Code===border){
                    return item.name
                  }})}</p>
                })}
            </div>
        </div>
    </div>

    </div>
  )
}

export default Details
