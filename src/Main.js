import React, { Component } from "react";
import {
  Route,
  NavLink as RouteNavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import App from "./App";
import Game from "./Game";
import GamesList from "./GamesList";
import Today from "./Today";
import logo from './logo.svg';
import GroupResults from "./GroupResults";

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

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }} />
  );
}

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todays_matches: [],
      countries: [],
      teams: [],
      group_results: [],
      all_matches: []
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <ul className="header">
            {/**/}
            <li><RouteNavLink to="/">Home</RouteNavLink></li>
            <li><RouteNavLink to="/today">Today</RouteNavLink></li>
            <li><RouteNavLink to="/matches">Matches</RouteNavLink></li>
            <li><RouteNavLink to="/contact">Contact</RouteNavLink></li>
            <li><RouteNavLink to="/app">App</RouteNavLink></li>
            <li><RouteNavLink to="/group_a">A</RouteNavLink></li>
            <li><RouteNavLink to="/group_b">B</RouteNavLink></li>
            <li><RouteNavLink to="/group_c">C</RouteNavLink></li>
            <li><RouteNavLink to="/group_d">D</RouteNavLink></li>
            <li><RouteNavLink to="/group_e">E</RouteNavLink></li>
            <li><RouteNavLink to="/group_f">F</RouteNavLink></li>
            <li><RouteNavLink to="/group_g">G</RouteNavLink></li>
            <li><RouteNavLink to="/group_h">H</RouteNavLink></li>
            {/**/}

            {/*
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink href="/today">Todays games</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Groups
                </DropdownToggle>

                <DropdownMenu right>
                  <DropdownItem href="/group_a">Group A</DropdownItem>
                  <DropdownItem href="/group_b">Group B</DropdownItem>
                  <DropdownItem href="/group_c">Group C</DropdownItem>
                  <DropdownItem href="/group_d">Group D</DropdownItem>
                  <DropdownItem href="/group_e">Group E</DropdownItem>
                  <DropdownItem href="/group_f">Group F</DropdownItem>
                  <DropdownItem href="/group_g">Group G</DropdownItem>
                  <DropdownItem href="/group_h">Group H</DropdownItem>
                </DropdownMenu>
                
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
*/ }

          </ul>

          <div className="content">
            <PropsRoute exact path="/" component={Home} />
            <PropsRoute path="/matches" 
              component={GamesList} 
              matches={this.state.all_matches}
              countries={this.state.countries}
              />
            <PropsRoute path="/contact" component={Contact} />
            <PropsRoute path="/app" component={App} />
            <PropsRoute path="/today"
              component={Today}
              todays_matches={this.state.todays_matches}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_a"
              letter={"A"}
              component={GroupResults}
              group_results={this.state.group_results}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_b"
              letter={"B"}
              component={GroupResults}
              group_results={this.state.group_results}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_c"
              letter={"C"}
              component={GroupResults}
              group_results={this.state.group_results}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_d"
              letter={"D"}
              component={GroupResults}
              group_results={this.state.group_results}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_e"
              letter={"E"}
              component={GroupResults}
              group_results={this.state.group_results}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_f"
              letter={"F"}
              component={GroupResults}
              group_results={this.state.group_results}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_g"
              letter={"G"}
              component={GroupResults}
              group_results={this.state.group_results}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_h"
              letter={"H"}
              component={GroupResults}
              group_results={this.state.group_results}
              countries={this.state.countries}
              teams={this.state.teams}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }

  reload_todays_matches() {
    fetch("https://worldcup.sfg.io/matches/today?jsoncalback=?").then(results => {
      return results.json();
    }).then(data => {
      this.setState({ todays_matches: data });
    }).catch(error => {
      console.log(error);
    })
  }

  reload_countries() {
    fetch("https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.json?jsoncalback=?")
      .then(handleErrors)
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({ countries: data });
      }).catch(error => {
        console.log(error);
      })
  }

  reload_group_results() {
    console.log("GroupResults tick()...");
    this.setState({ time_of_last_tick: new Date().getTime() });
    fetch("https://worldcup.sfg.io/teams/group_results?jsoncalback=?")
      .then(handleErrors)
      .then(results => {
        return results.json()
      }).then(data => {
        console.log("Group results data:", data);
        this.setState({ group_results: data });
      })
  }

  reload_all_matches() {
    fetch("https://worldcup.sfg.io/matches?jsoncalback=?")
      .then(handleErrors)
      .then(results => {
        return results.json()
      }).then(data => {
        this.setState({ all_matches: data });
      })
  }


  componentDidMount() {
    console.log("Main mounted - " + new Date().getTime());

    this.reload_todays_matches = this.reload_todays_matches.bind(this);
    this.reload_todays_matches();
    setInterval(this.reload_todays_matches, 120000);

    this.reload_countries = this.reload_countries.bind(this);
    this.reload_countries();
    setInterval(this.reload_countries(), 120000);

    this.reload_group_results = this.reload_group_results.bind(this);
    this.reload_group_results();
    this.timer_rgr = setInterval(this.reload_group_results, 120000);

    this.reload_all_matches = this.reload_all_matches.bind(this);
    this.reload_all_matches();
    this.timer_rgr = setInterval(this.reload_all_matches, 120000);
  }

}

export default Main;
