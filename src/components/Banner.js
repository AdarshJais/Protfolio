import React from "react";
import { FaFacebookF } from "react-icons/fa";

const Banner = () => {
  const [state] = React.useState({
    title: "I am Adarsh Jaiswal",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit \
  Impedit aliquid quas voluptatibus",
    image: "https://i.imgur.com/Gvaow1t.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaFacebookF />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__button">
                  <a href="" className="btn btn-outline">
                    My Protfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
