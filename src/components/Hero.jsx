import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';

function Hero() {

    return(
        <section className="hero">
            <div className="hero-background"></div>
            <div className="hero-content">
                <h1>Heyo, I'm Noah!</h1>
                <p>
                    <span style={{ fontWeight: 'bold' }}>
                        <Typewriter
                        words={[
                            'BSc (Hons) Computer Games Technology',
                            'Aspiring Technical Artist'
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                        />
                    </span>
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn">View Projects</a>
                     {/*<a href="#contact" className="btn btn-secondary">Contact Me</a>*/}
                </div>
            </div>
        </section>
    );
}

export default Hero