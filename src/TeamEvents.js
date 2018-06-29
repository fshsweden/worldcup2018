import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

/*
  --------------------------------------------------------------
  T E A M E V E N T S

  --------------------------------------------------------------
*/
class TeamEvents extends Component {

    render() {
  
      return this.props.events.map(e => {
  
        var x = "G";
        if (e.type_of_event === "goal")
          x = "G!";
        else if (e.type_of_event === "substitution-in")
          x = "IN"
        else if (e.type_of_event === "substitution-out")
          x = "OT"
        else if (e.type_of_event === "yellow-card")
          x = "YC"
        else if (e.type_of_event === "red-card")
          x = "RC"
        else if (e.type_of_event === "goal-penalty")
          x = "GP"
        else if (e.type_of_event === "goal-own")
          x = "GO"
        else if (e.type_of_event === "yellow-card-second")
          x = "GO"
        else
          x = e.type_of_event;
  
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
  
        return (
          <div className="container team-events">
            <div className="row">
              <div className="col-xs-4 team-event-type">{x}</div>
              <div className="col-xs-5 team-event-player">{e.player}</div>
              <div className="col-xs-1 team-event-time">{e.time}</div>
            </div>
          </div>
        );
      });
    }
  }
  
  export default TeamEvents;