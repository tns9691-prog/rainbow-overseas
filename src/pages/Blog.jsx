import React from 'react';
import './ServicePage.css';

function Blog() {
  const blogs = [
    {
      title: 'Top 10 Study Destinations for Indian Students in 2024',
      date: 'May 15, 2024',
      category: 'Education',
      excerpt: 'Discover the best countries for higher education with high job prospects and affordable tuition fees.',
      image: '🌍'
    },
    {
      title: 'Complete Guide to Student Visa Interview Preparation',
      date: 'May 10, 2024',
      category: 'Visa',
      excerpt: 'Learn expert tips and strategies to successfully clear your student visa interview.',
      image: '✈️'
    },
    {
      title: 'How to Get Education Loans: A Complete Roadmap',
      date: 'May 5, 2024',
      category: 'Finance',
      excerpt: 'Understand the education loan process, eligibility criteria, and best lenders in India.',
      image: '💰'
    },
    {
      title: 'Travel Tips for International Students: First Flight Guide',
      date: 'April 30, 2024',
      category: 'Travel',
      excerpt: 'Essential tips for first-time international travelers and what to pack for study abroad.',
      image: '🎒'
    },
    {
      title: 'Scholarship Opportunities for Indian Students Abroad',
      date: 'April 25, 2024',
      category: 'Education',
      excerpt: 'Explore fully funded and partially funded scholarship programs available for Indian students.',
      image: '🎓'
    },
    {
      title: 'Understanding IELTS vs TOEFL: Which Should You Take?',
      date: 'April 20, 2024',
      category: 'Preparation',
      excerpt: 'Compare IELTS and TOEFL exams to determine which is best suited for your goals.',
      image: '📚'
    }
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container">
          <h1>Blog & Updates</h1>
          <p>Stay updated with the latest news, tips, and insights about education and travel</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            {blogs.map((blog, idx) => (
              <div key={idx} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}>
                <div style={{ padding: '2rem', fontSize: '3rem', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
                  {blog.image}
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ backgroundColor: '#ff8c00', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                    {blog.category}
                  </span>
                  <h3 style={{ color: '#003d99', marginTop: '1rem', marginBottom: '0.5rem' }}>{blog.title}</h3>
                  <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '1rem' }}>📅 {blog.date}</p>
                  <p>{blog.excerpt}</p>
                  <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#003d99', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
