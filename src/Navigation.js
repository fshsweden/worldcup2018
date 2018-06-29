import React, { Component } from "react";
import {
  Collapse,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  NavDropdown,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

/*
  --------------------------------------------------------------
  N A V I G A T I O N

  --------------------------------------------------------------
*/

class Navigation extends Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };

  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (<div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">World Cup 2018</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/today/">Today</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/groups/">Groups</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                  </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

        </Collapse>
      </Navbar>
    </div >
    )
  }
}


export default Navigation;
