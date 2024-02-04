import React, { useState } from 'react';
import Nav_logged_in from "../components/Nav_logged_in";
import '../style/carousel.css'; // Ensure you have the updated styles
import elijah from '../assets/elijahphoto.jpg';
import pamanda from '../assets/pamanda.png';
import ptimcook from '../assets/ptimcook.png';
import pesteban from '../assets/pesteban.png';
import palice from '../assets/palice.png';


const profiles = [
  { name: 'Alice', description: 'Como estas', image: elijah },
  { name: 'Pamanda', description: 'I love to snuggle UwU', image: pamanda },
  { name: 'Tim Apple', description: 'Hey there!', image: ptimcook },
  { name: 'Alice', description: "Hi, I'm Alice and I love to code!", image: palice },
  { name: 'Esteban', description: "Hola! Me encantaria conocerte", image: pesteban },
];

const connectButtonImageUrl = 'https://media.istockphoto.com/id/1329322797/vector/opposite-magnets-white-black.jpg?s=612x612&w=0&k=20&c=yyDKgtRkOEGPki6-lDIBn-uQDUT65FSS-Dbp1yEMARQ=';
const rejectButtonImageUrl = '../assets/reject_icon.png';

const ProfileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState('');


  const nextProfile = () => {
    // Reset animation to ensure the next profile appears normally
    setAnimation('');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  

  const handleConnect = () => {
    setAnimation('throw-right');
    setTimeout(nextProfile, 500); // Match the duration of the CSS animation
  };

  const handleReject = () => {
    setAnimation('throw-left');
    setTimeout(nextProfile, 500); // Match the duration of the CSS animation
  };

  const handleViewResume = () => {
    // Implement view resume logic here
    console.log("View Resume clicked for:", profiles[currentIndex].name);
  };

  return (
    
    <>
      <div className="fixed top-0 w-full z-10">

        <Nav_logged_in/>
      </div>
      <div className="carousel-container">
        <div className="profile-card-container">
          <img src={rejectButtonImageUrl} alt="Reject" className="img profile-side reject-side" onClick={handleReject} />
          <div className={`profile-card ${animation}`}>
            <div className="profile-image-container">
              <img class="img " src={profiles[currentIndex].image} alt={profiles[currentIndex].name} />
              <div className="profile-description">
                <h2 class="h2">{profiles[currentIndex].name}</h2>
                <p class="p">{profiles[currentIndex].description}</p>
              </div>
            </div>
            <div className="view-resume" onClick={handleViewResume}>View Resume</div>
          </div>
          <img class="img" src={connectButtonImageUrl} alt="Connect" className="img profile-side connect-side" onClick={handleConnect} />
        </div>
      </div>
    </>
  );
};
  

export default ProfileCarousel;