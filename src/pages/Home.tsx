import React from 'react';
import Button from './Button';

const Home: React.FC = () => {
  const handleGetStarted = () => {
    // Logic for handling "Get Started" action
    console.log('Get Started clicked');
  };

  return (
    <div className="home" id="home">
      <h2 className="home__heading">Welcome to BARK</h2>
      <p className="home__description">Discover the future of blockchain with BARK. Get started now!</p>
      <Button onClick={handleGetStarted} className="home__btn">Get Started</Button>
    </div>
  );
}

export default Home;
