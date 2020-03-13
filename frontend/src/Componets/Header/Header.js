import React from 'react';
import {ButtonToggle, Nav, NavItem} from "reactstrap";
import {NavLink as RouterLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <Nav className="bg-primary" pills>

                <NavItem className="m-3" >

                    <ButtonToggle tag={RouterLink} to="/" >Main page</ButtonToggle>{' '}
                </NavItem>

            </Nav>
        </div>
    );
};

export default Header;