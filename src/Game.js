import React, { Component } from "react";
import GameEvents from './GameEvents';
import "./Game.css";

/*
  --------------------------------------------------------------
  G A M E

  --------------------------------------------------------------
*/
class Game extends Component {

  render() {
  
      console.log("GAME PROPS", this.props);
      var game_id = this.props.match.params.game_id;
      var all_games = this.props.all_games;

      console.log("ALL GAMES:", all_games);

      if (all_games.length === 0) {
        return (
          <h3>Still waiting for data!</h3>
        );
      }

      // Look up that match!
      var mm = all_games.filter(x => {
        return game_id === x.fifa_id
      });

      console.log("MM:", mm);

      if (mm.length === 0) {
        return (
          <h3>{game_id} not found!</h3>
        );
      }

      var m = mm[0]
      console.log("FOUND:", m);

      var home_code = this.findCountryCode(m.home_team.country);
      var away_code = this.findCountryCode(m.away_team.country);
  
      return (
          <div className="game_detail" key={m.fifa_id}>
            <div  className="datetime">{m.datetime}</div>-
            <div className={"home_flag flag-icon flag-icon-" + home_code.toLowerCase()}></div>
            <div className="home_goals">{m.home_team.goals}</div>
            <div className="away_goals">{m.away_team.goals}</div>
            <div className={"away_flag flag-icon flag-icon-" + away_code.toLowerCase()}></div>
            <div className="home_team">{m.home_team.country}
            <GameEvents label="Home" events={m.home_team_events} />
            </div>
            <div className="time">{m.time}</div>
            <div className="away_team">{m.away_team.country}
            <GameEvents label="Away" events={m.away_team_events} />
            </div>
            
          </div>
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
