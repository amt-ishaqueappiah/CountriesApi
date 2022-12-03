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
        <div className='card-image-container'><img src={props.Flag} alt="" /></div>
        <div className="card-details">
           <div className="country-card-Name">
            <h4>{props.Name}</h4>
           </div>
           <p><span className='card-bold-p-text'>Population: </span>{props.Population}</p>
           <p><span className='card-bold-p-text'>Region: </span>{props.Region}</p>
           <p><span className='card-bold-p-text'>Capital: </span>{props.Capital}</p>
        </div>
      
    </div>
    </Link>
  )
}

export default Card
