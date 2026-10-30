import React from "react";
import "./Projects.css";
import Main_Img from "../../assets/main-image.jpg";
import Book_Search_Image from "../../assets/book-search.jpg";
import Perfume_Img from "../../assets/perfume.jpg";
import Js_Img from "../../assets/js-projects.jpg";
import Auth_Img from "../../assets/user-auth.jpg";

const projects = [
  {
    id: 1,
    title: "LMS PROJECT",
    description:
      "LMS project built using C# Language and ASP.NET MVC 5 framework.",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQFaII5dbQ8rEw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1706873328047?e=2147483647&v=beta&t=-Fmq9K62vYo6CwkiH1QNdcALESIP61tMs_u4EbnNL6Q",
    github_link: "https://github.com/ZehabFaisal/LMS-PROJECT.git",
  },
  {
    id: 2,
    title: "JS MINI PROJECTS",
    description: "Multiple mini projects built using HTML, CSS and JavaScript.",
    image: Js_Img,
    github_link: "https://github.com/ZehabFaisal/JS-PROJECTS.git",
  },
  {
    id: 3,
    title: "FOOD ORDERING WEBSITE",
    description:
      "Login, signup authentication, shopping cart and checkout functionality.",
    image: Main_Img,
    github_link: "https://github.com/ZehabFaisal/FOOD-ORDERING-WEBSITE.git",
  },
  {
    id: 4,
    title: "BOOK LIBRARY SEARCH",
    description:
      "Search and explore books through a clean, responsive interface.",
    image: Book_Search_Image,
    github_link: "https://github.com/ZehabFaisal/BOOK-LIBRARY-SEARCH.git",
  },
  {
    id: 5,
    title: "ECOMMERCE WEBSITE",
    description:
      "Modern ecommerce website with product listings and shopping cart.",
    image: Perfume_Img,
    github_link: "https://github.com/ZehabFaisal/ECOMMERCE-WEBSITE.git",
  },
  {
    id: 6,
    title: "USER AUTHENTICATION",
    description:
      "MERN Stack authentication web-app with login, signup and session management.",
    image: Auth_Img,
    github_link: "https://github.com/ZehabFaisal/USER-AUTH.git",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2 style={{fontSize: "35px"}}> PROJECTS </h2>
      </div>

      <div className="grid">
        {
          projects.map((p) => (
            <div className="card" key={p.id}>
              <div className="image-box">
                <img src={p.image} alt={p.title} className="image" />
              </div>

              <div className="content">
                <h3> {p.title} </h3>
                <p> {p.description} </p>
                <a href={p.github_link} target="_blank" rel="noopener noreferrer" >
                  <button className="projects-btn"> View on GitHub </button>
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Projects;