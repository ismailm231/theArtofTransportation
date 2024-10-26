import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faMapMarkerAlt, faCog, faFileSignature, faLink, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <div>
            <section className="features-section">
                <h2>Our Features</h2>
                <div className="features-list">
                    <div className="feature-item">
                        <FontAwesomeIcon icon={faLock} className="feature-icon" />
                        <h4>HIPAA Compliant</h4>
                        <p>End-to-end encrypted platform ensures your data is secure.</p>
                    </div>
                    <div className="feature-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="feature-icon" />
                        <h4>GPS Tracking</h4>
                        <p>Live tracking portals provide real-time delivery status.</p>
                    </div>
                    <div className="feature-item">
                        <FontAwesomeIcon icon={faCog} className="feature-icon" />
                        <h4>Optimized Solutions</h4>
                        <p>Customized features and workflows for your operations.</p>
                    </div>
                    <div className="feature-item">
                        <FontAwesomeIcon icon={faFileSignature} className="feature-icon" />
                        <h4>Proof of Delivery</h4>
                        <p>View delivery proofs, stored securely for auditing purposes.</p>
                    </div>
                    <div className="feature-item">
                        <FontAwesomeIcon icon={faLink} className="feature-icon" />
                        <h4>Integration</h4>
                        <p>Seamless integration with top management software.</p>
                    </div>
                    <div className="feature-item">
                        <FontAwesomeIcon icon={faChartLine} className="feature-icon" />
                        <h4>Retention Tool</h4>
                        <p>Analyze patient engagement and reduce attrition rates.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Features;



