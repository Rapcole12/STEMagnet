
import React, {useState } from 'react';
import Select from 'react-select';
import '../style/profileSetup.css';

function ProfileSetup() {


    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
    gender: '',
    age: '',
    major: '',
    experience: '',
    customMajor: '',
    quote: '',
    aboutMe: '',
    mentorPreference: '',
  });
  const [selectedMajor, setSelectedMajor] = useState(null); // State for react-select

  const majorsOptions = [
        { value: 'Aerospace Engineering', label: 'Aerospace Engineering' },
        { value: 'Agricultural Engineering', label: 'Agricultural Engineering' },
        { value: 'Architecture', label: 'Architecture' },
        { value: 'Biochemistry', label: 'Biochemistry' },
        { value: 'Bioengineering and Biomedical Engineering', label: 'Bioengineering and Biomedical Engineering' },
        { value: 'Biological and Biomedical Sciences', label: 'Biological and Biomedical Sciences' },
        { value: 'Chemical Engineering', label: 'Chemical Engineering' },
        { value: 'Civil Engineering', label: 'Civil Engineering' },
        { value: 'Computer Engineering', label: 'Computer Engineering' },
        { value: 'Computer Science', label: 'Computer Science' },
        { value: 'Electrical Engineering', label: 'Electrical Engineering' },
        { value: 'Environmental Engineering', label: 'Environmental Engineering' },
        { value: 'Geological and Geophysical Engineering', label: 'Geological and Geophysical Engineering' },
        { value: 'Industrial Engineering', label: 'Industrial Engineering' },
        { value: 'Information Technology', label: 'Information Technology' },
        { value: 'Materials Engineering', label: 'Materials Engineering' },
        { value: 'Mathematics', label: 'Mathematics' },
        { value: 'Mechanical Engineering', label: 'Mechanical Engineering' },
        { value: 'Microbiology', label: 'Microbiology' },
        { value: 'Nuclear Engineering', label: 'Nuclear Engineering' },
        { value: 'Petroleum Engineering', label: 'Petroleum Engineering' },
        { value: 'Physics', label: 'Physics' },
        { value: 'Statistics', label: 'Statistics' },
        { value: 'Systems Engineering', label: 'Systems Engineering' },
        { value: 'Zoology', label: 'Zoology' },
        { value: 'Other', label: 'Other' },
    ];

  const handleButtonClick = (value) => {
    setFormData({ ...formData, gender: value });
    setCurrentStep(currentStep + 1); // Move to the next step
  };
  const handleGenderChange = selectedOption => {
    // Assuming gender is stored directly in formData
    setFormData({ ...formData, gender: selectedOption.value });
};
  // handles when a user clicks a value from any dropdown
  // \note: Some dropdowns may need user input while others are restricted to a set of values
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
   // goes to next section of profile setup 
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedMajor(selectedOption);
    setFormData({ ...formData, major: selectedOption ? selectedOption.value : '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Handle submission here
  };
    


  return (
    <div>
      <div className="header">
        <h1 className="header-text">Set up your Profile</h1>
      </div>
      <div className="form-container"> {/* Wrap your form in this div */}
        <form onSubmit={handleSubmit} className="form-grid">

        {currentStep === 1 && (
            <div className="input-group">
            <Select
              name="gender"
              value={majorsOptions.find(option => option.value === formData.gender)} // Ensure the value prop is correctly set
              onChange={handleGenderChange} // Use the new handler for react-select
              options={[
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
                { value: 'Other', label: 'Other' }
              ]}
              placeholder="Gender"
              className="gender-dropdown"
            />
            <Select
              name="mentorPreference"
              value={majorsOptions.find(option => option.value === formData.mentorPreference)} // Ensure the value prop is correctly set
              onChange={handleGenderChange} // Use the new handler for react-select
              options={[
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
                { value: 'No Preference', label: 'No Preference' }
              ]} 
              placeholder="Mentor Preference"
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Age"
              className="age-input"
              min="14"
              max="120"
            />
            <Select
              name="major"
              value={selectedMajor}
              onChange={handleSelectChange}
              options={majorsOptions}
              placeholder="Area of Study"
              className="major-dropdown"
            />
          </div>
      )}
        
        {currentStep === 2 && (
          <div className="experience-selection">
          <label htmlFor="experience">Experience</label>
            <select 
            id="text" 
            name="experience" 
            value={formData.experience} 
            onChange={handleInputChange} 
          >
            <option value="">Select Experience Level</option>
            <option value="High School">Still in High School</option>
            <option value="Undergraduate">Still in Undergraduate</option>
            <option value="Graduate Education">In Higher Education (Graduate)</option>
            <option value="New Graduate">New Graduate</option>
            <option value="1-5 Years">1-5 Years Experience</option>
            <option value="5+ Years">5+ Years Experience</option>
            <option value="No Experience">No Experience in Field</option>
          </select>
          
          </div>
        )}
        {currentStep === 3 && (
          <div className="quote-selection">
            <label htmlFor="quote">Favorite Quote</label>
            <input 
              type="text" 
              name="quote" 
              value={formData.quote} 
              onChange={handleInputChange} 
              
              maxLength="500" 
              placeholder="Enter a quote that resonates with you" />
          </div>
        )}

        {currentStep === 4 && (
          <div className="aboutMe-selection">
            <label htmlFor="aboutMe">About Me</label>
            <textarea 
              name="aboutMe" 
              value={formData.aboutMe} 
              onChange={handleInputChange} 
              maxLength="500" // Ensures the word limit
              placeholder="Tell others about yourself!"></textarea>
          </div>
        )}
       {currentStep > 1 && (
  <button type="button" onClick={() => setCurrentStep(currentStep - 1)} className="back-btn">Back</button>
)}
{currentStep < 4 && (
  <button type="button" onClick={() => setCurrentStep(currentStep + 1)} className="next-btn">Next</button>
)}

          {currentStep === 4 && (
            <button type="submit" className="submit-btn">Submit</button>
          )}

        </form>
        </div>
        </div>


    );
  }
  export default ProfileSetup;

