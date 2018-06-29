import React, { Component } from "react";

/*
  --------------------------------------------------------------
  F O R M

  --------------------------------------------------------------
*/
class Form extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <form className="filter-form">
          <label>Input:
          <input type="text"></input></label>
        </form>
      );
    }
  }
  
  export default Form;