import React, { Component } from "react";

class GameEvents extends Component {

    render() {

        let allevts = this.props.events.map(m => {
            return (<div key={m.id}>
                <h5>{m.type_of_event}</h5>
                <h5>{m.player}</h5>
                <h5>{m.time}</h5>
            </div>);
        });

        return (allevts);
    }
}

export default GameEvents;
