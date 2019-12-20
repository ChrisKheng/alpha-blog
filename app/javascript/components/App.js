import React from "react"
import PropTypes from "prop-types"
import Person from "./Person"

class App extends React.Component {
  state = { value: 0 }

  switchNameHandler = () => {
      console.log('Was clicked!');
      this.setState( { value: this.state.value + 1});
  }

  render () {
    return (
      <React.Fragment>
        <h1>Homepage</h1>
        <p>Yep this is working!</p>
        <Person value = {this.state.value}></Person>
        <button onClick={this.switchNameHandler}></button>
      </React.Fragment>
    );
  }
}

export default App
