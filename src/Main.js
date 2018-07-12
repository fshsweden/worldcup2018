import React, { Component } from "react";
import {
  Route,
  //  NavLink as RouteNavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
//import Stuff from "./Stuff";
import Contact from "./Contact";
import App from "./App";
import Game from "./Game";
import GamesList from "./GamesList";
import Today from "./Today";
import logo from './worldcup.png';
import GroupResults from "./GroupResults";
import Navigation from "./Navigation";

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  else {

  }

  return response;
}

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);

  console.log("renderMergedProps");

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
      status: "",
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
          <Navigation />

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <div className="content">
            <PropsRoute exact path="/" component={Home} />
            <PropsRoute path="/games"
              status={this.state.status}
              component={GamesList}
              all_games={this.state.all_matches}
              countries={this.state.countries}
            />
            <PropsRoute path="/game/:game_id"
              status={this.state.status}
              component={Game}
              all_games={this.state.all_matches}
              countries={this.state.countries}
            />
            <PropsRoute path="/today"
              status={this.state.status}
              component={Today}
              todays_matches={this.state.todays_matches}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_a"
              status={this.state.status}
              letter={"A"}
              component={GroupResults}
              group_results={this.state.group_results}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_b"
              status={this.state.status}
              letter={"B"}
              component={GroupResults}
              group_results={this.state.group_results}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_c"
              status={this.state.status}
              letter={"C"}
              component={GroupResults}
              group_results={this.state.group_results}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_d"
              status={this.state.status}
              letter={"D"}
              component={GroupResults}
              group_results={this.state.group_results}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_e"
              status={this.state.status}
              letter={"E"}
              component={GroupResults}
              group_results={this.state.group_results}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_f"
              status={this.state.status}
              letter={"F"}
              component={GroupResults}
              group_results={this.state.group_results}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_g"
              status={this.state.status}
              letter={"G"}
              component={GroupResults}
              group_results={this.state.group_results}
              countries={this.state.countries}
              teams={this.state.teams}
            />
            <PropsRoute path="/group_h"
              status={this.state.status}
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
    fetch("https://worldcup.sfg.io/matches/today?jsoncalback=?")
    .then(handleErrors)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({ todays_matches: data });
      this.setState({ status: "" });
      console.log("received Today!");
    }).catch(error => {
      console.log("Error Today :", error);
      this.setState({ status: error });
    })
}

  reload_countries() {
    console.log("fetching Countries");

    fetch("https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.json?jsoncalback=?")
      .then(handleErrors)
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({ countries: data });
        this.setState({ status: "" });
        console.log("received Countries!");
      }).catch(error => {
        console.log("Error Countries :", error);
        this.setState({ status: error });
      })
  }

  reload_group_results() {
    console.log("fetching GroupResults ...");
    this.setState({ time_of_last_tick: new Date().getTime() });
    fetch("https://worldcup.sfg.io/teams/group_results?jsoncalback=?")
      .then(handleErrors)
      .then(results => {
        return results.json()
      }).then(data => {
        console.log("received GroupResults data:", data);
        this.setState({ group_results: data });
        this.setState({ status: "" });
      }).catch(error => {
        console.log("Error GroupResults :", error);
        this.setState({ status: error });
      })
  }

  reload_all_matches() {
    console.log("fetching All Matches ...");
    fetch("https://worldcup.sfg.io/matches?jsoncalback=?")
      .then(handleErrors)
      .then(results => {
        return results.json()
      }).then(data => {
        console.log("received All Matches");
        this.setState({ all_matches: data });
        this.setState({ status: "" });
      }).catch(error => {
        console.log("Error All Matches :", error);
        this.setState({ status: error });
      })
  }


  componentWillMount() {
    console.log("componentWillMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentshouldUpdate() {
    console.log("componentshouldUpdate");
  }

  componentwillUpdate() {
    console.log("componentdidUpdate");
  }

  componentdidUpdate() {
    console.log("componentdidUpdate");
  }

  componentwillReceiveProps() {
    console.log("componentwillReceiveProps");
  }

  componentDidMount() {
    console.log("Main mounted - " + new Date().getTime());

    this.reload_todays_matches = this.reload_todays_matches.bind(this);
    this.reload_todays_matches();
    setInterval(this.reload_todays_matches, 60000);

    this.reload_countries = this.reload_countries.bind(this);
    this.reload_countries();
    setInterval(this.reload_countries(), 90000);

    this.reload_group_results = this.reload_group_results.bind(this);
    this.reload_group_results();
    this.timer_rgr = setInterval(this.reload_group_results, 120000);

    this.reload_all_matches = this.reload_all_matches.bind(this);
    this.reload_all_matches();
    this.timer_rgr = setInterval(this.reload_all_matches, 240000);
  }

}

export default Main;
