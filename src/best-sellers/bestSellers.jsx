import React from "react";
import "./bestSellers.css";
import sellerImg1 from "../assets/mbr-figure.jpg";
import sellerImg2 from "../assets/seller-1.jpg";
import sellerImg3 from "../assets/seller-2.jpg";

const BestSellers = () => {
  return (
    <>
      <section className="sellers" id="sellers">
        <div className="container">
          <div className="row py-4">
            <div className="col">
              <span className="heading">BEST SELLERS</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <figure className="seller-fig">
                <img src={sellerImg1} alt="" className="img-fluid" />
              </figure>
              <div className="bg-clr px-3  content-box ">
                <h6>Brown Glasses</h6>
                <p>$63</p>
              </div>
            </div>
            <div className="col-md-4">
              <figure className="seller-fig">
                <img src={sellerImg2} alt="" className="img-fluid" />
              </figure>
              <div className="bg-clr px-3  content-box ">
                <h6>Men's Shoes</h6>
                <p>$88</p>
              </div>
            </div>
            <div className=" col-md-4">
              <div className="image-box">
                <figure className="seller-fig ">
                  <img src={sellerImg3} alt="" className="img-fluid" />
                </figure>
                <div className="sale-btn">
                  <a href="#">Sale</a>
                </div>
              </div>

              <div className="bg-clr px-3  content-box ">
                <h6>Blue BackPack</h6>
                <p>
                  $13{" "}
                  <span style={{ textDecorationLine: "line-through" }}>
                    $24
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSellers;
