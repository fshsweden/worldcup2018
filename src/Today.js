import React, { Component } from "react";

/*
  --------------------------------------------------------------
  T O D A Y

  --------------------------------------------------------------
*/
class Today extends Component {

    render() {
      return <div>
        <h2>Todays' games</h2>
        {this.props.todays_matches.map(x => {
          return <div key={x.fifa_id}>
            <h3>{x.venue} {x.location}</h3>
            <h4>{x.datetime}</h4>
            <h1>{x.home_team.country} vs {x.away_team.country}</h1>
            <h1>{x.home_team.goals} - {x.away_team.goals}</h1>
          </div>
        })}
  
      </div>
    }
  
    componentDidMount() {
    }
  
  }

  export default Today;
