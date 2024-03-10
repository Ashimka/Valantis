import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="about">
          <p>Я веб-разработчик Михаил Михайлов.</p>
          <p>Технологический стек.</p>
          <p>Backend: Node, Express, MySQL, PrismaORM, JWT.</p>
          <p>Frontend: React, Redux ToolKit, Axios.</p>
        </div>
        <div className="resume">
          Резюме на
          <Link
            className="about-link"
            to={
              "https://samara.hh.ru/resume/7cfea28fff098521a90039ed1f53436c727577"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            hh.ru
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
