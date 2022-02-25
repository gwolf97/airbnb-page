import cities from "../data/cities" 
import CityCard from "./CityCard"

const CitySection = () => {

    const cityCards = cities.map(object =>{
        return(
            <CityCard img={object.img} city={object.city}/>
        )
      })

    return ( 
        <section className="city-section">
            {cityCards}
        </section>
     );
}
 
export default CitySection;