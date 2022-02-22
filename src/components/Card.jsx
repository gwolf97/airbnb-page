

const Card = (props) => {
    return ( 
        <>
            <div className="card">
                <img src={`./images/${props.img}`} alt="" className="card-image"/>
                <div className="card-stats">
                    <img src="./images/rating-icon.png" alt="" className="star"/> 
                    <span className="card-rating">{props.rating}</span>
                    <span className="gray">({props.reviewCount}) - </span>
                    <span className="gray">{props.location}</span>
                </div>
                <div className="title">
                <p className="card-title">{props.title}</p>
                </div>
                <p className="card-price"><span className="bold">From ${props.price}</span><span className="gray"> / person</span></p>
                
            </div>
        </>
     );
}
 
export default Card;
