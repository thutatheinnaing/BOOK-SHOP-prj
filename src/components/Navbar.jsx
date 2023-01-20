import React from 'react';
import "../components/Navbar.css";
import logo from "../components/assets//img for web/logo1.png";
import search_icon from "../components/assets/img for web/icons8-search-64.png";


const Navbar = () => {
  return (
  <body>
    <section class="main">
    <nav>
       <a href="home_page.html" class="logo">
        <img src={logo} alt="logo1"/>
       </a>
       <input class="menu-button" type="checkbox" id="menu-button"/>
       <label class="menu-icon" for="menu-button">
       <span class="nav.icon"></span>
       </label>
      <ul class="menu">
        <li><a href="#" class="active">home</a></li>
        <li><a href="#" >Shop</a></li>
        <li><a href="#" >CATEGORY</a></li>
        <li><a href="#" >READ LIST</a></li>
        <li><a href="#" >Contact</a></li>
        <li><a href="#">SIGN IN</a></li>
       </ul>
      <div class="container">
          <form action="https://www.google.com/search" method="get" class="search-bar">
            <input class="search-txt" type="text" placeholder="Search..." name="q"/>
            <button type="submit"><img src={search_icon} alt="search_icon"/></button>
          </form>
      </div>
    </nav>
    </section>
  </body>
  )
}

export default Navbar