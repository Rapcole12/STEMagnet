

const ProfileSettup = () => ({
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
    gender: '',
    age: '',
    degree: '',
    experience: ''
  });

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
      <form onSubmit={handleSubmit}>
      // step one
        <div className={'form-step ${currentStep === 1 ? 'form-step-active' : ''}'}>
        <label htmlFor="gender">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleInputChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
        </select>

        

        <label htmlFor="age">Age</label>
        <input 
            type="number" 
            name="age" 
            value={formData.age} 
            onChange={handleInputChange}
            placeholder="Age"
        />
      </form>

    );
  }
  export default ProfileSettup;  