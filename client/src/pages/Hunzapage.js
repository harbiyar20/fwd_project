import React from 'react';
import './PlaceDetail.css';

const HunzaPage = () => {
  return (
    <div className="place-page">
      <div className="place-banner" style={{ backgroundImage: "url('/hunzaimg.jpg')" }}>
        <h1>Hunza Valley</h1>
      </div>
      <div className="place-content">
        <p>
          Skardu is a stunning valley in Gilgit-Baltistan, Pakistan. It serves as the gateway to some of the world’s highest peaks including K2. Known for its crystal-clear lakes, ancient forts, and majestic mountains, it offers unmatched natural beauty and adventure.
        </p>
        <img src="/hunzaimg.jpg" alt="Hunza" className="place-image" />
        <div className="map-container">
          <h2>Location</h2>
          <iframe
            title="Hunza Valley Location"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18000!2d74.6500!3d36.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afeb9d8c5c5c5d%3A0x1234567890abcdef!2sHunza%20Valley!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            allowFullScreen
          >
          </iframe>
        </div>  
        <section className="info-section">
          <h2>Highlights</h2>
          <ul>
            <li>Shangrila Resort</li>
            <li>Upper Kachura Lake</li>
            <li>Skardu Fort</li>
            <li>Deosai National Park</li>
          </ul>
        </section>
      
      
      </div>
    </div>
  );
};

export default HunzaPage;