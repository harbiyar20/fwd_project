// client/pages/Islamabad.js
import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';

const islamabadPlaces = [
  {
    name: "Faisal Mosque",
    description:
      "The largest mosque in Pakistan, known for its unique contemporary design and stunning location at the foothills of Margalla Hills.",
    images: ["/faisal1.jpg", "/faisal2.jpg"]
  },
  {
    name: "Daman-e-Koh",
    description:
      "A scenic viewpoint that provides panoramic views of Islamabad and is a popular spot for both locals and tourists.",
    images: ["/daman1.jpg", "/daman2.jpg"]
  },
  {
    name: "Pakistan Monument",
    description:
      "A national monument representing the four provinces and three territories, symbolizing unity and patriotism.",
    images: ["/monument1.jpg", "/monument2.jpg"]
  },
  {
    name: "Rawal Lake",
    description:
      "A picturesque artificial lake offering boating, picnicking, and a serene environment surrounded by lush greenery.",
    images: ["/rawal1.jpg", "/rawal2.jpg"]
  }
];

function Islamabad() {
  return (
    <Container className="py-5">
      <h1 className="text-center text-success mb-4 fw-bold">Welcome to Islamabad</h1>
      <p className="lead text-center mb-5 text-muted">
        Islamabad, the capital of Pakistan, is renowned for its scenic beauty, modern architecture, and serene environment.
      </p>

      <Row className="gy-5">
        {islamabadPlaces.map((place, idx) => (
          <Col key={idx} md={6}>
            <Card className="shadow-sm border-0">
              <Carousel fade interval={3000}>
                {place.images.map((img, i) => (
                  <Carousel.Item key={i}>
                    <img
                      src={img}
                      className="d-block w-100"
                      alt={`Slide ${i}`}
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
                <Card.Title className="text-success fw-bold">{place.name}</Card.Title>
                <Card.Text className="text-muted">{place.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Islamabad;
