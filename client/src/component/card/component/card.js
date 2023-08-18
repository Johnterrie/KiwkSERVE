import stock from "./person.jpg";
import "./card.css";

function Profile() {
  return (
    // <h1 className='construction-Page'>Page Under Maintenance</h1>

    <div className="profile">
      <div className="left-container">
        <img className="image-div" src={stock} alt="man" />

        <div>
          <h3>Name:</h3>
          <p className="card-para">Oludele Daniels</p>
        </div>

        <div>
          <h3>Profession:</h3>
          <p className="card-para">Electrician</p>
        </div>

        <div>
          <h3>Location:</h3>
          <p className="card-para">Oshodi</p>
        </div>
      </div>
      <div className="right-container">
        <div className="right-div">
          <div className="left-inner">
            <div>
              <h3>About Me</h3>
              <p>i am an electrician with 30 years experience</p>
            </div>
            <div>
              <h3>Phone Number</h3>
              <p>+2348104563728</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>Oludeledaniels@yahoomail.com</p>
            </div>
            <div>
              <h3>Address</h3>
              <p>Lagos, Nigeria</p>
            </div>

            <p className="rating">Rate Me here..</p>
          </div>
          <div className="right-inner">
            <h2>Photos:</h2>

            <div className="image-container">
              <img className="image-div-one" src={stock} alt="man" />
              <img className="image-div-one" src={stock} alt="man" />
              <img className="image-div-one" src={stock} alt="man" />
              <img className="image-div-one" src={stock} alt="man" />
              <img className="image-div-one" src={stock} alt="man" />
              <img className="image-div-one" src={stock} alt="man" />
              <img className="image-div-one" src={stock} alt="man" />
              <img className="image-div-one" src={stock} alt="man" />
              <img className="image-div-one" src={stock} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
