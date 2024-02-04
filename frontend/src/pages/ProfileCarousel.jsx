import React, { useState, useRef, useEffect } from 'react';

import Slider from 'react-slick';

import "../style/carousel.css";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import elijahpic from '../assets/elijahphoto.jpg';







const profiles = [

  { name: 'Alice', description: 'PROFILE ABOUT ME', image: elijahpic },

  { name: 'Bob', description: 'PROFILE ABOUT ME', image: elijahpic },

  { name: 'Charlie', description: 'PROFILE ABOUT ME', image: elijahpic },

];




const ProfileCarousel = () => {

const [currentIndex, setCurrentIndex] = useState(1);

const sliderRef = useRef(null);

useEffect(() => {

  sliderRef.current.innerSlider.list.style.padding = '0px';

}, []);




const settings = {

  dots: false,

  infinite: true,

  speed: 500,

  slidesToShow: 3,

  slidesToScroll: 1,

  centerMode: true,

  centerPadding: '0px',

  beforeChange: (current, next) => setCurrentIndex(next),

  initialSlide: 1,

  responsive: [

    {

      breakpoint: 1024,

      settings: {

        slidesToShow: 1,

        slidesToScroll: 1,

      }

    }

  ]

};




const goToSlide = (index) => {

  if (sliderRef.current) {

    sliderRef.current.slickGoTo(index); // Use slickGoTo to navigate to a particular slide index

  }

};




const next = () => {

  sliderRef.current.slickNext(); 

};

const previous = () => {

  sliderRef.current.slickPrev();

};




const handleConnect = (index) => {

  // Handle backend connection logic

  sliderRef.current.slickNext(); 

};




const handleReject = (index) => {

  sliderRef.current.slickNext(); 

};




const handleViewResume = (index) => {

  // Handle the view resume action

  console.log('View Resume clicked on:', profiles[index].name);

};




return (

  <div className="carousel-container">

    <button className="button-prev" onClick={previous}>Previous</button>

    <div className="carousel">

    <Slider ref={sliderRef} {...settings}>

  {profiles.map((profile, index) => (

    <div key={index} className={`profile-card ${index === currentIndex ? 'current' : ''}`}>

      <img src={profile.image} alt={profile.name} />

      <h2>{profile.name}</h2>

      <p>{profile.description}</p>

      {index === currentIndex && (

        <div className="buttons">

                {/* Your buttons for Connect/Reject here */}

              </div>

            )}

          </div>

        ))}

      </Slider>

      </div>

      {/* Action buttons */}

      <div className="action-buttons">

        <button onClick={handleConnect}>Connect</button>

        <button onClick={handleReject}>Reject</button>

        <button onClick={handleViewResume}>View Resume</button>

    </div>

    <button className="button-next" onClick={next}>Next</button>

  </div>

);

};




export default ProfileCarousel;