import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Form, Button, Card, Alert, Table
} from 'react-bootstrap';

function Booking() {
  const [form, setForm] = useState({
    name: '',
    username: '',
    destination: '',
    startDate: '',
    endDate: '',
    people: '',
  });
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  // Fetch bookings from MongoDB
  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/payments');
      const data = await res.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === 'username') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(value) ? '' : 'Invalid email format');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError) return;

    fetch('http://localhost:5000/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message || 'Booking successful');
        if (data.success || !('success' in data)) {
          navigate('/payment', { state: { booking: form } });
        }
      })
      .catch(() => setMessage('Booking failed. Please try again.'));
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) return;

    try {
      const res = await fetch(`http://localhost:5000/api/payments/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      setMessage(data.message || 'Booking deleted.');
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <Container className="my-5">
      <Card className="p-4 shadow mb-4">
        <h3 className="text-center mb-4">Book Your Trip</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email (Username)</Form.Label>
            <Form.Control
              type="email"
              name="username"
              placeholder="Enter your email"
              value={form.username}
              onChange={handleChange}
              isInvalid={!!emailError}
              required
            />
            <Form.Control.Feedback type="invalid">
              {emailError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Destination</Form.Label>
            <Form.Select
              name="destination"
              value={form.destination}
              onChange={handleChange}
              required
            >
              <option value="">Select a destination</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Multan">Multan</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Peshawar">Peshawar</option>
              <option value="Quetta">Quetta</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              required
              min={form.startDate}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Number of People</Form.Label>
            <Form.Control
              type="number"
              name="people"
              placeholder="e.g., 2"
              value={form.people}
              onChange={handleChange}
              required
              min="1"
            />
          </Form.Group>

          <Button type="submit" className="w-100" variant="primary" disabled={!!emailError}>
            Book Now
          </Button>
        </Form>

        {message && (
          <Alert variant="info" className="mt-3 text-center">
            {message}
          </Alert>
        )}
      </Card>

      <Card className="shadow">
        <Card.Body>
          <h4 className="mb-3">Existing Bookings</h4>
          {bookings.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Destination</th>
                  <th>People</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b._id}>
                    <td>{b.name}</td>
                    <td>{b.username}</td>
                    <td>{b.destination}</td>
                    <td>{b.people}</td>
                    <td>{b.startDate}</td>
                    <td>{b.endDate}</td>
                    <td>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDelete(b._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No bookings found.</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Booking;
