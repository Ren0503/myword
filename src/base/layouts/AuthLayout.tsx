import React from 'react'
import { Container, Row, Col, Card, Figure } from 'react-bootstrap'

interface AuthLayoutProps {
  children: React.ReactNode
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }: AuthLayoutProps) => {
  return (
    <Container className='pt-5'>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img src="holder.js/100px270" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>All Road Leads To Roma</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

