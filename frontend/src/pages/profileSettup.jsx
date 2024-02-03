import React, {useState } from 'react';
import Select from 'react-select';

function ProfileSettup = () => {


    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
    gender: '',
    age: '',
    major: '',
    experience: ''
  });
  const majorsOptions = [
    [
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
    ]
  ];


  const handleButtonClick = (value) => {
    setUserInfo({ ...userInfo, gender: value });
    setCurrentStep(currentStep + 1); // Move to the next step
  };

  // handles when a user clicks a value from any dropdown
  // \note: Some dropdowns may need user input while others are restricted to a set of values
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
   // goes to next section of profile setup 
  const nexStep = () => {
    setCurrentStep(currentStep + 1);
  };

    // goes to previous section of profile setup
    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    // handles when user finishes the pages we have set up
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const assignedPronouns = pronouns || (gender === 'Female' ? 'she/her' : gender === 'Male' ? 'he/him' : 'they/them');
        //handle sending data to server
    };
    


    return (
      <form onSubmit={handleSubmit} className="form-grid">

        {currentStep === 1 && (
            <div className=""gender-selection>
        <label htmlFor="gender">Gender</label>
            <button type="button" className="circle-btn" onClick={() => handleButtonClick('Female')}>Female</button>
            <button type="button" className="circle-btn" onClick={() => handleButtonClick('Male')}>Male</button>
            <button type="button" className="rectangle-btn" onClick={() => handleButtonClick('Other')}>Other</button>
          </div>
        )}
        

        {currentStep === 2 && (
          <div className="age-selection">
            <label htmlFor="age">Age</label>
            <input 
                type="number" 
                name="age" 
                value={formData.age} 
                onChange={handleInputChange}
                placeholder="Enter your age" 
            />
            <button type="button" onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
          </div>
        )}

        {currentStep === 3 && (
            <div className="major-selection">
            <label htmlFor="major">Major</label>
            <input 
                type="text" 
                name="major" 
                value={formData.major} 
                onChange={handleInputChange}
            />
          </div>
        )}
        {currentStep === 4 && (
            <div className="experience-selection">
            <label htmlFor="experience">Experience</label>
            <input type="text" name="experience" value={formData.experience} onChange={handleInputChange} />
          </div>
        )}
        {currentStep > 1 && currentStep < 6 && (
            <button type="button" onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
          )}
          {currentStep === 5 && (
            <button type="submit">Submit</button>
          )}
        />

        <label

    );
  }
  export default PageName;  