import React, {useState} from 'react'
import ShopItem from './ShopItem'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Pagination from 'react-bootstrap/Pagination'
import './shop.css'


const ShopUi = ({items}) => {

    const [selectedPage, setSelectedPage] = useState(1)
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

    return (
        <Container className="mt-5">
            <div className="mt-5 shop-window">
            {items.slice((selectedPage-1)*3, selectedPage * 3).map( item => (
                <Row key={item.item_id} className="mb-4">
                    <Col>
                        <ShopItem item={item}/>
                    </Col>
                </Row>
            ))}
            </div>
            <Pagination className="mt-4 pagination">{pages}</Pagination>
        </Container>
    )
}

export default ShopUi