import React from "react";
import { Input, Typography } from "antd";
import Spacer from "../../../components/Spacer/Spacer";
import { HiChevronRight } from "react-icons/hi";
import CustomCard from "../CustomCard/CustomCard";
const Places = () => {
     return (
          <div className="places-container">
               <div className="flex gap-1 items-center mb-2">
                    <Typography.Text strong>Places to visit</Typography.Text>
                    <HiChevronRight />
               </div>
               <CustomCard place="Hồ Chí Minh City" description={"hello"} index={1} />
               <Spacer />
          </div>
     );
};

export default Places;
