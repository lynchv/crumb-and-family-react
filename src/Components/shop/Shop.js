import React, {useState, useEffect} from 'react'
import ApiService from '../utils/service'
import ShopItem from './ShopItem'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Pagination from 'react-bootstrap/Pagination'
import './shop.css'


const Shop = (props) => {

    const [selectedPage, setSelectedPage] = useState(1);
    const [items, setItems] = useState([]);
    const pages = []

    for (let x = 1; x <= (items.length / 3) + 1; x++) {
        pages.push(
            <Pagination.Item
                key={x}
                active={ selectedPage === x ? true : false}
                onClick={() => setSelectedPage(x)}
            >
            {x}
            </Pagination.Item>
        );
    }

    const onAddToCart = (item) => {
        props.onShopChange(item)
    }

    useEffect(() => {
        const apiServ = new ApiService()
        apiServ.getAllItems(props.itemsCategory).then(
            items => setItems(items)
        )
    }, [props.itemsCategory])

    return (
        <Container className="mt-5">
            <div className="mt-5 shop-window">
            {items.slice((selectedPage-1)*3, selectedPage * 3).map( item => (
                <Row key={item.item_id} className="mb-4">
                    <Col>
                        <ShopItem item={item} onAddToCart={onAddToCart}/>
                    </Col>
                </Row>
            ))}
            </div>
            <Pagination className="mt-4 pagination">{pages}</Pagination>
        </Container>
    )
}

export default Shop