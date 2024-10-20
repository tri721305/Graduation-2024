import { Typography, Button, Tag, Dropdown } from "antd";
import React from "react";
import { FaMapMarker, FaChevronDown } from "react-icons/fa";
import "../style.scss";
const Card = (props) => {
     const onMenuClick = (e) => {};

     const items = [
          {
               key: "1",
               label: "1st item",
          },
          {
               key: "2",
               label: "2nd item",
          },
          {
               key: "3",
               label: "3rd item",
          },
     ];
     return (
          <div className="card-detail-trip cursor-pointer p-4">
               <div className="card-detail-trip-header flex">
                    <div className="custom-location-icon">
                         <FaMapMarker size={30} className="marker" />
                         <Typography.Text className="marker-number">{props.number}</Typography.Text>
                    </div>
                    <div className="flex  items-center justify-between mb-[8px] flex-1">
                         <Typography.Text className="text-[1.125rem] leading-5" strong>
                              123{props?.title}
                         </Typography.Text>
                         <Dropdown.Button
                              icon={<FaChevronDown />}
                              className="custom-dropdown-btn w-fit"
                              menu={{ items, onClick: onMenuClick }}
                         >
                              Add to trip
                         </Dropdown.Button>
                    </div>
               </div>
               <div className="card-detail-trip-body flex">
                    <div className="flex-1 ml-[40px]">
                         <div className="tags-container py-2">
                              {props?.tags?.map((tag, index) => (
                                   <Tag color="magenta" key="index">
                                        {tag}
                                   </Tag>
                              ))}
                         </div>
                         <Typography.Text>{props?.description}</Typography.Text>
                    </div>
                    <div className="w-[200px] ml-[16px] rounded-[12px] overflow-hidden h-[120px]">
                         <img className="w-[200px] h-[120px]" src={props?.image} alt="images" key={props?.key} />
                    </div>
               </div>
          </div>
     );
};

export default Card;
