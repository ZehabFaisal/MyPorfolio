import React from 'react'
import './Experience.css'

const experiences = [
    {
        role: "Web Dev Frontend Intern",
        company: "Rhombix Technologies",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-UaazZU7MmTb2YN_qu9ofrQO3zgwijromA&s",
        duration: "Aug 2025 till Sept 2025",
        github_link: "https://github.com/ZehabFaisal/CERTIFICATE-RHOMBIX-.git",
        description: [ 
          "Developed a responsive personal portfolio website using HTML, CSS, JavaScript, and React Js.",
        ]
    },
    {
        role: "Web Dev 3-Months Course",
        company: "Peak Solutions College",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc682RXVLNyVcJrFTZFiJHX9KUEXYMfnKm2Q&s",
        duration: "July 2024 till Oct 2024",
        github_link: "https://github.com/ZehabFaisal/CERTIFICATE.git",
        description: [ 
          "I have completed Web Dev Course, in which I learnt HTML, CSS, JS as a front-end. PHP for backend"
        ]
    }
]

const Experience = () => {
  return (
    <section className="experience-section" id='experience'>
      <h2 className="experience-title"> Experience </h2>
      <div className="experience-list">
        {
          experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <img src={exp.image} alt="image" className='experience-image'/>
              <h3> {exp.role} </h3>
              <p className="company-duration"> {exp.company} - {exp.duration} </p>
                <ul>
                  { 
                    exp.description.map((item, index) => (
                    <li key={index}> {item} </li>
                  ))}
                </ul>

              <a href={exp.github_link} target="_blank" rel="noopener noreferrer" >
                <button className="projects-btn" style={{ "margin-top": 10, "marginBottom": 15 }}> View on GitHub </button>
              </a>
            </div>
            
          ))
        }
      </div>
    </section>
  )
}

export default Experience;