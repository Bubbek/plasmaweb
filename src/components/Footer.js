import React from 'react'
import '../css/App.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../img/plasmaLogo.jpg'
import {FaTwitter, FaInstagram, FaFacebookF, FaYoutube, FaTwitch} from 'react-icons/fa'

// import Button from 'react-bootstrap/Button'
// import {FaSearch} from 'react-icons/fa'

export default function Footer() {
  return (
    <Container>
      <Row>
        <div className="michael"></div>
      </Row>
      <Row style={{color: 'white'}}>
        <Col xs={12} md={12}>
          <p className="footerBody1">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            © 2021 Plasma Projekt. This is school project we dont own everything.
          </p>
        </Col>
        <div className="michael2"></div>
        <Col style={{textAlign: 'center'}} xs={12} md={4}>
          <h1>Team</h1>
          <p>Michael Kornakiewicz</p>
          <p>Wirakiat Kaewteenthaen</p>
          <p>Marcus Sandström</p>
        </Col>
        <Col style={{textAlign: 'center'}} xs={12} md={4}>
          <h1>Socials</h1>
          <div className="socials">
            <FaTwitter />
            <FaInstagram />
            <FaFacebookF />
            <FaYoutube />
            <FaTwitch />
          </div>
        </Col>
        <Col style={{textAlign: 'center'}} xs={12} md={4}>
          <h1>Appliances</h1>
          Partial usage of library for images and descriptions by https://rawg.io/
        </Col>
      </Row>
    </Container>
  )
}
