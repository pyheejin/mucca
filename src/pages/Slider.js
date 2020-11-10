import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import img1 from './../media/1.jpeg';
import img2 from './../media/main-1.png';

export default class MultipleItems extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className='slider Container'>
        <div className='adoptable left'>
          <Slider {...settings}>
            <div>
              <img src={img1} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img2} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img1} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img2} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img1} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img2} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img1} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img2} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img1} width='100px' height='100px' alt="logo"></img>
            </div>
          </Slider>
          <h2 className='title'> Adoptable dogs </h2>
        </div>
        <div className='adoptable right'>
          <Slider {...settings}>
            <div>
              <img src={img1} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img2} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img1} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img2} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img1} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img2} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img1} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img2} width='100px' height='100px' alt="logo"></img>
            </div>
            <div>
              <img src={img1} width='100px' height='100px' alt="logo"></img>
            </div>
          </Slider>
          <h2 className='title'> Adoptable Cats </h2>
        </div>
      </div>
    );
  }
}