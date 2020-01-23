import React from 'react'

import Icon from '../../utils/Icon'
import Dropdown from 'react-bootstrap/Dropdown'
import { useHistory } from "react-router-dom";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <Icon icon='user' size="medium"/>
    </div>
  ));

const UserDropdown = ({user, onLogOut}) => {

    const router = useHistory();

    const onMenuSelect = (eventKey) => {
        if (eventKey === "logOut") {
            onLogOut()
            router.push("/home")
        }
        else {
            router.push(eventKey)
        }
    }

    return (
        <Dropdown className="mr-4" drop="left" onSelect={onMenuSelect}>
            <Dropdown.Toggle as={CustomToggle} id="user-dropdown">
            </Dropdown.Toggle>
                { user.loggedIn ?
                    <Dropdown.Menu>
                        <Dropdown.Header>Welcome {user.first_name}</Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="/cart">My cart</Dropdown.Item>
                        <Dropdown.Item eventKey="/account">Account</Dropdown.Item>
                        {user.is_admin ? <Dropdown.Item eventKey="/settings">Settings</Dropdown.Item> : null }
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="logOut">Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                :
                    <Dropdown.Menu>
                        <Dropdown.Header>Welcome Guest</Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="/login">Log In</Dropdown.Item>
                    </Dropdown.Menu>
                }
        </Dropdown>
    )
}

export default UserDropdown