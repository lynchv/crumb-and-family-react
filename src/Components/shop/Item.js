import React from 'react';
import Media from 'react-bootstrap/Media'
import cc1 from '../../img/cupcakes/cc1.jpeg'

const Item = (props) => {
    return (
        <Media>
            <img
                width={200}
                height={200}
                className="mr-3"
                src={cc1}
                alt="this is a cupcake"
            />
            <Media.Body>
                <h2>Media Heading</h2>
                <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
                </p>
            </Media.Body>
        </Media>
    )
}

export default Item