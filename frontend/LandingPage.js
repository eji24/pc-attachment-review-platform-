import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to The PC Attachment Review Platform</h1>
        <p>
          Share your experiences, provide feedback, and help others make informed decisions
          when purchasing PC attachments.
        </p>
        <button className="start-button">Get Started</button>
      </header>
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          The PC Attachment Review Platform is a community-driven web application that allows PC
          enthusiasts and users to post and read reviews about various PC attachments such as
          keyboards, mice, monitors, and more. Our goal is to provide a centralized hub for users
          to share their experiences and help each other make informed decisions.
        </p>
      </section>
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>Post and read reviews about PC attachments.</li>
          <li>Discover the best PC attachments based on user ratings and feedback.</li>
          <li>Connect with other PC enthusiasts and users.</li>
          <li>Stay updated with the latest PC attachment trends and news.</li>
        </ul>
      </section>
      <footer>
        <p>&copy; 2023 The PC Attachment Review Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
