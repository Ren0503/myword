import React from 'react'
import { Container, Row, Col, Card, Figure } from 'react-bootstrap'
import img from 'assets/auth_image.jpg'
interface AuthLayoutProps {
  children: React.ReactNode
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }: AuthLayoutProps) => {
  return (
    <Container className='p-3 mt-5 rounded overflow-hidden shadow-lg'>
      <Row>
        <Col md={6}>
          <Card className='text-white'>
            <Card.Img src={img} alt="Auth image" />
            <Card.ImgOverlay>
              <Card.Title >All Road Leads To Roma</Card.Title>
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

