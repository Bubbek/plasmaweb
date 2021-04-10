import React from 'react'
import '../css/news.css'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Newswide from '../components/Newscontent/Newswide'
import Newscards from '../components/Newscontent/Newscards'

export default function News() {
  return (
    <Container>
      <Row style={{padding: '15px 0px'}}>
        <Newswide />
      </Row>

      <Row style={{padding: '5px 0px'}}>
        <Newscards />
      </Row>
    </Container>
  )
}
