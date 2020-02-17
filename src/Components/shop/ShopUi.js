import React, {useState} from 'react'
import ShopItem from './ShopItem'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PageCount } from '../utils/utils'
import './shop.css'


const ShopUi = ({items}) => {

    const itemPerPage = 3
    const [selectedPage, setSelectedPage] = useState(1)

    return (
        <Container className="mt-5">
            <div className="mt-5 shop-window">
            {items.slice((selectedPage-1)*itemPerPage, selectedPage*itemPerPage).map( item => (
                <Row key={item.item_id} className="mb-4">
                    <Col>
                        <ShopItem item={item}/>
                    </Col>
                </Row>
            ))}
            </div>
            <PageCount itemTotal={items.length} itemsPerPage={itemPerPage} onPageClick={setSelectedPage}/>
        </Container>
    )
}

export default ShopUi