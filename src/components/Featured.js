import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import * as g from '../helpers/customGames'

// console.log(g.getNewsGames())
// console.log(g.getFeaturedGames())

export default function Featured() {
  return (
    <Carousel>
      {g.getFeaturedGames().map((game) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={game.img}
            width="400"
            height="500"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* {getGame()} */}
            <h3>{game.title}</h3>
            <p>{game.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
