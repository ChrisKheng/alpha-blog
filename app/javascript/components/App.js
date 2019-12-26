import React from "react"
import {BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./About.js"
import Home from "./Home.js"

import NavigationBar from "./global/NavigationBar";

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
          <React.Fragment>
              <NavigationBar/>
              <Route exact path="/" render = {() => <Home/>}/>
              <Route exact path="/about" render = {() => <About/>}/>
          </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App
