import React from 'react';
import "../components/sign_in.css";


const signin = () => {
  return (
    <div>
      <div class="hero">
    <div class="form-box">
        <div class="button-box">
            <div id="btn"></div>
            <button type="button" class="toggle-btn" onclick="login()">Log In</button>
            <button type="button" class="toggle-btn" onclick="register()">Register</button>
        </div>
        <div class="social-icons">
           
         </div>
         <form id="login" class="input-gp">
             <input type="text" class="input-field" placeholder="User Name" required/>
             <input type="text" class="input-field" placeholder="Enter Password" required/>
             <input type="checkbox" class="check-box"/><span>Remember Password?</span>
             <button type="submit" class="submit-btn">Log In</button>
        </form>
        <form id="register" class="input-gp">
            <input type="text" class="input-field" placeholder="User Name" required/>
            <input type="email" class="input-field" placeholder="Email Id" required/>
            <input type="text" class="input-field" placeholder="Enter Password" required/>
            <input type="checkbox" class="check-box"/><span>I agree to the terms & conditions</span>
            <button type="submit" class="submit-btn">Register</button>
       </form>
    </div>
 </div>
    </div>
  )
}

export default signin