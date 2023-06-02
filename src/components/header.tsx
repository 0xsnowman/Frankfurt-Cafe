import React, { useState, useRef } from "react";

import { scrollTo } from "../utils";

// components
import Container from "./container";

// images
import Logo from "../assets/images/logo.svg";
//import LogoV2 from "../assets/images/logo_red.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenCommunity, setIsOpenCommunity] = useState(false);

  const mobileAboutMenu = useRef<HTMLHeadingElement>(null);
  const mobileCommunityMenu = useRef<HTMLHeadingElement>(null);

  return (
    <div className="component-header">
      <Container className="component-header-container">
        <img className="component-header__logo" src={Logo} alt="logo" />
        <p className="component-header__logo__title">The Holy Cross Brewing Society</p>
        <div
          className={[
            "component-header__nav-mobile-btn",
            isOpen ? "active" : ""
          ].join(" ")}
          onClick={() => {
            setIsOpen(!isOpen);
            setIsOpenAbout(false);
            setIsOpenCommunity(false);
          }}
        >
          <span className="component-header__nav-mobile-btn__bar" />
          <span className="component-header__nav-mobile-btn__bar" />
          <span className="component-header__nav-mobile-btn__bar" />
        </div>
        <div
          className="component-header__nav-mobile"
          style={{ bottom: isOpen ? "0%" : "100%" }}
        >
          <div className="component-header__nav-mobile__link">
            <div
              className="component-header__nav-mobile__link__text"
              onClick={() => {
                setIsOpenAbout(!isOpenAbout);
              }}
            >
              <div className="component-header__nav-mobile__link__text__text">
                ABOUT US
              </div>
              <div
                className="component-header__nav-mobile__link__text__dropdown"
                style={{
                  transform: isOpenAbout ? "rotate(180deg)" : "rotate(0deg)"
                }}
              ></div>
            </div>
            <div
              className="component-header__nav-mobile__link__menu"
              style={{
                maxHeight: isOpenAbout
                  ? mobileAboutMenu.current
                    ? mobileAboutMenu.current.scrollHeight
                    : 0
                  : "0px"
              }}
              ref={mobileAboutMenu}
            >
              <div
                className="component-header__nav-mobile__link__menu__item"
                onClick={() => {
                  setIsOpen(false);
                  scrollTo({
                    id: "section-2"
                  });
                }}
              >
                ARCHETYPICAL NINJA
              </div>
              <div
                className="component-header__nav-mobile__link__menu__item"
                onClick={() => {
                  setIsOpen(false);
                  scrollTo({
                    id: "section-3"
                  });
                }}
              >
                ART OF STEALTH
              </div>
              <div
                className="component-header__nav-mobile__link__menu__item"
                onClick={() => {
                  setIsOpen(false);
                  scrollTo({
                    id: "section-4"
                  });
                }}
              >
                TEAM
              </div>
              <div
                className="component-header__nav-mobile__link__menu__item"
                onClick={() => {
                  setIsOpen(false);
                  scrollTo({
                    id: "section-5"
                  });
                }}
              >
                TOKENOMICS
              </div>
              <div
                className="component-header__nav-mobile__link__menu__item"
                onClick={() => {
                  setIsOpen(false);
                  scrollTo({
                    id: "section-6"
                  });
                }}
              >
                ROADMAP
              </div>
              <div
                className="component-header__nav-mobile__link__menu__item"
                onClick={() => {
                  setIsOpen(false);
                  scrollTo({
                    id: "section-7"
                  });
                }}
              >
                HOW TO BUY
              </div>
              <div
                className="component-header__nav-mobile__link__menu__item"
                onClick={() => {
                  setIsOpen(false);
                  scrollTo({
                    id: "section-9"
                  });
                }}
              >
                FAQ
              </div>
            </div>
          </div>
          <div className="component-header__nav-mobile__link">
            <div
              className="component-header__nav-mobile__link__text"
              onClick={() => {
                setIsOpenCommunity(!isOpenCommunity);
              }}
            >
              <div className="component-header__nav-mobile__link__text__text">
                FIND US
              </div>
              <div
                className="component-header__nav-mobile__link__text__dropdown"
                style={{
                  transform: isOpenCommunity ? "rotate(180deg)" : "rotate(0deg)"
                }}
              ></div>
            </div>
            <div
              className="component-header__nav-mobile__link__menu"
              style={{
                maxHeight: isOpenCommunity
                  ? mobileCommunityMenu.current
                    ? mobileCommunityMenu.current.scrollHeight
                    : 0
                  : "0px"
              }}
              ref={mobileCommunityMenu}
            >
              <a
                className="component-header__nav-mobile__link__menu__item"
                href="https://telegram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TELEGRAM
              </a>
              <a
                className="component-header__nav-mobile__link__menu__item"
                href="https://the-holy-cross-brewing-society.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ANNOUNCEMENTS
              </a>
              <a
                className="component-header__nav-mobile__link__menu__item"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TWITTER
              </a>
              <a
                className="component-header__nav-mobile__link__menu__item"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM
              </a>
              <a
                className="component-header__nav-mobile__link__menu__item"
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                MEDIUM
              </a>
            </div>
          </div>
        </div>
        <div className="component-header__nav">
          <div className="component-header__nav__link">
            <div className="component-header__nav__link__text">ABOUT US</div>
            <div className="component-header__nav__link__dropdown"></div>
            <div className="component-header__nav__link__menu">
              <div
                className="component-header__nav__link__menu__item"
                onClick={() => {
                  scrollTo({
                    id: "section-1"
                  });
                }}
              >
                CAFE INTRODUCTION
              </div>
              <div
                className="component-header__nav__link__menu__item"
                onClick={() => {
                  scrollTo({
                    id: "section-2"
                  });
                }}
              >
                PRODUCTS
              </div>
              <div
                className="component-header__nav__link__menu__item"
                onClick={() => {
                  scrollTo({
                    id: "section-3"
                  });
                }}
              >
                TEAM
              </div>
              <div
                className="component-header__nav__link__menu__item"
                onClick={() => {
                  scrollTo({
                    id: "section-4"
                  });
                }}
              >
                FAQ
              </div>
            </div>
          </div>
          <div className="component-header__nav__link">
            <div className="component-header__nav__link__text">FIND US</div>
            <div className="component-header__nav__link__dropdown"></div>
            <div className="component-header__nav__link__menu">
              <a
                className="component-header__nav__link__menu__item"
                href="https://#"
                target="_blank"
                rel="noopener noreferrer"
              >
                TELEGRAM
              </a>
              <a
                className="component-header__nav__link__menu__item"
                href="https://#"
                target="_blank"
                rel="noopener noreferrer"
              >
                TWITTER
              </a>
              <a
                className="component-header__nav__link__menu__item"
                href="https://#"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM
              </a>
              <a
                className="component-header__nav__link__menu__item"
                href="https://#"
                target="_blank"
                rel="noopener noreferrer"
              >
                MEDIUM
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
