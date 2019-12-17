import React from 'react';
import './shop.css'
import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'

const Item = (props) => {

    let item = {
        id: props.itemId,
        quantity: 6
    }

    return (
        <Media>
            <div className={`item-image mr-4 ${props.imageRef}`}>
            </div>
            <Media.Body>
                <h2> {props.display_name} </h2>
                <p> {props.description} </p>
                <div style={{float: "right"}}>
                    <span>Select quantity: </span>
                    <select className="ml-1 mr-4" onChange={(e) => item.quantity = e.target.value}>
                        <option value={6}>x6</option>
                        <option value={12}>x12</option>
                    </select>
                    <Button variant="primary" onClick={() => props.onAddToCart(item)}>Add to cart</Button>
                </div>
            </Media.Body>
        </Media>
    )
}

export default Item