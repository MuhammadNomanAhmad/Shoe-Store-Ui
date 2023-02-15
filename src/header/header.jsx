import React from "react";
import "./header.css";
import shoeImg from "../assets/mbr-figure.jpg";

const Header = () => {
  return (
    <>
      <section className="header" id="header">
        <div className="bg-color position-relative min-vh-100  ">
          <nav class="navbar navbar-expand-lg navbar-light pt-5 ">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Shoe store
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Watch ideo
                    </a>
                  </li>

                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Blocks
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown2"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Demo Pages
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>

                  <div className="d-flex justify-content-center">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span>
                          <i class="bi bi-twitter"></i>
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span>
                          <i class="bi bi-facebook"></i>
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span>
                          <i class="bi bi-instagram"></i>
                        </span>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </nav>

          <div className="body min-vh-100 min-vw-100 d-flex align-items-center justify-content-center position-absolute ">
            <div className="container">
              <div className="row justify-content-center  py-5">
                <div className="col-md-5">
                  <figure>
                    <img
                      src={shoeImg}
                      alt="Img not found"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="col-md-5 py-3">
                  <p>
                    <strong>LOREM ISPUM</strong> DOLOR SIT AMET CONSECTETUR
                  </p>
                  <h1>New sports collection already on sale</h1>
                  <div className="btn-box">
                    <div className="btn ">
                      <a href="#">Start Shopping</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
