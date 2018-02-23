import React from "react";

const SignupForm = props => {
    return(
        <form name="info" onSubmit={props.handleSubmit}>
          <label>First Name: <input type="text" name="firstName" onChange={props.handleChange} value={props.firstName}/></label>
          <br/>
          <label>Last Name: <input type="text" name="lastName" onChange={props.handleChange} value={props.lastName}/></label>
          <br/>
          <label>Email: <input type="email" name="email" onChange={props.handleChange} value={props.email}/></label>
          <br/>
          <label>Password: <input type="text" name="password" type="password" onChange={props.handleChange} value={props.password}/></label>
          <br/>
          <label>Password Confirmation: <input type="text" type="password" name="passwordConfirmation" onChange={props.handleChange} value={props.passwordConfirmation}/></label>
          <br/>
          <button>Submit</button>
        </form>
    );
}

export default SignupForm;
