import React from 'react';
import avatar from '../images/avatar.png'; // Import the image

const HeroSection = () => {
    return (
        <section style={{ backgroundColor: '#2F4F6D', color: 'white', textAlign: 'center', padding: '3rem 0' }}>
            <h1>Hello, I am Joel!</h1>
            <img src={avatar} alt="Profile" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
            <h2>A frontend developer specialised in React</h2>
        </section>
    );
};

export default HeroSection;
