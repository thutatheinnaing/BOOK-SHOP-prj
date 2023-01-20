import React from 'react';
import "../components/Contents.css"
import copy from "../components/assets/img for web/icon5.png";
import Print from "../components/assets/img for web/icon7.png";
import Read from "../components/assets/img for web/icon9.png";
import students from "../components/assets/img for web/student.png";

const content = () => {
  return (
    <div>
        <div class="header-content">
      <div class="header-text">
        <h1>There Is No Friend As
          <span>Loyal</span> As A <span>Book</span>.</h1>
        <p>
          Megan Miranda: The bestselling author of All the Missing Girls, 
          Megan Miranda writes thrillers that keep you wondering what will happen next—all the way up to the last-minute plot twist.
          Hedictable, and perfect for fans of domestic thrillers looking for a contemporary angle.
           if you like crossover appeal or if you’re a diehard Megan Miranda fan.
        </p>
        <a href="#" class="header-button">PURCHASE</a>
      </div>
      <div class="header-img">
         <img src={students} alt="student" />
      </div>
    </div>


  <section class="about">
   <div class="about-heading">
     <h2>ABOUT BOOK</h2>
     <p>Miranda also writes YA fiction, so you’ll have plenty of material to read if you like crossover appeal or if you’re a diehard Megan Miranda fan.</p>
     <a href="#">Read more</a>
   </div>

   <div class="box-container">
     <div class="box">
     <img src={copy} alt="copy" />
      <font>Well Organized</font>
      <p>Miranda also writes YA fiction, so you’ll have plenty of material to read if you like crossover appeal or if you’re a diehard Megan Miranda fan.</p>
      <a href="#">Read more</a>
     </div>
     
     <div class="box">
     <img src={Read} alt="read" />
      <font>Read online</font>
      <p>Miranda also writes YA fiction, so you’ll have plenty of material to read if you like crossover appeal or if you’re a diehard Megan Miranda fan.</p>
      <a href="#">Read more</a>
     </div>

     <div class="box">
     <img src={Print} alt="print" />
      <font>Print</font>
      <p>Miranda also writes YA fiction, so you’ll have plenty of material to read if you like crossover appeal or if you’re a diehard Megan Miranda fan.</p>
      <a href="#">Read more</a>
     </div>
   </div>
  </section>

  
  <section class="contact">
    <h3>Subscribe now or u gay</h3>
    <div class="contact-input">
      <input type="email" placeholder="ares69@gmail.com"/>
      <a href="#">Continue</a>
    </div>
  </section>
</div>
  )
}

export default content