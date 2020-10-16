import React from 'react';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'
import './PortfolioWorks.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Item from "./Item";
import Slider from "react-slick";


const items = [
  {
      id: 1,
      img: `${carousel1}`,
  },
  {
      id: 2,
      img: `${carousel2}`,
  },
  {
      id: 3,
      img: `${carousel3}`,
  },
  {
      id: 4,
      img: `${carousel4}`,
  },
  {
      id: 5,
      img: `${carousel5}`,
  }
];
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1000, itemsToShow: 3 },
  { width: 1200, itemsToShow: 5 }
];


const PortfolioWorks = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 6000,
        cssEase: "linear"
      };
    
    return (
       
        <div className="portfolio-container" id="portfolio">
        <h2>Here are some of our <span style={{color:'#7AB259'}} >works</span></h2>
        <Slider {...settings}>
          <div>
            <img src = {carousel1} alt='1'/>
          </div>
          <div>
          <img src = {carousel2} alt='2'/>
          </div>
          <div>
          <img src = {carousel3} alt='3'/>
          </div>
          <div>
          <img src = {carousel4} alt='4'/>
          </div>
          <div>
          <img src = {carousel5} alt='5'/>
          </div>
        </Slider>
      </div>
    );
  };
export default PortfolioWorks;