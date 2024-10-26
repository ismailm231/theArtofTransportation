import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Contact from './components/Contact';
import './App.css';

function App() {
    const [navbarScrolled, setNavbarScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarScrolled(true);
            } else {
                setNavbarScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        console.log("Navbar scrolled state:", navbarScrolled); // Debugging: Check if state changes on scroll
    }, [navbarScrolled]);

    return (
        <Router>
            <div className="App">
                <CustomNavbar navbarScrolled={navbarScrolled} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;





