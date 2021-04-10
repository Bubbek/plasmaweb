import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import * as g from '../helpers/customGames'

export default function Sales() {
  return (
    <CardDeck>
      {g.getSalesGames().map((game) => (
        <Card>
          <Card.Img variant="top" src={game.img} />
          <Card.Body>
            <Card.Title>{game.title}</Card.Title>
            {/* <Card.Text style={{color: 'black'}}>{game.description}</Card.Text> */}
            <Card.Text>
              <small className="text-muted">{game.category}</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{backgroundColor: 'black'}}>
            <small style={{color: 'white'}}>{game.price}</small>
          </Card.Footer>
        </Card>
      ))}
    </CardDeck>
  )
}
