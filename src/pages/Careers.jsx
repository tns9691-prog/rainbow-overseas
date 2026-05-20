import React from 'react';
import './ServicePage.css';

function Careers() {
  const positions = [
    {
      title: 'Education Counsellor',
      location: 'Hyderabad',
      type: 'Full-time',
      description: 'Guide students through the study abroad process and provide expert counselling.'
    },
    {
      title: 'Visa Specialist',
      location: 'Hyderabad',
      type: 'Full-time',
      description: 'Assist students with visa applications and interview preparation.'
    },
    {
      title: 'Travel Consultant',
      location: 'Hyderabad',
      type: 'Full-time',
      description: 'Plan and organize travel packages for clients.'
    },
    {
      title: 'Finance Advisor',
      location: 'Hyderabad',
      type: 'Full-time',
      description: 'Provide financial solutions and education loan guidance to clients.'
    }
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container">
          <h1>Careers at Rainbow Overseas</h1>
          <p>Join our team and help students achieve their dreams</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Open Positions</h2>
          <div style={{ marginTop: '2rem' }}>
            {positions.map((job, idx) => (
              <div key={idx} style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: '#003d99', marginBottom: '0.5rem' }}>{job.title}</h3>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>📍 {job.location} | {job.type}</p>
                <p>{job.description}</p>
                <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#ff8c00', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f5f5f5', padding: '3rem 0' }}>
        <div className="container">
          <h2>Why Work With Us?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ padding: '1.5rem' }}>
              <h4 style={{ color: '#003d99' }}>🌟 Growth Opportunities</h4>
              <p>Career growth and professional development in a fast-growing company.</p>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h4 style={{ color: '#003d99' }}>🤝 Team Environment</h4>
              <p>Work with passionate professionals dedicated to helping students.</p>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h4 style={{ color: '#003d99' }}>💼 Competitive Benefits</h4>
              <p>Competitive salary, health insurance, and additional perks.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
