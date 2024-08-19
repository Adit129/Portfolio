import "./portfolio.css";
import Img7 from "../../assets/ss.png";
import IMG1 from "../../assets/Educational.png";
import IMG2 from "../../assets/Vehicle.png";
import IMG3 from "../../assets/Weather.png";
import IMG4 from "../../assets/shiksha.png";
import IMG5 from "../../assets/Tic-Tac-Toe.png";
import IMG6 from "../../assets/LandingPage.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Vehicle Renting Management",
      img: IMG2,
      description:
        "Vehicle Renting Management System for registration, status updates and rental agreements, with intuitive search and filtering functionalities for easy vehicle selection.",
      technologies: "Html | CSS | Java | Netbeans | SQLyog",
      github: "https://github.com/Adit129/VehicleRenting",
    },
    {
      id: 2,
      title: "Online Examination System",
      img: IMG1,
      description:
        "Designed a user-friendly web dashboard for seamless exam and question management. Implemented secure MySQL databases for scalable user profiles and results.",
      technologies: " Java | Servlet | JSP | SQLyog | Html | Css",
      link: "",
      github: "https://github.com/Adit129/Online_Exam",
    },
    {
      id: 3,
      title: "Shikshasaathi SMS Website",
      img: IMG4,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "React | Bootstrap | Javascript",
      github: "https://github.com/Adit129/shikshasaathi.git",
    },
    {
      id: 4,
      title: "Startup Landing Page",
      img: IMG6,
      description:
        "Engineered a captivating and responsive landing page, seamlessly blending creativity and functionality.",
      technologies: "Html | CSS | JavaScript",
      link: "https://adit129.github.io/PRODIGY_WD_01/",
      github: "https://github.com/Adit129/PRODIGY_WD_01",
    },
    {
      id: 5,
      title: "Tic-Tac-Toe",
      img: IMG5,
      description:
        " Created an interactive and efficient Tic-Tac-Toe game, featuring a user-friendly interface and winning condition detection for an engaging player experience.",
      technologies: "Html | CSS | JavaScript",
      link: "https://adit129.github.io/PRODIGY_WD_03/",
      github: "https://github.com/Adit129/PRODIGY_WD_03.git",
    },
    {
      id: 6,
      title: "Weather App",
      img: IMG3,
      description:
        "  Developed a sleek and functional weather app utilizing API integration for real-time weather updates, offering users a seamless experience to stay informed about current conditions.",
      technologies: "Html | Css | Javascript",
      link: "https://adit129.github.io/PRODIGY_WD_04/",
      github: "https://github.com/Adit129/PRODIGY_WD_04.git",
    },
    {
      id: 7,
      title: "TodoList App",
      img: Img7,
      description:
        "Easily create, edit and manage your to-do lists, set notifications and monitor your progress. Designed to simplify your daily routine, our app helps you stay focused and productive.",
      technologies: "React | Bootstrap",
      link: "https://todolist-make-your-todo.netlify.app/",
      github: "https://github.com/Adit129/PRODIGY_WD_04.git",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              {pro.id !== 1 &&
                pro.id !== 2 && ( // Exclude Live Demo link for id 1 and id 2
                  <a
                    href={pro.link}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
