import React from "react"
import PropTypes from "prop-types"
import Person from "./Person"

import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import NavigationBar from "./global/NavigationBar";

class App extends React.Component {
  state = { value: 0 }

  switchNameHandler = () => {
      console.log('Was clicked!');
      this.setState( { value: this.state.value + 1});
  }

  render () {
    return (
      <React.Fragment>
        <NavigationBar/>
        <Jumbotron>
            <h1>Homepage</h1>
            <p>Yep this is working!</p>
        </Jumbotron>
        <Person value = {this.state.value}></Person>
        <button onClick={this.switchNameHandler}>Hit it</button>
      </React.Fragment>
    );
  }
}

export default App
