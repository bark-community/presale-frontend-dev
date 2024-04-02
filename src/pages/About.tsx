import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="about__heading">About Us</h2>
        <p className="about__description">
          Welcome to BARK, your source for all things related to blockchain. We are dedicated to providing
          innovative solutions and fostering transparency in the blockchain industry.
        </p>
        <p className="about__mission">
          Our mission is to revolutionize the blockchain industry through cutting-edge technology and a commitment
          to open communication and integrity. We believe in empowering individuals and businesses to harness the
          power of blockchain for a brighter future.
        </p>
      </div>
    </section>
  );
}

export default About;
