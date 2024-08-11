import React, { useState } from "react";
import { Typography, DatePicker, Button, Avatar, Tooltip } from "antd";
import { CiSearch } from "react-icons/ci";
import Map from "react-map-gl";
import { IoAirplane } from "react-icons/io5";
import { MdLocalHotel } from "react-icons/md";
import { FaCarAlt, FaUserPlus } from "react-icons/fa";
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
import avt from "../../assets/images/avt.png";
import AddPlaces from "../../components/AddPlaces/AddPlaces";
import moment from "moment";

const Detail = () => {
     const dispatch = useDispatch();
     const { data } = useSelector((state) => state?.detail);
     const [showAddPlaces, setShowAddPlaces] = useState(false);
     const getDaysBetween = (startDate, endDate) => {
          const start = moment(startDate);
          const end = moment(endDate);

          const days = [];
          while (start.isSameOrBefore(end, "day")) {
               days.push(start.format("YYYY-MM-DD"));
               start.add(1, "day");
          }

          return days;
     };
     const handleChooseDate = (date, dateString) => {
          let days = getDaysBetween(dateString[0], dateString[1]);
          let newFormat = days.map((item, index) => ({
               date: item,
               data: [],
          }));
          console.log("days", newFormat);
          dispatch(detailActions.setDate(newFormat));
     };
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
                         <div className="sub-content-container">
                              <Typography.Text strong className="text-[24px]">
                                   Thành phố Hồ Chí Minh
                              </Typography.Text>
                              {/* ============================= Ngày đi, ngày về ============================== */}
                              <div className="flex items-center justify-between">
                                   <DatePicker.RangePicker
                                        onChange={handleChooseDate}
                                        className="min-w-[280px] graduation-datepicker-range shadow-md"
                                   />
                                   <div className="flex gap-2">
                                        <Avatar className="shadow-md" src={avt} size={40} alt="avataruser" />
                                        <Tooltip title="Invite tripmates">
                                             <Button className="btn-icon shadow-md" icon={<FaUserPlus />} />
                                        </Tooltip>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="pb-5 mb-3 bg-[#f3f4f5]">
                         <div className="flex justify-around">
                              <Typography.Text string> Explore</Typography.Text>
                              <Button
                                   onClick={() => {
                                        setShowAddPlaces(true);
                                   }}
                                   type="primary"
                                   className="rounded-[16px] flex gap-2 items-center"
                              >
                                   <CiSearch /> Add place
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
                              <div className="summarize-info-right flex flex-col justify-around ">
                                   <Typography.Text strong>Budgeting</Typography.Text>
                                   <div className="flex flex-col">
                                        <Typography.Text>$0.00</Typography.Text>
                                        <Typography.Text strong className="cursor-pointer">
                                             View details
                                        </Typography.Text>
                                   </div>
                              </div>
                         </div>
                         <Notes />
                         <Hotels />
                         <Places />
                         <Restaurants />
                    </div>
                    {showAddPlaces ? <AddPlaces isShow={showAddPlaces} setIsShow={setShowAddPlaces} /> : null}
               </div>
               <div className="detail-map flex-1">
                    <Map
                         mapboxAccessToken="pk.eyJ1IjoibWluaHRyaTEyMDUiLCJhIjoiY2x5eWx4aHl1MWd0djJpc2I0aGJjc3RzMyJ9.QP5T8rdt-UijImXQZweQWg"
                         initialViewState={{
                              longitude: 106.6926148,
                              latitude: 10.7708772,
                              zoom: 14,
                         }}
                         mapStyle="mapbox://styles/mapbox/streets-v9"
                    />
               </div>
          </div>
     );
};

export default Detail;
