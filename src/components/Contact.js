import React from 'react';
import '../App.css';

const Contact = () => {
    return (
        <section className="contact-section text-center">
            <div className="container">
                <h2>Contact Us</h2>
                <p>For any inquiries or to schedule a demo, reach out to us below: </p>
                <p>  Currently our forms are down reach me at my number 248-778-6796</p>
                <form className="contact-form">
                    <input type="text" placeholder="Pharmacy Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;

