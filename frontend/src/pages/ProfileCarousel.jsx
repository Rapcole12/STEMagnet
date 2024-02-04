import React from 'react';

const profiles = [
  // ... Add previous, current, and next profile data here
];

const ProfileCarousel = () => {
  return (
    <div className="carousel">
      {profiles.map((profile, index) => (
        <div key={index} className={`profile-card ${profile.status}`}>
          <img src={profile.image} alt={profile.name} />
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          {profile.status === 'current' && (
            <div className="buttons">
              <button>Connect</button>
              <button>Reject</button>
              <button>View Resume</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProfileCarousel;
