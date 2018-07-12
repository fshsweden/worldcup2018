import React, { Component } from "react";

/*
  --------------------------------------------------------------
  G A M E I T E M

  --------------------------------------------------------------
*/
class GameItem extends Component {

    render() {

        var m = this.props.match;

        var home_code = this.findCountryCode(m.home_team.country);
        var away_code = this.findCountryCode(m.away_team.country);

        return (
            <div className="container game" key={m.fifa_id}>
                <div className="row">
                    <div className="col-3">
                        {m.venue}
                    </div>
                    <div className="col-3">
                        {m.home_team_country}
                    </div>
                    <div className="col-3">
                        {m.away_team_country}
                    </div>
                    <div className="col-3">
                        <a href={"/game/" + m.fifa_id} 
                        className="active">{m.home_team.goals}-{m.away_team.goals}</a>
                        
                    </div>
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



export default GameItem;