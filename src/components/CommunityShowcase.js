import React from 'react'
import * as forum from '../helpers/CommunityGameportals'

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {FaSearch} from 'react-icons/fa'

export default function showcaseGames() {
  return (
    <div>
      <div className="showcaseRow">
        <div className="showcaseColumn">Popular portals</div>
        <div className="showcaseColumn">New portals</div>
        <div className="showcaseColumn">Portals with Active Events</div>
        <div className="searchColumn">Search for gameportals</div>
      </div>
      <div className="showcaseRow2">
        <div classname="showcaseColumn2" style={{width: 'calc(300px)'}}>
          {forum.getPopularGames().map((game) => (
            <div className="gamePortalsRow" style={{margin: '0 0 15px 0'}}>
              <div className="gamePortalColumn">
                <div className="gamePortals" xs={12} md={4}>
                  <img className="showcaseGames" src={game.img} alt="hello" />
                  <div className="showcaseGameTitle">{game.title}</div>
                </div>
              </div>
            </div>
          ))}
          <a href="#" className="moreLink">
            More...
          </a>
        </div>
        <div classname="showcaseColumn2" style={{width: 'calc(300px)'}}>
          {forum.getNewGames().map((game) => (
            <div className="gamePortalsRow" style={{margin: '0 0 15px 0'}}>
              <div className="gamePortalColumn">
                <div className="gamePortals" xs={12} md={4}>
                  <img className="showcaseGames" src={game.img} alt="hello" />
                  <div className="showcaseGameTitle">{game.title}</div>
                </div>
              </div>
            </div>
          ))}
          <a href="#" className="moreLink">
            More...
          </a>
        </div>
        <div classname="showcaseColumn2" style={{width: 'calc(300px)'}}>
          {forum.getOngoingEvents().map((game) => (
            <div className="gamePortalsRow" style={{margin: '0 0 15px 0'}}>
              <div className="gamePortalColumn">
                <div className="gamePortals" xs={12} md={4}>
                  <img className="showcaseGames" src={game.img} alt="hello" />
                  <div className="showcaseGameTitle">{game.title}</div>
                </div>
              </div>
            </div>
          ))}
          <a href="#" className="moreLink">
            More...
          </a>
        </div>
        <div classname="showcaseColumn2" style={{width: 'calc(300px)'}}>
          <Form inline>
            <FormControl
              type="text"
              id="gameTitle"
              placeholder="Search"
              className="mr-sm-2"
              //onChange={}
            />
            <Button className="searchBtn" variant="outline-secondary" /*onClick={}*/>
              <FaSearch />
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}
