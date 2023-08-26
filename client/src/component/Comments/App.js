import React, { useState } from 'react';
import './App.css';

import TestimonialCard from './TestimonialCard';

const clientsData = [
  {
    id: 1,
    name: 'John Doe',
    occupation: 'CEO',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    testimonial: 'We had an incredible experience working with them and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.'
  },
  {
    id: 2,
    name: 'Jane Doe',
    occupation: 'CTO',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod enim eu erat ullamcorper, vel dictum augue gravida. Sed ut massa ut nibh pharetra fringilla. Sed vulputate, sapien ac sagittis blandit, sapien purus dignissim velit, vel congue ante lacus nec odio.'
  },
  {
    id: 3,
    name: 'Bob Smith',
    occupation: 'Manager',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod enim eu erat ullamcorper, vel dictum augue gravida. Sed ut massa ut nibh pharetra fringilla. Sed vulputate, sapien ac sagittis blandit, sapien purus dignissim velit, vel congue ante lacus nec odio.'
  },
  {
    id: 4,
    name: 'Emma Johnson',
    occupation: 'Designer',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod enim eu erat ullamcorper, vel dictum augue gravida. Sed ut massa ut nibh pharetra fringill…[omitted]'
  }
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? clientsData.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === clientsData.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="testimonial-slider">
      <h1 className="slider-title">Few words from our clients</h1>
      <div className="slider-wrapper">
        <div className="slider-container">
          {clientsData.map((client, index) => (
            <TestimonialCard
              key={client.id}
              client={client}
              active={index === activeIndex}
            />
          ))}
        </div>
        <div className="slider-controls">
          <button className="slider-control-btn" onClick={handlePrevClick}>
            &lt;
          </button>
          <button className="slider-control-btn" onClick={handleNextClick}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
