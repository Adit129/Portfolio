import React from "react";
import { BsLinkedin } from "react-icons/bs";
import "./testimonials.css"; // Add your custom CSS for styling if needed

const Testimonials = () => {
  const experiences = [
    {
      id: 1,
      link: "https://www.linkedin.com/company/analyze-infotech---india/",
      company: "Analyze InfoTech Pvt. Ltd.",
      role: "Training and Internship of Java/J2EE with MySQL",
      description:
        "I embarked on a comprehensive learning journey in the field of Java development, starting with a strong foundation in core Java. Building upon this knowledge, I delved into advanced Java technologies, mastering the intricacies of Servlets, JDBC, and JSP. Utilizing the powerful NetBeans IDE, I successfully executed two projects, showcasing my proficiency in designing and implementing dynamic web applications. These projects seamlessly integrated with MySQL databases, highlighting my competence in database management. This learning experience not only equipped me with technical skills but also instilled a problem-solving mindset.",
      duration: "6 months",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/company/kraftors-web-solutions-pvt.-ltd./",
      company: "Kraftors Web Solution Pvt. Ltd.",
      role: "MERN Stack Intern",
      description:
        "In a collaborative effort with a cross-functional team, I played a key role in conceptualizing, designing, and developing a cutting-edge chatbot application. Leveraging the MERN stack, which encompasses MongoDB, Express.js, React, and Node.js, we crafted a robust and scalable solution. My contributions extended to implementing and enhancing continuous integration and deployment (CI/CD) pipelines, ensuring the application's smooth updates and scalability. This experience not only honed my technical expertise in the MERN stack but also provided valuable insights into the collaborative dynamics of software development.",
      duration: "2 months",
    },
  ];

  return (
    <section id="experiences">
      <h2>Professional Experiences</h2>
      {experiences.map((experience) => (
        <div className="experience" key={experience.id}>
          <div className="company-avatar">
            <a href={experience.link}>
              <BsLinkedin />
            </a>
          </div>
          <div className="experience-details">
            <h5 className="company-name">{experience.company}</h5>
            <h5 className="role">{experience.role}</h5>
            <p className="duration">{`Duration: ${experience.duration}`}</p>
            <p className="description">{experience.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
