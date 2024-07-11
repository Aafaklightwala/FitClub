import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className="Footer-container" id="about">
    <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Address</h3>
            <a href="googlemaplink"><i class="fa fa-map-marker" aria-hidden="true"> Bopal, Ahemdabad</i></a>
          </div>
        <div className="box">
            <h3>Contact Us </h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <i className="fa">
                <a href="Mobile">+91 9558161507 </a></i>  
                <br></br>
                <i className="fa">
                <a href="Email">divyarajavat161@gmail.com</a></i>
            </div>
        <div className="box">
            <h3>Follow us</h3>
            <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                     />
                <div className="hero1">
                <h1>Reach us at</h1>
                 <div className="home__social-icon">
                 <a href="https://www.facebook.com/login.php"><i className="fab fa-facebook-f"> Facebook</i></a>
                 <a href="https://www.instagram.com/?hl=en"><i className="fab fa-instagram"> Instagram</i></a>
                 <a href="https://web.whatsapp.com/"><i className="fab fa-whatsapp"> Whatsapp</i></a>
                 <a href="https://www.google.com/maps/">
                <i className="fab fa-google"> Google Maps</i></a>
               </div>
            </div>
        </div> 
      </div>
    </section>
    </div>
    </>
  );
};

export default Footer;
