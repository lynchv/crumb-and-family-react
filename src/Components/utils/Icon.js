import React from 'react';
import './Icon.css';

const Icon = (props) => {
    return (
        <>
            <div className={`icon ${props.icon} ${props.size ? props.size : 'small'}`}>
            </div>
        </>
    )
}

export default Icon