import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useRef} from 'react';

interface FilterProps{
    OnSelect:any;
    Dark:boolean;
}


const Filter = ({OnSelect,Dark}:FilterProps) => {
    const countries:string[]=['Africa','Americas','Asia','Europe','Oceania']
    const filt=useRef<HTMLDivElement>(null);
    const firstChild=useRef<HTMLDivElement>(null);

    const updateName=(e:any)=>{
        console.log(e.currentTarget.innerText)
        if(firstChild.current !=null)
        firstChild.current.innerText=e.currentTarget.innerText;
        OnSelect(e.currentTarget.innerText)
        
    }
    

    const list= countries.map((item)=>{
            return <li key={item} onClick={updateName}>{item}</li>
    })


   const handleToggle=()=>{
    const span= filt.current;
    if(span !=null )
    if(span.classList.contains('active')){
        span.classList.remove('active')
    }
    else{
        span.classList.add('active');
    }
   };


   
  return (
    <div className="filter" ref={filt} onClick={handleToggle}>
        <div className="select" style={Dark?{backgroundColor:'#2B3844', color:'#fff'}:{}}>
            <span className='filterText' ref={firstChild}>Filter by Region</span>
            <span className="material-symbols-outlined select-btn">expand_more</span>
        </div>
        <div className="content">
        <ul className='options' style={Dark?{backgroundColor:'#2B3844', color:'#fff'}:{}}>
                {list}
        </ul>
               
        </div>
     
    </div>
  )
}

export default Filter
