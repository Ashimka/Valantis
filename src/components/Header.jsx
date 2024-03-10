import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-nav">
            <nav className="nav">
              <Link to={"/"} className="nav-link">
                Главная
              </Link>
              <Link to={"/about"} className="nav-link">
                Обо мне
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
