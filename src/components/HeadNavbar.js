import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import logo from '../img/plasmaLogo.jpg'
import {FaSearch} from 'react-icons/fa'
import '../css/header.css'

import * as AuthService from '../services/auth.service'

import News from '../pages/News.js'
import Community from '../pages/Community.js'
import Login from '../pages/Login.js'
import Home from '../pages/Home.js'
import Profile from '../pages/Profile.js'
import Signup from '../pages/Signup.js'
import Product from '../pages/Product.js'

export default function HeadNavbar() {
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
    }
  }, [])

  const logOut = () => {
    AuthService.logout()
  }

  return (
    <Router>
      <Navbar variant="dark" expand="lg" style={{backgroundColor: '#000000'}}>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/community">
              Community
            </Nav.Link>
            <Nav.Link as={NavLink} to="/news">
              News
            </Nav.Link>
          </Nav>

          {currentUser ? (
            <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/profile">
                {currentUser.username}
              </Nav.Link>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/signup">
                Sign Up
              </Nav.Link>
            </Nav>
          )}

          <Form inline>
            <FormControl
              type="text"
              id="gameTitle"
              placeholder="Search"
              className="mr-sm-2"
              // onChange={onChangeTitle}
            />
            <Button className="searchBtn" variant="outline-secondary">
              <FaSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/community" exact component={Community} />
        <Route path="/news" exact component={News} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/product" exact component={Product} />
        {/* <Route path="/profile" component={Profile} /> */}
        <Route path="/profile/:name" exact component={Profile} />
      </Switch>
    </Router>
  )
}
