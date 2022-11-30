
interface Props{
    Name:string;
    Flag:string;
    Population:string;
    Region:string;
    Capital:string

}

const Card = (props:Props) => {
  return (
    <div className="card">
        <img src={props.Flag} alt="" />
        <div className="details">
           <div className="country">
            <h4>{props.Name}</h4>
           </div>
           <p>Population: {props.Population}</p>
           <p>Region: {props.Region}</p>
           <p>Capital: {props.Capital}</p>
        </div>
      
    </div>
  )
}

export default Card
