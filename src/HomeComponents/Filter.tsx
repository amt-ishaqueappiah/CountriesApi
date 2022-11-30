import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useRef} from 'react'

interface FilterProps{
    OnSelect:any;
}

const Filter = ({OnSelect}:FilterProps) => {
    const countries:string[]=['Africa','America','Asia','Europe','Oceania']
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
        <div className="select">
            <span ref={firstChild}>Filter by Region</span>
            <span className="select-btn"><ExpandMoreIcon/></span>
        </div>
        <div className="content">
        <ul className='options'>
                {list}
        </ul>
               
        </div>
     
    </div>
  )
}

export default Filter
