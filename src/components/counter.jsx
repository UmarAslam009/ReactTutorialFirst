import React, { Component } from "react";

class Counter extends Component {

  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    let classes = this.applyClass();
    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button onClick={this.increment} className="btn btn-primary btn-sm">
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    const count = this.state.value;
    return count === 0 ? "zero" : count;
  }
  applyClass() {
    let classes = "badge m-2";
    classes += this.state.value === 0 ? " badge-warning" : "badge-primary";
    return classes;
  }
}

export default Counter;
