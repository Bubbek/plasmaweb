import React from 'react'

import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'

export default function filterNavbar() {
  return (
    <>
      <Nav.Link className="filterchoice1" as={NavLink} to="/community" exact>
        All Posts
      </Nav.Link>
      <Nav.Link className="filterchoice" as={NavLink} to="/community" exact>
        Reviews
      </Nav.Link>
      <Nav.Link className="filterchoice" as={NavLink} to="/community" exact>
        Screenshots
      </Nav.Link>
      <Nav.Link className="filterchoice" as={NavLink} to="/community" exact>
        Artwork
      </Nav.Link>
      <Nav.Link className="filterchoice" as={NavLink} to="/community" exact>
        News
      </Nav.Link>
      <Nav.Link className="filterchoice" as={NavLink} to="/community" exact>
        Guides
      </Nav.Link>
    </>
  )
}
