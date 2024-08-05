import React from "react";
import { Input, Typography, Button, Tooltip } from "antd";
import Spacer from "../../../components/Spacer/Spacer";
import { HiChevronRight } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiStickyNote } from "react-icons/ci";
import { GiChecklist } from "react-icons/gi";
const Restaurants = () => {
     return (
          <div className="restaurants-container">
               <div className="flex gap-1 items-center mb-2">
                    <Typography.Text strong>Restaurans</Typography.Text>
                    <HiChevronRight />
               </div>
               <div className="flex gap-1">
                    <Input
                         className="rounded-lg bg-[#f3f4f5] custom-input"
                         placeholder="Add a place"
                         prefix={<FaMapMarkerAlt />}
                         size="large"
                    />
                    <Tooltip key="add note " title="Add note">
                         <Button className="btn-icon">
                              <CiStickyNote />
                         </Button>
                    </Tooltip>
                    <Tooltip key="add list" title="Add checklist">
                         <Button content="hello" className="btn-icon">
                              <GiChecklist />
                         </Button>
                    </Tooltip>
               </div>
               <Spacer />
          </div>
     );
};

export default Restaurants;
