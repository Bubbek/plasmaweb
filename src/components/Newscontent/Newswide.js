import React from 'react'
import '../../css/news.css'
import Card from 'react-bootstrap/Card'
import img1 from '../../img/sot.png'
import Button from 'react-bootstrap/Button'

export default function News() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={img1} />
      <Card.ImgOverlay>
        <Card.Title>Sea of Thieves Update!</Card.Title>
        <Card.Text>
          In this update for Sea of thieves they've added more items and more islands to go explore
        </Card.Text>
        <div className="mb-2">
          <Button variant="secondary" size="lg">
            Read More
          </Button>
        </div>
      </Card.ImgOverlay>
    </Card>
  )
}
