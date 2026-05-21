import React from 'react';
import { FaUser, FaBriefcase, FaCreditCard, FaCar, FaHome, FaChartLine } from 'react-icons/fa';
import './ServicePage.css';

const financeServices = [
  { icon: <FaUser />, title: 'Personal Loans', desc: 'Fast approval loans for education, travel, medical needs, and personal emergencies, with flexible repayment terms.' },
  { icon: <FaBriefcase />, title: 'Business Loans', desc: 'Capital solutions for startups and growing businesses, including working capital, expansion, and equipment finance.' },
  { icon: <FaCreditCard />, title: 'Credit Cards', desc: 'A range of credit cards for travel, shopping, rewards, and low-interest use to suit every lifestyle.' },
  { icon: <FaCar />, title: 'Car Loans', desc: 'Affordable auto finance for new and used cars with competitive interest rates and easy EMI plans.' },
  { icon: <FaHome />, title: 'Home Loans', desc: 'Home purchase and home improvement loans with attractive rates, long tenures, and simple documentation.' },
  { icon: <FaChartLine />, title: 'Mutual Funds', desc: 'Investment planning through mutual funds to help you build wealth, save tax, and achieve long-term financial goals.' },
];

function Finance() {
  return (
    <div className="service-page">
      <div className="page-hero" style={{backgroundImage: "linear-gradient(rgba(10,15,35,0.82),rgba(10,15,35,0.88)), url('https://images.unsplash.com/photo-1496024840928-4c417adf211d?auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="container">
          <p className="section-tag" style={{color:'rgba(255,255,255,0.6)'}}>FINANCE SERVICES</p>
          <h1>Finance Solutions for Your Goals</h1>
          <p>From personal loans to business credit and investment planning, Rainbow Overseas helps you manage finance with confidence.</p>
          <div className="hero-badges">
            <span>Flexible Options</span>
            <span>Quick Approvals</span>
            <span>Trusted Partners</span>
            <span>Expert Advice</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="section-tag center">OUR FINANCE OFFERINGS</p>
          <h2 className="section-title">Smart Loan and Investment Services</h2>
          <div className="service-cards-grid">
            {financeServices.map(service => (
              <div key={service.title} className="svc-card">
                <div className="svc-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Finance;
