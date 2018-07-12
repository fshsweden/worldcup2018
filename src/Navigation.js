import React, { Component } from "react";
import {
  Collapse,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';

// import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router-dom';


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

{/*
            <Link to="/">Link-Home</Link>
            <Link to="/today">Link-Today</Link>
            <Link to="/games">Link-Games</Link>
*/}
            <NavItem>
              <NavLink to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/today/" activeClassName="active" tag={RRNavLink}>Today</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/games/" activeClassName="active" tag={RRNavLink}>Games</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Groups
              </DropdownToggle>

              <DropdownMenu right>

                <NavLink to="/group_a/" activeClassName="active" tag={RRNavLink}>
                  <DropdownItem>
                    Group A<i className='fas fa-power-off float-right'></i>
                  </DropdownItem>
                </NavLink>

                <NavLink to="/group_b/" activeClassName="active" tag={RRNavLink}>
                  <DropdownItem>
                    Group B
                  </DropdownItem>
                </NavLink>

                <NavLink to="/group_c/" activeClassName="active" tag={RRNavLink}>
                  <DropdownItem>
                    Group C
                  </DropdownItem>
                </NavLink>

                <NavLink to="/group_d/" activeClassName="active" tag={RRNavLink}>
                  <DropdownItem>
                    Group D
                  </DropdownItem>
                </NavLink>

                <NavLink to="/group_e/" activeClassName="active" tag={RRNavLink}>
                  <DropdownItem>
                    Group E
                  </DropdownItem>
                </NavLink>

                <NavLink to="/group_f/" activeClassName="active" tag={RRNavLink}>
                  <DropdownItem>
                    Group F
                  </DropdownItem>
                </NavLink>

                <NavLink to="/group_g/" activeClassName="active" tag={RRNavLink}>
                  <DropdownItem>
                    Group G
                  </DropdownItem>
                </NavLink>

                <NavLink to="/group_h/" activeClassName="active" tag={RRNavLink}>
                  <DropdownItem>
                    Group H
                  </DropdownItem>
                </NavLink>


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
