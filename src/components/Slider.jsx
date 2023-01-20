import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="slider-images">
              <img src="" />
            </div>
          </div>
        </div>
        </Slider>
      </div>
    );
  }
}