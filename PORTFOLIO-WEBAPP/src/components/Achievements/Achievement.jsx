import React from 'react';
import './Achievement.css';

const Achievement_data = [
  {
    id: 1,
    image: 'https://media.istockphoto.com/id/1503858430/vector/website-software-development-concept-web-design-site-and-mobile-app-on-laptop-testing-on.jpg?s=612x612&w=0&k=20&c=k8ckKsgOrPPxohAA_ywg2VXZzdCPptEbOlleRV8Kb7c=',
    heading: 'Web Development Course',
    paragraph: 'Completed a 3-month intensive training.',
    achievement_link: 'https://github.com/ZehabFaisal/CERTIFICATE.git'
  },
  {
    id: 2,
    image: 'data:image/jpeg;base64,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',
    heading: 'HackerRank Certificate',
    paragraph: 'I have secured certificate of SQL (Basic level)',
    achievement_link: 'https://github.com/ZehabFaisal/HACKERRANK-CERTIFICATE.git'
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-UaazZU7MmTb2YN_qu9ofrQO3zgwijromA&s',
    heading: 'Web Dev Frontend Internship',
    paragraph: 'Pursuing web-dev frontend internship',
    achievement_link: 'https://github.com/ZehabFaisal/CERTIFICATE-RHOMBIX-.git'
  },
];

const Achievement = () => {
  return (
    <section className="Achievement-section" id='achievements'>
      <h2 className="Achievement-title"> Achievements </h2>

      <div className="Achievement-container">
        {
          Achievement_data.map((a) => (
          <div key={a.id} className="Achievement-card">
            <img src={a.image} alt={a.heading} className="Achievement-image" />
            <h2 className="Achievement-heading"> {a.heading} </h2> 
            <p className="Achievement-paragraph"> {a.paragraph} </p>
            <a href={a.achievement_link} target="_blank" rel="noopener noreferrer">
              <button className="Achievement-button"> View on GitHub </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;