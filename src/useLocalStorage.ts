import { useState,useEffect } from "react";



function getSavedValue<T>(key:string,initialValue:T){
 const savedValue=  localStorage.getItem(key)

 if(savedValue) return JSON.parse(savedValue)

 if(initialValue instanceof Function) return initialValue()
 return initialValue

}


export default function useLocalStorage(key:string,initialValue:boolean){
    const[value,setValue]= useState(()=>{
        return getSavedValue(key,initialValue)
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])
    return [value,setValue]
}