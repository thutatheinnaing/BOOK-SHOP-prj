import "../components/Navbar.css";
import logo from "../assets/img for web/logo1.png";
import search_icon from "../assets/img for web/icons8-search-64.png";


const Navbar = () => {
  return (
    <section className="main">
    <nav>
       <a class="logo">
        <img src={logo} alt="logo1"/>
       </a>
       <input className="menu-button" type="checkbox" id="menu-button"/>
       <label className="menu-icon" for="menu-button">
       <span className="nav.icon"></span>
       </label>
      <ul class="menu">
        <li><a href="#" className="active">home</a></li>
        <li><a href="#" >Shop</a></li>
        <li><a href="#" >CATEGORY</a></li>
        <li><a href="#" >READ LIST</a></li>
        <li><a href="#" >Contact</a></li>
        <li><a href="#" >SIGN IN</a></li>
       </ul>
      <div class="container">
          <form action="https://www.google.com/search" method="get" class="search-bar">
            <input class="search-txt" type="text" placeholder="Search..." name="q"/>
            <button type="submit"><img src={search_icon} alt="search_icon"/></button>
          </form>
      </div>
    </nav>
    </section>
  )
}

export default Navbar;