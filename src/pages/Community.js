import React from 'react'
import '../css/community.css'
// import {BrowserRouter as Router, Route} from 'react-router-dom'
// import HeadNavbar from '../components/HeadNavbar'

import showcaseGames from '../components/CommunityShowcase'
import filterNavbar from '../components/CommunityFilterNavbar'
import allPosts from '../components/CommunityPostsContainer'

export default function Community() {
  return (
    <>
      <h2>COMMUNITY & POSTS</h2>
      <h3>The mainpage for community and official content on Plasma.</h3>
      <div class="showcase">{showcaseGames()}</div>
      <div className="filterbar">{filterNavbar()}</div>
      <div className="filtercontainer">{allPosts()}</div>
    </>
  )
}
