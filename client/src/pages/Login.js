import React, { useState } from 'react';
import { Form, Button, Container, Card, InputGroup, Alert } from 'react-bootstrap';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (email.trim() === '' || password.trim() === '') {
      setError('Email and password are required.');
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find((user) => user.username === email);

      if (user && bcrypt.compareSync(password, user.password)) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate('/');
      } else {
        setError('Invalid email or password.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <Container className="login-container">
        <div className="login-wrapper">
          {/* Left Side - Welcome */}
          <div className="welcome-section">
            <div className="welcome-content">
              <h1 className="welcome-title">Welcome Back!</h1>
              <p className="welcome-subtitle">
                Continue your journey to discover Pakistan's most beautiful destinations
              </p>
              <div className="welcome-features">
                <div className="feature-item">
                  <span className="feature-icon">🏔️</span>
                  <span>Explore Mountains</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🏛️</span>
                  <span>Historical Sites</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌊</span>
                  <span>Coastal Beauty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="form-section">
            <Card className="login-card">
              <Card.Body className="login-card-body">
                <div className="login-header">
                  <h2 className="login-title">Sign In</h2>
                  <p className="login-subtitle">Enter your credentials to access your account</p>
                </div>

                <Form onSubmit={handleLogin} className="login-form">
                  {error && (
                    <Alert variant="danger" className="error-alert">
                      {error}
                    </Alert>
                  )}

                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Email Address</Form.Label>
                    <InputGroup className="input-group-modern">
                      <InputGroup.Text className="input-icon">
                        <FaEnvelope />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
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

                  <div className="form-options">
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      className="remember-check"
                    />
                    <a href="/forgotpassword" className="forgot-link">
                      Forgot Password?
                    </a>
                  </div>

                  <Button
                    type="submit"
                    className="login-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Signing In...
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </Button>

                  <div className="divider">
                    <span>or continue with</span>
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
                    Don't have an account?{' '}
                    <a href="/signup" className="signup-text">
                      Sign up here
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

export default Login;
