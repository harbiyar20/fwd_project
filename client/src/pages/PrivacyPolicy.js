import React from 'react';
import { Container, Card } from 'react-bootstrap';

function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <Container className="py-5">
        <Card className="policy-card">
          <Card.Body className="p-5">
            <h1 className="policy-title">Privacy Policy</h1>
            <p className="policy-date">Last updated: December 2024</p>
            
            <div className="policy-content">
              <section className="policy-section">
                <h3>Information We Collect</h3>
                <p>We collect information you provide directly to us, such as when you create an account, make a booking, or contact us for support.</p>
              </section>
              
              <section className="policy-section">
                <h3>How We Use Your Information</h3>
                <ul>
                  <li>To provide and maintain our services</li>
                  <li>To process your bookings and transactions</li>
                  <li>To send you updates about your bookings</li>
                  <li>To improve our services and user experience</li>
                </ul>
              </section>
              
              <section className="policy-section">
                <h3>Information Sharing</h3>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
              </section>
              
              <section className="policy-section">
                <h3>Data Security</h3>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>
              
              <section className="policy-section">
                <h3>Contact Information</h3>
                <p>If you have any questions about this Privacy Policy, please contact us through our contact page.</p>
              </section>
            </div>
          </Card.Body>
        </Card>
      </Container>
      
      <style>{`
        .policy-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 2rem 0;
        }
        
        .policy-card {
          border: none;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .policy-title {
          color: #2c3e50;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .policy-date {
          color: #6c757d;
          margin-bottom: 2rem;
          font-style: italic;
        }
        
        .policy-section {
          margin-bottom: 2rem;
        }
        
        .policy-section h3 {
          color: #2c3e50;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .policy-section p, .policy-section li {
          color: #5a6c7d;
          line-height: 1.6;
        }
        
        .policy-section ul {
          padding-left: 1.5rem;
        }
        
        .policy-section li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}

export default PrivacyPolicy;