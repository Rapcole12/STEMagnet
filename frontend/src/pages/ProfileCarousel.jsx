import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

const profiles = [
  { name: 'Alice', description: 'PROFILE ABOUT ME', image: elijahpic },
  { name: 'Bob', description: 'PROFILE ABOUT ME', image: elijahpic },
  { name: 'Charlie', description: 'PROFILE ABOUT ME', image: elijahpic },
  // Add more profiles as needed
];

const ProfileCarousel = () => {
  const [index, setIndex] = useState(1);

  const slideRenderer = ({ key, index }) => {
    const profileIndex = mod(index, profiles.length);
    const profile = profiles[profileIndex];
    const isCenter = index === this.state.index; // Adjust this logic based on your index state
    return (
      <div key={key} style={{ padding: 20, height: isCenter ? 300 : 250 }}>
        <img src={profile.image} alt={profile.name} style={{ width: '100%', height: '100%' }} />
        <h2>{profile.name}</h2>
        <p>{profile.description}</p>
        {/* Additional UI elements as needed */}
      </div>
    );
  };

  return (
    <div>
      <VirtualizeSwipeableViews
        slideRenderer={slideRenderer}
        index={index}
        onChangeIndex={(index) => setIndex(index)}
        enableMouseEvents
      />
      {/* Navigation and action buttons here */}
    </div>
  );
};

export default ProfileCarousel;