import React, { useState } from "react";

const Form = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailValidate, setemailValidate] = useState(false);
    const [passwordValidate, setpasswordValidate] = useState(false);
    const [confirmPasswordValidate, setconfirmPasswordValidate] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(emailValidate && passwordValidate && confirmPasswordValidate){
            alert("Successfully");
            e.target.reset();
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setemailValidate(false);
            setpasswordValidate(false);
            setconfirmPasswordValidate(false);
        }
        else{
            alert("Can't submit");
        }
    };

    const validateEmail = (value)=> {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmail(value);
        setemailValidate(emailRegex.test(value));
    };

    const validatePassword = (value)=> {
        setPassword(value);
        setpasswordValidate(value.length >= 8);
    };

    const validateconfirmPassword = (value) => {
        setConfirmPassword(value);
        setconfirmPasswordValidate(value === password);
    };

    return (
        <form onSubmit = {handleSubmit}>

            <label htmlFor="email">Email :</label>
            <input 
            style={{
                border: emailValidate ? "2px solid green" : "2px solid #fd5d63",
                marginBottom: emailValidate ? "20px" : "0px",
              }}type="text" name="email" onChange={(e) => validateEmail(e.target.value)}
            value = {email} />;
            {!emailValidate && (
            <p>Email is required and must be in a valid format</p>
            )}


       <label htmlFor="password">Password:</label>
      <input
        style={{
          border: passwordValidate ? "2px solid green" : "2px solid #fd5d63",
          marginBottom: passwordValidate ? "20px" : "0px",
        }}
        type="password"
        onChange={(e) => validatePassword(e.target.value)}
        name="password"
        value={password}
      />
      {!passwordValidate && <p>Password must be at least 8 characters long</p>}


      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        style={{
          border: confirmPasswordValidate ? "2px solid green" : "2px solid #fd5d63",
          marginBottom: confirmPasswordValidate ? "20px" : "0px",
        }}
        type="password"
        onChange={(e) => validateconfirmPassword(e.target.value)}
        name="confirmPassword"
        value={confirmPassword}
      />
      {!confirmPasswordValidate && <p>Passwords do not match</p>}

      <button className="btn" type="submit">
        SignUp
      </button>

        </form>
    )

}

export default Form;