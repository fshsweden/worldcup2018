import React, { Component } from "react";
import GamesList from './GamesList';
/*
  --------------------------------------------------------------
  A L L

  --------------------------------------------------------------
*/

class All extends Component {
    render() {
  
      return <GamesList
        countries={this.props.data.countries}
        teams={this.props.data.teams}
        matches={this.props.data.matches}
      />
  
    }
  }

  
  export default All;
