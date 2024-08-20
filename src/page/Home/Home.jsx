import React from "react";
import home from "../../assets/images/home1.jpg";
import home2 from "../../assets/images/home2.jpg";
import { Button } from "antd";
import "./style.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
const Home = () => {
     return (
          <div className="graduation__home">
               Home
               <section className="home" id="home">
                    <img src={home} alt="home1" />
                    <div className="home__container graduation__container graduation__grid">
                         <div className="home__data">
                              <span className="home__data-subtitle">Discover your place</span>
                              <h1 className="home__data-title">
                                   Explore The <br /> Best Beautiful
                                   <br />
                                   Beaches
                              </h1>
                              <a href="#" className="button">
                                   Explore
                              </a>
                         </div>
                         <div className="home__social">
                              <FaFacebook className="home__social-link" />
                              <FaInstagram className="home__social-link" />
                              <FaTwitter className="home__social-link" />
                         </div>
                         <div className="home__info">
                              <div>
                                   <span className="home__info-title">5 best places to visit</span>
                                   <Button className="flex gap-2 items-center rounded-[6px]" icon={<FaArrowRight />}>
                                        More
                                   </Button>
                              </div>
                         </div>
                         <div className="home__info-overlay">
                              <img alt="home2" src={home2} />
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Home;
