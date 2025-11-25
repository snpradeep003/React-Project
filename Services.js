import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";

const ServicesSection = () => {
  const settings = {
    dots: true,          // small navigation dots
    infinite: true,      // loop infinitely
    speed: 500,          // transition speed
    slidesToShow: 3,     // number of slides visible at once
    slidesToScroll: 1,   // number of slides per scroll
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600, // mobile
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="services">
      <h2>Services</h2>
      <div className="services-gallery">
        <Slider {...settings}>
          <div>
            <img src={require("../../assets/service1.jpg")} alt="Service 1" />
          </div>
          <div>
            <img src={require("../../assets/service2.jpg")} alt="Service 2" />
          </div>
          <div>
            <img src={require("../../assets/service3.jpg")} alt="Service 3" />
          </div>
          <div>
            <img src={require("../../assets/service4.jpg")} alt="Service 4" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ServicesSection;
