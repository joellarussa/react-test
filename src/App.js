import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactForm from './components/ContactForm';
import './index.css';

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ProjectsSection />
            <ContactForm />
            <footer style={{ backgroundColor: '#000', color: 'white', textAlign: 'center', padding: '1rem' }}>
                <p>Joel™ 2024</p>
            </footer>
        </div>
    );
}

export default App;