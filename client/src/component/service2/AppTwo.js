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
      <h1>BLOG</h1>
      <Slider className="slider-cont" {...settings}>
        {post.map((post) => (
          <div key={post.id} className="slider-blog">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
        {post.map((post) => (
          <div key={post.id} className="slider-blog">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
        {post.map((post) => (
          <div key={post.id} className="slider-blog">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
