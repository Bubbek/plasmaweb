import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import Featured from '../components/Featured'
import NewGames from '../components/NewGames'
import NewsJumbotron from '../components/NewsJumbotron'
import Sales from '../components/Sales'

// import Carousel from 'react-bootstrap/Carousel'
// import * as g from '../helpers/customGames'

export default function Home() {
  return (
    <Container>
      <Row>
        <Featured />
      </Row>

      <Row style={{padding: '30px 0px'}}>
        <NewGames />
      </Row>

      <Row>
        <NewsJumbotron />
      </Row>

      <Row>
        <Sales />
      </Row>
    </Container>
  )
}
