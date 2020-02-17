import React, { useState } from 'react';
import { Button } from 'react-bootstrap'

import { connect } from 'react-redux'
import { deleteItem } from '../../store/actions'

import Media from 'react-bootstrap/Media'
import { PageCount } from '../utils/utils'

const DisplayItemUi = ({items, onItemRemove}) => {
    
    const itemPerPage = 6
    const [selectedPage, setSelectedPage] = useState(1)
    
    return (
        <div className="display-items">
            {items.slice((selectedPage-1)*itemPerPage, selectedPage*itemPerPage).map( (item, i) => (
                <Media key={i} className="mb-3">
                    <img className="cart-item-image mr-4" alt="Item" src={item.image}/>
                    <Media.Body>
                        <div className="item-body">
                            <div className="item-info"> 
                                <span>Name: {item.name}</span>
                                <span>Category: {item.category}</span>
                                <span>Price: {item.price}</span>
                            </div>
                            <div className="item-remove">
                                <Button variant="danger" onClick={ () => onItemRemove(item.item_id)}>Remove</Button>
                            </div>
                        </div>
                    </Media.Body>
                </Media>
            ))}
            
            <PageCount itemTotal={items.length} itemsPerPage={itemPerPage} onPageClick={setSelectedPage}/>
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
