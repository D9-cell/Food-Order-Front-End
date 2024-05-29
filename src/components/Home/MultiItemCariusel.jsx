import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';
import { TopMeal } from './TopMeal';


function MultiItemCariusel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay:true,
    autoplayspeed:1500,
    arrows:false
  };
  return (
    <div>
      <Slider {...settings}>
        {TopMeal.map((item) => (
          <CarouselItem 
          image={item.image} 
          title={item.title} />
        ))}
      </Slider>
    </div>
  )
}

export default MultiItemCariusel