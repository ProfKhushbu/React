import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{ backgroundImage: 'url(path/to/background.jpg)', height: '100vh', backgroundSize: 'cover' }}>
      <h1>Company Name</h1>
      <p>Welcome to our plant store. We offer a variety of houseplants to brighten up your space.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
