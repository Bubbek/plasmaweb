import React from 'react'
import '../../css/news.css'
import Card from 'react-bootstrap/Card'
import * as n from '../../helpers/Newshelpers.js'

export default function Newscards() {
  return (
    <div>
      {n.getNewsGames().map((game) => (
        <Card className="test-card">
          <Card.Img className="newscardimg" variant="right" src={game.img} />

          <Card.Body className="Newsbody">
            <Card.Title>
              {game.title} - {game.newsTitle}!
            </Card.Title>
            <h6>News Event</h6>
            <Card.Text className="cardtxt">{game.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
