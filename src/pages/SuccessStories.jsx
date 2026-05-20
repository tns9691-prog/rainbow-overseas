import React from 'react';
import './ServicePage.css';

function SuccessStories() {
  const stories = [
    {
      name: 'Priya Sharma',
      destination: 'MS in Data Science, USA',
      story: 'Rainbow Overseas made my dream of studying in the USA a reality. From SOP guidance to visa prep, every step was handled professionally. I am now working at a top tech company!'
    },
    {
      name: 'Ravi Teja',
      destination: 'MBA, UK',
      story: 'The counsellors at Rainbow Overseas are extremely knowledgeable and supportive. They helped me secure admission to my first-choice university and I graduated with honors.'
    },
    {
      name: 'Ananya Reddy',
      destination: 'B.Tech, Canada',
      story: 'I was confused about which country to choose. The team patiently explained options, helped me compare, and I got my Canadian student visa in record time!'
    },
    {
      name: 'Arjun Patel',
      destination: 'Bachelor\'s in Engineering, Australia',
      story: 'Rainbow Overseas provided end-to-end support from university selection to visa interview preparation. Their guidance was invaluable and I am now thriving in Australia.'
    }
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container">
          <h1>Success Stories</h1>
          <p>Real stories from our students who achieved their dreams</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our Student Success Stories</h2>
          <div className="stories-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            {stories.map((story, idx) => (
              <div key={idx} className="story-card" style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: '#003d99', marginBottom: '0.5rem' }}>{story.name}</h3>
                <p style={{ color: '#ff8c00', fontSize: '0.9rem', marginBottom: '1rem' }}>{story.destination}</p>
                <p>{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SuccessStories;
