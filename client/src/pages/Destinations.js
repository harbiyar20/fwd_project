import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Alert,
  Form,
  InputGroup,
  Badge,
  Button
} from 'react-bootstrap';
import { FaSearch, FaMapMarkerAlt, FaStar, FaArrowRight } from 'react-icons/fa';

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/destinations')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch destinations.');
        return res.json();
      })
      .then(data => {
        setDestinations(data);
        setFilteredDestinations(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = destinations.filter(dest =>
      dest.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredDestinations(filtered);
  }, [search, destinations]);

  const handleCardClick = (dest) => {
    const pageName = dest.name.toLowerCase();
    navigate(`/${pageName}`);
  };

  return (
    <div className="destinations-page">
      {/* Header Section */}
      <div className="destinations-header">
        <Container>
          <div className="header-content">
            <h1 className="page-title">Discover Amazing Destinations</h1>
            <p className="page-subtitle">Explore Pakistan's most beautiful and culturally rich locations</p>
            
            {/* Modern Search Bar */}
            <div className="search-container">
              <InputGroup className="modern-search">
                <InputGroup.Text className="search-icon">
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search your dream destination..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="search-input"
                />
              </InputGroup>
            </div>
          </div>
        </Container>
      </div>

      {/* Content Section */}
      <Container className="destinations-content">
        {loading && (
          <div className="loading-container">
            <Spinner animation="border" className="loading-spinner" />
            <p className="loading-text">Loading amazing destinations...</p>
          </div>
        )}

        {error && (
          <Alert variant="danger" className="error-alert">
            <strong>Oops!</strong> {error}
          </Alert>
        )}

        {!loading && filteredDestinations.length === 0 && (
          <div className="no-results">
            <h4>No destinations found</h4>
            <p>Try adjusting your search criteria</p>
          </div>
        )}

        <Row className="g-4">
          {filteredDestinations.map(dest => (
            <Col key={dest.id} lg={4} md={6} className="destination-col">
              <Card className="modern-destination-card" onClick={() => handleCardClick(dest)}>
                <div className="card-image-container">
                  <Card.Img
                    src={`/${dest.image || 'default.jpg'}`}
                    alt={dest.name}
                    className="destination-image"
                  />
                  <div className="image-overlay">
                    <Button className="explore-button">
                      Explore <FaArrowRight className="ms-2" />
                    </Button>
                  </div>
                  <Badge className="price-badge">PKR {dest.price}</Badge>
                </div>
                
                <Card.Body className="card-content">
                  <div className="destination-info">
                    <div className="title-section">
                      <h5 className="destination-name">{dest.name}</h5>
                      <div className="rating">
                        <FaStar className="star-icon" />
                        <span>4.{Math.floor(Math.random() * 9) + 1}</span>
                      </div>
                    </div>
                    
                    <p className="destination-location">
                      <FaMapMarkerAlt className="location-icon" />
                      Pakistan
                    </p>
                    
                    <p className="destination-description">
                      {dest.description}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .destinations-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .destinations-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 6rem 0 4rem;
          text-align: center;
        }
        
        .header-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .page-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #fff, #a8e6cf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .page-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 3rem;
        }
        
        .search-container {
          max-width: 500px;
          margin: 0 auto;
        }
        
        .modern-search {
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .search-icon {
          background: white;
          border: none;
          color: #667eea;
          padding: 1rem 1.5rem;
        }
        
        .search-input {
          border: none;
          padding: 1rem 1.5rem;
          font-size: 1.1rem;
          background: white;
        }
        
        .search-input:focus {
          box-shadow: none;
          border-color: transparent;
        }
        
        .destinations-content {
          padding: 4rem 0;
        }
        
        .loading-container {
          text-align: center;
          padding: 4rem 0;
        }
        
        .loading-spinner {
          width: 3rem;
          height: 3rem;
          color: #667eea;
        }
        
        .loading-text {
          margin-top: 1rem;
          color: #6c757d;
          font-size: 1.1rem;
        }
        
        .error-alert {
          border-radius: 15px;
          border: none;
          box-shadow: 0 5px 15px rgba(220, 53, 69, 0.2);
        }
        
        .no-results {
          text-align: center;
          padding: 4rem 0;
          color: #6c757d;
        }
        
        .modern-destination-card {
          border: none;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          height: 100%;
          background: white;
        }
        
        .modern-destination-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }
        
        .card-image-container {
          position: relative;
          overflow: hidden;
        }
        
        .destination-image {
          height: 280px;
          width: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        
        .modern-destination-card:hover .destination-image {
          transform: scale(1.1);
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .modern-destination-card:hover .image-overlay {
          opacity: 1;
        }
        
        .explore-button {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid white;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }
        
        .price-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(45deg, #ff6b6b, #ee5a24);
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .card-content {
          padding: 1.5rem;
        }
        
        .title-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .destination-name {
          font-weight: 700;
          color: #2c3e50;
          margin: 0;
          font-size: 1.25rem;
        }
        
        .rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #f39c12;
          font-weight: 600;
        }
        
        .star-icon {
          color: #f39c12;
        }
        
        .destination-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #7f8c8d;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }
        
        .location-icon {
          color: #e74c3c;
        }
        
        .destination-description {
          color: #5a6c7d;
          line-height: 1.6;
          margin: 0;
          font-size: 0.95rem;
        }
        
        @media (max-width: 768px) {
          .destinations-header {
            padding: 4rem 0 3rem;
          }
          
          .page-title {
            font-size: 2rem;
          }
          
          .page-subtitle {
            font-size: 1rem;
          }
          
          .destinations-content {
            padding: 2rem 0;
          }
          
          .destination-image {
            height: 220px;
          }
        }
      `}</style>
    </div>
  );
}

export default Destinations;
