import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <section className="search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search Characters"
            autoFocus
          />
        </form>
      </section>
    );
  }
}
