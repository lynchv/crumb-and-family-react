import React from 'react';
import { Button } from 'react-bootstrap'

import { connect } from 'react-redux'
import { deleteItem } from '../../store/actions'

import Media from 'react-bootstrap/Media'
import formatMoney from '../utils/utils'

const DisplayItemUi = ({items, onItemRemove}) => {
    
    return (
        <div className="display-items">
            {items.map( (item, i) => (
                <Media key={i}>
                    <img className="cart-item-image mr-4" alt="Item" src={item.image}/>
                    <Media.Body>
                        <h2> {item.name} </h2>
                        <Button variant="danger" onClick={ () => onItemRemove(item.item_id)}>Remove</Button>
                        <span style={{"fontSize": "25px"}}>{formatMoney(item.price)}$</span>
                    </Media.Body>
                </Media>
            ))}
        </div>
    )
}

const mapStateToProps =  state => {
    return {
        items: state.allItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onItemRemove(itemId) {
            dispatch(
                deleteItem(itemId)
            )
        }
    }
}

const DisplayItem = connect(mapStateToProps, mapDispatchToProps)(DisplayItemUi)

export default DisplayItem
