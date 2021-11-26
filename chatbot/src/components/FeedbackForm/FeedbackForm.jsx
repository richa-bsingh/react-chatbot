import React, { useState } from "react";
import "./FeedbackForm.css"

function FeedbackForm() {
  const [inputs, setInputs] = useState({});
  const [isSuccessfullySubmitted,setIsSuccessfullySubmitted] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setIsSuccessfullySubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
        disabled={isSuccessfullySubmitted}
      />
      </label>
      <br/>
      <label>Enter the feedback:
        {/* <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        /> */}
        <textarea 
            name="feedback"
            value={inputs.feedback || ""} 
            onChange={handleChange}
            disabled={isSuccessfullySubmitted}
        />
        </label>
        <br/>
        <button className="btn btn-primary" type="submit" disabled={isSuccessfullySubmitted}>Submit</button>
        {isSuccessfullySubmitted && (
         <div className="success">Form submitted successfully!!</div>
        )}
    </form>
  )
}
export default FeedbackForm;