// client/pages/lahore.js
import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';

const lahorePlaces = [
  {
    name: "Badshahi Mosque",
    description:
      "One of the largest mosques in the world, Badshahi Mosque is a masterpiece of Mughal architecture and a symbol of Lahore's rich history.",
    images: ["/badshahi1.jpg", "/badshahi2.jpg"]
  },
  {
    name: "Lahore Fort",
    description:
      "A UNESCO World Heritage Site, the Lahore Fort is an iconic citadel that has stood since the Mughal era with majestic gates and palaces.",
    images: ["/lahorefort1.jpg", "/lahorefort2.jpg"]
  },
  {
    name: "Shalimar Gardens",
    description:
      "Built by Emperor Shah Jahan, these Mughal gardens feature stunning terraces, fountains, and floral layouts — a haven of tranquility.",
    images: ["/shalimar1.jpg", "/shalimar2.jpg"]
  },
  {
    name: "Minar-e-Pakistan",
    description:
      "An important national monument commemorating the Lahore Resolution of 1940, it symbolizes Pakistan's struggle for independence.",
    images: ["/minar1.jpg", "/minar2.jpg"]
  }
];

function Lahore() {
  return (
    <Container className="py-5">
      <h1 className="text-center text-primary mb-4 fw-bold">Welcome to Lahore</h1>
      <p className="lead text-center mb-5 text-muted">
        Lahore, the cultural capital of Pakistan, is known for its vibrant history, grand architecture, and timeless heritage.
      </p>

      <Row className="gy-5">
        {lahorePlaces.map((place, idx) => (
          <Col key={idx} md={6}>
            <Card className="shadow-sm border-0">
              <Carousel fade interval={3000}>
                {place.images.map((img, i) => (
                  <Carousel.Item key={i}>
                    <img
                      src={img}
                      className="d-block w-100"
                      alt={`${place.name} ${i + 1}`}
                      style={{
                        height: '250px',
                        objectFit: 'cover',
                        borderTopLeftRadius: '0.5rem',
                        borderTopRightRadius: '0.5rem'
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title className="text-primary fw-bold">{place.name}</Card.Title>
                <Card.Text className="text-muted">{place.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Lahore;
