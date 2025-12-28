import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="modern-footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} className="footer-section">
            <h5 className="footer-title">PakTourism</h5>
            <p className="footer-description">
              Discover the breathtaking beauty of Pakistan with our curated travel experiences.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><FaFacebook /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
              <a href="#" className="social-link"><FaInstagram /></a>
              <a href="#" className="social-link"><FaLinkedin /></a>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="footer-section">
            <h6 className="footer-subtitle">Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/destinations">Destinations</a></li>
              <li><a href="/booking">Booking</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </Col>
          
          <Col lg={2} md={6} className="footer-section">
            <h6 className="footer-subtitle">Support</h6>
            <ul className="footer-links">
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="#" onClick={() => navigate('/privacy-policy')}>Privacy Policy</a></li>
              <li><a href="#" onClick={() => navigate('/copyright')}>Copyright</a></li>
            </ul>
          </Col>
          
          <Col lg={4} md={6} className="footer-section">
            <h6 className="footer-subtitle">Webmaster Info</h6>
            <div className="webmaster-info">
              <p><strong>Harbiyar Baloch</strong></p>
              <p>Roll Number: 223582</p>
              <p>Full Stack Web Development Project</p>
            </div>
          </Col>
        </Row>
        
        <hr className="footer-divider" />
        
        <Row className="footer-bottom">
          <Col md={6}>
            <p className="copyright">
              © 2025 PakTourism. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="made-with">
              Made with <FaHeart className="heart-icon" /> by Harbiyar Baloch
            </p>
          </Col>
        </Row>
      </Container>
      
      <style>{`
        .modern-footer {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          padding: 3rem 0 1rem;
          margin-top: auto;
        }
        
        .footer-content {
          margin-bottom: 2rem;
        }
        
        .footer-section {
          margin-bottom: 2rem;
        }
        
        .footer-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #fff, #a8e6cf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .footer-subtitle {
          font-weight: 600;
          margin-bottom: 1rem;
          color: #a8e6cf;
        }
        
        .footer-description {
          opacity: 0.8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: #667eea;
          color: white;
          transform: translateY(-3px);
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #a8e6cf;
        }
        
        .webmaster-info p {
          margin-bottom: 0.25rem;
          opacity: 0.9;
        }
        
        .footer-divider {
          border-color: rgba(255, 255, 255, 0.2);
          margin: 2rem 0 1rem;
        }
        
        .footer-bottom {
          align-items: center;
        }
        
        .copyright, .made-with {
          margin: 0;
          opacity: 0.8;
          font-size: 0.9rem;
        }
        
        .heart-icon {
          color: #e74c3c;
          margin: 0 0.25rem;
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @media (max-width: 768px) {
          .modern-footer {
            padding: 2rem 0 1rem;
          }
          
          .footer-bottom {
            text-align: center;
          }
          
          .text-md-end {
            text-align: center !important;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;