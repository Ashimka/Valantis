import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-info">
            <div className="footer-link">
              <h4 className="footer-title">Репозиторий</h4>
              <div className="link-wrap">
                <Link
                  className="nav-link"
                  to={"https://github.com/Ashimka"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div className="footer-link">
              <h4 className="footer-title">Контакты</h4>
              <div className="link-wrap">
                <Link
                  className="nav-link"
                  to={"https://api.whatsapp.com/send/?phone=79649552284"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </Link>
                <Link className="nav-link" to={"https://t.me/ashimka_M"}>
                  Telegramm
                </Link>
                <Link
                  className="nav-link"
                  to={"mailto:ashimka2010@yandex.ru"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
