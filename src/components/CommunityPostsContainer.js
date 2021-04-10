import React from 'react'
import * as p from '../helpers/CommunityPosts'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export default function allPosts() {
  return (
    <div className="filterPosts">
      {p.getAllPosts().map((post) => (
        <>
          <Container>
            <Row>
              <Col lg={12}>
                <div>
                  <div className="postTitle">{post.title}</div>
                  <div className="postContent">{post.content}</div>
                  <div className="postAuthor">{post.author}</div>
                  <div className="postTopic">{post.topic}</div>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      ))}
    </div>
  )
}
