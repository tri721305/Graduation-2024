import React from "react";
import home from "../../assets/images/home1.jpg";
import home2 from "../../assets/images/home2.jpg";
import { Button } from "antd";
import "./style.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import discover1 from "../../assets/images/discover1.jpg";
import discover2 from "../../assets/images/discover2.jpg";
import discover3 from "../../assets/images/discover3.jpg";
import discover4 from "../../assets/images/discover4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Home = () => {
     return (
          <div className="graduation__home">
               Home
               <section className="home" id="home">
                    <img src={home} alt="home1" className="home__img" />
                    <div className="home__container graduation__container graduation__grid">
                         <div className="home__data">
                              <span className="home__data-subtitle">Discover your place</span>
                              <h1 className="home__data-title">
                                   Explore The <br /> Best Beautiful
                                   <br />
                                   Beaches
                              </h1>
                              <button className="home__button">Explore</button>
                         </div>
                         <div className="home__social">
                              <FaFacebook className="home__social-link" />
                              <FaInstagram className="home__social-link" />
                              <FaTwitter className="home__social-link" />
                         </div>
                         <div className="home__info">
                              <div>
                                   <span className="home__info-title"> 4 best places to visit</span>
                                   <button className="!flex gap-1 items-center  home__button  home__info-button">
                                        More <FaArrowRight />
                                   </button>
                              </div>
                              <div className="home__info-overlay">
                                   <img alt="home2" src={home2} className="home__info-img" />
                              </div>
                         </div>
                    </div>
                    {/* <div className="home__container">abc</div> */}
               </section>
               <section className="about section" id="about">
                    <div
                         className="about__container 
                    graduation__grid
                    graduation__container"
                    >
                         <div className="about__data">
                              <h2 className="section__title about__title">
                                   More Information <br /> About The Best Beaches
                              </h2>
                              <p className="about__description">
                                   You can find the most beautiful and pleasant places at the best prices with special discounts, you choose
                                   the place we will guide you all the way to wait, get your place now.
                              </p>
                              <button className="home__button">Revese a place</button>
                         </div>
                         <div className="about__img">
                              <div className="about__img-overlay">
                                   <img className="about__img-one" src={about1} alt="about1" />
                              </div>
                              <div className="about__img-overlay">
                                   <img className="about__img-two" src={about2} alt="about2" />
                              </div>
                         </div>
                    </div>
               </section>
               {/* ================================== DISCOVER =============== */}
               <section className="discover section" id="discover">
                    <h2 className="section__title">
                         Discover the most <br /> attractive places
                    </h2>
                    <div className="discover__container graduation__container">
                         <div>
                              <Swiper
                                   // virtual
                                   navigation={true}
                                   modules={[Navigation]}
                                   spaceBetween={50}
                                   slidesPerView={3}
                                   rewind={true}
                                   onSlideChange={() => {
                                        console.log("change");
                                   }}
                                   onSwiper={(swiper) => {
                                        console.log("swiper");
                                   }}
                              >
                                   <SwiperSlide>
                                        <div className="discover__card">
                                             <img className="discover__img" src={discover1} alt="discover1" />
                                             <div className="discover__data">
                                                  <h2 className="discover__title"> Bali</h2>
                                                  <span className="discover__description">24 tours available</span>
                                             </div>
                                        </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                        <div className="discover__card">
                                             <img className="discover__img" src={discover1} alt="discover1" />
                                             <div className="discover__data">
                                                  <h2 className="discover__title"> Bali</h2>
                                                  <span className="discover__description">24 tours available</span>
                                             </div>
                                        </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                        <div className="discover__card">
                                             <img className="discover__img" src={discover1} alt="discover1" />
                                             <div className="discover__data">
                                                  <h2 className="discover__title"> Bali</h2>
                                                  <span className="discover__description">24 tours available</span>
                                             </div>
                                        </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                        <div className="discover__card">
                                             <img className="discover__img" src={discover1} alt="discover1" />
                                             <div className="discover__data">
                                                  <h2 className="discover__title"> Bali</h2>
                                                  <span className="discover__description">24 tours available</span>
                                             </div>
                                        </div>
                                   </SwiperSlide>
                              </Swiper>

                              {/* <div className="discover__card">
                                   <img className="discover__img" src={discover1} alt="discover1" />
                                   <div className="discover__data">
                                        <h2 className="discover__title"> Bali</h2>
                                        <span className="discover__description">24 tours available</span>
                                   </div>
                              </div> */}
                              {/* =========== 2 ======== */}
                              {/* <div className="discover__card">
                                   <img className="discover__img" src={discover2} alt="discover2" />
                                   <div className="discover__data">
                                        <h2 className="discover__title"> Bali</h2>
                                        <span className="discover__description">24 tours available</span>
                                   </div>
                              </div> */}
                              {/* =========== 3 ======== */}

                              {/* <div className="discover__card">
                                   <img className="discover__img" src={discover3} alt="discover1" />
                                   <div className="discover__data">
                                        <h2 className="discover__title"> Bali</h2>
                                        <span className="discover__description">24 tours available</span>
                                   </div>
                              </div> */}
                              {/* =========== 4 ======== */}

                              {/* <div className="discover__card">
                                   <img className="discover__img" src={discover4} alt="discover1" />
                                   <div className="discover__data">
                                        <h2 className="discover__title"> Bali</h2>
                                        <span className="discover__description">24 tours available</span>
                                   </div>
                              </div> */}
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Home;
