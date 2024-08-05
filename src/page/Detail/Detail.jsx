import React, { useState } from "react";
import { Typography, DatePicker, Button } from "antd";
import { CiSearch } from "react-icons/ci";
import Map from "react-map-gl";
import { IoAirplane } from "react-icons/io5";
import { MdLocalHotel } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { IoMdAttach } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import "./style.scss";
import Notes from "./Notes/Notes";
import Hotels from "./Hotels/Hotels";
import Places from "./Places/Places";
import Restaurants from "./Restaurants/Restaurants";
import MiniSidebar from "./MiniSidebar/MiniSidebar";
import saigon from "../../assets/images/saigon.png";
import { useDispatch, useSelector } from "react-redux";
import { detailActions } from "./detailSlice";
const Detail = () => {
     const [data, setData] = useState([
          {
               type: "note",
               title: "Notes",
               data: null,
          },
          {
               type: "hotel",
               title: "Hotels and Lodging",
               data: null,
          },
          {
               type: "restaurants",
               title: "Restaurants",
               data: null,
          },
          {
               type: "places",
               title: "Places to visit",
               data: null,
          },
     ]);
     console.log("data", data);
     return (
          <div className="detail-trip">
               <div className="detail-trip-leftmenu min-w-[50px]">
                    <MiniSidebar />
               </div>
               <div className="detail-trip-rightmenu max-w-[773px] w-[773px]   ">
                    <div className="h-[280px] relative bg-[#f3f4f5]">
                         <div className="background-image-container">
                              <img alt="image" src={saigon} />
                              <Button>Edit</Button>
                         </div>
                         <div className="sub-content-container ">
                              <Typography.Text>Thành phố Hồ Chí Minh</Typography.Text>
                              {/* ============================= Ngày đi, ngày về ============================== */}
                              <DatePicker />
                         </div>
                    </div>
                    <div className="pb-5 mb-3 bg-[#f3f4f5]">
                         <div className="flex justify-around">
                              <Typography.Text string> Explore</Typography.Text>
                              <Button type="primary" className="rounded-[16px] flex gap-2 items-center">
                                   <CiSearch /> Browse all
                              </Button>
                         </div>
                    </div>
                    <div className="bg-[#fff] summarize-container">
                         <div className="summarize-info">
                              <div className="summarize-info-left bg-[#f3f4f5]">
                                   <Typography.Text strong>Reservations and attachments</Typography.Text>
                                   <div className="convenience-lists mt-[8px]">
                                        <div className="convenience-items flex flex-col">
                                             <IoAirplane size={18} />
                                             <Typography.Text className="text-[12px]">Flights</Typography.Text>
                                        </div>
                                        <div className="convenience-items flex flex-col">
                                             <MdLocalHotel size={18} />
                                             <Typography.Text className="text-[12px]">Lodgings</Typography.Text>
                                        </div>
                                        <div className="convenience-items flex flex-col">
                                             <FaCarAlt size={18} />
                                             <Typography.Text className="text-[12px]">Rental cars</Typography.Text>
                                        </div>{" "}
                                        <div className="convenience-items flex flex-col">
                                             <IoMdAttach size={18} />
                                             <Typography.Text className="text-[12px]">Attachment</Typography.Text>
                                        </div>
                                        <div className="convenience-items flex flex-col border-none">
                                             <BsThreeDots size={18} />
                                             <Typography.Text className="text-[12px]">Other</Typography.Text>
                                        </div>
                                   </div>
                              </div>
                              <div className="summarize-info-right">
                                   <Typography.Text strong>Budgeting</Typography.Text>
                                   <div className="flex flex-col">
                                        <Typography.Text>$0.00</Typography.Text>
                                        <Typography.Text strong> View details</Typography.Text>
                                   </div>
                              </div>
                         </div>
                         <Notes />
                         <Hotels />
                         <Places />
                         <Restaurants />
                    </div>
               </div>
               {/* <div className="detail-map flex-1">
                    <Map
                         mapboxAccessToken="pk.eyJ1IjoibWluaHRyaTEyMDUiLCJhIjoiY2x5eWx4aHl1MWd0djJpc2I0aGJjc3RzMyJ9.QP5T8rdt-UijImXQZweQWg"
                         initialViewState={{
                              longitude: -122.4,
                              latitude: 37.8,
                              zoom: 14,
                         }}
                         mapStyle="mapbox://styles/mapbox/streets-v9"
                    />
               </div> */}
          </div>
     );
};

export default Detail;
