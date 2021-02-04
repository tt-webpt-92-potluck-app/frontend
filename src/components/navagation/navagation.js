import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./navagation.css";
import UserContext from "../../contexts/UserContext";
import Logo from "../../components/logo.jpg"

const Navagation = props => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(UserContext);
  const toggle = () => setIsOpen(!isOpen);

  // console.log(user.user_id);
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/Home">
        <img src={Logo} alt="Potluck Logo" className="navLogo" />
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Events</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Users</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Account
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href="/SignUp">SignUp</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/">Login</NavLink>
              </DropdownItem>
              {/* <DropdownItem divider /> */}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};


export default Navagation;