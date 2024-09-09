import React from "react";
import "./Contact.css";
const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h1>Get in Touch</h1>
                <p>Fill out the form below to send me a message.</p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" />
                    </div>
                    <div className="form-button">
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
