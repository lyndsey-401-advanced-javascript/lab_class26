/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-classes-per-file */
import React from 'react';
import Counter from './header';
import Footer from './footer'; 

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  // TODO: increment counter instead of math.random
  handleButtonClick = (e) => {
    e.preventDefault();
    this.setState({ counter: this.counter });
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <button type="button" onClick={this.handleButtonClick}>Click Me</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Counter />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
