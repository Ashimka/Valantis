import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/github.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrap">
            <nav className="nav">
              <Link to={"/"} className="nav-link">
                Главная
              </Link>
              <Link to={"/about"} className="nav-link">
                Обо мне
              </Link>
            </nav>
            <div className="header-link">
              <Link
                to={"https://github.com/Ashimka/valantis"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="github" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
