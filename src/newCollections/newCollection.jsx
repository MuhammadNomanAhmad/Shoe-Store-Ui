import React from "react";
import "./newCollection.css";
import itemImg1 from "../assets/mbr-figure.jpg";
import itemImg2 from "../assets/seller-1.jpg";
import itemImg3 from "../assets/seller-2.jpg";

const NewCollection = () => {
  return (
    <>
      <section className="collection" id="collection">
        <div className="container">
          <div className="row pt-5">
            <div className="col">
              <span className="heading">NEW COLLECTIONS</span>
            </div>
          </div>

          <div className="row pt-5 gy-5 mb-5">
            <div className="col-lg-6 ">
              <div className="fig-container ">
                <img src={itemImg1} alt="" className="img-fluid itemImg" />

                <div className="img-text  ">
                  <h3>Sport Collection</h3>
                  <div className="scText">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate sunt laboriosam libero rerum nobis totam
                      deserunt enim necessitatibus aut!
                    </p>
                    <div className="scBtn">
                      <a href="#">See Collection</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="fig-container ">
                <img src={itemImg2} alt="" className="img-fluid itemImg" />
                <div className="img-text ">
                  <h3>Casual Collection</h3>
                  <div className="scText">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate sunt laboriosam libero rerum nobis totam
                      deserunt enim necessitatibus aut!
                    </p>
                    <div className="scBtn">
                      <a href="#">See Collection</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="offer" id="offer">
        <div className="bg-Color">
          <div className="container py-5">
            <div className="row">
              <div className="col text-center">
                <h4>
                  If you buy two pairs of shoes, the third with 30% discount!!
                </h4>
                <p>THE OFFER IS LIMITED. HURRY UP TO PURCHASE!</p>
              </div>
            </div>
            <div className="row d-md-flex justify-content-md-center">
              <div className="col-md-2 col-6 text-center">
                <h1>00</h1>
                <hr />
                <p>Days</p>
              </div>
              <div className="col-md-2 col-6 text-center">
                <h1>00</h1>
                <hr />
                <p>Hours</p>
              </div>
              <div className="col-md-2 col-6 text-center">
                <h1>00</h1>
                <hr />
                <p>Minutes</p>
              </div>
              <div className="col-md-2 col-6 text-center">
                <h1>00</h1>
                <hr />
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewCollection;
