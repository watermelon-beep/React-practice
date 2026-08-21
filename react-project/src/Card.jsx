function Card(props) {
    return(
        <div className="row-part">
            <div className="card">
                <img src= {props.img} alt="" />
                <div className="detail">
                    <h2>{props.name}</h2>
                    <p>{props.detail}</p>
                </div>
            </div>
        </div>
    );
}

export default Card