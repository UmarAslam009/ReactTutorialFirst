import React from 'react';
import NavBar from './components/navbar.jsx'
import Counters from './components/counters'
import './App.css';

class App extends React.Component {
    state = {
    counter: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  increment = counter => {
    const counters=[...this.state.counter];
    const index=counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counter:counters });
  };

  Handledelete = counterID => {
      console.log(counterID);
    const counter = this.state.counter.filter(c => c.id != counterID);
    this.setState({ counter });
  };

  reset = () => {
    console.log("resset is called");
    const counter = this.state.counter.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });

  };
 render(){
  return (
    <React.Fragment>
    <NavBar totalCounter={this.state.counter.length}/>
    <main className="container">
      <Counters
        counter={this.state.counter}
        onReset={this.reset}
        onIncrement={this.increment}
        onDelete={this.Handledelete}/>
    </main>
    </React.Fragment>
  );}
}

export default App;