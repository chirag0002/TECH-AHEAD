import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Styling/Videos.css';


const Videos = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
         <div className="container">
        <Slider {...settings}>
          <div>
            <img alt="" src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img alt="" src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img alt="" src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img alt="" src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    )
}

export default Videos;
