import React from 'react';
import { Link } from 'react-router-dom'
import Rating from 'react-rating'

export default function Product(props) {
    console.log(props.product.rating)
    return (
        <div className="col-md-3 m-3 card p-2 text-start">
            <Link to={`product/${props.product.id}`} style={{ textDecoration: 'none' }}>
                <img src={props.product.image} className="img-fluid" />
                <h1>{props.product.name}</h1>
                <Rating
                    style={{ color: "orange" }}
                    initialRating={props.product.rating}
                    emptySymbol="far fa-star fa-1x"
                    fullSymbol="fas fa-star fa-1x"
                    readonly={true}
                />
                <h1>Price: {props.product.price}</h1>
            </Link>
        </div>
    );
}