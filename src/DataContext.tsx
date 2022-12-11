import {createContext, useState, useEffect} from 'react';
import { apiUrl } from './api';





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

  type ThemeContextProviderProps={
    children: React.ReactNode
  }
  export const DataContext= createContext<country[]>([])
  

export const DataProvider =({children}:ThemeContextProviderProps)=>{
    const [countries, setCountries]=useState<country[]>([]);

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
    
    
    return (
      <DataContext.Provider value={countries}>{children}</DataContext.Provider>
    )
}