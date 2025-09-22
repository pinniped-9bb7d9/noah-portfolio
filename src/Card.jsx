import profilePic from './assets/profile.jpg'

function Card() {

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className="card-title">Noah Morrison</h2>
            <p className="card-text">I am studying a BSc (Hons) Computer Games Technology degree at Abertay University!</p>
        </div>
    );
}

export default Card