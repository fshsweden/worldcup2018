import React, { Component } from "react";

/*
  --------------------------------------------------------------
  G R O U P R E S U L T S

  --------------------------------------------------------------
*/
class GroupResults extends Component {
    render() {

      if (this.props.status.length > 0) {
        return (
          <h1>{this.props.status}</h1>
        )
      }
      return <div>
        
        {this.props.group_results.filter(f => {

          // console.log("filtering", f);
          return f.letter === this.props.letter
          }).map(x => {

          //console.log("mapping", x);

          return (
            <div key={x.letter}>
              <h2>Group {x.letter}</h2>
              <ol>
                {x.ordered_teams.map(y => {
                  return <li key={y.country}>{y.country} {y.points} points</li>
                })}
              </ol>
            </div>
          )
        })}
      </div>
    }
  
    componentDidMount() {
    }
  }
  

  export default GroupResults;