import React, { useState, useEffect, useRef } from 'react';
import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaStar, FaArrowRight, FaPlay } from 'react-icons/fa';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkLoginStatus = () => {
      const currentUser = localStorage.getItem('currentUser');
      setIsLoggedIn(!!currentUser);
    };
    
    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);
    
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    navigate('/');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
      if (!statsVisible) return;

      setIsAnimating(true);
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };
      requestAnimationFrame(animate);
    }, [statsVisible, end, duration]);

    return <span className={isAnimating ? 'counting' : ''}>{count}{suffix}</span>;
  };

  const places = [
    {
      title: 'Skardu Valley',
      img: '/skarduimg.jpg',
      route: '/place/SkarduPage',
      rating: 4.9,
      location: 'Gilgit-Baltistan',
      description: 'Gateway to the world\'s highest peaks'
    },
    {
      title: 'Hunza Valley',
      img: '/hunzaimg.jpg',
      route: '/place/HunzaPage',
      rating: 4.8,
      location: 'Northern Areas',
      description: 'Land of eternal spring'
    },
    {
      title: 'Badshahi Mosque',
      img: '/badshahiimg.jpg',
      route: '/place/BadshahiPage',
      rating: 4.7,
      location: 'Lahore, Punjab',
      description: 'Mughal architectural masterpiece'
    },
    {
      title: 'Saif-ul-Malook Lake',
      img: '/saifulmalookimg.jpg',
      route: '/place/SaifulPage',
      rating: 4.9,
      location: 'Kaghan Valley',
      description: 'Mystical alpine lake'
    }
  ];

  const cities = [
    { name: 'Islamabad', route: '/islamabad', price: '1800' },
    { name: 'Karachi', route: '/karachi', price: '2000' },
    { name: 'Lahore', route: '/lahore', price: '1700' },
    { name: 'Multan', route: '/multan', price: '1500' }
  ];

  return (
    <div className="modern-app">
      {/* Modern Navbar */}
      <Navbar className="modern-navbar" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/" className="brand-logo">
            <span className="brand-icon">🏔️</span>
            <span className="brand-text">PakTourism</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="d-flex align-items-center">
                <Nav.Link href="/" className="nav-item">Home</Nav.Link>
                <Nav.Link href="/destinations" className="nav-item">Destinations</Nav.Link>
                <Nav.Link href="/booking" className="nav-item">Booking</Nav.Link>
                <Nav.Link href="/about" className="nav-item">About</Nav.Link>
                <Nav.Link href="/contact" className="nav-item">Contact</Nav.Link>
                {isLoggedIn ? (
                  <Button variant="outline-light" className="login-btn ms-3" onClick={handleLogout}>Logout</Button>
                ) : (
                  <Button variant="outline-light" className="login-btn ms-3" onClick={() => navigate('/login')}>Login</Button>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="hero-section" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="hero-background" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}></div>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              Discover the
              <span className="gradient-text"> Wonders </span>
              of Pakistan
            </h1>
            <p className="hero-subtitle">
              From majestic mountains to ancient heritage sites, embark on an unforgettable journey
            </p>
            <div className="hero-buttons">
              <Button className="cta-primary" onClick={() => navigate('/destinations')}>
                Explore Now <FaArrowRight className="ms-2" />
              </Button>
              <Button variant="outline-light" className="cta-secondary">
                <FaPlay className="me-2" /> Watch Video
              </Button>
            </div>
          </div>
        </div>
        <div className="floating-elements">
          <div className="float-1">🏔️</div>
          <div className="float-2">🕌</div>
          <div className="float-3">🌸</div>
        </div>
      </div>

      {/* Popular Destinations */}
      <section className="destinations-section">
        <Container>
          <div className="section-header">
            <h2 className="section-title">Popular Destinations</h2>
            <p className="section-subtitle">Handpicked locations that will take your breath away</p>
          </div>
          <Row className="g-4">
            {places.map((place, idx) => (
              <Col lg={6} key={idx}>
                <Card className="destination-card" onClick={() => navigate(place.route)}>
                  <div className="card-image-wrapper">
                    <Card.Img src={place.img} alt={place.title} className="destination-img" />
                    <div className="card-overlay">
                      <Button className="explore-btn">
                        Explore <FaArrowRight />
                      </Button>
                    </div>
                  </div>
                  <Card.Body className="destination-body">
                    <div className="destination-header">
                      <h5 className="destination-title">{place.title}</h5>
                      <div className="rating">
                        <FaStar className="star" />
                        <span>{place.rating}</span>
                      </div>
                    </div>
                    <p className="location">
                      <FaMapMarkerAlt className="location-icon" />
                      {place.location}
                    </p>
                    <p className="description">{place.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Cities Section */}
      <section className="cities-section">
        <Container>
          <div className="section-header">
            <h2 className="section-title">Explore Cities</h2>
            <p className="section-subtitle">Urban adventures await in Pakistan's vibrant cities</p>
          </div>
          <Row className="g-3">
            {cities.map((city, idx) => (
              <Col md={6} lg={3} key={idx}>
                <div className="city-card" onClick={() => navigate(city.route)}>
                  <div className="city-content">
                    <h6 className="city-name">{city.name}</h6>
                    <p className="city-price">From PKR {city.price}</p>
                  </div>
                  <FaArrowRight className="city-arrow" />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section" ref={statsRef}>
        <Container>
          <Row className="text-center">
            <Col md={3} sm={6}>
              <div className="stat-item">
                <h3 className="stat-number">
                  <AnimatedCounter end={50} suffix="+" />
                </h3>
                <p className="stat-label">Destinations</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stat-item">
                <h3 className="stat-number">
                  <AnimatedCounter end={10} suffix="K+" />
                </h3>
                <p className="stat-label">Happy Travelers</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stat-item">
                <h3 className="stat-number">4.9</h3>
                <p className="stat-label">Average Rating</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stat-item">
                <h3 className="stat-number">24/7</h3>
                <p className="stat-label">Support</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
