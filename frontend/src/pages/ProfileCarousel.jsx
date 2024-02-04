import React from 'react';
import '../style/profileCarousel.css'; 

const profileData = [
    { name: 'Alice', description: 'Previous profile', image: 'alice.jpg', status: 'previous' },
    { name: 'Bob', description: 'Current profile', image: 'bob.jpg', status: 'current' },
    { name: 'Charlie', description: 'Next profile', image: 'charlie.jpg', status: 'next' },
];

const ProfileCarousel = () => {
    const [profiles, setProfiles] = useState(profileData);
  
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length); // Loop back to the start if at the end
      };
  
      const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + profiles.length) % profiles.length); // Loop to the end if at the start
      };
  
    // ... The rest of the component remains the same
  
    return (
        <div className="carousel">
          <button onClick={handlePrevious}>Previous</button>
          {profiles.map((profile, index) => (
            <div key={index} className={`profile-card ${index === currentIndex ? 'current' : ''}`}>
              <img src={profile.image} alt={profile.name} />
              <h2>{profile.name}</h2>
              <p>{profile.description}</p>
              {index === currentIndex && (
                <div className="buttons">
                  <button>Connect</button>
                  <button>Reject</button>
                  <button>View Resume</button>
                </div>
              )}
            </div>
          ))}
          <button onClick={handleNext}>Next</button>
        </div>
      );
    };
    
    export default ProfileCarousel;