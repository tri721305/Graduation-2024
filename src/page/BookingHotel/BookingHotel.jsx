import React, { useState, useEffect } from "react";
import { Slider, Button, Typography, Select } from "antd";
import { FaHotel, FaStar, FaRegThumbsUp } from "react-icons/fa";
import { RiEqualizerLine } from "react-icons/ri";
import Card from "./Card/Card";

import saigon from "../../assets/images/saigon.png";
import "./style.scss";
import FilterAll from "./Modal/FilterAll";

const { Option } = Select;
const BookingHotel = () => {
     const [showFilterAll, setShowFilterAll] = useState(false);
     const onChange = (newValue) => {
          console.log("newValue", newValue);
     };
     return (
          <div className="booking-hotel-container">
               BookingHotel
               <div className="booking-hotel-filter">
                    <div className="booking-hotel-slider">
                         <Typography.Text>Price</Typography.Text>
                         <Slider style={{ width: 200 }} onChange={onChange} min={0} max={3000000} range defaultValue={[0, 500000]} />
                    </div>
                    <Button icon={<FaHotel />} className="custom-btn-gray">
                         Property type
                    </Button>
                    <Button icon={<FaStar />} className="custom-btn-gray">
                         Hotel class
                    </Button>
                    <Button icon={<FaRegThumbsUp />} className="custom-btn-gray">
                         Rate
                    </Button>
                    <Button
                         onClick={() => {
                              setShowFilterAll(true);
                         }}
                         icon={<RiEqualizerLine />}
                         className="custom-btn-gray"
                    >
                         All
                    </Button>
               </div>
               <div className="booking-hotel-main">
                    <div className="booking-hotel-header">
                         <div className="booking-hotel-header-filter">
                              <Typography.Text>6 results</Typography.Text>
                              <div className="space-line"></div>
                              <div>
                                   <Typography.Text>Sort by</Typography.Text>
                                   <Select defaultValue="rating" className="custom-select-text" placeholder="">
                                        <Option key="rating" value="rating">
                                             User ratings
                                        </Option>
                                        <Option key="lowest" value="lowest">
                                             Lowest price
                                        </Option>
                                        <Option key="numbers" value="numbers">
                                             Number of ratings
                                        </Option>
                                   </Select>
                              </div>
                         </div>
                         <div className="booking-hotel-change-cost">
                              <Select className="custom-select-text" value="vnd">
                                   <Option value="vnd" key="vnd">
                                        Cureency - VND
                                   </Option>
                              </Select>
                         </div>
                    </div>
                    <div className="booking-hotel-hotels">
                         <Card
                              cost={2000000}
                              coop="Booking"
                              image={saigon}
                              name="New world Hotel"
                              detail="HiHiHi test card khách sạn 5 sao"
                         />
                    </div>
               </div>
               <div className="booking-hotel-pagination"></div>
               {showFilterAll && <FilterAll isShow={showFilterAll} setIsShow={setShowFilterAll} />}
          </div>
     );
};

export default BookingHotel;
