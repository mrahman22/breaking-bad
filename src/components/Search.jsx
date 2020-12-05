import React, { Component } from "react";

export default class Search extends Component {
  state = {
    input: "",
  };


  handleInput = (key, value) => {
      this.setState({[key]: value})
      this.props.getQuery(value);
  }
z
  render() {
    return (
      <section className="search">
        <form>
          <input
            type="text"
            name="input"
            className="form-control"
            placeholder="Search Characters"
            autoFocus
            value={this.state.input}
            onChange={(e) => this.handleInput("input", e.target.value)}
          />
        </form>
      </section>
    );
  }
}
