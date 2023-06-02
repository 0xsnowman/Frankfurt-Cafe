import React from "react";
// import Lottie from "react-lottie";

// components
import Container from "../components/container";
import Header from "../components/header";
import Footer from "../components/footer";
// import VideoPlayer from "../components/video-player";

// images
import ThirdSectionImage from "../assets/images/image_2.webp";

import CafeImage1 from "../assets/images/cafe/1.jpg";
import CafeImage2 from "../assets/images/cafe/2.jpg";
import CafeImage3 from "../assets/images/cafe/3.jpg";
import CafeImage4 from "../assets/images/cafe/4.jpg";
import CafeImage5 from "../assets/images/cafe/5.jpg";

import ClockImage from "../assets/images/clock.svg";

import MainCaption from "../assets/images/caption-image.png";
import SubCaption from "../assets/images/sub-caption.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// animations
// import * as animationData from "../assets/animations/top.json";
import GMap from "../components/gmap";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  // const animationOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <div className="page-home">
      <Header />
      {/* section-1 start */}
      <div className="page-home__section bg-1 bg-mountain" id="section-1">
        <Container className="page-home__section-1">
          <div className="page-home__section-1__lottie">
            <img src={MainCaption} alt="main" />
          </div>
          <div className="page-home__section-1__title">
            The Holy Cross Brewing Society
          </div>
          <div className="page-home__section-1__subtitle">
            Cafe in New York Open today until 7:00 PM
          </div>
          <div className="page-home__section-1__btns">
            <a
              className="page-home__section-1__btns__btn-left"
              href="https://#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact US
            </a>
          </div>
        </Container>
        <div id="blossom_container"></div>
      </div>
      {/* section-1 end */}
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all 1s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="page-home__section-1__carousel__image">
          <img src={CafeImage1} alt="cafe" />
        </div>
        <div className="page-home__section-1__carousel__image">
          <img src={CafeImage2} alt="cafe" />
        </div>
        <div className="page-home__section-1__carousel__image">
          <img src={CafeImage3} alt="cafe" />
        </div>
        <div className="page-home__section-1__carousel__image">
          <img src={CafeImage4} alt="cafe" />
        </div>
        <div className="page-home__section-1__carousel__image">
          <img src={CafeImage5} alt="cafe" />
        </div>
      </Carousel>

      {/* section-3 start */}
      <div className="page-home__section bg-1" id="section-3">
        <Container className="page-home__section-3">
          <div className="page-home__section-3__img">
            <img src={SubCaption} alt="section-3-img" />
          </div>
          <div className="page-home__section-3__text">
            <div className="page-home__section-3__text__title">
              THE BEST SERVICE
            </div>
            <div className="page-home__section-3__text__subtitle">
              Satisfied Customers
            </div>
            <br />
            <br />
            <div className="page-home__section-3__text__paragraph">
              Delicious coffee from the most exotic countries and a wide range
              of drinks and desserts - that's all about us! Come to The Holy
              Cross Brewing Society and see for yourself. Wir warten auf Sie :)
            </div>
            <div className="page-home__section-3__img-mobile">
              <img src={ThirdSectionImage} alt="section-3-img-mobile" />
            </div>
          </div>
        </Container>
      </div>
      {/* section-3 end */}

      <div className="page-home__section-4">
        <p className="page-home__section-4__title">Find Us</p>
        <GMap
          isMarkerShown
          loadingElement={<div style={{ height: `100%` }}> </div>}
          containerElement={<div style={{ height: `400px` }}> </div>}
          mapElement={<div style={{ height: `100%` }}> </div>}
        />
      </div>

      <div className="bg-1" id="section-5">
        <Container className="page-home__section-5">
          <div className="page-home__section-5__title">
            <p>https://www.instagram.com/the_holy_cross_brewing_society/</p>
          </div>
        </Container>
      </div>

      <div className="page-home__section bg-1 bg-mountain" id="section-6">
        <Container className="page-home__section-6">
          <div className="page-home__section-6__title">Business Hours</div>
          <div className="page-home__section-6__subtitle">
            Cafe in New York Open today until 7:00 PM
          </div>
          <div className="page-home__section-6__blossom" id="blossom_container">
            <div
              className="page-home__section-6__blossom__address"
              id="address_container"
            >
              <div className="page-home__section-6__blossom__address__title">
                Address
              </div>
              <div className="page-home__section-6__blossom__address__btns">
                <a
                  className="page-home__section-6__blossom__address__btns__btn-left"
                  href="https://#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact US
                </a>
              </div>
              <div className="page-home__section-6__blossom__address__content">
                542 9th Avenue New York, NY 10018 USA
              </div>
            </div>
            <div
              className="page-home__section-6__blossom__business-hour"
              id="business-hour_container"
            >
              <img className="page-home__section-6__blossom__business-hour__clock" src={ClockImage} alt="clock"></img>
              <div className="page-home__section-6__blossom__business-hour__title">
                Business Hour
              </div>
              <div className="page-home__section-6__blossom__business-hour__btns">
                <div className="page-home__section-6__blossom__business-hour__btns__item">
                  <div className="page-home__section-6__blossom__business-hour__btns__item__weekday">Monday</div>
                  <div className="page-home__section-6__blossom__business-hour__btns__item__time">09:00 - 18:00</div>
                </div>
                <div className="page-home__section-6__blossom__business-hour__btns__item">
                  <div className="page-home__section-6__blossom__business-hour__btns__item__weekday">Tuesday</div>
                  <div className="page-home__section-6__blossom__business-hour__btns__item__time">09:00 - 18:00</div>
                </div>
                <div className="page-home__section-6__blossom__business-hour__btns__item">
                  <div className="page-home__section-6__blossom__business-hour__btns__item__weekday">Wednesday</div>
                  <div className="page-home__section-6__blossom__business-hour__btns__item__time">09:00 - 18:00</div>
                </div>
                <div className="page-home__section-6__blossom__business-hour__btns__item">
                  <div className="page-home__section-6__blossom__business-hour__btns__item__weekday">Thursday</div>
                  <div className="page-home__section-6__blossom__business-hour__btns__item__time">09:00 - 18:00</div>
                </div>
                <div className="page-home__section-6__blossom__business-hour__btns__item">
                  <div className="page-home__section-6__blossom__business-hour__btns__item__weekday">Friday</div>
                  <div className="page-home__section-6__blossom__business-hour__btns__item__time">09:00 - 18:00</div>
                </div>
                <div className="page-home__section-6__blossom__business-hour__btns__item">
                  <div className="page-home__section-6__blossom__business-hour__btns__item__weekday">Saturday</div>
                  <div className="page-home__section-6__blossom__business-hour__btns__item__time">10:00 - 18:00</div>
                </div>
                <div className="page-home__section-6__blossom__business-hour__btns__item">
                  <div className="page-home__section-6__blossom__business-hour__btns__item__weekday">Sunday</div>
                  <div className="page-home__section-6__blossom__business-hour__btns__item__time">10:00 - 18:00</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
