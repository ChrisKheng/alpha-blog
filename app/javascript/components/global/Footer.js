import React from 'react'
import Container from "react-bootstrap/Container"

const Footer = () => {
    return (
        <Container>
            <footer class="footer">
                <small>
                    <a href="https://github.com/chrisKheng/cvwo2020">View on Github </a>
                    by <a href="https://github.com/ChrisKheng">Chris Kheng</a>
                </small>

                <nav>
                    <ul>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </footer>
        </Container>
    )
}

export default Footer

