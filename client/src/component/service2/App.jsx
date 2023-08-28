import "./App.css";
import { Card } from "./Components/Card";
import img1 from "./Components/Images/unsplash_iZVrfElG1t0.jpg"
import img2 from "./Components/Images/unsplash_FO7JIlwjOtU.jpg"
import img3 from "./Components/Images/unsplash_6MNmDi1hc_Y.jpg"



function App() {
  return (
    <section className="section-title">
      <div className="sub-title">
        <h4>Latest News</h4>
      </div>
      <div className="main-two">
        <div>
         
          <Card
            imgSrc={img1}
            imgAlt="Card Image 1"
            title="Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor."
            description="Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus."
            buttonText="Read More"
            link="card1"
          />
        </div>
        <div>
          <Card
          imgSrc={img2}
            imgAlt="Card Image 2"
            title="Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. "
            description="Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio,
        vulputate at tortor vitae, hendrerit blandit lorem. "
            buttonText="Read More"
            link="card2"
          />
        </div>
        <div>
          <Card
            imgSrc={img3}
            imgAlt="Card Image 3"
            title="Curabitur massa orci, consectetur et blandit ac, auctor et tellus."
            description="Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus."
            buttonText="Read More" 
            link="card3"
          />
        </div>
      </div>
    </section>
  );
}

export default App;
