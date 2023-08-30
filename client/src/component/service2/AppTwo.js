import "./AppTwo.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function App({post}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="blog-slider">
      <h1>Customer FeedBack</h1>
      <Slider className="slider-cont" {...settings}>
        {post.map((post) => (
          <div key={post.id} className="slider-blog">
            <h1>{post.title}</h1>
            <p> {post.content}</p>
            <p> - {post.name} </p>
          </div>
        ))}
        {post.map((post) => (
          <div key={post.id} className="slider-blog">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p> - {post.name}</p>

          </div>
        ))}
        {post.map((post) => (
          <div key={post.id} className="slider-blog">
            <h1>{post.title}</h1>
            <p>{post.name}</p>
            <p>{post.content}</p>
            <p> - {post.name}</p>

          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
