import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card, Button, Spinner, Alert, ListGroup } from 'react-bootstrap';
import axios from 'axios';

function PaymentGateway() {
  const location = useLocation();
  const initialBooking = location.state?.booking;

  const [booking, setBooking] = useState(initialBooking);
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [bookingCancelled, setBookingCancelled] = useState(false);

  if (!booking) {
    return (
      <Container className="text-center mt-5">
        <h4>No booking data found. Please go back and book first.</h4>
      </Container>
    );
  }

  const calculateDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diff = endDate - startDate;
    return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  };

  const duration = calculateDuration(booking.startDate, booking.endDate);
  const pricePerPersonPerDay = booking.price;

  const totalAmount = pricePerPersonPerDay && booking.people
    ? pricePerPersonPerDay * booking.people * duration
    : 0;

  const handleFakePayment = async () => {
    setLoading(true);
    setPaymentSuccess(null);

    setTimeout(async () => {
      const success = Math.random() > 0.2;

      if (success) {
        try {
          const response = await axios.post('http://localhost:5000/api/payments', {
            ...booking,
            duration,
            totalAmount,
            timestamp: new Date()
          });

          // Store updated booking with ID in state
          setBooking(prev => ({
            ...prev,
            _id: response.data._id
          }));

          setPaymentSuccess(true);
        } catch (error) {
          console.error('Error saving payment to MongoDB:', error);
          setPaymentSuccess(false);
        }
      } else {
        setPaymentSuccess(false);
      }

      setLoading(false);
    }, 2000);
  };

  const handleCancelBooking = async () => {
    if (!booking._id) return alert('Booking ID missing! Cannot cancel.');

    try {
      await axios.delete(`http://localhost:5000/api/payments/${booking._id}`);
      setBookingCancelled(true);
      setPaymentSuccess(false);
    } catch (error) {
      console.error('Error cancelling booking:', error);
      alert('Cancellation failed. Try again.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: '100%', maxWidth: '600px' }}>
        <h3 className="text-center mb-4 text-primary">Payment Gateway</h3>

        <ListGroup variant="flush">
          <ListGroup.Item><strong>Name:</strong> {booking.name}</ListGroup.Item>
          <ListGroup.Item><strong>Email:</strong> {booking.username}</ListGroup.Item>
          <ListGroup.Item><strong>Destination:</strong> {booking.destination}</ListGroup.Item>
          <ListGroup.Item><strong>From:</strong> {booking.startDate}</ListGroup.Item>
          <ListGroup.Item><strong>To:</strong> {booking.endDate}</ListGroup.Item>
          <ListGroup.Item><strong>Duration:</strong> {duration} day(s)</ListGroup.Item>
          <ListGroup.Item><strong>People:</strong> {booking.people}</ListGroup.Item>
          <ListGroup.Item className={pricePerPersonPerDay ? "" : "text-danger"}>
            <strong>Price per Person per Day:</strong> {pricePerPersonPerDay ? `Rs. ${pricePerPersonPerDay}` : 'Not Provided'}
          </ListGroup.Item>
          <ListGroup.Item className="text-success">
            <strong>Total Amount:</strong> Rs. {totalAmount}
          </ListGroup.Item>
        </ListGroup>

        {paymentSuccess === false && !bookingCancelled && (
          <Alert variant="danger" className="text-center mt-3">
            Payment failed. Please try again.
          </Alert>
        )}

        {paymentSuccess === true && (
          <Alert variant="success" className="text-center mt-3">
            Payment successful! Thank you for your booking.
          </Alert>
        )}

        {bookingCancelled && (
          <Alert variant="warning" className="text-center mt-3">
            Booking has been cancelled and payment refunded.
          </Alert>
        )}

        <div className="text-center mt-4">
          {!bookingCancelled && (
            <Button
              variant="success"
              onClick={handleFakePayment}
              disabled={loading || paymentSuccess === true}
              className="w-100 mb-2"
            >
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  {' '}Processing...
                </>
              ) : (
                paymentSuccess === true ? 'Paid' : 'Pay Now'
              )}
            </Button>
          )}

          {paymentSuccess === true && !bookingCancelled && (
            <Button
              variant="danger"
              onClick={handleCancelBooking}
              className="w-100"
            >
              Cancel Booking & Refund
            </Button>
          )}
        </div>
      </Card>
    </Container>
  );
}

export default PaymentGateway;
