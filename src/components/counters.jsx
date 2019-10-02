import React, { Component } from "react";
import Counter from "./counter";

class counters extends Component {
  state = {
    counter: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  delete = counterID => {
    const counter = this.state.counter.filter(c => c.id != counterID);
    this.setState({ counter });
  };

  render() {
    return (
      <div>
        {this.state.counter.map(item => (
          <Counter
            id={item.id}
            onDelete={this.delete}
            value={item.value}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default counters;
