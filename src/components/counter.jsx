import React, { Component } from "react";

class Counter extends Component {
  render() {
    let classes = this.applyClass();
    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "zero" : count;
  }
  applyClass() {
    let classes = " m-2 badge badge-warning ";
    classes += this.props.counter === 0 ? " badge-warning" : "badge-primary";
    return classes;
  }
}

export default Counter;
