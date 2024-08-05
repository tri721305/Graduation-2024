import React, { useState } from "react";
import { Button, Typography, Input } from "antd";
import { FaPlus } from "react-icons/fa6";
import { HiChevronRight } from "react-icons/hi";
import { MdLocalHotel } from "react-icons/md";
import Spacer from "../../../components/Spacer/Spacer";
import { useDispatch, useSelector } from "react-redux";
import ModalLodging from "./ModalLodging/ModalLodging";
import "./style.scss";
const Hotels = () => {
     const dispatch = useDispatch();
     const [showLodging, setShowLodging] = useState(false);
     return (
          <div className="hotels-container">
               <div className="flex gap-1 items-center mb-2">
                    <Typography.Text strong>Hotels</Typography.Text>
                    <HiChevronRight />
               </div>
               <div className="hotels-content gap-3">
                    <div className="hotels-content-left flex-1">
                         <div>
                              <Typography.Text className="hotels-title">HOTEL OR LODGING ADDRESS</Typography.Text>
                              <Input size="large" className="custom-input rounded-lg !bg-[#e9ecef]" value="New World Saigon Hotel" />
                         </div>
                         <div className="flex gap-2">
                              <div>
                                   <Typography.Text className="hotels-title">CHECK-IN</Typography.Text>
                                   <Input size="large" className="custom-input rounded-lg !bg-[#e9ecef]" value="18 Jul" />
                              </div>
                              <div>
                                   <Typography.Text className="hotels-title">CHECK-OUT</Typography.Text>
                                   <Input size="large" className="custom-input rounded-lg !bg-[#e9ecef]" value="19 Jul" />
                              </div>
                         </div>
                    </div>
                    <div className="hotels-content-right flex-1">
                         <div>
                              <Typography.Text className="hotels-title">CONFIRMATION</Typography.Text>
                              <Input size="large" className="custom-input rounded-lg !bg-[#e9ecef]" />
                         </div>
                         <div>
                              <Typography.Text className="hotels-title">NOTES</Typography.Text>
                              <Input size="large" className="custom-input rounded-lg !bg-[#e9ecef]" />
                         </div>
                         <div>
                              <Typography.Text className="hotels-title">COST</Typography.Text>
                              <Input size="large" className="custom-input rounded-lg !bg-[#e9ecef]" />
                         </div>
                    </div>
               </div>
               <div className="flex justify-around items-center">
                    <Button
                         onClick={() => {
                              setShowLodging(true);
                         }}
                         type="text"
                         className=" flex items-center gap-2"
                    >
                         <FaPlus /> <span className="text-[12px] font-semibold "> Add another lodging</span>
                    </Button>
                    <Button type="text" className=" flex items-center gap-2">
                         <MdLocalHotel /> <span className="text-[12px] font-semibold "> Find hotels</span>
                    </Button>
               </div>
               <Spacer />

               {showLodging ? <ModalLodging isShow={showLodging} setIsShow={setShowLodging} /> : null}
          </div>
     );
};

export default Hotels;
