import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class Home extends React.Component {
    render() {
        return (
            <Jumbotron className="center Jumbotron-Home">
                <h1>Homepage</h1>
                <p>Yep this is working!</p>
                <Button href="/articles">Create New Post</Button>
            </Jumbotron>
        )
    }
}

export default Home