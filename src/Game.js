import React, { Component } from "react";
import { HashRouter, BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import TeamEvents from './TeamEvents';

/*
  --------------------------------------------------------------
  G A M E

  --------------------------------------------------------------
*/
class Game extends Component {

  constructor(props) {
    super(props);
  }
  render() {
  
      var m = {}

      if (this.props.match === undefined) {
        m = {
          fifa_id: "unknown",
          datetime: "sometime, somewhere",
          home_team: {
            country: "Sweden"
          },
          away_team: {
            country: "Brazil"
          },
        }

        console.log(m);
      }
      else {
         m = this.props.match;
      }

      var home_code = this.findCountryCode(m.home_team.country);
      var away_code = this.findCountryCode(m.away_team.country);
  
      return (
        <div className="container game" key={m.fifa_id}>
  
          <div className="row">
            <div className="col-12">
              <span className="bordered">{m.datetime}</span>-
            </div>
          </div>
  
          <div className="row">
            <div className="col-4">
              <span className={"bordered flag-icon flag-icon-" + home_code.toLowerCase()}></span>
            </div>
  
            <Link to={'/game/{m.id}'} >
              <div className="bordered col-4">
                <span className="team-goals">{m.home_team.goals}</span>
                <span>-</span>
                <span className="team-goals">{m.away_team.goals}</span>
              </div>
              <div className="col-4">
                <span className={"bordered flag-icon flag-icon-" + away_code.toLowerCase()}></span>
              </div>
            </Link>
          </div>
  
          <div className="row bordered">
            <div className="col-4">
              <span className="home-team">{m.home_team.country}</span>
            </div>
            <div className="col-4">
              <span className="time">{m.time}</span>
            </div>
            <div className="col-4">
              <span className="away-team">{m.away_team.country}</span>
            </div>
          </div>
  
  
          <div className="row">
            <div className="col-6">
              <TeamEvents team="home" events={m.home_team_events} />
            </div>
            <div className="col-6">
              <TeamEvents team="away" events={m.away_team_events} />
            </div>
          </div>
  
        </div >
      );
    }
  
    findCountryCode(country) {
  
      if (country === "Russia") {
        country = "Russian Federation";
      }
      else if (country === "England") {
        country = "United Kingdom of Great Britain and Northern Ireland";
      }
      else if (country === "Korea Republic") {
        country = "Korea (Republic of)";
      }
      else if (country === "Iran") {
        country = "Iran (Islamic Republic of)";
      }
  
      for (var p of this.props.countries) {
        if (p.name === country) {
          /* console.log("returning ", p["alpha-2"]) */
          return p["alpha-2"];
        }
      }
      return '';
    }
  
  
  }
  
  export default Game;