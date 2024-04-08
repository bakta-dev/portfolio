import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import Projets from '../data/dataProjets';

function MySlider() {

  return (
    <div className="divCarousel">
      <Carousel autoPlay interval={5000} infiniteLoop thumbWidth={120} showStatus={false} style={{ width: '30%' }}>
      {Projets.map((slide=>(
        <div key={slide.id}>
          <img src= {slide.image} alt={`projet${slide.id}`}/>
          <div className='overlay'>
          <h2 className='overlay_title'>{slide.title}</h2>
          <p className='overlay_description'>{slide.description}</p>
        </div></div>
      )))}
    </Carousel></div>
  );
}

export default MySlider;