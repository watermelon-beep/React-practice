import PropTypes from 'prop-types'
import ReactImg from './assets/react.svg'

function Card({
    img = ReactImg,
    name = "elena",
    detail = "dummy dumb dumb",
}) {
     
    return(
        <div className="row-part">
            <div className="card">
                <img src= {img} alt="" />
                   <div className="detail">
                    <h2>{name}</h2>
                    <p>{detail}</p>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    detail: PropTypes.string   
};


export default Card