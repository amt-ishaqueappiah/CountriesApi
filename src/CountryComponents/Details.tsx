
interface DetailsProp{
  Name:string;
  Img:string;
  Native:string;
  Population:string;
  Region:string;
  SubRegion:string;
  Capital:string;
  TopLevel:[];
  Borders:[]
  
}

const Details = (props:DetailsProp) => {
  return (
    <div className="Details">
    <div className="backFlag">
        <img src={`${props.Img}`} alt="" />
    </div>
    <div className="sub-details">
    <div className="leftDetails">
        <h4>{props.Name}</h4>
        <p>Native Name:{props.Native}</p>
        <p>Population:{props.Population}</p>
        <p>Region:{props.Region}</p>
        <p>Sub Region:{props.SubRegion}</p>
        <p>Capital:{props.Capital}</p>
    </div>

    <div className="rightDetails">
        <p>Top Level Domain:{props.TopLevel}</p>
        <p>Currencies:</p>
        <p>Languages</p>
    </div>


    <div className="border-countries">
      <h3 className="border-header">{props.Borders?'Border Countries:':''}</h3>
      {props.Borders?.map(item=>{
        return  <p key={item} className='box'>{item}</p>
      })}
    </div>
    </div>

    </div>
  )
}

export default Details
