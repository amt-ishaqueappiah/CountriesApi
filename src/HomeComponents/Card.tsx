import {Link} from 'react-router-dom';



interface Props{
    Dark:boolean;
    Countries:any;
    Name:string;
    Flag:string;
    Population:string;
    Region:string;
    Capital:string

}

const Card = (props:Props) => {
  return (
    <Link to={`/alpha/${props.Countries.alpha3Code}`} className='link'>
    <div className="card" style={props.Dark?{backgroundColor:'#2B3844', color:'#fff'}:{}}>
        <img src={props.Flag} alt="" />
        <div className="details">
           <div className="country-card-Name">
            <h4>{props.Name}</h4>
           </div>
           <p>Population: {props.Population}</p>
           <p>Region: {props.Region}</p>
           <p>Capital: {props.Capital}</p>
        </div>
      
    </div>
    </Link>
  )
}

export default Card
