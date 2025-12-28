// client/pages/peshawar.js
import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';

const peshawarPlaces = [
  {
    name: "Bala Hisar Fort",
    description:
      "An ancient fort with a commanding view of Peshawar, Bala Hisar has served as a key military stronghold since the Mughal era.",
    images: ["/balahisar1.jpg", "/balahisar2.jpg"]
  },
  {
    name: "Peshawar Museum",
    description:
      "Home to one of the largest collections of Gandhara art, the Peshawar Museum is a hub for those interested in ancient Buddhist heritage.",
    images: ["/museum1.jpg", "/museum2.jpg"]
  },
  {
    name: "Sethi House",
    description:
      "A beautifully preserved 19th-century mansion showcasing exquisite wooden architecture and intricate carvings of the Sethi family.",
    images: ["/sethi1.jpg", "/sethi2.jpg"]
  },
  {
    name: "Qissa Khwani Bazaar",
    description:
      "Known as the 'Bazaar of Storytellers', this historic market is full of vibrant culture, traditional food, and ancient tales.",
    images: ["/qbazaar1.jpg", "/qbazaar2.jpg"]
  }
];

function Peshawar() {
  return (
    <Container className="py-5">
      <h1 className="text-center text-primary mb-4 fw-bold">Welcome to Peshawar</h1>
      <p className="lead text-center mb-5 text-muted">
        Peshawar, one of the oldest cities in South Asia, is renowned for its rich cultural heritage, ancient architecture, and historic trade routes.
      </p>

      <Row className="gy-5">
        {peshawarPlaces.map((place, idx) => (
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

export default Peshawar;
