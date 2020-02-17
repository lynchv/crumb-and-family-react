import React, {useState} from 'react';
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import { connect } from "react-redux"
import { createItem } from '../../store/actions'

const CreateItemUi = ({itemCategories, onItemCreate}) => {

    const [uploadedImage, setUploadedImage] = useState("")

    const handleSubmit = event => {
        event.preventDefault();
        // Get all standard form data
        const form = event.currentTarget
        const itemInfo = {}
        for (const group of form) {
            if (group.id !== "") {
                itemInfo[group.id] = group.value
            }
        }
        // Append Image URI to itemInfo
        itemInfo.image = uploadedImage

        onItemCreate(itemInfo)
        console.log(itemInfo)
    }

    const handleFileUpload = event => {
        const uploadedImage = event.target.files[0]
        const reader = new FileReader()
        reader.onload = () => {
            setUploadedImage(reader.result)
        }
        reader.readAsDataURL(uploadedImage)
    }

    return (
        <Form className="create-item" onSubmit={handleSubmit}>
            <Form.Group controlId="name">
                <p>Name</p>
                <Form.Control placeholder="Enter Item Name" />
            </Form.Group>

            <Form.Group controlId="category">
                <p>Category</p>
                <Form.Control as="select" placeholder="" defaultValue="">
                    <option disabled value="">Select Item Category</option>
                    {itemCategories.map((category, i) => (
                        <option key={i}>{category}</option>
                    ))}
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
                <p>Description</p>
                <Form.Control as="textarea" rows="3" placeholder="Enter Item Description" />
            </Form.Group>

            <Form.Group controlId="price">
                <p>Price</p>
                <Form.Control placeholder="Enter Item Price"/> 
            </Form.Group>

            <Form.Group controlId="Image" onChange={handleFileUpload}>
                <p>Price</p>
                <input type="file" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Create
            </Button>
        </Form>
    )
}

const mapStateToProps =  state => {
    return {
        itemCategories: state.itemCategories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onItemCreate(itemInfo) {
            dispatch(
                createItem(itemInfo)
            )
        }
    }
}

const CreateItem = connect(mapStateToProps, mapDispatchToProps)(CreateItemUi)

export default CreateItem