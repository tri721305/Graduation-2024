import React, { useState } from "react";
import { Modal, Button, Typography, Slider, Checkbox, Col, Row } from "antd";
import { FaDumbbell, FaCheckCircle, FaWifi, FaUtensils, FaParking, FaRegSnowflake, FaPaw } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { FaChild } from "react-icons/fa6";
import { FaWaterLadder, FaWheelchair } from "react-icons/fa6";
import { FaMartiniGlassCitrus } from "react-icons/fa6";
const classes = ["All", "2-star", "3-star", "4-star", "5-star"];
const ratings = ["All", "6+", "7+", "8+", "9+"];
const properties = [
     "Hotel",
     "Motel",
     "Resort",
     "Inn",
     "Breakfast",
     "Guest house",
     "Condominium",
     "Cabin",
     "Chalet",
     "Cottage",
     "Hostel",
     "Villa",
     "Apartment",
     "House",
     "Apart-hotel",
     "Condominium resort",
     "Country house",
     "Holiday park",
];
const amenities = [
     {
          name: "Free cancellation",
          icon: <FaCheckCircle size={24} />,
     },
     {
          name: "Free Wifi",
          icon: <FaWifi size={24} />,
     },
     {
          name: "Free breakfast",
          icon: <FaUtensils size={24} />,
     },
     {
          name: "Free parking",
          icon: <FaParking size={24} />,
     },
     {
          name: "Airport shuttle",
          icon: <MdAirportShuttle size={24} />,
     },
     {
          name: "Air conditioning",
          icon: <FaRegSnowflake size={24} />,
     },
     {
          name: "Pet friendly",
          icon: <FaPaw size={24} />,
     },
     {
          name: "Kid friendly",
          icon: <FaChild size={24} />,
     },
     {
          name: "Pool",
          icon: <FaWaterLadder size={24} />,
     },
     {
          name: "Bar",
          icon: <FaMartiniGlassCitrus size={24} />,
     },
     {
          name: "Fitness center",
          icon: <FaDumbbell size={24} />,
     },
     {
          name: "Accessible",
          icon: <FaWheelchair size={24} />,
     },
];
const bedsroom = ["Any", "2+", "3+", "4+"];
const FilterAll = ({ isShow, setIsShow }) => {
     const [selectedClass, setSelectedClass] = useState([]);
     const [selectedRating, setSelectedRating] = useState([]);
     const [selectedAmenities, setSelectedAmenities] = useState([]);
     const [selectedBeds, setSelectedBeds] = useState([]);
     const onChange = () => {};

     const chooseClass = (value) => {
          if (selectedClass?.includes(value)) {
               setSelectedClass((prev) => prev?.filter((item) => item !== value));
          } else {
               setSelectedClass([...selectedClass, value]);
          }
     };
     const chooseBeds = (value) => {
          if (selectedBeds?.includes(value)) {
               setSelectedBeds((prev) => prev?.filter((item) => item !== value));
          } else {
               setSelectedBeds([...selectedBeds, value]);
          }
     };
     const chooseRating = (value) => {
          if (selectedRating?.includes(value)) {
               setSelectedRating((prev) => prev?.filter((item) => item !== value));
          } else {
               setSelectedRating([...selectedRating, value]);
          }
     };
     const chooseAmenities = (value) => {
          if (selectedAmenities?.includes(value)) {
               setSelectedAmenities((prev) => prev?.filter((item) => item !== value));
          } else {
               setSelectedAmenities([...selectedAmenities, value]);
          }
     };
     return (
          <Modal
               open={isShow}
               centered
               onCancel={() => {
                    setIsShow(false);
               }}
               //    height="80vh"
               footer={
                    <div className="flex w-full justify-between">
                         <Button className="custom-btn-text">Reset filters</Button>
                         <Button className="custom-btn-orange">View results</Button>
                    </div>
               }
          >
               <div className="filter-all pr-[24px] mt-4 max-h-[70vh] overflow-auto">
                    <div className="filter-all-price">
                         <div className="flex justify-between">
                              <Typography.Text className="graduation-title">Price range</Typography.Text>
                              <Typography.Text className="graduation-subtitle">Price</Typography.Text>
                         </div>
                         <Slider className="mt-6 ml-4" onChange={onChange} min={0} max={3000000} range defaultValue={[0, 500000]} />
                    </div>
                    <div className="filter-all-class">
                         <div className="flex justify-between">
                              <Typography.Text className="graduation-title">Hotel class</Typography.Text>
                              <Typography.Text className="graduation-subtitle">Any hotel class</Typography.Text>
                         </div>
                         <div className="mt-6 flex gap-2">
                              {classes.map((item) => (
                                   <div
                                        onClick={() => chooseClass(item)}
                                        className={` ${selectedClass?.includes(item) ? "active" : ""} custom-btn-select`}
                                   >
                                        {item}
                                   </div>
                              ))}
                         </div>
                    </div>
                    <div className="filter-all-rating">
                         <div className="flex justify-between">
                              <Typography.Text className="graduation-title">User rating</Typography.Text>
                              <Typography.Text className="graduation-subtitle">All ratings</Typography.Text>
                         </div>
                         <div className="mt-6 flex gap-2">
                              {ratings.map((item) => (
                                   <div
                                        onClick={() => chooseRating(item)}
                                        className={` ${selectedRating?.includes(item) ? "active" : ""} custom-btn-select`}
                                   >
                                        {item}
                                   </div>
                              ))}
                         </div>
                    </div>
                    <div className="filter-all-type">
                         <div className="flex justify-between">
                              <Typography.Text className="graduation-title">Property type</Typography.Text>
                              {/* <Typography.Text className="graduation-subtitle">All ratings</Typography.Text> */}
                         </div>
                         <div className="mt-6  flex gap-2">
                              <Checkbox.Group>
                                   <Row className="items-start justify-center">
                                        {properties.map((item) => {
                                             return (
                                                  <Col className="p-2" span={8}>
                                                       <Checkbox style={{}} id={item} value={item}>
                                                            {item}
                                                       </Checkbox>
                                                  </Col>
                                             );
                                        })}
                                   </Row>
                              </Checkbox.Group>
                         </div>
                    </div>
                    <div className="filter-all-amentities">
                         <div className="flex justify-between">
                              <Typography.Text className="graduation-title">Amenities</Typography.Text>
                         </div>
                         <div className="mt-6 flex gap-2">
                              <Row className="w-full">
                                   {amenities.map((item) => (
                                        <Col className="p-2" span={8}>
                                             <div
                                                  onClick={() => chooseAmenities(item.name)}
                                                  //   className="bg-[#f3f4f5] cursor-pointer p-2 rounded-md flex flex-col items-center justify-center gap-2"
                                                  className={` ${selectedAmenities?.includes(item.name) ? "active" : ""} custom-btn-select`}
                                             >
                                                  {item.icon}
                                                  <Typography.Text>{item.name}</Typography.Text>
                                             </div>
                                        </Col>
                                   ))}
                              </Row>
                         </div>
                    </div>
                    <div className="filter-all-beds">
                         <div className="flex justify-between">
                              <Typography.Text className="graduation-title">Beds room</Typography.Text>
                         </div>
                         <div className="mt-6 flex gap-2">
                              {bedsroom.map((item) => (
                                   <div
                                        onClick={() => chooseBeds(item)}
                                        //   className="bg-[#f3f4f5] cursor-pointer p-2 rounded-md flex flex-col items-center justify-center gap-2"
                                        className={` ${selectedBeds?.includes(item) ? "active" : ""} custom-btn-select`}
                                   >
                                        <Typography.Text>{item}</Typography.Text>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </Modal>
     );
};

export default FilterAll;
