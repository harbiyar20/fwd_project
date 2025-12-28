import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Copyright() {
  return (
    <div className="copyright-page">
      <Container className="py-5">
        <Card className="copyright-card">
          <Card.Body className="p-5">
            <h1 className="copyright-title">Copyright Information</h1>
            <p className="copyright-date">© 2025 PakTourism. All rights reserved.</p>
            
            <div className="copyright-content">
              <section className="copyright-section">
                <h3>Website Content</h3>
                <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of PakTourism or its content suppliers and is protected by copyright laws.</p>
              </section>
              
              <section className="copyright-section">
                <h3>Academic Project</h3>
                <p>This website is developed as a Final Year Project (FYP) by:</p>
                <div className="developer-info">
                  <p><strong>Developer:</strong> Harbiyar Baloch</p>
                  <p><strong>Roll Number:</strong> 223582</p>
                  <p><strong>Project Type:</strong> Final Year Project</p>
                  <p><strong>Year:</strong> 2024</p>
                </div>
              </section>
              
              <section className="copyright-section">
                <h3>Usage Rights</h3>
                <p>This project is created for educational purposes. Any commercial use requires explicit permission from the developer.</p>
              </section>
              
              <section className="copyright-section">
                <h3>Third-Party Content</h3>
                <p>Some images and content may be sourced from third parties. We respect the intellectual property rights of others and will remove any content upon valid copyright claims.</p>
              </section>
              
              <section className="copyright-section">
                <h3>Technology Stack</h3>
                <ul>
                  <li>Frontend: React.js, Bootstrap</li>
                  <li>Backend: Node.js, Express.js</li>
                  <li>Database: MongoDB</li>
                  <li>Icons: React Icons</li>
                </ul>
              </section>
              
              <section className="copyright-section">
                <h3>Contact</h3>
                <p>For any copyright-related inquiries, please contact us through our contact page or reach out to the developer directly.</p>
              </section>
            </div>
          </Card.Body>
        </Card>
      </Container>
      
      <style>{`
        .copyright-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 2rem 0;
        }
        
        .copyright-card {
          border: none;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .copyright-title {
          color: #2c3e50;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .copyright-date {
          color: #6c757d;
          margin-bottom: 2rem;
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .copyright-section {
          margin-bottom: 2rem;
        }
        
        .copyright-section h3 {
          color: #2c3e50;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .copyright-section p, .copyright-section li {
          color: #5a6c7d;
          line-height: 1.6;
        }
        
        .developer-info {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem;
          border-radius: 15px;
          margin: 1rem 0;
        }
        
        .developer-info p {
          color: white;
          margin-bottom: 0.5rem;
        }
        
        .developer-info p:last-child {
          margin-bottom: 0;
        }
        
        .copyright-section ul {
          padding-left: 1.5rem;
        }
        
        .copyright-section li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}

export default Copyright;