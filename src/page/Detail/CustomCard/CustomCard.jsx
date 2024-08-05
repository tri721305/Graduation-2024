import { Typography } from "antd";
import React from "react";
import { FaMapMarker } from "react-icons/fa";
import "./style.scss";
const CustomCard = ({ place, description, index, image }) => {
     return (
          <div className="custom-card-container">
               <div className="card-left">
                    <div className="custom-marker">
                         <FaMapMarker className="z-100 text-[#3f52e3]" size={32} />
                         <span className="custom-marker-index">{index}</span>
                    </div>
                    <div className="flex flex-col">
                         <Typography.Text strong>{place}</Typography.Text>
                         <Typography.Text>{description}</Typography.Text>
                    </div>
               </div>
               <div className="card-right"></div>
          </div>
     );
};

export default CustomCard;
