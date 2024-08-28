import React, { useState, useEffect } from "react";
import home from "../../assets/images/home1.jpg";
import home2 from "../../assets/images/home2.jpg";
import { Button, Input } from "antd";
import "./style.scss";
import { FaFacebook, FaInstagram, FaTwitter, FaPlay, FaPause, FaRegStar, FaArrowUp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import discover1 from "../../assets/images/discover1.jpg";
import discover2 from "../../assets/images/discover2.jpg";
import discover3 from "../../assets/images/discover3.jpg";
import discover4 from "../../assets/images/discover4.jpg";
import experience1 from "../../assets/images/experience1.jpg";
import experience2 from "../../assets/images/experience2.jpg";
import video from "../../assets/video/video.mp4";
import place1 from "../../assets/images/place1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import SearchBar from "../../components/Custom/SearchBar";
const Home = () => {
     const [isPlay, setIsPlay] = useState(false);
     const triggerVideo = () => {
          const videoFile = document.getElementById("video-file");
          console.log("fivideoFilerst", videoFile);
          if (videoFile.paused) {
               videoFile.play();
               setIsPlay(true);
          } else {
               videoFile.pause();
               setIsPlay(false);
          }
     };
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
               <SearchBar />
               {/* ================================= ABOUT =============================== */}
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
                                   effect={"coverflow"}
                                   grabCursor={true}
                                   centeredSlides={true}
                                   slidesPerView={"3"}
                                   loop={true}
                                   spaceBetween={32}
                                   coverflowEffect={{
                                        rotate: 0,
                                        // stretch: 0,
                                        // depth: 100,
                                        // modifier: 1,
                                        // slideShadows: false,
                                   }}
                                   // pagination={true}
                                   modules={[EffectCoverflow, Pagination]}
                                   // className="mySwiper"
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
                                             <img className="discover__img" src={discover2} alt="discover1" />
                                             <div className="discover__data">
                                                  <h2 className="discover__title"> Bali</h2>
                                                  <span className="discover__description">24 tours available</span>
                                             </div>
                                        </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                        <div className="discover__card">
                                             <img className="discover__img" src={discover3} alt="discover1" />
                                             <div className="discover__data">
                                                  <h2 className="discover__title"> Bali</h2>
                                                  <span className="discover__description">24 tours available</span>
                                             </div>
                                        </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                        <div className="discover__card">
                                             <img className="discover__img" src={discover4} alt="discover1" />
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
               {/* ================================= EXPERIENCE =============================== */}
               <section className="experience section">
                    <h2 className="section__title">
                         With Our Experience <br /> We Will Serve You
                    </h2>
                    <div className="experience__container graduation__container graduation__grid">
                         <div className="experience__content graduation__grid">
                              <div className="experience__data">
                                   <h2 className="experience__number">20</h2>
                                   <span className="experience__description">
                                        Year <br /> Experience
                                   </span>
                              </div>

                              <div className="experience__data">
                                   <h2 className="experience__number">60</h2>
                                   <span className="experience__description">
                                        Complete <br /> tours
                                   </span>
                              </div>

                              <div className="experience__data">
                                   <h2 className="experience__number">200+</h2>
                                   <span className="experience__description">
                                        Tourist <br /> Destination
                                   </span>
                              </div>
                         </div>
                         <div className="experience__img graduation__grid">
                              <div className="experience__overlay">
                                   <img src={experience1} alt="experience1" className="experience__img-one" />
                              </div>
                              <div className="experience__overlay">
                                   <img src={experience2} alt="experience2" className="experience__img-two" />
                              </div>
                         </div>
                    </div>
               </section>
               {/* ================================= VIDEO =============================== */}
               <section className="video section">
                    <h2 className="section__title">Video Tour</h2>
                    <div className="video__container graduation__container">
                         <p className="video__description">
                              Find out more with our video of the most beautiful and pleasant places for you and your family.
                         </p>
                         <div className="video__content">
                              <video
                                   id="video-file"
                                   onEnded={(e) => {
                                        console.log("end", e);
                                        setIsPlay(false);
                                   }}
                              >
                                   <source src={video} type="video/mp4"></source>
                              </video>
                              <button onClick={triggerVideo} className="home__button video__button" id="video-button">
                                   {!isPlay ? <FaPlay className="video__button-icon" /> : <FaPause className="video__button-icon" />}
                              </button>
                         </div>
                    </div>
               </section>
               {/* ================================= PLACES =============================== */}
               <section className="place section" id="place">
                    <h2 className="section__title">Choose Your Place</h2>
                    <div className="place__container graduation__container graduation__grid">
                         <div className="place__card">
                              <img src={place1} alt="place1" className="place__img" />
                              <div className="place__content">
                                   <span className="place__rating">
                                        <FaRegStar className="place__rating-icon" />
                                        <span className="place__rating-number">4.9</span>
                                   </span>
                                   <div className="place__data">
                                        <h3 className="place__title">Nha Trang</h3>
                                        <span className="place__subtitle">Việt Nam</span>
                                        <span className="place__price">$200</span>
                                   </div>
                              </div>
                              <button className="home__button place__button">
                                   <FaArrowRight />
                              </button>
                         </div>
                         {/* =============================================================== */}
                         <div className="place__card">
                              <img src={place1} alt="place1" className="place__img" />
                              <div className="place__content">
                                   <span className="place__rating">
                                        <FaRegStar className="place__rating-icon" />
                                        <span className="place__rating-number">4.9</span>
                                   </span>
                                   <div className="place__data">
                                        <h3 className="place__title">Nha Trang</h3>
                                        <span className="place__subtitle">Việt Nam</span>
                                        <span className="place__price">$200</span>
                                   </div>
                              </div>
                              <button className="home__button place__button">
                                   <FaArrowRight />
                              </button>
                         </div>
                         {/* =============================================================== */}
                         <div className="place__card">
                              <img src={place1} alt="place1" className="place__img" />
                              <div className="place__content">
                                   <span className="place__rating">
                                        <FaRegStar className="place__rating-icon" />
                                        <span className="place__rating-number">4.9</span>
                                   </span>
                                   <div className="place__data">
                                        <h3 className="place__title">Nha Trang</h3>
                                        <span className="place__subtitle">Việt Nam</span>
                                        <span className="place__price">$200</span>
                                   </div>
                              </div>
                              <button className="home__button place__button">
                                   <FaArrowRight />
                              </button>
                         </div>
                         {/* =============================================================== */}
                         <div className="place__card">
                              <img src={place1} alt="place1" className="place__img" />
                              <div className="place__content">
                                   <span className="place__rating">
                                        <FaRegStar className="place__rating-icon" />
                                        <span className="place__rating-number">4.9</span>
                                   </span>
                                   <div className="place__data">
                                        <h3 className="place__title">Nha Trang</h3>
                                        <span className="place__subtitle">Việt Nam</span>
                                        <span className="place__price">$200</span>
                                   </div>
                              </div>
                              <button className="home__button place__button">
                                   <FaArrowRight />
                              </button>
                         </div>
                         {/* =============================================================== */}
                         <div className="place__card">
                              <img src={place1} alt="place1" className="place__img" />
                              <div className="place__content">
                                   <span className="place__rating">
                                        <FaRegStar className="place__rating-icon" />
                                        <span className="place__rating-number">4.9</span>
                                   </span>
                                   <div className="place__data">
                                        <h3 className="place__title">Nha Trang</h3>
                                        <span className="place__subtitle">Việt Nam</span>
                                        <span className="place__price">$200</span>
                                   </div>
                              </div>
                              <button className="home__button place__button">
                                   <FaArrowRight />
                              </button>
                         </div>
                         {/* =============================================================== */}
                    </div>
               </section>
               <section className="subscribe secion">
                    <div className="subscribe__bg">
                         <div className="subscribe__container graduation__container">
                              <h2 className="section__title subscribe__title">
                                   Subscribe Our <br /> Newsletter
                              </h2>
                              <p className="subscribe__description">Subscribe to our newsletter and get a special 30% discount.</p>
                              <div className="subscribe__form">
                                   <Input placeholder="Enter email" className="subscribe__input" />
                                   <button className="home__button">Subscribe</button>
                              </div>
                         </div>
                    </div>
               </section>
               <button className="home__button scrollup">
                    <FaArrowUp />
               </button>
          </div>
     );
};

export default Home;
