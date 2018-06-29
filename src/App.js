import React, { Component } from 'react';
import Game from './Game';
import TeamEvents from './TeamEvents';
import Navigation from './Navigation';
import Home from './Home';
import Today from './Today';
import GroupResults from './GroupResults';
import All from './All';
import Main from './Main';
import './App.css';
import './css/flag-icon.css';
// import './country_icon_list';
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
import { HashRouter, BrowserRouter, Link, Switch, Route } from 'react-router-dom';


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

/*
  --------------------------------------------------------------
  

  --------------------------------------------------------------
*/
class GroupResult extends Component {

}



/*
  --------------------------------------------------------------
  A P P 

  --------------------------------------------------------------
*/
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      matches: [],
      teams: [],
      time_of_last_tick: 0,
      group_results: [],
      todays_matches: []
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App">
            <Navigation />
            <Switch>
              <PropsRoute exact path='/' component={Home} />
              <PropsRoute path='/today' component={Today} todays_matches={this.state.todays_matches} />
              <PropsRoute path='/groups' component={GroupResults} group_results={this.state.group_results} />
              <PropsRoute path='/all' component={All} data={this.state} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }

  tick() {
    console.log("tick()...");
    this.setState({ time_of_last_tick: new Date().getTime() });

    // fetch("http://worldcup.sfg.io/matches?jsoncallback=?")
    // .then(handleErrors)  
    // .then(results => {
    //   return results.json();
    // }).then(data => {
    //   this.setState({ matches: data });
    // }).catch(error => {
    //   console.log(error);
    // })

    // fetch("http://worldcup.sfg.io/teams?jsoncalback=?")
    // .then(handleErrors)

    // .then(results => {
    //   return results.json();
    // }).then(data => {
    //   this.setState({ teams: data });
    // }).catch(error => {
    //   console.log(error);
    // })
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

  setup_reload_todays_matches() {
    this.reload_todays_matches = this.reload_todays_matches.bind(this);
    this.reload_todays_matches();
    this.timer = setInterval(this.reload_todays_matches, 60000);
  }

  reload_group_results() {
    console.log("GroupResults tick()...");
    this.setState({ time_of_last_tick: new Date().getTime() });
    fetch("https://worldcup.sfg.io/teams/group_results?jsoncalback=?")
      .then(handleErrors)
      .then(results => {
        return results.json()
      }).then(data => {
        this.setState({ group_results: data });
      })
  }

  setup_reload_group_results() {
    this.reload_group_results = this.reload_group_results.bind(this);
    this.reload_group_results();
    this.timer_rgr = setInterval(this.reload, 60000);
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

  setup_reload_countries() {
    this.reload_countries = this.reload_countries.bind(this);
    this.reload_countries();
    this.timer_rc = setInterval(this.reload_countries, 60000);
  }

  componentWillMount() {
    console.log("componentWillMount()" + new Date().getTime());
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()" + new Date().getTime());
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()" + new Date().getTime());
  }

  componentDidCatch() {
    console.log("componentDidCatch()" + new Date().getTime());
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps()" + new Date().getTime());
  }

  componentDidMount() {
    console.log("componentDidMount()" + new Date().getTime());
    // this.setup_reload_todays_matches();
    // this.setup_reload_group_results();
  }
}

export default App;
