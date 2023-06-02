import React from "react";

// import DiscordIcon from "../assets/images/discord.svg";
import TelegramIcon from "../assets/images/telegram.svg";
import TwitterIcon from "../assets/images/twitter.svg";
// import RedditIcon from '../assets/images/reddit.svg';
import GithubIcon from "../assets/images/github.svg";
import InstagramIcon from "../assets/images/instagram.svg";

const Footer = () => {
  return (
    <div className="component-footer">
      <div className="component-footer__section-1">
        <div className="component-footer__section-1__title">
          The Holy Cross Brewing Society
        </div>
        <br />
        <div className="component-footer__section-1__text">
          Delicious coffee from the most exotic countries and a wide range of
          drinks and desserts - that's all about us! Come to The Holy Cross
          Brewing Society and see for yourself. Wir warten auf Sie :)
        </div>
        <br />
        <br />
        <div className="component-footer__section-1__links">
          <a
            href="https://telegram.com"
            className="component-footer__section-1__links__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TelegramIcon} alt="social" width="20px" />
          </a>
          <a
            href="https://twitter.com"
            className="component-footer__section-1__links__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitterIcon} alt="social" width="20px" />
          </a>
          <a
            href="https://instagram.com"
            className="component-footer__section-1__links__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="social" width="20px" />
          </a>
          <a
            href="https://github.com"
            className="component-footer__section-1__links__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="social" width="20px" />
          </a>
        </div>
      </div>

      <div className="component-footer__divider"></div>

      <div className="component-footer__section-2">
        <div className="component-footer__section-2__btns">
          <a
            className="component-footer__section-2__btns__btn"
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
          <div className="component-footer__section-2__btns__btn">Ethereum</div>
        </div>
        <div className="component-footer__section-2__text">
          Copyright©The Holy Cross Brewing Society 2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
