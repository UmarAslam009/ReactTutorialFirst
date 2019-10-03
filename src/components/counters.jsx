import React, { Component } from "react";
import Counter from "./counter";

class counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-danger btn-sm m-2"
        >
          Reset
        </button>

        {this.props.counter.map(item => (
          <Counter
            key={item.id}
            counter={item}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default counters;
