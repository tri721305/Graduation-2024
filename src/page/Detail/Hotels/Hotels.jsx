import React, { useState } from "react";
import { Button, Typography } from "antd";
import { FaPlus } from "react-icons/fa6";
import { HiChevronRight } from "react-icons/hi";
import { MdLocalHotel } from "react-icons/md";
import Spacer from "../../../components/Spacer/Spacer";
import { useDispatch, useSelector } from "react-redux";
import ModalLodging from "./ModalLodging/ModalLodging";
const Hotels = () => {
     const dispatch = useDispatch();
     const [showLodging, setShowLodging] = useState(false);
     return (
          <div className="hotels-container">
               <div className="flex gap-1 items-center mb-2">
                    <Typography.Text strong>Hotels</Typography.Text>
                    <HiChevronRight />
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
