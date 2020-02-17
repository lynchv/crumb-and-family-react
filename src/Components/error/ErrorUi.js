import React from 'react';
import './Error.css';
import Toast from 'react-bootstrap/Toast'

const ErrorUi = ({title, message, onClose}) => {

    return (
        <>
        {title !== "" ?
            <div className="notification-container">
                <Toast className="notification" animation={true} onClose={() => onClose()}>
                    <Toast.Header>
                        <strong className="mr-auto">{title}</strong>
                    </Toast.Header>
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </div>
            :
            <></>
        }
        </>

    )
}

export default ErrorUi