import './Contact.css';

function Contact() {

    return(
        <section className="contact" id="contact">
            <div className="contact-content">
                <h2>Contact Me</h2>
                <p>This doesn't actually work just yet, soz :3</p>
                <form className="contact-form">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact