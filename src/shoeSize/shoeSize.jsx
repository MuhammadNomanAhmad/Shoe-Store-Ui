import React from "react";
import "./shoeSize.css";
import employerimg1 from "../assets/face8.jpg";
import employerimg2 from "../assets/face6.jpg";
import employerimg3 from "../assets/face7.jpg";
const ShoeSize = () => {
  return (
    <>
      <section className="shoeSize" id="shoeSize">
        <div className="container">
          <div className="row py-5">
            <div className="col text-center text-white">
              <p>Use the table below to determine your size</p>
              <h2>Don't know your size?</h2>
            </div>
          </div>
        </div>

        <div className="bgImage w-100 ">
          <div className="container">
            <div className="row">
              <div className="col py-5">
                <h4>Men's shoes</h4>
              </div>
            </div>
            <div className="row">
              <div className="col overflow-auto ">
                <table class="table ">
                  <thead>
                    <tr>
                      <th scope="col">cm</th>
                      <th scope="col">23,5</th>
                      <th scope="col">24,4</th>
                      <th scope="col">25,4</th>
                      <th scope="col">25</th>
                      <th scope="col">27</th>
                      <th scope="col">27,9</th>
                      <th scope="col">28,6</th>
                      <th scope="col">29,4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>EU</td>
                      <td>39</td>
                      <td>40</td>
                      <td>39.7</td>
                      <td>40.5</td>
                      <td>39.1</td>
                      <td>40.6</td>
                      <td>39.7</td>
                      <td>40.9</td>
                    </tr>

                    <tr>
                      <td>UK</td>

                      <td>39</td>
                      <td>40</td>
                      <td>39.7</td>
                      <td>40.5</td>
                      <td>39.1</td>
                      <td>40.6</td>
                      <td>39.7</td>
                      <td>40.9</td>
                    </tr>
                    <tr>
                      <td>USA</td>
                      <td>39</td>
                      <td>40</td>
                      <td>39.7</td>
                      <td>40.5</td>
                      <td>39.1</td>
                      <td>40.6</td>
                      <td>39.7</td>
                      <td>40.9</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="bgImage-womenshow  ">
          <div className="container">
            <div className="row">
              <div className="col py-5">
                <h4>Women shoes</h4>
              </div>
            </div>
            <div className="row">
              <div className="col overflow-auto ">
                <table class="table ">
                  <thead>
                    <tr>
                      <th scope="col">cm</th>
                      <th scope="col">23,5</th>
                      <th scope="col">24,4</th>
                      <th scope="col">25,4</th>
                      <th scope="col">25</th>
                      <th scope="col">27</th>
                      <th scope="col">27,9</th>
                      <th scope="col">28,6</th>
                      <th scope="col">29,4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>EU</td>
                      <td>39</td>
                      <td>40</td>
                      <td>39.7</td>
                      <td>40.5</td>
                      <td>39.1</td>
                      <td>40.6</td>
                      <td>39.7</td>
                      <td>40.9</td>
                    </tr>

                    <tr>
                      <td>UK</td>

                      <td>39</td>
                      <td>40</td>
                      <td>39.7</td>
                      <td>40.5</td>
                      <td>39.1</td>
                      <td>40.6</td>
                      <td>39.7</td>
                      <td>40.9</td>
                    </tr>
                    <tr>
                      <td>USA</td>
                      <td>39</td>
                      <td>40</td>
                      <td>39.7</td>
                      <td>40.5</td>
                      <td>39.1</td>
                      <td>40.6</td>
                      <td>39.7</td>
                      <td>40.9</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-center pt-3 pb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                deleniti, rerum fugiat fugit magnam, ipsa id omnis iste animi
                maiores ratione ullam, temporibus suscipit. Dolore unde, tenetur
                recusandae odit. Magni!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="faq" id="faq">
        <div className="container">
          <div className="row pt-5 py-3 ">
            <div className="col text-center">
              <h2>Still in doubt? Come and our team will help You</h2>
              <p>Lorem Ipsum Dolor Sit Amet</p>
            </div>
          </div>
          <div className="row gy-5">
            <div className="col-lg-3 col-md-6 ">
              <div className="faq-box">
                <figure className="position-relative employeImg">
                  <img
                    src={employerimg1}
                    alt="img not found"
                    className="img-fluid"
                  />
                  <div className="d-flex justify-content-center ">
                    <div className="socialLinks-box position-absolute">
                      <a href="#">
                        <span>
                          <i class="bi bi-facebook"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="bi bi-twitter"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="bi bi-instagram"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="bi bi-youtube"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </figure>
                <p className="employeName">
                  <strong>John Smith</strong>
                </p>
                <span className="employePost">Sales Manager</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis, pariatur.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="faq-box">
                <figure className="position-relative employeImg">
                  <img
                    src={employerimg2}
                    alt="img not found"
                    className="img-fluid"
                  />
                  <div className="d-flex justify-content-center ">
                    <div className="socialLinks-box position-absolute">
                      <a href="#">
                        <span>
                          <i class="bi bi-facebook"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="bi bi-twitter"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="bi bi-instagram"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="bi bi-youtube"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </figure>
                <p className="employeName">
                  <strong>Amanda Adams</strong>
                </p>
                <span className="employePost">Purchasing Officer</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis, pariatur.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="faq-box">
                <figure className="position-relative employeImg">
                  <img
                    src={employerimg3}
                    alt="img not found"
                    className="img-fluid"
                  />
                  <div className="d-flex justify-content-center ">
                    <div className="socialLinks-box position-absolute">
                      <a href="#">
                        <span>
                          <i class="bi bi-facebook"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="bi bi-twitter"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="bi bi-instagram"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="bi bi-youtube"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </figure>
                <p className="employeName">
                  <strong>John Smith</strong>
                </p>
                <span className="employePost">Service Advicer</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis, pariatur.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="faq-box">
                <figure className="position-relative employeImg">
                  <img
                    src={employerimg1}
                    alt="img not found"
                    className="img-fluid"
                  />
                  <div className="d-flex justify-content-center ">
                    <div className="socialLinks-box position-absolute">
                      <a href="#">
                        <span>
                          <i class="bi bi-facebook"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="bi bi-twitter"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="bi bi-instagram"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="bi bi-youtube"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </figure>
                <p className="employeName">
                  <strong>John Smith</strong>
                </p>
                <span className="employePost">Sales Manager</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis, pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoeSize;
