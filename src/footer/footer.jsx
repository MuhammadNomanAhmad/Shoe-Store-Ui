import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="footer-bgclr">
        <div className="container">
          <div className="row py-5 gy-5 ">
            <div className="col-lg-4 text-white">
              <h2>Shoe Store</h2>
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Your Email*"
                    aria-label="First name"
                  />
                </div>
              </div>
              <div className="footerbtn-box">
                <a href="#" className="footer-btn">
                  Subscribe
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-white text-md-end text-center">
              <p className="text-md-end text-center">
                <strong>MOBIRISE</strong>
              </p>
              <p>Phone: +1 (0) 000 0000 001</p>
              <p>Email: yourmail@example.com</p>
              <p>Address:1234 Street Name City, AA 99999</p>

              <div className="footer-socialLinks ">
                <a href="#">
                  <span>
                    <i class="bi bi-twitter"></i>
                  </span>
                </a>
                <a href="#">
                  <span>
                    <i class="bi bi-facebook"></i>
                  </span>
                </a>
                <a href="#">
                  <span>
                    <i class="bi bi-youtube"></i>
                  </span>
                </a>
                <a href="#">
                  <span>
                    <i class="bi bi-instagram"></i>
                  </span>
                </a>
                <a href="#">
                  <span>
                    <i class="bi bi-linkedin"></i>
                  </span>
                </a>
                <a href="#">
                  <span>
                    <i class="bi bi-telegram"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-white text-md-end text-center">
              <p>
                <strong>RECENT NEWS</strong>
              </p>
              <p>About Us</p>
              <p>Services</p>
              <p>Get In Touch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
