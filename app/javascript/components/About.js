import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

class About extends React.Component {
    render() {
        return (
            <Jumbotron fluid className="center">
                <Container>
                    <h1>About</h1>
                </Container>
            </Jumbotron>
        )
    }
}

export default About