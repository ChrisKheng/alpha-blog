import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
//    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi hi!'));
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
