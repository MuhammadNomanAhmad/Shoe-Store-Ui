import React from "react";
import "./getInTouch.css";

const GetInTouch = () => {
  return (
    <>
      <section className="getInTouch" id="getInTouch">
        <div className="container">
          <div className="row py-5 gy-5 mb-4">
            <div className="col-lg-6 ">
              <p>GET IN TOUCH WITH US AND WE CAN HELP YOU</p>
              <h2>Come to us or ask a question right now</h2>
              <div class="row g-3">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" Your Name*"
                    aria-label="First name"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Last Name"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div class="row g-3">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" Your Email"
                    aria-label="First name"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Phone "
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  style={{ height: "80px" }}
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Message</label>
              </div>

              <div className="getInTouch-btn">
                <a href="#">Send Message</a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="map-box">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13613.092875233353!2d74.30095016956327!3d31.46166954588164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919014baaaaaaab%3A0x91b35c67d371ac83!2sTownship%20Market!5e0!3m2!1sen!2s!4v1676364262441!5m2!1sen!2s"
                  className="w-100 "
                  style={{ height: "400px" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
