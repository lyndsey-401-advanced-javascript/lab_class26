import React from 'react';
import { connect } from 'react-redux';
import Counter  from './header';
import Footer from './footer.js'; 

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    this.setState({ counter: this.counter++ });
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <button onClick={this.handleButtonClick}>Click Me</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Counter />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
