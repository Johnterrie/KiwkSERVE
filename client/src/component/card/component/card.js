import stock from './person.jpg';
import "./card.css"

function Profile() {
  return (
    <div className="profile">
      <div className="sidecontainer">
        <div className="imagecontainer">
          <img src={stock} className="image" />
        </div>
        <div className='text'>
          <h3 className="name">Name</h3>
          <h3 className="num">Fabian Levy</h3>
        </div>
        <div className='text-one'>
          <h3 className="name">Age</h3>
          <h3 className="num">23 years old</h3>
        </div>
        <div className='text-two'>
          <h3 className="name">Occupation</h3>
          <h3 className="num">Web developer</h3>
        </div>
      </div>
      <div className="maincontainer">
        <div className="sidetext">
          <h3>Profile</h3>
          <h4 className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quasi? Eius deleniti doloremque repellendus nihil voluptsit amet
            Lorem ipsum dolor consectetur adipisicing elit. Quisquam,
            quasi? Eius deleniti doloremque repellendus nihil volupt
          </h4>
          <h3>Personality</h3>
          <h4 className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quasi? Eius deleniti doloremque
          </h4>
          <h3>Goals</h3>
          <div className="goal">
            <li> sit amet consectetur adipisicing elit. Quisqua</li>
            <li> sit amet consectetur </li>
            <li> sit amet consectetur adipisicing.</li>
          </div>
          <h3>Challenge</h3>
          <h4 className="goal">sit amet consectetur adipisicing.</h4>
        </div>
      </div>
    </div>
  );
}

export default Profile;