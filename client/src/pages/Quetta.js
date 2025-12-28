// client/pages/quetta.js
import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';

const quettaPlaces = [
  {
    name: "Hanna Lake",
    description:
      "Hanna Lake is a serene reservoir surrounded by mountains, offering a peaceful retreat for boating and picnicking.",
    images: ["/hanna1.jpg", "/hanna2.jpg"]
  },
  {
    name: "Ziarat Residency",
    description:
      "The historic Ziarat Residency is where Quaid-e-Azam Muhammad Ali Jinnah spent his last days, now a national monument.",
    images: ["/ziarat1.jpg", "/ziarat2.jpg"]
  },
  {
    name: "Hazarganji Chiltan National Park",
    description:
      "Home to rare wildlife including the Chiltan ibex, this park is perfect for nature lovers and adventure seekers.",
    images: ["/hazarganji1.jpg", "/hazarganji2.jpg"]
  },
  {
    name: "Quetta Bazaar",
    description:
      "A colorful and vibrant marketplace offering traditional handicrafts, dried fruits, and regional textiles.",
    images: ["/bazaarquetta1.jpg", "/bazaarquetta2.jpg"]
  }
];

function Quetta() {
  return (
    <Container className="py-5">
      <h1 className="text-center text-primary mb-4 fw-bold">Welcome to Quetta</h1>
      <p className="lead text-center mb-5 text-muted">
        Quetta, the provincial capital of Balochistan, is known for its mountainous terrain, historic sites, and cultural richness.
      </p>

      <Row className="gy-5">
        {quettaPlaces.map((place, idx) => (
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

export default Quetta;
