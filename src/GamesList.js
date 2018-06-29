import React, { Component } from "react";
import GameItem from './GameItem';

/*
  --------------------------------------------------------------
  G A M E S L I S T

  --------------------------------------------------------------
*/
class GamesList extends Component {

    render() {
  
      // all games...
      let allmatches = this.props.matches.map(m => {
        return <GameItem key={m.fifa_id} countries={this.props.countries} match={m} />
      });
  
      return (
        allmatches
      );
    }
  }

  
  export default GamesList;