const CityCard = (props) => {
    return ( 
        <>
            <div className="city-card-container">
                <img src={`./images/${props.img}`} alt="" />
                <p>{props.city}</p>
            </div>
        </>
     );
}
 
export default CityCard;