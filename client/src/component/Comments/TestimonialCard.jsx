import React from 'react';

function TestimonialCard({ client, active }) {
  return (
    <div className={`testimonial-card ${active ? 'active' : ''}`}>
      <div className="testimonial-image">
        <img src={client.image} alt={client.name} />
      </div>
      <div className="testimonial-content">
        <p className="testimonial-text">{client.testimonial}</p>
        <p className="testimonial-name">{client.name}</p>
        <p className="testimonial-occupation">{client.occupation}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
