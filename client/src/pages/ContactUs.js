import React, { useState } from 'react';
import { Container, Card, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaCommentDots, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setSuccess('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <Container className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-info-section">
            <div className="contact-info-content">
              <h1 className="contact-title">Get In Touch</h1>
              <p className="contact-subtitle">
                Have questions about your next adventure? We're here to help you plan the perfect trip to Pakistan.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <h6>Address</h6>
                    <p>Multan, Pakistan</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <h6>Phone</h6>
                    <p>+92 313 8843402</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <h6>Email</h6>
                    <p>info@paktourism.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <Card className="contact-card">
              <Card.Body className="contact-card-body">
                <div className="form-header">
                  <h2 className="form-title">Send Message</h2>
                  <p className="form-subtitle">Fill out the form below and we'll respond within 24 hours</p>
                </div>

                <Form onSubmit={handleSubmit} className="contact-form">
                  {success && <Alert variant="success" className="success-alert">{success}</Alert>}

                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Full Name</Form.Label>
                    <InputGroup className="input-group-modern">
                      <InputGroup.Text className="input-icon">
                        <FaUser />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Email Address</Form.Label>
                    <InputGroup className="input-group-modern">
                      <InputGroup.Text className="input-icon">
                        <FaEnvelope />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Phone Number</Form.Label>
                    <InputGroup className="input-group-modern">
                      <InputGroup.Text className="input-icon">
                        <FaPhone />
                      </InputGroup.Text>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Message</Form.Label>
                    <InputGroup className="input-group-modern">
                      <InputGroup.Text className="input-icon message-icon">
                        <FaCommentDots />
                      </InputGroup.Text>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        placeholder="Tell us about your travel plans..."
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input message-input"
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="contact-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
      
      <style>{`
        .contact-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          padding: 2rem 0;
        }
        
        .contact-container {
          width: 100%;
          max-width: 1200px;
        }
        
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 600px;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        
        .contact-info-section {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
        }
        
        .contact-info-content {
          width: 100%;
        }
        
        .contact-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #fff, #a8e6cf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .contact-subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .contact-icon {
          font-size: 1.5rem;
          color: #a8e6cf;
        }
        
        .contact-item h6 {
          margin: 0;
          font-weight: 600;
        }
        
        .contact-item p {
          margin: 0;
          opacity: 0.8;
        }
        
        .contact-form-section {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        
        .contact-card {
          border: none;
          box-shadow: none;
          width: 100%;
          max-width: 400px;
        }
        
        .contact-card-body {
          padding: 2rem;
        }
        
        .form-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .form-title {
          font-size: 2rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }
        
        .form-subtitle {
          color: #6c757d;
          font-size: 0.95rem;
          margin: 0;
        }
        
        .contact-form {
          width: 100%;
        }
        
        .message-icon {
          align-items: flex-start;
          padding-top: 0.75rem;
        }
        
        .message-input {
          resize: vertical;
        }
        
        .contact-btn {
          width: 100%;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border: none;
          padding: 0.875rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .contact-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }
        
        .success-alert {
          border-radius: 12px;
          border: none;
          background: #d4edda;
          color: #155724;
          border-left: 4px solid #28a745;
          margin-bottom: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            margin: 1rem;
          }
          
          .contact-info-section {
            padding: 2rem;
          }
          
          .contact-title {
            font-size: 2rem;
          }
          
          .contact-form-section {
            padding: 1.5rem;
          }
          
          .contact-card-body {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ContactUs;
