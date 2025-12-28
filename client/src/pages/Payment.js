// client/pages/Payment.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card, Button, ListGroup, Spinner } from 'react-bootstrap';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
function Payment() {
  const location = useLocation();
  const booking = location.state?.booking;
  const navigate= useNavigate();
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (booking?.destination) {
      fetch(`http://localhost:5000/api/destination/${booking.destination}`)
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch price');
          return res.json();
        })
        .then((data) => {
          setPrice(data.price);
        })
        .catch(() => setError('Could not fetch destination price.'))
        .finally(() => setLoading(false));
    }
  }, [booking]);

  if (!booking) {
    return (
      <Container className="text-center py-5">
        <h4>No booking information found. Please return to the booking page.</h4>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status" />
        <p className="mt-3">Loading price details...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center py-5">
        <h4>{error}</h4>
      </Container>
    );
  }

  // Calculate duration in days
  const start = dayjs(booking.startDate);
  const end = dayjs(booking.endDate);
  const duration = end.diff(start, 'day') || 1;

  const total = duration * parseInt(booking.people) * price;

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card className="shadow p-4" style={{ width: '100%', maxWidth: '600px' }}>
        <h3 className="text-center text-primary mb-4">Payment Details</h3>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Name:</strong> {booking.name}</ListGroup.Item>
          <ListGroup.Item><strong>Username:</strong> {booking.username}</ListGroup.Item>
          <ListGroup.Item><strong>Destination:</strong> {booking.destination}</ListGroup.Item>
          <ListGroup.Item><strong>Start Date:</strong> {booking.startDate}</ListGroup.Item>
          <ListGroup.Item><strong>End Date:</strong> {booking.endDate}</ListGroup.Item>
          <ListGroup.Item><strong>Duration:</strong> {duration} day(s)</ListGroup.Item>
          <ListGroup.Item><strong>Number of People:</strong> {booking.people}</ListGroup.Item>
          <ListGroup.Item className="text-success">
            <strong>Total Amount:</strong> Rs. {total}
          </ListGroup.Item>
        </ListGroup>

        <div className="text-center mt-4">
          <Button
  variant="success"
  size="lg"
onClick={() =>
  navigate('/paymentgateway', {
    state: {
      booking: {
        ...booking,
        price: price  // ✅ explicitly include the fetched price
      }
    }
  })
}

>
  Proceed to Pay
</Button>

        </div>
      </Card>
    </Container>
  );
}

export default Payment;
