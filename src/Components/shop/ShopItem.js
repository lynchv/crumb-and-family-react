import React from 'react';
import './shop.css'
import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'


const ShopItem = (props) => {

    return (
        <Media>
            <img className="shop-item-image mr-4" alt="Item" src={"data:image/jpeg;base64," + props.item.image}/>
            <Media.Body>
                <h2> {props.item.name} </h2>
                <p> {props.item.description} </p>
                <div style={{float: "right"}}>
                    <Button variant="primary" onClick={() => props.onAddToCart(props.item)}>Add to cart</Button>
                </div>
            </Media.Body>
        </Media>
    )
}

export default ShopItem