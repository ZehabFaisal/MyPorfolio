import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container" id="education">
      <h2 className="education-title" style={{fontSize: "35px"}}> Education </h2>
      <div className="education-grid">

        <div className="education-card">
          <h1 className="title"> Matriculation </h1>
          <h3 className="institution-name"> UNIQUE HIGH SCHOOL FOR BOYS, 5-A USMAN BLOCK CANAL BANK SCHEME,HARBANSPURA </h3>
          <p className="education-details"> LAHORE / MATRICULATION COMPUTER SCIENCES (2018 - 2020) </p>
          <p className="education-details"> Percentage: 94% </p>
        </div>

        <div className="education-card">
          <h1 className="title"> Intermediate </h1>
          <h3 className="institution-name"> UNIQUE BOYS COLLEGE (106-A), NEW MUSLIM TOWN </h3>
          <p className="education-details"> LAHORE / INTERMEDIATE FSC PRE ENGINEERING (2020 - 2022) </p>
          <p className="education-details"> Percentage: 85% </p>
        </div>

        <div className="education-card">
          <h1 className="title"> Bachelors </h1>
          <h3 className="institution-name"> UNIVERSITY OF CENTRAL PUNJAB </h3>
          <p className="education-details"> LAHORE / BS COMPUTER SCIENCES <br/> (2022 - 2026) </p>
          <p className="education-details">CGPA: 3.46 / 4.0 </p>
        </div>
      </div>
    </div>
  );
};

export default Education;