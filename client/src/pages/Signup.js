import React, { useState } from 'react';
import { Form, Button, Container, Card, InputGroup, Alert } from 'react-bootstrap';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';
import './Login.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.some(user => user.username === email);
      
      if (userExists) {
        setError('Email already registered.');
        setLoading(false);
        return;
      }

      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = { username: email, password: hashedPassword };
      localStorage.setItem('users', JSON.stringify([...users, newUser]));

      setSuccess('Account created successfully!');
      setTimeout(() => navigate('/login'), 1500);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <Container className="login-container">
        <div className="login-wrapper">
          <div className="welcome-section">
            <div className="welcome-content">
              <h1 className="welcome-title">Join PakTourism!</h1>
              <p className="welcome-subtitle">
                Create your account and start exploring Pakistan's most beautiful destinations
              </p>
              <div className="welcome-features">
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <span>Easy Booking</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💰</span>
                  <span>Best Prices</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🛡️</span>
                  <span>Secure Platform</span>
                </div>
              </div>
            </div>
          </div>

          <div className="form-section">
            <Card className="login-card">
              <Card.Body className="login-card-body">
                <div className="login-header">
                  <h2 className="login-title">Create Account</h2>
                  <p className="login-subtitle">Fill in your details to get started</p>
                </div>

                <Form onSubmit={handleSignup} className="login-form">
                  {error && <Alert variant="danger" className="error-alert">{error}</Alert>}
                  {success && <Alert variant="success" className="error-alert">{success}</Alert>}

                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Email Address</Form.Label>
                    <InputGroup className="input-group-modern">
                      <InputGroup.Text className="input-icon">
                        <FaUser />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Password</Form.Label>
                    <InputGroup className="input-group-modern">
                      <InputGroup.Text className="input-icon">
                        <FaLock />
                      </InputGroup.Text>
                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                        required
                      />
                      <Button
                        variant="link"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                        type="button"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Confirm Password</Form.Label>
                    <InputGroup className="input-group-modern">
                      <InputGroup.Text className="input-icon">
                        <FaLock />
                      </InputGroup.Text>
                      <Form.Control
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="form-input"
                        required
                      />
                      <Button
                        variant="link"
                        className="password-toggle"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        type="button"
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="login-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Creating Account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </Button>

                  <div className="divider">
                    <span>or sign up with</span>
                  </div>

                  <div className="social-login">
                    <Button variant="outline-primary" className="social-btn google-btn">
                      <FaGoogle className="me-2" /> Google
                    </Button>
                    <Button variant="outline-primary" className="social-btn facebook-btn">
                      <FaFacebook className="me-2" /> Facebook
                    </Button>
                  </div>

                  <div className="signup-link">
                    Already have an account?{' '}
                    <a href="/login" className="signup-text">
                      Sign in here
                    </a>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
