import React, { useState,useContext } from "react";
import { Button } from "reactstrap";
import './Navbar.css';
import Toggle from "../../components/Toggle/Toggle"
import { themeContext } from "../../Context";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Header = () => {

    const [collapsed, setCollapsed] = useState(true);
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <>
            <div className="header">
                <Navbar expand="lg"  className="">
                    <div className="n-left">
                  <Toggle/>
                    </div>
            
                    <NavbarToggler style={{background:"white"}} aria-controls='responsive-navbar-nav' onClick={toggleNavbar}  />
                    <Collapse id='responsive-navbar-nav' isOpen={!collapsed} navbar className="nav-collapse text-light">
                        <Nav className={`nav-data ms-auto gap-3 ${darkMode ?  "navbar-dark" : "navbar-light" }`} navbar>
                        <NavItem className="">
                            <NavLink className="nav-text" href="">Home</NavLink>
                        </NavItem> <NavItem className="">
                            <NavLink className="nav-text" href="">Services</NavLink>
                        </NavItem>
                        <NavItem className="">
                            <NavLink className="nav-text" href="">Experience</NavLink>
                        </NavItem> <NavItem className="">
                            <NavLink className="nav-text" href="">Protfolio</NavLink>
                        </NavItem>
                        <NavItem className="">
                            <NavLink className="nav-text" href="">Testimonial</NavLink>
                        </NavItem>
                        </Nav>
                        <Button className="btn-contect">Contect Us</Button>
                    </Collapse>
           
                </Navbar>
               
            </div>

      
        </>
    );
};

export default Header;
