// client/pages/karachi.js
import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';

const karachiPlaces = [
  {
    name: "Clifton Beach",
    description:
      "A popular seaside destination in Karachi, Clifton Beach is known for its lively atmosphere, camel rides, and sunset views.",
    images: ["/clifton1.jpg", "/clifton2.jpg"]
  },
  {
    name: "Quaid-e-Azam's Mausoleum",
    description:
      "A national monument and the final resting place of Muhammad Ali Jinnah, the founder of Pakistan.",
    images: ["/mausoleum1.jpg", "/mausoleum2.jpg"]
  },
  {
    name: "Frere Hall",
    description:
      "A historic building dating back to the British colonial era, now used as a library and exhibition space.",
    images: ["/frere1.jpg", "/frere2.jpg"]
  },
  {
    name: "Pakistan Maritime Museum",
    description:
      "A naval-themed museum featuring retired submarines, aircraft, and exhibits on Pakistan’s maritime history.",
    images: ["/maritime1.jpg", "/maritime2.jpg"]
  }
];

function Karachi() {
  return (
    <Container className="py-5">
      <h1 className="text-center text-primary mb-4 fw-bold">Welcome to Karachi</h1>
      <p className="lead text-center mb-5 text-muted">
        Karachi, Pakistan’s largest city and economic hub, offers a vibrant blend of history, culture, and coastal charm.
      </p>

      <Row className="gy-5">
        {karachiPlaces.map((place, idx) => (
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

export default Karachi;
