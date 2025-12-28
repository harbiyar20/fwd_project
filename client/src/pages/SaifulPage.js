import React from 'react';
import './PlaceDetail.css';

const SaifulPage = () => {
  return (
    <div className="place-page">
      <div className="place-banner" style={{ backgroundImage: "url('/saifulmalookimg.jpg')" }}>
        <h1>Hunza Valley</h1>
      </div>
      <div className="place-content">
        <p>
          Skardu is a stunning valley in Gilgit-Baltistan, Pakistan. It serves as the gateway to some of the world's highest peaks including K2. Known for its crystal-clear lakes, ancient forts, and majestic mountains, it offers unmatched natural beauty and adventure.
        </p>
        <img src="/saifulmalookimg.jpg" alt="Hunza" className="place-image" />
        
        {/* Google Map Embed for Saiful Malook */}
        <div className="map-container">
          <iframe
            title="Saiful Malook Location"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.152335741456!2d73.7086233152146!3d34.05018888060945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fd6b6c3e6d4f1f%3A0x8c1c94e792d7a3e0!2sLake%20Saiful%20Malook!5e0!3m2!1sen!2s!4v1628795027167!5m2!1sen!2s"
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

export default SaifulPage;