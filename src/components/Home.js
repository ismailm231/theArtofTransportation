import React from 'react';
import '../App.css';
import logo from './logo.png';

const Home = () => {
    const handleScrollToMission = () => {
        document.getElementById('mission-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="home-section">
                <div className="container">
                    <img src={logo} alt="The Art of Transportation Logo" className="home-logo" />
                    <h1 className="home-title">The Art of Transportation</h1>
                    <p>Your trusted partner in secure and efficient medication delivery.</p>
                    <button className="btn btn-primary" onClick={handleScrollToMission}>Learn More</button>
                </div>
            </section>

            {/* Our Mission Section */}
            <section id="mission-section" className="mission-section">
                <div className="container">
                    <h2>Our Mission</h2>
                    <p>
                        At The Art of Transportation, our mission is to empower pharmacies with reliable, 
                        secure, and seamless delivery solutions that enhance patient satisfaction and improve 
                        operational efficiency. We are dedicated to bridging the gap between pharmacies and 
                        patients by ensuring medications reach those in need swiftly, safely, and transparently.
                    </p>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="services-section">
                <div className="container">
                    <h2>Our Services</h2>
                    <p>
                        We integrate seamlessly with your pharmacy’s operations, using advanced systems 
                        to streamline delivery workflows. Our services ensure patients receive 
                        their medications reliably, with image and signature confirmations for each delivery. 
                        Pharmacies also benefit from compliance-ready records accessible at any time, 
                        promoting transparency and accountability. Trusted by countless pharmacies, we 
                        have successfully delivered over 100,000 packages, setting a standard in pharmaceutical 
                        delivery excellence.
                    </p>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer-section">
                <p>&copy; {new Date().getFullYear()} The Art of Transportation. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;









