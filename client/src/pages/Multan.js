// client/pages/Multan.js
import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';

const multanPlaces = [
  {
    name: "Shrine of Bahauddin Zakariya",
    description:
      "A 13th-century mausoleum and one of the most revered Sufi shrines in South Asia. It's a major spiritual and architectural landmark.",
    images: ["/zakariya1.jpg", "/zakariya2.jpg"]
  },
  {
    name: "Multan Fort",
    description:
      "An ancient fort with historic walls and gates, offering a panoramic view of the city and a glimpse into its rich past.",
    images: ["/fort1.jpg", "/fort2.jpg"]
  },
  {
    name: "Ghanta Ghar",
    description:
      "A colonial-era clock tower in the heart of Multan, surrounded by vibrant bazaars and local culture.",
    images: ["/gg1.jpg", "/gg2.jpg"]
  },
  {
    name: "Hussain Agahi Bazaar",
    description:
      "One of the oldest markets in South Asia, famous for handicrafts, blue pottery, and traditional clothing.",
    images: ["/bazaar1.jpg", "/bazaar2.jpg"]
  }
];

function Multan() {
  return (
    <Container className="py-5">
      <h1 className="text-center text-primary mb-4 fw-bold">Welcome to Multan</h1>
      <p className="lead text-center mb-5 text-muted">
        Multan, known as the City of Saints, is rich in cultural heritage, stunning architecture, and Sufi history.
      </p>

      <Row className="gy-5">
        {multanPlaces.map((place, idx) => (
          <Col key={idx} md={6}>
            <Card className="shadow-sm border-0">
              <Carousel fade interval={3000}>
                {place.images.map((img, i) => (
                  <Carousel.Item key={i}>
                    <img
                      src={img}
                      className="d-block w-100"
                      alt={`Slide ${i}`}
                      style={{ height: '250px', objectFit: 'cover', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
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

export default Multan;
